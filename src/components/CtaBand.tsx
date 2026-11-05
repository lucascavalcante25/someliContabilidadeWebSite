import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contato";
import fotoEquipe from "@/assets/foto-equipe.webp";

/** Faixa de chamada com foto de fundo, entre "Como funciona" e os depoimentos. */
const CtaBand = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section aria-labelledby="cta-titulo" className="bg-card px-4 py-10 sm:px-6">
      <div
        ref={ref}
        className={`reveal relative mx-auto max-w-6xl overflow-hidden rounded-3xl ${isVisible ? "is-visible" : ""}`}
      >
        <img
          src={fotoEquipe}
          alt=""
          width={1600}
          height={700}
          loading="lazy"
          className="cta-zoom absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface-deep via-surface-deep/90 to-surface-deep/40" />
        <div className="relative max-w-xl space-y-5 px-6 py-14 sm:px-12 sm:py-16">
          <h2 id="cta-titulo" className="text-3xl font-bold text-surface-deep-foreground sm:text-4xl">
            Sua empresa em dia, sem você perder tempo com burocracia.
          </h2>
          <p className="text-surface-deep-foreground/80">
            Conte para a gente como está o seu negócio hoje. A primeira conversa é sem compromisso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="whatsapp" size="lg" asChild>
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="!size-5" />
                Conversar agora
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#servicos">Ver serviços</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
