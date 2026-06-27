import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[65svh] md:h-screen w-full flex items-center overflow-hidden order-1">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9XILNVpw7csjo06TUrYp5wse8m6t9bPhiffxIAEIMv2bJ2ZdZfP6D68y6prIgKx0Rhvg28QqapmOESLw7jOkUypBVCpEEuzlxT3wmVPIH7CiE4I7G499YqSInP_mG7vAS2p1xWA5R4k9TYk9XKHUW9nFyJyxF8qH0l6BgNzMpyg4QKeZwRMXfLRU3wT3r8UqwParxp6a1DnyBrZrnRZFu5Jt7SYWqm_7165WpRWMaioqQtYGasxmd5uMUIQAZAFSo08kAtbQIyD15"
            alt="Aquaflex Luxury Showroom Mattress"
            fill
            priority
            quality={85}
            className="object-cover object-center transition-transform duration-10000 hover:scale-110"
            sizes="100vw"
          />
          {/* Darker gradient on mobile for better text contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/50 md:bg-gradient-to-r md:from-primary/40 to-transparent"></div>
        </div>
        <div className="relative z-10 px-safe md:px-margin-desktop max-w-[1440px] mx-auto w-full">
          <div className="max-w-3xl mt-12 md:mt-0 flex flex-col items-center md:items-start text-center md:text-left animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="font-display-lg text-4xl sm:text-5xl md:text-7xl lg:text-8xl text-surface-bright mb-4 md:mb-8 leading-tight md:leading-snug tracking-tight max-w-[95%] md:max-w-full text-balance line-clamp-3">
              AQUAFLEX — Le Confort <span className="block italic font-light mt-1 md:mt-2">Nouvelle Génération</span>
            </h1>
            <p className="font-body-lg text-base md:text-xl text-surface-bright/90 mb-8 md:mb-12 max-w-xl leading-relaxed px-2 md:px-0">
              Fabricant marocain de matelas, mousses, salons mousse et solutions de confort haut de gamme pour une expérience de sommeil inégalée.
            </p>
            <div className="flex flex-col md:flex-row flex-wrap gap-4 md:gap-6 w-full items-center md:items-start justify-center md:justify-start">
              <Link
                href="#catalogue"
                className="bg-surface-bright text-primary w-[85%] md:w-auto h-14 flex items-center justify-center px-10 rounded-full font-technical-sm tracking-widest uppercase shadow-xl hover:bg-secondary-container transition-all"
              >
                Voir le catalogue
              </Link>
              <a
                href="https://wa.me/212661361250"
                className="hidden md:flex glass-panel text-surface-bright w-[85%] md:w-auto h-14 items-center justify-center px-10 rounded-full font-technical-sm tracking-widest uppercase hover:bg-surface/20 transition-all gap-3"
              >
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  chat
                </span>
                WhatsApp Devis
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section: Glassmorphism */}
      <section className="py-section-gap px-margin-desktop max-w-[1440px] mx-auto relative order-4 md:order-2">
        <div className="text-center mb-20">
          <span className="font-technical-sm text-technical-sm tracking-widest uppercase text-on-tertiary-container mb-4 block">
            Excellence &amp; Tradition
          </span>
          <h2 className="font-headline-xl text-headline-xl text-primary">Pourquoi choisir Aquaflex</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="glass-panel p-10 rounded-[24px] hover-lift group border border-primary/10">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">factory</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Fabrication Marocaine</h3>
            <p className="text-on-surface-variant font-body-md">
              Une expertise locale alliant artisanat traditionnel et technologies de pointe pour une qualité sans compromis.
            </p>
          </div>
          <div className="glass-panel p-10 rounded-[24px] hover-lift group border border-primary/10">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">verified</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Qualité Premium</h3>
            <p className="text-on-surface-variant font-body-md">
              Mousses certifiées et matériaux de premier choix rigoureusement sélectionnés pour votre bien-être durable.
            </p>
          </div>
          <div className="glass-panel p-10 rounded-[24px] hover-lift group border border-primary/10">
            <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-3xl">local_shipping</span>
            </div>
            <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Livraison Nationale</h3>
            <p className="text-on-surface-variant font-body-md">
              Un service logistique dédié partout au Maroc, garantissant une livraison rapide et une installation soignée.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section: Asymmetric Image Blocks */}
      <section className="pb-section-gap order-3">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-desktop max-w-[1440px] mx-auto h-auto md:h-[700px] gap-y-6">
          <Link href="/products" className="min-h-[250px] md:col-span-7 relative group overflow-hidden rounded-[24px] cursor-pointer block">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2v3XCmac9gn0TeSeO3kjPLRGSv_rZfsxr3hAT9w_nUWfOABME72xyDD2fmQ3yq-_WiCNVdLCenFcHIiVABtXENvg-39BUlTYKjJAmtj8Cul-QUuJopU5YlDnqz7XoV_cc07OjuMdgjXozVarPeZuCEXDkn1M9ekFX-3LDQtR259sT_B0f9Qg8zZFMHClN4RchoS5sAmA5IdGoGh_yOlBpDgH1a6SokY9I3toJrDLdlb83OKvEnc67PCERZz1yMdbd1n5vC4TyyadC"
              alt="Matelas Aquaflex"
              fill
              loading="lazy"
              quality={85}
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 58vw"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 text-surface-bright z-20">
              <h2 className="font-headline-xl text-headline-xl mb-2">MATELAS</h2>
              <p className="font-technical-sm tracking-widest uppercase opacity-80">Collection Sommeil Profond</p>
            </div>
          </Link>
          <div className="md:col-span-5 flex flex-col gap-gutter gap-y-6">
            <Link href="/products" className="min-h-[180px] md:flex-1 relative group overflow-hidden rounded-[24px] cursor-pointer block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnebScj-mTUFFg5Vi-7CSteDovfedMP2BhUY_6ZLJJAtdCCOmaLGa8c1opXEjuzuSFflNrV9V2qvoKMU5jEraecvAxsWQW6CNa7kux1DXlrqrFxz5MRWMWhQhp8QZNKXuC20qYjpGYEK6OHwZX_43zOXCxxed5NeL1Ogk8JfQHZd3lYhZsfxeBhBVZ8BQ07cAW0NFhcXbUCkFGhJBpMuVnBo3dT1tr98-2EWwRKC_IWMFLaDv0UAO9ypLJJLw1fUD7XPf7oVkZFt97"
                alt="Mousses Aquaflex"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="absolute bottom-6 left-6 text-surface-bright z-20">
                <h2 className="font-headline-lg text-headline-lg mb-1">MOUSSES</h2>
                <p className="font-technical-sm tracking-widest uppercase opacity-80">Technologie &amp; Densité</p>
              </div>
            </Link>
            <Link href="/products" className="min-h-[180px] md:flex-1 relative group overflow-hidden rounded-[24px] cursor-pointer block">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmUbklbXDqGjMw_IaTJwNTAX130eJQs88z7rlDFBV0QZNbMu7Wi6aSG5ZAiFUFK0ishTwkEkOArG9jduNh3mnJiyQzPoPmiNZEnv8WWU2-VAUgyDEXFrDfyn_c8hroxLvdfrqO4fqVb89WUeciMxlMMkY85jJz5oNBKLLXz-43xu_37481YIbNc1NrGpTJWCV1KXUmdAHSEufMsnLb_ZLGP5zRM4DXZtiRSzxCio7s7VDBj42SnSWXnsV5KWH6tTesDI1st1TaMA48"
                alt="Salon Mousse Aquaflex"
                fill
                loading="lazy"
                quality={85}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
              <div className="absolute bottom-6 left-6 text-surface-bright z-20">
                <h2 className="font-headline-lg text-headline-lg mb-1">SALON MOUSSE</h2>
                <p className="font-technical-sm tracking-widest uppercase opacity-80">Design Sur Mesure</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-section-gap bg-surface order-2 md:order-4" id="catalogue">
        <div className="px-margin-desktop max-w-[1440px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-technical-sm text-technical-sm tracking-widest uppercase text-on-tertiary-container mb-4 block">
                Collection 2026
              </span>
              <h2 className="font-headline-xl text-headline-xl text-primary">Modèles Signatures</h2>
            </div>
            <Link href="/products" className="text-primary font-technical-sm tracking-widest border-b border-primary hover:opacity-70 pb-1">
              TOUT VOIR
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter gap-y-12">
            {/* Product Card 1 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container relative rounded-[24px] overflow-hidden mb-8 premium-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqkCHNSgTm1MW7KipvGG32E0OX3KLlLz6rMwO3EvZ2i5w3CIOMEa9cSUMXpWp8tANaUyc1t9TnmPJhtoQ0Z5iKYoIolC3PhMNr9_Mlml6qG9SlvM5Uw9TsDFT6w4abX-mmPpO1fWr4yqB4h4uDFE3Zq-Y3b0bbm74ncTChTxg8BRpRPwnyd5RGjhOvUfMQKCLcfDZ5Qg_ytKKltcILytU4yVqbeRZ0XZvq0N3t8Z_5GoLdvd8mLfBIilCAaODAzh9KKDWGuSIFO5UI"
                  alt="Relax"
                  fill
                  loading="lazy"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full font-technical-sm text-primary uppercase">
                  Bestseller
                </div>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Relax</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Mousse haute résilience pour un accueil enveloppant et un soutien équilibré.
              </p>
              <Link href="/products/relax" className="block text-center w-full py-4 rounded-full border border-primary text-primary font-technical-sm tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase">
                Découvrir
              </Link>
            </div>
            {/* Product Card 2 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container relative rounded-[24px] overflow-hidden mb-8 premium-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9Ik6nym5Oow6wntBCPFtMb6xIS8gLTgLLBgBnA8omKV14_RfAPa0DLFRil0xYCo87gVWeod59HaiwoAxvXsuWR2JP-VI6ml3AtaQUEQYN0umvbzrvNLDOL7PM-sgLXkrbyzvrkTIlN7ELNpEUBp7HxDIZAOjComSPUgI4DAcOq0my57S7LqzjneOBdrLuat9XRbi-1MStM4Bb0ywZTVwnbkhlgt-KtsRYlueIc0wAeqZKGkY6ZuI2HKhyUMlqfnXsrpoC2R_z9kMj"
                  alt="Prestige"
                  fill
                  loading="lazy"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full font-technical-sm text-primary uppercase">
                  Luxe
                </div>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Prestige</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Technologie hybride combinant ressorts ensachés et mousse à mémoire de forme.
              </p>
              <Link href="/products/prestige" className="block text-center w-full py-4 rounded-full border border-primary text-primary font-technical-sm tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase">
                Découvrir
              </Link>
            </div>
            {/* Product Card 3 */}
            <div className="group">
              <div className="aspect-[4/5] bg-surface-container relative rounded-[24px] overflow-hidden mb-8 premium-shadow">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxOmg6x2YJ4QmZMgux72oogTay8WkTWXduyV0RujGK0p57G4Y5PD_1OR8nOMDwvJXISZx8IOeBYqMGsyINS5BwX3FIuuiRCqwUr_aVDbOLh8GvwvCW9m43DZOQMd-GT-epUpRnNALNWne4FhoCqa92CESSPCXUXQvxSfr76jKXMAoSCloIPtyQMvsWBISHuCuKqLnqHrBYOBmkjkZXdb0sZSQ9ZB9e6_zDXxfnMSOMYGbOlY--xb3s9BhVrvZxQm-J2BUEhidRxLNC"
                  alt="Orthopédique"
                  fill
                  loading="lazy"
                  quality={85}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full font-technical-sm text-primary uppercase">
                  Sante
                </div>
              </div>
              <h3 className="font-headline-lg text-headline-lg text-primary mb-2">Orthopédique</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Fermeté optimale pour un alignement parfait de la colonne vertébrale.
              </p>
              <Link href="/products/ortho" className="block text-center w-full py-4 rounded-full border border-primary text-primary font-technical-sm tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase">
                Découvrir
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-section-gap px-margin-desktop order-5" id="devis">
        <div className="max-w-[1440px] mx-auto bg-primary rounded-[40px] overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary/50 via-transparent to-transparent"></div>
          <div className="relative z-10 px-10 py-24 text-center">
            <h2 className="font-headline-xl text-headline-xl text-on-primary mb-6">
              Prêt pour un sommeil d&apos;exception ?
            </h2>
            <p className="font-body-lg text-on-primary/80 max-w-2xl mx-auto mb-12">
              Recevez une proposition personnalisée pour votre projet de literie ou de salon sous 24h. Nos experts vous accompagnent dans votre choix.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link href="/contact" className="bg-surface-bright text-primary px-12 py-5 rounded-full font-headline-lg text-lg hover:scale-105 transition-transform inline-block">
                Demander mon devis
              </Link>
              <a
                href="tel:+212522765353"
                className="border border-on-primary/30 text-on-primary px-12 py-5 rounded-full font-headline-lg text-lg hover:bg-on-primary/10 transition-all flex items-center justify-center gap-3"
              >
                <span className="material-symbols-outlined">call</span>
                05 22 76 53 53
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
