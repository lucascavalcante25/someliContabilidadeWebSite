import { Button } from "@/components/ui/button";
import { CheckCircle2, Star } from "lucide-react";
import HeroIllustration from "@/components/HeroIllustration";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contato";

const chips = ["100% digital", "Atendimento pelo WhatsApp", "Empresas e pessoa física"];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-surface-deep pb-24 pt-28 lg:pt-24"
    >
      {/* fundo animado */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <span className="hero-blob left-[-140px] top-[18%] h-[380px] w-[380px] bg-[hsl(289_70%_45%)]" />
        <span className="hero-blob right-[6%] top-[-90px] h-[320px] w-[320px] bg-[hsl(320_78%_58%)] [animation-delay:-5s]" />
        <span className="hero-blob bottom-[-120px] right-[32%] h-[280px] w-[280px] bg-[hsl(260_70%_55%)] opacity-40 [animation-delay:-10s]" />
        <div className="hero-dots absolute inset-0" />
      </div>

      <div className="container relative z-10 grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-7">
          <span className="reveal-in inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            <Star size={14} className="fill-primary" aria-hidden="true" />
            Nota 5,0 no Google · 47 avaliações
          </span>
          <h1
            className="reveal-in text-4xl font-bold leading-[1.08] text-surface-deep-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "80ms" }}
          >
            Contabilidade moderna para empresas que querem{" "}
            <span className="bg-gradient-to-r from-[hsl(320_85%_72%)] to-[hsl(289_80%_80%)] bg-clip-text text-transparent">
              crescer.
            </span>
          </h1>
          <p
            className="reveal-in max-w-lg text-lg text-surface-deep-foreground/75"
            style={{ animationDelay: "160ms" }}
          >
            A SOMELI Assessoria Contábil ajuda sua empresa a manter tudo regularizado, organizado e
            preparado para crescer com segurança.
          </p>
          <div className="reveal-in flex flex-col gap-4 sm:flex-row" style={{ animationDelay: "240ms" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="!size-5" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contato">Solicitar Atendimento</a>
            </Button>
          </div>
          <ul
            className="reveal-in flex flex-wrap gap-x-6 gap-y-2 text-sm text-surface-deep-foreground/80"
            style={{ animationDelay: "320ms" }}
          >
            {chips.map((chip) => (
              <li key={chip} className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#4ade80]" aria-hidden="true" />
                {chip}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal-in flex justify-center lg:justify-end" style={{ animationDelay: "200ms" }}>
          <HeroIllustration className="hero-art w-full overflow-visible max-w-[340px] sm:max-w-[440px] lg:max-w-[520px]" />
        </div>
      </div>

      {/* onda de transição */}
      <svg
        aria-hidden="true"
        className="absolute bottom-[-1px] left-0 h-12 w-full sm:h-16"
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
      >
        <path d="M0 40c240 40 480 60 720 40s480-60 720-40v50H0z" className="fill-card" />
      </svg>
    </section>
  );
};

export default HeroSection;
