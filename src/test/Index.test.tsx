import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, within } from "@testing-library/react";
import Index from "@/pages/Index";

describe("Página inicial", () => {
  it("todo link interno (#ancora) leva a uma seção que existe", () => {
    const { container } = render(<Index />);
    const ancoras = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href^="#"]'));
    expect(ancoras.length).toBeGreaterThan(0);

    const quebrados = ancoras
      .map((a) => a.getAttribute("href")!.slice(1))
      .filter((id) => id && !container.querySelector(`[id="${id}"]`));

    expect(quebrados).toEqual([]);
  });

  it("links do WhatsApp apontam para o número do escritório e abrem em nova aba", () => {
    const { container } = render(<Index />);
    const links = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[href*="wa.me"]'));
    expect(links.length).toBeGreaterThanOrEqual(3);
    for (const link of links) {
      expect(link.href).toContain("wa.me/5585998431249");
      expect(link.target).toBe("_blank");
      expect(link.rel).toContain("noopener");
    }
  });

  it("topo tem o link Área do contador para o sistema da SOMELI", () => {
    render(<Index />);
    const links = screen.getAllByRole("link", { name: /área do contador/i });
    expect(links.length).toBeGreaterThanOrEqual(1);
    for (const link of links) {
      expect(link).toHaveAttribute("href", "https://someli-contabilidade.vercel.app/");
      expect(link).toHaveAttribute("rel", expect.stringContaining("noopener"));
    }
  });

  it("menu do celular também mostra a Área do contador", () => {
    render(<Index />);
    fireEvent.click(screen.getByRole("button", { name: /abrir menu/i }));
    const menu = document.getElementById("menu-celular")!;
    expect(within(menu).getByRole("link", { name: /área do contador/i })).toBeInTheDocument();
  });

  it("mostra os depoimentos reais dos clientes", () => {
    render(<Index />);
    const secao = screen.getByRole("region", { name: /o que dizem nossos clientes/i });
    expect(within(secao).getByText("Diego Mansilla")).toBeInTheDocument();
    expect(within(secao).getByText("Kátia Suzie")).toBeInTheDocument();
  });

  it("tem a seção Para quem atendemos", () => {
    render(<Index />);
    const secao = screen.getByRole("region", { name: /do mei à empresa em crescimento/i });
    expect(within(secao).getByText("Profissionais liberais")).toBeInTheDocument();
  });

  it("perguntas frequentes abrem a resposta ao clicar", () => {
    render(<Index />);
    const pergunta = screen.getByRole("button", { name: /posso trocar de contador/i });
    expect(pergunta).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(pergunta);
    expect(pergunta).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/cuidamos da transição/i)).toBeVisible();
  });
});
