"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: string;
  name: string;
  category: string;
  description: string;
  imageUrl: string;
  priceLabel?: string;
  price?: string;
  badge?: string;
  badgeColor?: "primary" | "secondary" | "tertiary" | "accent";
}

export default function ProductCard({ id, name, category, description, imageUrl, priceLabel = "À partir de", price, badge, badgeColor = "primary" }: ProductCardProps) {
  const badgeClasses = {
    primary: "bg-primary text-on-primary",
    secondary: "bg-secondary text-on-primary",
    tertiary: "bg-tertiary text-on-tertiary",
    accent: "bg-gradient-accent text-on-primary"
  };

  return (
    <Link href={`/products/${id}`} className="bg-card backdrop-blur-[16px] border border-outline/20 rounded-[24px] overflow-hidden group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_24px_48px_-12px_rgba(0,30,64,0.18)] dark:hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.5)] hover:bg-surface-variant flex flex-col h-full relative">
      <div className="relative h-[280px] w-full bg-surface-container overflow-hidden shrink-0">
        {badge && (
          <span className={`absolute top-4 left-4 z-10 ${badgeClasses[badgeColor]} text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full shadow-sm`}>
            {badge}
          </span>
        )}
        {imageUrl ? (
          <img src={imageUrl} alt={name} className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-110" />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-surface-container text-on-surface-variant">
            <span>Image en attente</span>
          </div>
        )}
      </div>
      <div className="p-8 flex flex-col flex-1">
        <p className="font-technical-sm text-[11px] tracking-[0.15em] text-primary/70 uppercase mb-3">
          {category}
        </p>
        <div className="flex items-start justify-between gap-4 mb-4">
           <h3 className="font-headline-lg text-[26px] text-primary leading-tight group-hover:text-gradient transition-all duration-300">
             {name}
           </h3>
        </div>
        <p className="font-body-md text-[15px] text-on-surface-variant line-clamp-2 mb-8 leading-relaxed flex-1">
          {description}
        </p>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-outline/10">
           {price && (
             <span className="font-label-md text-sm text-on-surface-variant flex flex-col">
               <span className="text-[11px] uppercase tracking-wider opacity-70 mb-0.5">{priceLabel}</span>
               <span className="font-bold text-lg text-primary">{price}</span>
             </span>
           )}
           <span className="flex items-center gap-2 font-label-md text-sm uppercase tracking-widest text-primary group-hover:text-secondary transition-colors duration-300">
             Voir les détails <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
           </span>
        </div>
      </div>
    </Link>
  );
}
