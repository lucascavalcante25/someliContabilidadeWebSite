import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  { num: "01", title: "Entramos em contato", desc: "Você nos procura e iniciamos a conversa." },
  { num: "02", title: "Entendemos sua necessidade", desc: "Analisamos a situação da sua empresa." },
  { num: "03", title: "Apresentamos a solução", desc: "Montamos a melhor proposta para você." },
  { num: "04", title: "Cuidamos de tudo", desc: "Gerenciamos toda a contabilidade da sua empresa." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Como funciona?
          </h2>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 120}ms` : "0ms" }}
            >
              <span className="text-6xl font-display font-bold text-primary/10">
                {step.num}
              </span>
              <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 border-t-2 border-dashed border-primary/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
