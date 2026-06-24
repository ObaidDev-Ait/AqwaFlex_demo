import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-24 border-t border-outline/20 bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col">
          <Link href="/" className="mb-8 inline-block">
            <img
              alt="AQUAFLEX"
              className="h-12 w-auto brightness-0 invert opacity-100 drop-shadow-md"
              src="data:image/png;base64,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"
            />
          </Link>
          <p className="font-body-md mb-8 max-w-sm leading-relaxed text-[var(--footer-text)]/80">
            L'excellence marocaine dans la fabrication de solutions de confort haut de gamme. Matelas, mousses et salons sur mesure.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center hover:bg-[var(--footer-text)]/10 hover:border-[var(--footer-text)]/40 transition-all duration-300">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center hover:bg-[var(--footer-text)]/10 hover:border-[var(--footer-text)]/40 transition-all duration-300">
              <span className="material-symbols-outlined">language</span>
            </a>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-technical-sm tracking-widest uppercase mb-6 font-semibold">Collections</h4>
          <ul className="flex flex-col gap-4 font-body-md text-[var(--footer-text)]/70">
            <li><Link href="/products" className="transition-colors duration-300 hover:text-secondary">Elite & Prestige</Link></li>
            <li><Link href="/products" className="transition-colors duration-300 hover:text-secondary">Orthopédique</Link></li>
            <li><Link href="/products" className="transition-colors duration-300 hover:text-secondary">Mousses Techniques</Link></li>
            <li><Link href="/products" className="transition-colors duration-300 hover:text-secondary">Salons Mousse</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-technical-sm tracking-widest uppercase mb-6 font-semibold">L'Entreprise</h4>
          <ul className="flex flex-col gap-4 font-body-md text-[var(--footer-text)]/70">
            <li><Link href="/about" className="transition-colors duration-300 hover:text-secondary">Notre Histoire</Link></li>
            <li><Link href="/about" className="transition-colors duration-300 hover:text-secondary">Savoir-Faire</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-secondary">Certifications</Link></li>
            <li><Link href="/contact" className="transition-colors duration-300 hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-technical-sm tracking-widest uppercase mb-6 font-semibold">Contact</h4>
          <ul className="flex flex-col gap-6 font-body-md text-[var(--footer-text)]/90">
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined mt-0.5 text-secondary">location_on</span>
              <span className="leading-relaxed">Zone Industrielle Moulay Rachid<br />Casablanca, Maroc</span>
            </li>
            <li className="flex gap-4 items-start">
              <span className="material-symbols-outlined mt-0.5 text-secondary">call</span>
              <span className="leading-relaxed">+212 (0) 5 22 XX XX XX<br />+212 (0) 6 61 XX XX XX</span>
            </li>
            <li className="flex gap-4 items-center">
              <span className="material-symbols-outlined text-secondary">mail</span>
              <a href="mailto:contact@aquaflex.ma" className="transition-colors duration-300 hover:text-secondary text-[var(--footer-text)]/70">contact@aquaflex.ma</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-[var(--footer-text)]/10 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-technical-sm tracking-widest uppercase text-[var(--footer-text)]/80">
        <p className="text-sm opacity-80">© 2026 AQUAFLEX. Tous droits réservés.</p>
        <div className="flex gap-8 text-sm text-[var(--footer-text)]/70">
          <Link href="/privacy" className="transition-colors duration-300 hover:text-secondary">Mentions Légales</Link>
          <Link href="/terms" className="transition-colors duration-300 hover:text-secondary">CGV</Link>
        </div>
      </div>
    </footer>
  );
}
