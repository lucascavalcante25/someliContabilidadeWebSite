import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-surface-deep overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(320_78%_64%_/_0.15),_transparent_60%)]" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            Contabilidade Digital & Consultiva
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-surface-deep-foreground leading-[1.1] tracking-tight">
            Contabilidade moderna para empresas que querem{" "}
            <span className="text-primary">crescer.</span>
          </h1>
          <p className="text-lg text-surface-deep-foreground/70 max-w-lg">
            A SOMELI Assessoria Contábil ajuda sua empresa a manter tudo
            regularizado, organizado e preparado para crescer com segurança.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/5585998431249" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#contato">Solicitar Atendimento</a>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex justify-center">
          <img
            src={heroImg}
            alt="Ilustração abstrata representando crescimento empresarial"
            className="w-full max-w-md animate-fade-in"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
