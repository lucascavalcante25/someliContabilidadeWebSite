import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LockKeyhole, Menu, X } from "lucide-react";
import logoBranca from "@/assets/logo-branca.png";
import logoRoxa from "@/assets/logo-roxa.png";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { NAV_LINKS } from "@/lib/navegacao";
import { AREA_CONTADOR_URL, WHATSAPP_URL } from "@/lib/contato";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Fundo claro quando rolou a página ou quando o menu do celular está aberto.
  const claro = scrolled || menuOpen;

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        claro ? "bg-card/90 py-3 shadow-[0_10px_30px_-15px_rgba(60,8,80,0.35)] backdrop-blur-xl" : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between" aria-label="Menu principal">
        <a href="#home" className="shrink-0" onClick={() => setMenuOpen(false)}>
          <img
            src={claro ? logoRoxa : logoBranca}
            alt="SOMELI Assessoria Contábil"
            width={350}
            height={96}
            className="h-10 w-auto sm:h-11"
          />
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative text-sm font-medium transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:after:scale-x-100 ${
                  claro ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <a
              href={AREA_CONTADOR_URL}
              target="_blank"
              rel="noopener noreferrer"
              title="Acesso ao sistema da equipe SOMELI"
              className={`inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-lg border px-4 text-sm font-semibold transition-colors ${
                claro
                  ? "border-secondary/30 text-secondary hover:bg-secondary hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-secondary"
              }`}
            >
              <LockKeyhole size={16} aria-hidden="true" />
              Área do contador
            </a>
            <Button variant="whatsapp" size="default" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Fale conosco
              </a>
            </Button>
          </li>
        </ul>

        {/* Celular */}
        <button
          type="button"
          className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors xl:hidden ${
            claro ? "bg-primary/10 text-foreground" : "bg-white/10 text-white"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="menu-celular"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div id="menu-celular" className="animate-in fade-in slide-in-from-top-2 border-t border-border xl:hidden">
          <ul className="container flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block border-b border-border py-3 text-base font-medium text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href={AREA_CONTADOR_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mb-3 flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-secondary/30 text-base font-semibold text-secondary transition-colors hover:bg-secondary hover:text-white"
              >
                <LockKeyhole size={18} aria-hidden="true" />
                Área do contador
              </a>
              <Button variant="whatsapp" className="w-full" size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
                  <WhatsAppIcon />
                  Falar no WhatsApp
                </a>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
