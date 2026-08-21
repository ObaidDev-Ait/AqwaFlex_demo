"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import FormField from "@/components/ui/FormField";
import MaterialIcon from "@/components/ui/MaterialIcon";
import SpecTile from "@/components/ui/SpecTile";
import { whatsAppUrl } from "@/lib/contact";

const GALLERY_THUMBNAILS = [
  {
    alt: "Detail 1",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3tu8Kz_PMyEVUKS7S1r85zF6Gmf8lZrwk4iv6rmUeL9HR4DG_fRcCN1uRDWAa0LyH30rfSKMFxoQzXlgEQjoNZJDsmCEL5282hkV9XYV36v-xYj-D7mp11hCxroU0LRNU8JV3nFWrvv5fWAYljrOM7UqT-v07oj8IUXDZCoF3C1EmPilz10s-uuHdYEn35noSN6dWRQHBAVUoMyyyr8Hqa20QlmCx4H8NBTLUT-WIaUDKFxz7E3tH01b5a06V6RBzkoFu3lQLKxer",
  },
  {
    alt: "Detail 2",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAp4oNvAvAMvf-XjPSdleOrgHtSm28Uq9Oul6KevThH_56OIzxiA9lg4apKiaIblEEMZYgjHByqIQjgl6w6dSpENQvO57DQxon4koSXJUNQxXeAxAK0M4sl08UMXrxdBpBTmzSTADDPOP8IV6RWlqvNnxQSKB50mp2JW0PMxCX54ahs6CDOQQM3qbQmPjqCfmSKXkXWho1tG3n8c-BN5bLKrtgDLqoLGml18DvczQfFxq0NdzuRYFcTOSIZ3CKHcp0N-7CY9jLauae1",
  },
  {
    alt: "Detail 3",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCpswCwzaWZJIdClKzXa9FMBdJrfT1VYRnjZlyHeOP5O4Yqh3LmLfQxHxOnSOGUSWdIWmKce9dhja-JQxTwaROe0zG7kcSk6jWxz_BMlrB958LTkVZcLwxftvS9yUrYMK-eA10f5R0kA4PupepxPfgDIHqeQU6QjXUwpI8wSQpdZaQGtbCzp15JGhaUIe3XFlbX8a78SJjZ_2t4t1RrqO4EctkJvqVyPf84QqVBm5Dpt7ytwXxgQ9_FZliXLU5_K0zqgw2csYQN5KIL",
  },
];

const SIZE_OPTIONS = [
  { size: "90 x 190", price: "2,400" },
  { size: "140 x 190", price: "3,800" },
  { size: "160 x 190", price: "4,200" },
  { size: "160 x 200", price: "4,500" },
  { size: "180 x 200", price: "5,100" },
  { size: "200 x 200", price: "5,800" },
];

const SPEC_TILES = [
  { icon: "fitness_center", label: "Confort", value: "FERME" },
  { icon: "layers", label: "Densité", value: "35 KG/M³" },
  { icon: "back_hand", label: "Soutien", value: "LOMBAIRE+" },
  { icon: "verified", label: "Garantie", value: "10 ANS" },
];

const TECHNICAL_SHEET = [
  { label: "Noyau", value: "Mousse Polyuréthane Haute Densité (HD) AeroCell™" },
  { label: "Traitement", value: "Anti-acariens, Hypoallergénique, Anti-bactérien" },
  { label: "Respirabilité", value: "Technologie 3D Fresh-Side pour ventilation maximale" },
  { label: "Épaisseur Totale", value: "25 cm (+/- 1cm)" },
  { label: "Zones de Confort", value: "7 Zones de soutien différenciées" },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const [price, setPrice] = useState("3,150");
  const [activeSize, setActiveSize] = useState("90 x 190");

  const handleSizeClick = (size: string, newPrice: string) => {
    setActiveSize(size);
    setPrice(newPrice);
  };

  return (
    <main className="pt-32 pb-section-gap px-margin-desktop max-w-container-max mx-auto">
      {/* Product Detail Shell */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
        {/* Left: Product Gallery */}
        <div className="lg:col-span-7 space-y-6">
          <div className="relative rounded-xl overflow-hidden group aspect-[4/3] bg-surface-container shadow-2xl">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8NCpQp8OmV7oC8g2v-iMs-ZXJC2jjixz8J_HkEyeBOruPYFv0YaweMWgBoUJ6VN7R5J_xBJwyIbhDUfVkwlacpGy6Lx2btucfX_w9M58vGNj9wKBZTeL2T0jmPj6-mUYe56Q-SdQdSGBmGZcP7fAGz97oVa6zulUp9M_ikWvMAxaP0t9BEmXmXtAi47kn6fPw4ZoK-JR5te-gux6Db_T28ruuJ3hScNhRJnvl07hz3E6pb6o9RObQU_3Iah19Fjd11ENmU-8TBJaH"
              alt="Orthopédique Main"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <span className="bg-primary text-on-primary px-4 py-1 rounded-full text-technical-sm tracking-widest uppercase">
                Premium Orthopédique
              </span>
              <span className="bg-white/80 backdrop-blur-md text-primary px-4 py-1 rounded-full text-technical-sm tracking-widest uppercase">
                Garantie 10 Ans
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {GALLERY_THUMBNAILS.map((thumbnail) => (
              <div
                key={thumbnail.alt}
                className="rounded-lg overflow-hidden h-32 bg-surface-container relative"
              >
                <Image
                  src={thumbnail.src}
                  alt={thumbnail.alt}
                  fill
                  className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                  sizes="(max-width: 768px) 33vw, 20vw"
                />
              </div>
            ))}
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="bg-white/60 backdrop-blur-[20px] p-margin-mobile lg:p-8 rounded-xl shadow-lg border border-white/40 space-y-8">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight uppercase">
                {slug || "ORTHOPÉDIQUE"}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
                L&apos;excellence de l&apos;ingénierie du sommeil. Conçu avec une mousse haute densité de 35kg/m³ pour un soutien lombaire optimal et un alignement parfait de la colonne vertébrale.
              </p>
            </div>
            {/* Dimensions */}
            <div className="space-y-4">
              <h3 className="font-technical-sm text-technical-sm uppercase tracking-widest text-primary flex justify-between items-center">
                Dimensions Disponibles
                <span className="text-outline italic normal-case font-normal hidden sm:inline">
                  (Sélectionnez pour voir le prix)
                </span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {SIZE_OPTIONS.map((item) => (
                  <button
                    key={item.size}
                    onClick={() => handleSizeClick(item.size, item.price)}
                    className={`px-4 py-3 rounded-lg border text-label-md font-label-md transition-all ${
                      activeSize === item.size
                        ? "bg-primary text-on-primary border-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    {item.size}
                  </button>
                ))}
              </div>
            </div>
            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="font-display-lg text-display-lg text-primary leading-none">
                {price}
              </span>
              <span className="text-headline-lg font-headline-lg text-primary pb-2 uppercase">
                DHS
              </span>
            </div>
            {/* Technical Matrix */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-outline-variant py-6">
              {SPEC_TILES.map((spec) => (
                <SpecTile key={spec.label} {...spec} />
              ))}
            </div>
            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                className="w-full bg-[#25D366] text-white flex items-center justify-center gap-3 py-5 rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg"
                href={whatsAppUrl("Je suis intéressé par le matelas ORTHOPÉDIQUE")}
              >
                <MaterialIcon name="chat" />
                Commander via WhatsApp
              </a>
              <button
                className="w-full border-2 border-primary text-primary py-4 rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all"
                onClick={() => {
                  document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Demander un Devis
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Comparison Matrix Section */}
      <section className="mt-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary text-center mb-16">
          Fiche Technique &amp; Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white/60 backdrop-blur-[20px] border border-white/30 rounded-2xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-primary text-on-primary">
                <th className="p-8 font-technical-sm text-technical-sm uppercase tracking-widest">
                  Caractéristique
                </th>
                <th className="p-8 font-technical-sm text-technical-sm uppercase tracking-widest">
                  Spécifications Orthopédique
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {TECHNICAL_SHEET.map((row) => (
                <tr key={row.label}>
                  <td className="p-8 font-label-md text-primary font-bold">{row.label}</td>
                  <td className="p-8 text-on-surface-variant">{row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Quote Form */}
      <section
        className="mt-section-gap bg-primary-container text-on-primary rounded-3xl p-12 lg:p-20 relative overflow-hidden"
        id="quote-form"
      >
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <MaterialIcon name="contract" className="text-[400px] absolute -top-20 -right-20" />
        </div>
        <div className="max-w-3xl relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">
            Demander un Devis Personnalisé
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
            Besoin de dimensions spécifiques ou d&apos;une commande groupée ? Nos experts vous répondent sous 24h avec une offre sur-mesure.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FormField variant="on-primary" label="Nom Complet" placeholder="VOTRE NOM" />
            <FormField variant="on-primary" label="Email" type="email" placeholder="VOTRE EMAIL" />
            <FormField
              variant="on-primary"
              label="Dimensions & Quantité"
              as="textarea"
              placeholder="EX: 3 MATELAS 160X200..."
              className="md:col-span-2"
              controlClassName="h-32 resize-none"
            />
            <div className="md:col-span-2">
              <button
                className="bg-white text-primary px-12 py-5 rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-xl"
                type="button"
              >
                Envoyer la Demande
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
