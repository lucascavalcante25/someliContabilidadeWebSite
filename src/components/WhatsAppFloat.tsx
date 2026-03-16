import { MessageSquare } from "lucide-react";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform duration-300"
      aria-label="Falar no WhatsApp"
    >
      <MessageSquare className="text-primary-foreground" size={24} />
    </a>
  );
};

export default WhatsAppFloat;
