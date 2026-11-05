import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Briefcase, Home, IdCard, Rocket, Stethoscope, Store } from "lucide-react";

const publicos = [
  { icon: IdCard, label: "MEI" },
  { icon: Rocket, label: "Novos negócios" },
  { icon: Store, label: "Comércio" },
  { icon: Briefcase, label: "Prestadores de serviço" },
  { icon: Stethoscope, label: "Profissionais liberais" },
  { icon: Home, label: "Pessoa física" },
];

const AudienceSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section aria-labelledby="publico-titulo" className="bg-card py-20 sm:py-24">
      <div ref={ref} className="container">
        <div className={`reveal mb-12 space-y-4 text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Para quem atendemos</span>
          <h2 id="publico-titulo" className="text-3xl font-bold text-foreground sm:text-4xl">
            Do MEI à empresa em crescimento
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            Cada negócio tem uma rotina diferente. Adaptamos o atendimento ao seu porte e ao seu momento.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {publicos.map(({ icon: Icon, label }, i) => (
            <li
              key={label}
              className={`reveal group flex flex-col items-center gap-3 rounded-2xl border border-border bg-background px-3 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_40px_-20px_rgba(60,8,80,0.35)] ${
                isVisible ? "is-visible" : ""
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                <Icon size={22} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-foreground">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AudienceSection;
