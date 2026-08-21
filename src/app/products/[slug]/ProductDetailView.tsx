"use client";

import React, { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";

const formatPrice = (price: number) => new Intl.NumberFormat("fr-MA").format(price);

export default function ProductDetailView({ product }: { product: Product }) {
  const [activeDimension, setActiveDimension] = useState(product.priceTable[0]?.dimension ?? "");

  const activeEntry = product.priceTable.find((entry) => entry.dimension === activeDimension);
  const displayedPrice = activeEntry ? formatPrice(activeEntry.price) : "Sur devis";

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
            <div className="rounded-lg overflow-hidden h-32 bg-surface-container relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tu8Kz_PMyEVUKS7S1r85zF6Gmf8lZrwk4iv6rmUeL9HR4DG_fRcCN1uRDWAa0LyH30rfSKMFxoQzXlgEQjoNZJDsmCEL5282hkV9XYV36v-xYj-D7mp11hCxroU0LRNU8JV3nFWrvv5fWAYljrOM7UqT-v07oj8IUXDZCoF3C1EmPilz10s-uuHdYEn35noSN6dWRQHBAVUoMyyyr8Hqa20QlmCx4H8NBTLUT-WIaUDKFxz7E3tH01b5a06V6RBzkoFu3lQLKxer"
                alt="Detail 1"
                fill
                className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-32 bg-surface-container relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAp4oNvAvAMvf-XjPSdleOrgHtSm28Uq9Oul6KevThH_56OIzxiA9lg4apKiaIblEEMZYgjHByqIQjgl6w6dSpENQvO57DQxon4koSXJUNQxXeAxAK0M4sl08UMXrxdBpBTmzSTADDPOP8IV6RWlqvNnxQSKB50mp2JW0PMxCX54ahs6CDOQQM3qbQmPjqCfmSKXkXWho1tG3n8c-BN5bLKrtgDLqoLGml18DvczQfFxq0NdzuRYFcTOSIZ3CKHcp0N-7CY9jLauae1"
                alt="Detail 2"
                fill
                className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
            <div className="rounded-lg overflow-hidden h-32 bg-surface-container relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpswCwzaWZJIdClKzXa9FMBdJrfT1VYRnjZlyHeOP5O4Yqh3LmLfQxHxOnSOGUSWdIWmKce9dhja-JQxTwaROe0zG7kcSk6jWxz_BMlrB958LTkVZcLwxftvS9yUrYMK-eA10f5R0kA4PupepxPfgDIHqeQU6QjXUwpI8wSQpdZaQGtbCzp15JGhaUIe3XFlbX8a78SJjZ_2t4t1RrqO4EctkJvqVyPf84QqVBm5Dpt7ytwXxgQ9_FZliXLU5_K0zqgw2csYQN5KIL"
                alt="Detail 3"
                fill
                className="object-cover cursor-pointer hover:opacity-80 transition-opacity"
                sizes="(max-width: 768px) 33vw, 20vw"
              />
            </div>
          </div>
        </div>
        {/* Right: Product Info */}
        <div className="lg:col-span-5 sticky top-32">
          <div className="bg-white/60 backdrop-blur-[20px] p-margin-mobile lg:p-8 rounded-xl shadow-lg border border-white/40 space-y-8">
            <div>
              <h1 className="font-headline-xl text-headline-xl text-primary leading-tight uppercase">
                {product.name}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-4">
                {product.fullDescription}
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
                {product.priceTable.map((item) => (
                  <button
                    key={item.dimension}
                    onClick={() => setActiveDimension(item.dimension)}
                    className={`px-4 py-3 rounded-lg border text-label-md font-label-md transition-all ${
                      activeDimension === item.dimension
                        ? "bg-primary text-on-primary border-primary"
                        : "border-outline-variant hover:border-primary"
                    }`}
                  >
                    {item.dimension}
                  </button>
                ))}
              </div>
            </div>
            {/* Price */}
            <div className="flex items-end gap-2">
              <span className="font-display-lg text-display-lg text-primary leading-none">
                {displayedPrice}
              </span>
              <span className="text-headline-lg font-headline-lg text-primary pb-2 uppercase">
                DHS
              </span>
            </div>
            {/* Technical Matrix */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-outline-variant py-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">fitness_center</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-outline">Confort</p>
                  <p className="font-technical-sm text-technical-sm">FERME</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">layers</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-outline">Densité</p>
                  <p className="font-technical-sm text-technical-sm">35 KG/M³</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">back_hand</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-outline">Soutien</p>
                  <p className="font-technical-sm text-technical-sm">LOMBAIRE+</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-outline">Garantie</p>
                  <p className="font-technical-sm text-technical-sm">10 ANS</p>
                </div>
              </div>
            </div>
            {/* CTAs */}
            <div className="flex flex-col gap-3">
              <a
                className="w-full bg-[#25D366] text-white flex items-center justify-center gap-3 py-5 rounded-full font-technical-sm text-technical-sm uppercase tracking-widest hover:brightness-105 transition-all shadow-lg"
                href={`https://wa.me/212000000000?text=${encodeURIComponent(`Je suis intéressé par le matelas ${product.name}`)}`}
              >
                <span className="material-symbols-outlined">chat</span>
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
              <tr>
                <td className="p-8 font-label-md text-primary font-bold">Noyau</td>
                <td className="p-8 text-on-surface-variant">
                  Mousse Polyuréthane Haute Densité (HD) AeroCell™
                </td>
              </tr>
              <tr>
                <td className="p-8 font-label-md text-primary font-bold">Traitement</td>
                <td className="p-8 text-on-surface-variant">
                  Anti-acariens, Hypoallergénique, Anti-bactérien
                </td>
              </tr>
              <tr>
                <td className="p-8 font-label-md text-primary font-bold">Respirabilité</td>
                <td className="p-8 text-on-surface-variant">
                  Technologie 3D Fresh-Side pour ventilation maximale
                </td>
              </tr>
              <tr>
                <td className="p-8 font-label-md text-primary font-bold">Épaisseur Totale</td>
                <td className="p-8 text-on-surface-variant">25 cm (+/- 1cm)</td>
              </tr>
              <tr>
                <td className="p-8 font-label-md text-primary font-bold">Zones de Confort</td>
                <td className="p-8 text-on-surface-variant">7 Zones de soutien différenciées</td>
              </tr>
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
          <span className="material-symbols-outlined text-[400px] absolute -top-20 -right-20">
            contract
          </span>
        </div>
        <div className="max-w-3xl relative z-10">
          <h2 className="font-headline-xl text-headline-xl text-white mb-6">
            Demander un Devis Personnalisé
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary-container mb-12">
            Besoin de dimensions spécifiques ou d'une commande groupée ? Nos experts vous répondent sous 24h avec une offre sur-mesure.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-technical-sm text-technical-sm uppercase text-on-primary-container">
                Nom Complet
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-on-primary-container/30 focus:border-white py-4 outline-none transition-colors text-white placeholder-on-primary-container/50 font-body-md"
                placeholder="VOTRE NOM"
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="font-technical-sm text-technical-sm uppercase text-on-primary-container">
                Email
              </label>
              <input
                className="w-full bg-transparent border-b-2 border-on-primary-container/30 focus:border-white py-4 outline-none transition-colors text-white placeholder-on-primary-container/50 font-body-md"
                placeholder="VOTRE EMAIL"
                type="email"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="font-technical-sm text-technical-sm uppercase text-on-primary-container">
                Dimensions &amp; Quantité
              </label>
              <textarea
                className="w-full bg-transparent border-b-2 border-on-primary-container/30 focus:border-white py-4 outline-none transition-colors text-white placeholder-on-primary-container/50 font-body-md h-32 resize-none"
                placeholder="EX: 3 MATELAS 160X200..."
              ></textarea>
            </div>
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
