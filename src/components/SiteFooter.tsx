import { Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import logo from "@/assets/logo-branca.png";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { NAV_LINKS } from "@/lib/navegacao";
import { INSTAGRAM_URL, WHATSAPP_URL } from "@/lib/contato";

const SiteFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-surface-deep pb-8 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div className="container relative">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <a href="#home" className="inline-block">
              <img src={logo} alt="SOMELI Assessoria Contábil" className="h-11 w-auto" width={350} height={96} />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-surface-deep-foreground/65">
              Contabilidade moderna e consultiva para empresas que querem crescer com segurança.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da SOMELI"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-primary"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da SOMELI"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-[#25D366]"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <nav aria-label="Rodapé">
            <h2 className="mb-4 font-display text-sm font-bold text-surface-deep-foreground">Menu</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-surface-deep-foreground/65 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="mb-4 font-display text-sm font-bold text-surface-deep-foreground">Contato</h2>
            <ul className="space-y-3 text-sm text-surface-deep-foreground/65">
              <li className="flex items-center gap-2">
                <Mail size={15} className="text-primary" aria-hidden="true" />
                <a href="mailto:someli@someli.com.br" className="hover:text-primary">someli@someli.com.br</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={15} className="text-primary" aria-hidden="true" />
                (85) 99843-1249
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={15} className="text-primary" aria-hidden="true" />
                Fortaleza, CE
              </li>
              <li className="flex items-center gap-2">
                <Clock size={15} className="text-primary" aria-hidden="true" />
                Seg–Sex · 08:00–17:00
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-surface-deep-foreground/45">
            © {new Date().getFullYear()} SOMELI Assessoria Contábil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
