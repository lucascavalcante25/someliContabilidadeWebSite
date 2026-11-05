import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contato";

const perguntas = [
  {
    q: "Vocês atendem empresas de outras cidades?",
    a: "Sim. Nosso atendimento é digital: documentos, reuniões e dúvidas são resolvidos pela internet e pelo WhatsApp, de onde você estiver.",
  },
  {
    q: "Posso trocar de contador a qualquer momento?",
    a: "Pode. Nós cuidamos da transição: solicitamos os documentos ao escritório anterior e organizamos tudo para que a mudança aconteça sem dor de cabeça.",
  },
  {
    q: "Vocês ajudam a abrir minha empresa?",
    a: "Sim. Ajudamos a escolher o tipo de empresa e o regime tributário mais adequado e fazemos todo o processo de abertura.",
  },
  {
    q: "Minha empresa tem pendências. Dá para regularizar?",
    a: "Dá. Fazemos um diagnóstico da situação fiscal e trabalhista e montamos um plano para colocar tudo em dia com segurança.",
  },
  {
    q: "Como funciona o atendimento no dia a dia?",
    a: "Você fala direto com a nossa equipe pelo WhatsApp, e-mail ou reunião online. Enviamos guias e relatórios dentro do prazo e avisamos antes dos vencimentos.",
  },
];

const FaqSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="bg-background py-20 sm:py-28">
      <div ref={ref} className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className={`reveal space-y-5 ${isVisible ? "is-visible" : ""}`}>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Dúvidas frequentes</span>
          <h2 id="duvidas-titulo" className="text-3xl font-bold text-foreground sm:text-4xl">
            Perguntas que sempre recebemos
          </h2>
          <p className="text-muted-foreground">Não encontrou a sua? Fale com a gente, respondemos rapidinho.</p>
          <Button variant="whatsapp" size="lg" asChild>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="!size-5" />
              Tirar dúvida no WhatsApp
            </a>
          </Button>
        </div>

        <Accordion
          type="single"
          collapsible
          className={`reveal space-y-3 ${isVisible ? "is-visible" : ""}`}
          style={{ transitionDelay: "120ms" }}
        >
          {perguntas.map(({ q, a }, i) => (
            <AccordionItem
              key={q}
              value={`p${i}`}
              className="rounded-xl border border-border bg-card px-5 transition-shadow data-[state=open]:border-primary/40 data-[state=open]:shadow-[0_15px_35px_-20px_rgba(60,8,80,0.4)]"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
