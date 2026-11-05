import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink, Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { AVALIACOES_GOOGLE_URL } from "@/lib/contato";

const testimonials = [
  {
    name: "MF Mercado Financeiro",
    text: "A MI agradece a Someli Contabilidade pelo tempo de serviço prestado, sempre fomos muito bem atendidos em todas as necessidades. Recomendamos os serviços para quem está precisando de eficácia na resolução de burocracia trabalhista e redução de tributos.",
  },
  {
    name: "Diego Mansilla",
    text: "Atendimento super profissional, todas minhas dúvidas foram sanadas, desde já indico para quem precisar.",
  },
  {
    name: "Filipe Queiroz",
    text: "Empresa muito séria! Todos os colaboradores sempre estão dispostos a ajudar em qualquer dúvida! Super recomendo e estou com eles desde o começo.",
  },
  {
    name: "Alexsandro Oliveira Sousa",
    text: "Excelente Serviço! A Someli Contabilidade realmente se destaca pela qualidade no atendimento e pela eficiência nas soluções oferecidas. Recomendo fortemente!!",
  },
  {
    name: "Alynne Rocha",
    text: "A melhor que tem! Há vários anos eu usufruo dos serviços e nunca tive problemas. É ótima e eu recomendo!",
  },
  {
    name: "Vitória Torquato",
    text: "Trabalho com muita excelência. Sempre muito solícito quando precisamos realizar ou tirar dúvida! Qualidade é tudo.",
  },
  {
    name: "Isabelle Lopes",
    text: "Exemplo de eficiência e eficácia quando se trata de contabilidade! A família toda trabalha com a Someli. Parabéns por sempre oferecer um ótimo serviço e atendimento humanizado!",
  },
  {
    name: "Kátia Suzie",
    text: "A melhor e mais confiável contabilidade da cidade, sem contar no atendimento excepcional, confio de olhos fechados nos serviços da Someli.",
  },
];

const AUTOPLAY_MS = 5500;

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [api, setApi] = useState<CarouselApi>();
  const [atual, setAtual] = useState(0);
  const [total, setTotal] = useState(0);
  const [pausado, setPausado] = useState(false);

  useEffect(() => {
    if (!api) return;
    const sync = () => {
      setTotal(api.scrollSnapList().length);
      setAtual(api.selectedScrollSnap());
    };
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  // Avança sozinho, exceto quando o usuário interage ou pede menos movimento.
  useEffect(() => {
    if (!api || pausado) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => api.scrollNext(), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [api, pausado]);

  return (
    <section id="depoimentos" aria-labelledby="depoimentos-titulo" className="overflow-hidden bg-background py-20 sm:py-28">
      <div ref={ref} className="container">
        <div className={`reveal mb-12 space-y-4 text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Depoimentos</span>
          <h2 id="depoimentos-titulo" className="text-3xl font-bold text-foreground sm:text-4xl">
            O que dizem nossos clientes
          </h2>
          <a
            href={AVALIACOES_GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-2xl border border-border bg-card px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-foreground sm:rounded-full"
          >
            <span className="flex">
              {[...Array(5)].map((_, j) => (
                <Star key={j} size={14} className="fill-[#fbbf24] text-[#fbbf24]" aria-hidden="true" />
              ))}
            </span>
            <span>
              Nota <strong className="text-foreground">5,0</strong> com{" "}
              <strong className="text-foreground">47 avaliações</strong> no Google
            </span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <div
          className={`reveal ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: "120ms" }}
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocusCapture={() => setPausado(true)}
          onBlurCapture={() => setPausado(false)}
        >
          <Carousel setApi={setApi} opts={{ align: "start", loop: true }} aria-label="Depoimentos de clientes">
            <CarouselContent className="-ml-5 py-2">
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full pl-5 sm:basis-1/2 lg:basis-1/3">
                  <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-shadow duration-300 hover:shadow-[0_20px_40px_-20px_rgba(60,8,80,0.35)]">
                    <Quote className="absolute right-6 top-6 text-primary/15" size={44} aria-hidden="true" />
                    <div className="mb-4 flex gap-1" aria-label="5 estrelas">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} size={15} className="fill-[#fbbf24] text-[#fbbf24]" aria-hidden="true" />
                      ))}
                    </div>
                    <blockquote className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white">
                        {t.name.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-foreground">{t.name}</span>
                        <span className="text-xs text-muted-foreground">Avaliação no Google</span>
                      </span>
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="mt-8 flex items-center justify-center gap-4">
              <CarouselPrevious className="static h-10 w-10 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-white" />
              <div className="flex gap-2">
                {Array.from({ length: total }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => api?.scrollTo(i)}
                    aria-label={`Ir para o depoimento ${i + 1}`}
                    aria-current={i === atual}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      i === atual ? "w-7 bg-primary" : "w-2.5 bg-primary/25 hover:bg-primary/50"
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="static h-10 w-10 translate-y-0 border-primary/30 text-primary hover:bg-primary hover:text-white" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
