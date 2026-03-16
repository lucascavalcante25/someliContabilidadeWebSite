import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Building2,
  Calculator,
  FileText,
  Users,
  PieChart,
  ClipboardCheck,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Abertura de Empresas",
    description: "Tiramos sua ideia do papel com agilidade e segurança jurídica.",
  },
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description: "Gestão contábil completa para manter sua empresa em dia.",
  },
  {
    icon: FileText,
    title: "Assessoria Fiscal",
    description: "Cumprimento de obrigações fiscais com eficiência e pontualidade.",
  },
  {
    icon: Users,
    title: "Assessoria Trabalhista",
    description: "Gestão de folha, admissão, rescisão e obrigações trabalhistas.",
  },
  {
    icon: PieChart,
    title: "Planejamento Tributário",
    description: "Redução legal da carga tributária com estratégias inteligentes.",
  },
  {
    icon: ClipboardCheck,
    title: "Regularização de Empresas",
    description: "Regularize pendências e mantenha sua empresa em conformidade.",
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Soluções Completas
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Tudo o que sua empresa precisa em um só lugar.
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group p-8 rounded-lg bg-card border border-border transition-all duration-300 hover:border-primary hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
              }}
            >
              <service.icon
                className="text-primary mb-4 transition-transform duration-300 group-hover:scale-110"
                size={32}
              />
              <h3 className="text-lg font-display font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
