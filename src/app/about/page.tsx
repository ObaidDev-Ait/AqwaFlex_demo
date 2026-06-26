"use client";

import { Building2, Users, Target, Shield, CheckCircle2, Factory } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-blue mb-8 leading-tight">Our Legacy of <span className="text-brand-cyan">Comfort</span></h1>
          <p className="text-xl md:text-2xl text-slate-600 font-light">
            For over 25 years, Aquaflex has been synonymous with premium quality foam and luxury mattresses in Morocco and beyond.
          </p>
        </FadeIn>

        {/* Manufacturing Process Timeline */}
        <div className="mb-32">
           <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-blue">The Manufacturing Journey</h2>
           </FadeIn>
           <div className="relative border-l-2 border-brand-cyan-light ml-4 md:ml-0 md:pl-0 md:flex flex-col items-center">
              {[
                { title: "Raw Material Selection", desc: "We source only the highest grade European polyols and isocyanates." },
                { title: "Foam Pouring & Curing", desc: "Our automated Maxfoam machines ensure perfectly consistent density across every block." },
                { title: "Precision Cutting", desc: "CNC contour cutting technology creates ergonomic zones and exact dimensions." },
                { title: "Assembly & Quilting", desc: "Master craftsmen assemble the layers and stitch our premium Tencel covers." },
                { title: "Quality Control", desc: "Every mattress undergoes rigorous pressure and durability testing before dispatch." }
              ].map((step, idx) => (
                 <FadeIn key={idx} delay={idx * 0.15} direction="up" className="mb-12 relative w-full md:w-1/2 md:odd:pr-12 md:even:pl-12 md:odd:ml-auto md:even:mr-auto">
                    <div className="absolute top-0 -left-[25px] md:left-auto md:right-[-25px] md:even:left-[-25px] md:even:right-auto w-12 h-12 bg-white border-4 border-brand-cyan rounded-full flex items-center justify-center font-bold text-brand-blue z-10">
                       {idx + 1}
                    </div>
                    <div className="glass-card p-8 rounded-3xl ml-8 md:ml-0">
                       <h3 className="text-2xl font-heading font-bold text-brand-blue mb-4">{step.title}</h3>
                       <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                    </div>
                 </FadeIn>
              ))}
           </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <FadeIn direction="right" className="bg-slate-100 rounded-[40px] h-[600px] flex items-center justify-center overflow-hidden relative shadow-2xl">
            {/* Factory Image Placeholder */}
            <div className="absolute inset-0 bg-brand-blue">
                <Image src="https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop" alt="Factory" fill className="object-cover opacity-60 mix-blend-luminosity" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <h2 className="text-4xl font-heading font-bold text-brand-blue mb-8">State-of-the-Art Manufacturing</h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Based in Casablanca, our modern 20,000 sqm production facility utilizes the latest European technology to produce high-density polyurethane foam and advanced sleep systems. We control every step of the manufacturing process to ensure unparalleled quality.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              From traditional Moroccan salon foam to medical-grade orthopedic mattresses, our diverse product range is designed to meet the highest standards of comfort and durability.
            </p>
            <ul className="space-y-4 mb-8">
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-cyan" /> 100% Integrated Production Cycle
               </li>
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-cyan" /> Zero-Waste Foam Recycling Initiative
               </li>
               <li className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-brand-cyan" /> Automated Quality Tracking System
               </li>
            </ul>
          </FadeIn>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1} className="glass p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Factory size={36} />
            </div>
            <h3 className="font-heading font-bold text-brand-blue text-2xl mb-4">Infrastructure</h3>
            <p className="text-slate-600">Over 20,000 sqm of modern manufacturing space equipped with cutting-edge machinery.</p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="glass p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Shield size={36} />
            </div>
            <h3 className="font-heading font-bold text-brand-blue text-2xl mb-4">Quality First</h3>
            <p className="text-slate-600">ISO 9001 certified processes and premium raw materials guarantee excellence.</p>
          </FadeIn>
          
          <FadeIn delay={0.3} className="glass p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Users size={36} />
            </div>
            <h3 className="font-heading font-bold text-brand-blue text-2xl mb-4">Expertise</h3>
            <p className="text-slate-600">A dedicated team of highly skilled engineers, craftsmen, and sleep specialists.</p>
          </FadeIn>

          <FadeIn delay={0.4} className="glass p-10 rounded-3xl text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="w-20 h-20 bg-gradient-to-br from-brand-cyan to-brand-blue text-white rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Target size={36} />
            </div>
            <h3 className="font-heading font-bold text-brand-blue text-2xl mb-4">Innovation</h3>
            <p className="text-slate-600">Continuous research and development pushing the boundaries of foam technology.</p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}
