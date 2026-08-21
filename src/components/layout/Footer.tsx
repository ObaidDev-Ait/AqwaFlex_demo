import Link from 'next/link';
import BrandLogo from '@/components/ui/BrandLogo';
import MaterialIcon from '@/components/ui/MaterialIcon';
import { CONTACT } from '@/lib/contact';
import type { NavLink } from '@/lib/navigation';

const COLLECTION_LINKS: NavLink[] = [
  { name: 'Elite & Prestige', href: '/products' },
  { name: 'Orthopédique', href: '/products' },
  { name: 'Mousses Techniques', href: '/products' },
  { name: 'Salons Mousse', href: '/products' },
];

const COMPANY_LINKS: NavLink[] = [
  { name: 'Notre Histoire', href: '/about' },
  { name: 'Savoir-Faire', href: '/about' },
  { name: 'Certifications', href: '/contact' },
  { name: 'Contact', href: '/contact' },
];

const LEGAL_LINKS: NavLink[] = [
  { name: 'Mentions Légales', href: '/privacy' },
  { name: 'CGV', href: '/terms' },
];

const LINK_CLASSES = 'transition-colors duration-300 hover:text-secondary';

function FooterLinkColumn({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="md:col-span-2">
      <h4 className="font-technical-sm tracking-widest uppercase mb-6 font-semibold">{title}</h4>
      <ul className="flex flex-col gap-4 font-body-md text-[var(--footer-text)]/70">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={LINK_CLASSES}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full py-24 border-t border-outline/20 bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col">
          <BrandLogo
            className="mb-8 inline-block"
            imageClassName="h-12 w-auto brightness-0 invert opacity-100 drop-shadow-md"
          />
          <p className="font-body-md mb-8 max-w-sm leading-relaxed text-[var(--footer-text)]/80">
            L&apos;excellence marocaine dans la fabrication de solutions de confort haut de gamme. Matelas, mousses et salons sur mesure.
          </p>
          <div className="flex gap-4">
            {['share', 'language'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="w-12 h-12 rounded-full border border-[var(--footer-text)]/20 flex items-center justify-center hover:bg-[var(--footer-text)]/10 hover:border-[var(--footer-text)]/40 transition-all duration-300"
              >
                <MaterialIcon name={icon} />
              </a>
            ))}
          </div>
        </div>

        <FooterLinkColumn title="Collections" links={COLLECTION_LINKS} />
        <FooterLinkColumn title="L'Entreprise" links={COMPANY_LINKS} />

        <div className="md:col-span-4">
          <h4 className="font-technical-sm tracking-widest uppercase mb-6 font-semibold">Contact</h4>
          <ul className="flex flex-col gap-6 font-body-md text-[var(--footer-text)]/90">
            <li className="flex gap-4 items-start">
              <MaterialIcon name="location_on" className="mt-0.5 text-secondary" />
              <span className="leading-relaxed">
                {CONTACT.address[0]}
                <br />
                {CONTACT.address[1]}
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <MaterialIcon name="call" className="mt-0.5 text-secondary" />
              <span className="leading-relaxed">
                {CONTACT.phone.landline.display}
                <br />
                {CONTACT.phone.mobile.display}
              </span>
            </li>
            <li className="flex gap-4 items-center">
              <MaterialIcon name="mail" className="text-secondary" />
              <a href={`mailto:${CONTACT.email}`} className={`${LINK_CLASSES} text-[var(--footer-text)]/70`}>
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-20 pt-8 border-t border-[var(--footer-text)]/10 px-8 md:px-12 lg:px-20 max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 font-technical-sm tracking-widest uppercase text-[var(--footer-text)]/80">
        <p className="text-sm opacity-80">© 2026 AQUAFLEX. Tous droits réservés.</p>
        <div className="flex gap-8 text-sm text-[var(--footer-text)]/70">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className={LINK_CLASSES}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
