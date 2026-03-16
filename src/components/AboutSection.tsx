import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="py-24 bg-card">
      <div
        ref={ref}
        className={`container grid lg:grid-cols-2 gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: visual cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: Shield, label: "Segurança", value: "100%" },
            { icon: TrendingUp, label: "Crescimento", value: "+40%" },
            { icon: Users, label: "Clientes", value: "200+" },
          ].map(({ icon: Icon, label, value }, i) => (
            <div
              key={label}
              className={`rounded-lg bg-background p-6 shadow-[0_10px_15px_-3px_rgba(0,0,0,0.05)] border border-border ${
                i === 2 ? "col-span-2" : ""
              }`}
            >
              <Icon className="text-primary mb-3" size={28} />
              <p className="text-3xl font-display font-bold text-foreground tabular-nums">
                {value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Right: text */}
        <div className="space-y-6">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Sobre a SOMELI
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
            Simplificamos a contabilidade para você focar no crescimento.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A SOMELI Assessoria Contábil é um escritório especializado em
            oferecer soluções contábeis completas para empresas que buscam
            organização, segurança e crescimento sustentável.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nosso objetivo é simplificar a contabilidade do seu negócio para que
            você possa focar no que realmente importa: fazer sua empresa crescer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
