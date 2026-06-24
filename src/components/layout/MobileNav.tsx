"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Info, MessageCircle } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Catalogue", href: "/products", icon: BookOpen },
    { name: "À Propos", href: "/about", icon: Info },
    { name: "WhatsApp", href: "#", icon: MessageCircle, isAction: true },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-[24px] border-t border-outline/20 shadow-[0_-8px_32px_0_rgba(0,30,64,0.08)] dark:shadow-[0_-8px_32px_0_rgba(0,0,0,0.5)] pb-safe">
      <div className="flex justify-around items-center h-[72px] px-2 relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href && !item.isAction;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
                isActive 
                  ? "text-primary" 
                  : item.isAction 
                    ? "text-secondary hover:-translate-y-1" 
                    : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <div className={`relative flex items-center justify-center ${isActive ? 'bg-primary/5 rounded-full p-1.5' : 'p-1.5'}`}>
                 <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[10px] font-technical-sm tracking-widest uppercase ${isActive ? "font-bold text-primary" : "font-medium"}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
        <div className="flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300">
           <ThemeToggle />
           <span className="text-[10px] font-technical-sm tracking-widest uppercase font-medium text-on-surface-variant mt-1">
             THÈME
           </span>
        </div>
      </div>
    </div>
  );
}
