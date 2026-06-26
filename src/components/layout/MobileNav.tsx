"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Grid, Info, Mail } from "lucide-react";

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Accueil", href: "/", icon: Home },
    { name: "Catalogue", href: "/products", icon: Grid },
    { name: "À Propos", href: "/about", icon: Info },
    { name: "Devis", href: "/contact", icon: Mail },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[400px] z-50 rounded-full bg-surface/75 dark:bg-surface/60 backdrop-blur-lg border border-outline/10 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] px-6 py-2">
      <div className="flex justify-between items-center h-[56px] relative">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative flex flex-col items-center justify-center min-w-[50px] h-[50px] rounded-full transition-all duration-300 active:scale-90 ${
                isActive 
                  ? "text-primary dark:text-accent scale-110" 
                  : "text-on-surface-variant/70 dark:text-on-surface-variant/60 hover:text-primary dark:hover:text-accent"
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} className="transition-transform duration-300" />
              {/* Active indicator dot */}
              {isActive && (
                <span className="absolute bottom-1.5 w-1 h-1 rounded-full bg-primary dark:bg-accent animate-pulse" />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
