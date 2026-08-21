import Image from "next/image";
import ContactInfoItem from "@/components/ui/ContactInfoItem";
import FormField from "@/components/ui/FormField";
import MaterialIcon from "@/components/ui/MaterialIcon";
import { CONTACT } from "@/lib/contact";

const TRUST_BADGES = [
  { icon: "verified", label: "Garantie 10 Ans" },
  { icon: "eco", label: "Éco-Responsable" },
];

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
                <ContactInfoItem
                  icon="chat"
                  iconFilled
                  iconClassName="bg-primary-container text-on-primary-container"
                  label="WhatsApp Business"
                  value={CONTACT.phone.landline.display}
                  className="cursor-pointer"
                />
                <ContactInfoItem
                  icon="call"
                  iconClassName="bg-secondary-fixed text-on-secondary-container"
                  label="Service Client"
                  value={CONTACT.phone.mobile.display}
                  className="cursor-pointer"
                />
                <ContactInfoItem
                  icon="location_on"
                  iconClassName="bg-surface-container-highest text-primary"
                  label="Siège & Showroom"
                  value={
                    <>
                      {CONTACT.address[0]}
                      <br />
                      {CONTACT.address[1]}
                    </>
                  }
                  valueClassName="font-body-lg text-body-lg text-on-surface-variant"
                />
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
                <MaterialIcon name="directions" className="text-primary text-sm" />
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
                  <FormField label="Nom Complet" placeholder="Ex: Jean Dupont" />
                  <FormField label="Téléphone" type="tel" placeholder="+212 ..." />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Ville" placeholder="Ex: Casablanca" />
                  <FormField
                    label="Produit Souhaité"
                    as="select"
                    options={[
                      "Matelas Premium",
                      "Mousse sur mesure",
                      "Salon Complet",
                      "Autre Accessoire",
                    ]}
                  />
                </div>
                <FormField
                  label="Votre Message"
                  as="textarea"
                  rows={4}
                  placeholder="Décrivez vos besoins ou dimensions spécifiques..."
                />
                <div className="pt-6">
                  <button
                    className="w-full py-5 bg-primary text-on-primary rounded-full font-technical-sm text-technical-sm tracking-widest uppercase hover:bg-primary-container transition-all shadow-lg hover:shadow-primary/20 flex items-center justify-center gap-3"
                    type="button"
                  >
                    <span>Recevoir mon devis</span>
                    <MaterialIcon name="arrow_forward" className="text-sm" />
                  </button>
                </div>
              </form>
            </div>
            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {TRUST_BADGES.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2">
                  <MaterialIcon name={badge.icon} />
                  <span className="font-technical-sm text-technical-sm uppercase">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
