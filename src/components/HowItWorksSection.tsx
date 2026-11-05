import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ClipboardList, Handshake, MessageCircle, Search } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Entramos em contato", desc: "Você nos procura e iniciamos a conversa." },
  { icon: Search, title: "Entendemos sua necessidade", desc: "Analisamos a situação da sua empresa." },
  { icon: ClipboardList, title: "Apresentamos a solução", desc: "Montamos a melhor proposta para você." },
  { icon: Handshake, title: "Cuidamos de tudo", desc: "Gerenciamos toda a contabilidade da sua empresa." },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="como-funciona" className="bg-card py-20 sm:py-28">
      <div ref={ref} className="container">
        <div className={`reveal mb-16 space-y-4 text-center ${isVisible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Processo</span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Como funciona?</h2>
          <p className="mx-auto max-w-md text-muted-foreground">Começar com a SOMELI é simples, em quatro passos.</p>
        </div>

        <ol className="relative grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* linha que liga os passos no desktop */}
          <span
            aria-hidden="true"
            className={`absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 origin-left bg-gradient-to-r from-primary/60 via-secondary/40 to-primary/60 transition-transform [transition-duration:1400ms] ease-out lg:block ${
              isVisible ? "scale-x-100" : "scale-x-0"
            }`}
          />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className={`reveal relative text-center ${isVisible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${150 + i * 150}ms` }}
            >
              <span className="relative mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-white shadow-[0_0_0_8px_hsl(var(--card)),0_15px_30px_-10px_rgba(200,60,160,0.6)]">
                <Icon size={26} aria-hidden="true" />
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-card text-xs font-bold text-secondary shadow">
                  {i + 1}
                </span>
              </span>
              <h3 className="mb-2 text-lg font-bold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;
