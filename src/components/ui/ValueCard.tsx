"use client";

import type { LucideIcon } from "lucide-react";
import FadeIn from "./FadeIn";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ValueCard({ icon: Icon, title, description, delay = 0 }: ValueCardProps) {
  return (
    <FadeIn
      delay={delay}
      className="glass p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
        <Icon size={36} />
      </div>
      <h3 className="font-heading font-bold text-brand-blue text-2xl mb-4">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </FadeIn>
  );
}
