import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageCircle, Mail, MapPin, Instagram, Phone, Clock } from "lucide-react";

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contato" className="py-24 bg-card">
      <div
        ref={ref}
        className={`container grid lg:grid-cols-2 gap-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Left: info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Contato
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground">
              Fale com um contador agora
            </h2>
            <p className="text-muted-foreground">
              Sua empresa organizada, regularizada e pronta para o próximo nível.
              Sem burocracia, com estratégia.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "(85) 99843-1249",
                href: "https://wa.me/5585998431249",
              },
              {
                icon: Phone,
                label: "Telefone",
                value: "(85) 99843-1249",
                href: "tel:+5585998431249",
              },
              {
                icon: Mail,
                label: "Email",
                value: "someli@someli.com.br",
                href: "mailto:someli@someli.com.br",
              },
              {
                icon: Instagram,
                label: "Instagram",
                value: "@somelicontabilidade",
                href: "https://www.instagram.com/somelicontabilidade/",
              },
              {
                icon: MapPin,
                label: "Localização",
                value: "Fortaleza, CE",
                href: "#",
              },
              {
                icon: Clock,
                label: "Horário",
                value: "Seg–Sex · 08:00–17:00",
                href: "#",
              },
            ].map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="text-primary" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{label}</p>
                  <p className="text-sm font-medium text-foreground">{value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right: form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Nome
            </label>
            <input
              type="text"
              required
              maxLength={100}
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="Seu nome"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Email
            </label>
            <input
              type="email"
              required
              maxLength={255}
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              className="w-full h-12 px-4 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">
              Mensagem
            </label>
            <textarea
              required
              maxLength={1000}
              rows={4}
              value={formState.message}
              onChange={(e) => setFormState({ ...formState, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
              placeholder="Como podemos ajudar?"
            />
          </div>

          <Button
            type="submit"
            variant="default"
            size="lg"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending"
              ? "Enviando..."
              : status === "success"
              ? "✓ Mensagem enviada!"
              : "Solicitar Atendimento"}
          </Button>

          {status === "error" && (
            <p className="text-sm text-destructive text-center">
              Erro ao enviar. Tente novamente.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
