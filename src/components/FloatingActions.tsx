import { MessageCircle, Phone } from "lucide-react";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919443342528"
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white grid place-items-center shadow-luxe hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <span className="absolute inset-0 rounded-full pulse-ring" />
        <MessageCircle size={22} />
      </a>
      <a
        href="tel:+919443342528"
        className="w-14 h-14 rounded-full gradient-royal text-white grid place-items-center shadow-glow hover:scale-110 transition-transform"
        aria-label="Call"
      >
        <Phone size={20} />
      </a>
    </div>
  );
}
