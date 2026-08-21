"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { usePathname } from "next/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    const timeout = window.setTimeout(() => setIsOpen(false), 0);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <button 
        aria-label="Menu" 
        onClick={() => setIsOpen(true)}
        className="material-symbols-outlined text-primary text-3xl flex items-center justify-center w-12 h-12 active:scale-95 transition-transform"
      >
        menu
      </button>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-[100svh] w-full max-w-md bg-surface border-l border-outline/10 shadow-2xl z-[70] transform transition-transform duration-500 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 h-[64px] border-b border-outline/10 shrink-0 pt-safe">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(false)}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-variant text-on-surface-variant active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-8 pb-32">
          
          <Link href="/" className="block text-3xl font-display-lg text-primary mb-10 tracking-tight">
            Accueil
          </Link>

          <div className="mb-10">
            <h3 className="text-[11px] font-technical-sm tracking-[0.2em] uppercase text-on-surface-variant mb-6">Catalogue</h3>
            <ul className="space-y-5">
              <li><Link href="/products" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Matelas</Link></li>
              <li><Link href="/products" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Mousses</Link></li>
              <li><Link href="/products" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Salon Mousse</Link></li>
              <li><Link href="/products" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Oreillers</Link></li>
              <li><Link href="/products" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Fournitures</Link></li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-[11px] font-technical-sm tracking-[0.2em] uppercase text-on-surface-variant mb-6">L&apos;Entreprise</h3>
            <ul className="space-y-5">
              <li><Link href="/about" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Notre histoire</Link></li>
              <li><Link href="/about" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Notre savoir-faire</Link></li>
              <li><Link href="/about" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors">Certifications</Link></li>
            </ul>
          </div>

          <div className="mb-10">
            <h3 className="text-[11px] font-technical-sm tracking-[0.2em] uppercase text-on-surface-variant mb-6">Contact</h3>
            <Link href="/contact" className="text-2xl font-display-lg text-primary hover:text-secondary transition-colors block">
              Demander un devis
            </Link>
          </div>

          <div className="mb-10">
            <h3 className="text-[11px] font-technical-sm tracking-[0.2em] uppercase text-on-surface-variant mb-6">Langue</h3>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-full bg-primary text-on-primary font-technical-sm text-sm tracking-wider uppercase">
                Français
              </button>
              <button className="px-6 py-3 rounded-full bg-surface-variant text-on-surface-variant font-technical-sm text-sm tracking-wider uppercase">
                العربية
              </button>
            </div>
          </div>
          
        </div>

        {/* Footer */}
        <div className="shrink-0 p-6 bg-surface-container border-t border-outline/10 pb-safe">
           <a href="https://wa.me/212000000" className="flex items-center gap-3 w-full bg-[#25D366] text-white p-4 rounded-2xl justify-center font-bold tracking-wide active:scale-[0.98] transition-transform mb-4 shadow-lg shadow-[#25D366]/20">
             <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>chat</span>
             WhatsApp
           </a>
           <div className="flex justify-between items-center px-2">
             <a href="tel:+212000000" className="flex flex-col text-on-surface-variant hover:text-primary transition-colors">
               <span className="text-[10px] uppercase tracking-widest font-technical-sm mb-1 opacity-70">Téléphone</span>
               <span className="font-medium text-sm">+212 (0) 522 00 00 00</span>
             </a>
             <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center text-primary"><span className="material-symbols-outlined text-lg">language</span></a>
             </div>
           </div>
        </div>
      </div>
    </>
  );
}
