import { useScrollReveal } from "@/hooks/useScrollReveal";
import { HeartHandshake, Eye, Zap, Monitor, Award } from "lucide-react";

const items = [
  { icon: HeartHandshake, title: "Atendimento personalizado" },
  { icon: Eye, title: "Transparência e organização" },
  { icon: Zap, title: "Suporte rápido" },
  { icon: Monitor, title: "Soluções digitais" },
  { icon: Award, title: "Experiência empresarial" },
];

const DifferentialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-surface-deep">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Diferenciais
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-surface-deep-foreground">
            Por que escolher a SOMELI?
          </h2>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {items.map(({ icon: Icon, title }, i) => (
            <div
              key={title}
              className={`text-center p-6 rounded-lg bg-surface-slate/50 border border-primary/10 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="text-primary" size={24} />
              </div>
              <p className="text-sm font-semibold text-surface-deep-foreground">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
