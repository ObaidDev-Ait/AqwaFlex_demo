import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import BrandLogo from '@/components/ui/BrandLogo';
import MaterialIcon from '@/components/ui/MaterialIcon';
import { HEADER_LINKS } from '@/lib/navigation';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/80 backdrop-blur-[20px] border-b border-outline/20 shadow-[0_8px_32px_0_rgba(0,30,64,0.08)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]">
      <div className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-6 max-w-[1440px] mx-auto">
        <nav className="flex justify-between items-center w-full">
          {/* Logo */}
          <BrandLogo
            className="flex items-center gap-2 md:gap-4 flex-shrink-0 z-50"
            imageClassName="h-7 sm:h-8 md:h-10 w-auto object-contain transition-all duration-300"
            imageStyle={{ filter: "var(--logo-filter)" }}
            wordmarkClassName="font-headline-lg text-lg sm:text-2xl lg:text-3xl text-primary font-bold tracking-tight whitespace-nowrap"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
            {HEADER_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-technical-sm text-[11px] lg:text-xs tracking-widest uppercase whitespace-nowrap ${
                  link.emphasized
                    ? 'text-primary border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-primary transition-colors'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 z-50">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button aria-label="Rechercher">
              <MaterialIcon name="search" className="text-primary text-2xl sm:text-3xl" />
            </button>
            <Link href="/contact" className="hidden sm:block bg-primary text-on-primary px-6 lg:px-8 py-2 lg:py-3 rounded-full font-technical-sm tracking-widest uppercase hover:scale-105 transition-transform duration-500 whitespace-nowrap text-xs">
              DEVIS
            </Link>
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
