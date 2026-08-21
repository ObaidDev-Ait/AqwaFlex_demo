import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero Section / Header */}
      <header className="relative pt-40 pb-20 overflow-hidden">
        <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="max-w-3xl">
            <h1 className="font-headline-xl text-headline-xl text-primary mb-6">
              Contactez l&apos;Excellence du Sommeil
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
              Experts en confort nouvelle génération, nous sommes à votre disposition pour
              transformer vos nuits. Demandez un devis personnalisé ou visitez notre atelier.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white/10 backdrop-blur-[20px] rounded-[24px] p-8 shadow-[0_20px_40px_rgba(0,30,64,0.05)] border border-white/50">
              <h2 className="font-headline-lg text-headline-lg text-primary mb-10">
                Nos Coordonnées
              </h2>
              <div className="space-y-8">
                {/* WhatsApp */}
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      chat
                    </span>
                  </div>
                  <div>
                    <p className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container mb-1">
                      WhatsApp Business
                    </p>
                    <p className="font-body-lg text-body-lg text-primary font-bold">
                      +212 5 22 00 00 00
                    </p>
                  </div>
                </div>
                {/* Téléphone */}
                <div className="flex items-start gap-5 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-secondary-fixed flex items-center justify-center text-on-secondary-container group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <div>
                    <p className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container mb-1">
                      Service Client
                    </p>
                    <p className="font-body-lg text-body-lg text-primary font-bold">
                      +212 6 61 00 00 00
                    </p>
                  </div>
                </div>
                {/* Adresse */}
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 rounded-full bg-surface-container-highest flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container mb-1">
                      Siège &amp; Showroom
                    </p>
                    <p className="font-body-lg text-body-lg text-on-surface-variant">
                      Zone Industrielle Sapino, Nouaceur,<br />
                      Casablanca, Maroc
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="rounded-[24px] overflow-hidden h-[350px] shadow-lg border border-white/20 relative group">
              <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBj17x6_V7EnFrA1GcZcWpxghYId4B_L6yaXqJOjzbSYZwR7Vr4HnVJikUfq1xNzDCsOnFjnW6V_fomASW8y4-RNS_65eDcQ-RVbarZyQosNyA96m3Vr1KLXqYCPM7iuM93RSEJJxQGvgcAKD_ijpayRnygqAwOHkn43WnYk3__CfI9WhT10Txcj5oxj3DdDfieh5OG6SCNXmHJggL8jISfP3BhY8HKXEnWN6_BvFxAahbPzbcnqCfdtvE4e03rgvqGk0Q_RQ60_kC3"
                alt="Map Casablanca"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 768px) 100vw, 42vw"
              />
              <div className="absolute bottom-6 left-6 z-20 bg-white/60 backdrop-blur-[20px] border border-white/30 px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">directions</span>
                <span className="font-technical-sm text-technical-sm text-primary">
                  ITINÉRAIRE
                </span>
              </div>
            </div>
          </div>
          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_32px_64px_rgba(0,30,64,0.06)] border border-surface-container">
              <div className="mb-10">
                <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
                  Demander un Devis
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Remplissez ce formulaire et un expert AQUAFLEX vous contactera sous 24h avec une proposition sur mesure.
                </p>
              </div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1">
                      Nom Complet
                    </label>
                    <input
                      className="w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md transition-all"
                      placeholder="Ex: Jean Dupont"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1">
                      Téléphone
                    </label>
                    <input
                      className="w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md transition-all"
                      placeholder="+212 ..."
                      type="tel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1">
                      Ville
                    </label>
                    <input
                      className="w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md transition-all"
                      placeholder="Ex: Casablanca"
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1">
                      Produit Souhaité
                    </label>
                    <select className="w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md appearance-none transition-all">
                      <option>Matelas Premium</option>
                      <option>Mousse sur mesure</option>
                      <option>Salon Complet</option>
                      <option>Autre Accessoire</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1">
                    Votre Message
                  </label>
                  <textarea
                    className="w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md transition-all"
                    placeholder="Décrivez vos besoins ou dimensions spécifiques..."
                    rows={4}
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button
                    className="w-full py-5 bg-primary text-on-primary rounded-full font-technical-sm text-technical-sm tracking-widest uppercase hover:bg-primary-container transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-3"
                    type="button"
                  >
                    <span>Recevoir mon devis</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </form>
            </div>
            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">verified</span>
                <span className="font-technical-sm text-technical-sm uppercase">Garantie 10 Ans</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">eco</span>
                <span className="font-technical-sm text-technical-sm uppercase">Éco-Responsable</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
