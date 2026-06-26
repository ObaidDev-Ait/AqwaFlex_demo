"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/212661361250"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
      className="md:hidden fixed bottom-[calc(1.5rem+env(safe-area-inset-bottom))] right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.3)] active:scale-95 transition-all duration-300 group"
    >
      {/* Pulse Rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping pointer-events-none scale-105" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 animate-pulse pointer-events-none scale-110" />

      {/* WhatsApp Icon */}
      <MessageCircle size={28} className="relative z-10 group-active:rotate-12 transition-transform duration-300" strokeWidth={2} />
    </a>
  );
}
