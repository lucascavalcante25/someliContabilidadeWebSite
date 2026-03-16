import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container flex items-center justify-between">
        <a href="#home" className="text-2xl font-display font-bold text-foreground">
          SOMELI<span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button variant="default" size="default" asChild>
              <a href="#contato">Falar com Especialista</a>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-t border-border">
          <ul className="container py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-base font-medium text-foreground"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Button variant="default" className="w-full" asChild>
                <a href="#contato" onClick={() => setMenuOpen(false)}>
                  Falar com Especialista
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
