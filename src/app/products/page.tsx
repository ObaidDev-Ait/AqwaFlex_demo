import Link from "next/link";
import ProductCard from "@/components/ui/ProductCard";

export default function Products() {
  const mattresses = [
    {
      id: "relax",
      name: "Relax",
      category: "Matelas",
      description: "L'équilibre parfait entre souplesse et maintien pour des nuits paisibles.",
      price: "2,490 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDdO4stujm8bLmXro_BUZn6sB-6t0NYR_BnwFp2IIPbVUozJPvyKFG7WR0bgrZc28HQF_AmMx6qovRRjtfo5FFNrH927d0GsjqrVfJhbR407MMFpmUGUZM40mYSdOL82ju1I1Nfncakn15BpTC-XaGDPkyh6NuAkHCxSIaLRom3hMttRP86OQVx-K9pWto1FVlg7HzALMF5Kct3uWubs7Sr-4w_pWMmrD-GO76LMbd5RWpUPSQz_2EZIL6zZa0Ioh6M9Vqkb1MukqAv",
      badge: "BEST SELLER",
      badgeColor: "primary" as const
    },
    {
      id: "prestige",
      name: "Prestige",
      category: "Matelas",
      description: "Le fleuron de notre gamme, alliant technologie de pointe et finitions artisanales.",
      price: "4,200 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQAhnvu82gaTrGaJAmC0fsWSZULTrgfX73O_t1dEpYVPbEnk4VPbuulZnQJhfRXbTAvqzw_cUsfw8T7-VkjwthwOvWW21XHTHmSv94i1vXKwZtsmrDnkyYJdrikil5mlLprPpjuSHRjENHLN4Za6xuZMtv_NQE94AGxJzmW-kvp7WCNa3rvF3aHf3Uhk7VkRsbVhuklhtq3IhYeolCCfkYImfIWCYT6QwcuT9wEJYlQmhsvI0lgZJ4si6UH19sJKgmBDaXvsbMKaWi",
      badge: "PREMIUM",
      badgeColor: "secondary" as const
    },
    {
      id: "ortho",
      name: "Orthopédique",
      category: "Matelas",
      description: "Conçu spécifiquement pour le soulagement des pressions dorsales.",
      price: "3,150 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKk9HiBQZb_TQwb3D5yWHMif5p5qG_HYFlZeCV_NKxLhtxsp0NwIARlCx2xHGfSQAlauNnBwllbLd0YpS5bZPFCQ1TtGpvOyQ-WuIelu-88llQaLjLBkpuDbw72aC7bnwn5awCSDGAIq4lcPwNZhQksdgbRQFcX3fh6wwbPD9HLcOKNf6eoEFzGQrOG4OCy8W_Uu95mIhOMcbvdPCsS_BVQvOVEg1VgN24A6JRrYU_jzT542OgNIL1IYulTTJfS72lvrZO6LhS0V-i"
    }
  ];

  const foams = [
    {
      id: "windorsal",
      name: "Windorsal 33",
      category: "Mousses",
      description: "Densité exceptionnelle pour une longévité garantie de 10 ans.",
      priceLabel: "Au m²",
      price: "850 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcnAudZhgum1f7fbzw-67xw5O4rtRWSdmouo0oqWGPX_Oz6tA4MUjs-IB3cPXaCi4Ifrpsb057n11ovXkTHHNOevDCw2st718Q6VKnrKfhEcRujqA0q8NYDglustnpOcZxwdrMeY1vhoEx5nG4IgbQHr442vQKc6FJ7hGn_GEOdkVIKD6vqkR4c0aYTE8dJ5Pbw9wUBsO98C9MR7h4nz9Ekgs0KOe-cDxR7i5sYS8qo0kocIKZ0sSczOyhKxBXDkqPkc0jzMRHnj_j",
      badge: "HAUTE DENSITÉ",
      badgeColor: "accent" as const
    },
    {
      id: "alpha",
      name: "Alpha 33",
      category: "Mousses",
      description: "Mousse résiliente offrant un accueil progressif et un soutien ferme.",
      priceLabel: "Au m²",
      price: "790 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIbpYjxXLiJ28ChQNb5cXpjHqIHR1EvgELHPC1bOZw6NhjL9TlzavpGLhJlAiwj0K8yn28MUc-TgGIjvsF5Sq0ZHxZCM-IDty-6hHw-iREL7qxloGo0a_mgMA-_l39bUnNvFHHSqA1NzY8stC9MidWNxD3ok4OCIjj3DbyhGeADkwpt-OgV1ChUX16iNmKIqRSU4tBzl7l-fElyionsyPomFWSdnR8jItWvGqQ9THDsK-R08bv6P9J-DTVx2Zayn6IeRnkuGaw3yUe"
    },
    {
      id: "silver",
      name: "Silver 20",
      category: "Mousses",
      description: "Légèreté et flexibilité pour vos projets d'ameublement sur mesure.",
      priceLabel: "Au m²",
      price: "550 DH",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuA0swbSmdu81mh9lV-1j24gX2BcbVfIVgFqTTp_W4gmbtVqIiUCEFuj-ocveJAbYzFYIV4B1LgkQkxeyNrt9oCWaZLc57cqR5MCfOqBanLLkAUY5nqOzoqdS8bJarVXxUzRcB_jC94UffJz0DYdwdMrt_Q0wP_MPhXulP5FVWH9sVCM9sebRR8lmPwxxfMRahluFjdVZ5UXTkAm8BZez0yTxoKgnJg_fDiDijuO5eMJoUAWZ2ZUnWcmkDIwSPkzt7cv8z0jcSNVmgZK"
    }
  ];

  return (
    <>
      <main className="pt-32 pb-section-gap bg-background min-h-screen">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          {/* Header Section */}
          <div className="mb-20 text-center md:text-left">
            <h1 className="font-display-lg text-display-lg text-primary mb-6">
              Catalogue 2026
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto md:mx-0 leading-relaxed">
              L'ingénierie du sommeil au service de votre bien-être. Découvrez notre nouvelle gamme de mousses haute densité et matelas ergonomiques avec des finitions dignes de l'hôtellerie de luxe.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
            
            {/* Mobile Filter Chips (Horizontal Scroll) */}
            <div className="lg:hidden flex overflow-x-auto gap-3 pb-3 pt-3 -mx-safe px-safe no-scrollbar sticky top-[64px] z-40 bg-background/90 backdrop-blur-[12px] border-b border-outline/10 mb-2">
              <button className="flex-shrink-0 bg-primary text-on-primary px-6 h-12 rounded-full font-technical-sm text-[11px] tracking-widest uppercase flex items-center justify-center premium-shadow active:scale-[0.97] transition-transform">
                Tout Voir
              </button>
              <button className="flex-shrink-0 bg-surface-variant text-on-surface-variant px-6 h-12 rounded-full font-technical-sm text-[11px] tracking-widest uppercase flex items-center justify-center border border-outline/10 active:scale-[0.97] transition-transform">
                Matelas
              </button>
              <button className="flex-shrink-0 bg-surface-variant text-on-surface-variant px-6 h-12 rounded-full font-technical-sm text-[11px] tracking-widest uppercase flex items-center justify-center border border-outline/10 active:scale-[0.97] transition-transform">
                Mousses
              </button>
              <button className="flex-shrink-0 bg-surface-variant text-on-surface-variant px-6 h-12 rounded-full font-technical-sm text-[11px] tracking-widest uppercase flex items-center justify-center border border-outline/10 active:scale-[0.97] transition-transform">
                Salon Mousse
              </button>
            </div>

            {/* Filter Sidebar (Desktop Only) */}
            <aside className="hidden lg:block lg:w-1/4">
              <div className="bg-surface/60 backdrop-blur-[24px] border border-outline/20 rounded-2xl p-8 sticky top-32 shadow-[0_12px_24px_-8px_rgba(0,30,64,0.06)] dark:shadow-[0_12px_24px_-8px_rgba(0,0,0,0.5)]">
                <h3 className="font-technical-sm text-sm tracking-[0.2em] uppercase text-primary mb-8 border-b border-primary/10 pb-4">
                  Filtrer par Univers
                </h3>
                <div className="space-y-3">
                  <button className="w-full flex justify-between items-center p-4 rounded-xl bg-gradient-premium text-on-primary transition-all shadow-md hover-lift">
                    <span className="font-label-md text-sm font-semibold uppercase tracking-wider">TOUT VOIR</span>
                    <span className="material-symbols-outlined text-lg">chevron_right</span>
                  </button>
                  <button className="w-full flex justify-between items-center p-4 rounded-xl hover:bg-surface-variant transition-all text-on-surface-variant group">
                    <span className="font-label-md text-sm font-medium uppercase tracking-wider group-hover:text-primary transition-colors">MATELAS</span>
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">
                      chevron_right
                    </span>
                  </button>
                  <button className="w-full flex justify-between items-center p-4 rounded-xl hover:bg-surface-variant transition-all text-on-surface-variant group">
                    <span className="font-label-md text-sm font-medium uppercase tracking-wider group-hover:text-primary transition-colors">MOUSSES</span>
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">
                      chevron_right
                    </span>
                  </button>
                  <button className="w-full flex justify-between items-center p-4 rounded-xl hover:bg-surface-variant transition-all text-on-surface-variant group">
                    <span className="font-label-md text-sm font-medium uppercase tracking-wider group-hover:text-primary transition-colors">SALON MOUSSE</span>
                    <span className="material-symbols-outlined text-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-primary">
                      chevron_right
                    </span>
                  </button>
                </div>
                
                <div className="mt-14">
                  <h3 className="font-technical-sm text-sm tracking-[0.2em] uppercase text-primary mb-6">
                    Fermeté
                  </h3>
                  <div className="space-y-4">
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-outline group-hover:border-primary flex items-center justify-center transition-colors"></div>
                      <span className="font-body-md text-[15px] text-on-surface-variant group-hover:text-primary transition-colors">
                        Moelleux
                      </span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-primary bg-primary flex items-center justify-center transition-colors">
                        <span className="material-symbols-outlined text-on-primary text-[14px]">check</span>
                      </div>
                      <span className="font-body-md text-[15px] text-primary font-medium transition-colors">
                        Équilibré
                      </span>
                    </label>
                    <label className="flex items-center gap-4 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-outline group-hover:border-primary flex items-center justify-center transition-colors"></div>
                      <span className="font-body-md text-[15px] text-on-surface-variant group-hover:text-primary transition-colors">
                        Ferme
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </aside>
            
            {/* Product Grid */}
            <div className="lg:w-3/4">
              {/* Section Title: Matelas */}
              <div className="flex items-center gap-8 mb-10">
                <h2 className="font-headline-lg text-4xl text-primary font-bold">Matelas</h2>
                <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
                {mattresses.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>

              {/* Section Title: Mousses */}
              <div className="flex items-center gap-8 mb-10">
                <h2 className="font-headline-lg text-4xl text-primary font-bold">Mousses Techniques</h2>
                <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {foams.map(product => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
