import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Shield, Star } from "lucide-react";
import fotoSobre from "@/assets/foto-sobre.webp";

const pontos = [
  "Atendimento personalizado, com contador que conhece o seu negócio",
  "Processos digitais e documentos sempre à mão",
  "Comunicação clara, sem “contabilês”",
];

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="sobre" className="bg-card py-20 sm:py-28">
      <div ref={ref} className="container grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* foto com selos flutuantes */}
        <div className={`reveal relative mx-auto w-full max-w-xl ${isVisible ? "is-visible" : ""}`}>
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-1/2 w-1/2 rounded-2xl bg-gradient-to-br from-primary/30 to-secondary/20 sm:-left-5 sm:-top-5"
          />
          <img
            src={fotoSobre}
            alt="Duas profissionais revisando e assinando documentos em uma mesa"
            width={1100}
            height={825}
            loading="lazy"
            className="relative aspect-[4/3] w-full rounded-2xl object-cover shadow-[0_30px_60px_-25px_rgba(60,8,80,0.45)]"
          />
          <div className="absolute -bottom-6 right-3 flex items-center gap-3 rounded-xl bg-card px-4 py-3 shadow-[0_20px_40px_-15px_rgba(60,8,80,0.4)] sm:-right-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <Star className="fill-primary text-primary" size={20} aria-hidden="true" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-lg text-foreground">5,0 no Google</strong>
              <span className="text-xs text-muted-foreground">47 avaliações</span>
            </span>
          </div>
          <div className="absolute -top-5 right-6 hidden items-center gap-2 rounded-xl bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-[0_20px_40px_-15px_rgba(60,8,80,0.4)] sm:flex">
            <Shield className="text-primary" size={18} aria-hidden="true" />
            Seus dados protegidos
          </div>
        </div>

        <div className={`reveal space-y-6 ${isVisible ? "is-visible" : ""}`} style={{ transitionDelay: "120ms" }}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Sobre a SOMELI</span>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Simplificamos a contabilidade para você focar no crescimento.
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            A SOMELI Assessoria Contábil é um escritório especializado em oferecer soluções contábeis
            completas para empresas que buscam organização, segurança e crescimento sustentável.
          </p>
          <p className="leading-relaxed text-muted-foreground">
            Nosso objetivo é simplificar a contabilidade do seu negócio para que você possa focar no que
            realmente importa: fazer sua empresa crescer.
          </p>
          <ul className="space-y-3 pt-2">
            {pontos.map((p) => (
              <li key={p} className="flex items-start gap-3 text-foreground">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dcfce7]">
                  <Check size={14} className="text-[#16a34a]" aria-hidden="true" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
