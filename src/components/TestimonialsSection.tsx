import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

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

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-4 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
          <p className="text-muted-foreground">
            Nota <span className="font-bold text-foreground">5,0</span> com{" "}
            <span className="font-bold text-foreground">47 avaliações</span> no Google
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-6 rounded-lg bg-card border border-border transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
