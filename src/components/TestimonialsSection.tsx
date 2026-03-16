import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "CEO, Tech Solutions",
    text: "Excelente atendimento e suporte. A SOMELI simplificou toda a contabilidade da minha empresa. Recomendo!",
  },
  {
    name: "Ana Oliveira",
    role: "Proprietária, Loja Virtual",
    text: "Profissionais dedicados e transparentes. Desde que comecei com a SOMELI, minha empresa está 100% regularizada.",
  },
  {
    name: "Roberto Lima",
    role: "Diretor, Construtora Lima",
    text: "O planejamento tributário que fizeram economizou muito para minha empresa. Trabalho sério e competente.",
  },
];

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            O que dizem nossos clientes
          </h2>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`p-8 rounded-lg bg-card border border-border transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
