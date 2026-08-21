/** Navigation entries shared by the header, the mobile drawer and the bottom nav. */
export interface NavLink {
  name: string;
  href: string;
  /** Rendered with the underlined "current section" treatment in the header. */
  emphasized?: boolean;
}

export const CATALOGUE_LINKS: NavLink[] = [
  { name: "Matelas", href: "/products" },
  { name: "Mousses", href: "/products" },
  { name: "Salon Mousse", href: "/products" },
  { name: "Oreillers", href: "/products" },
  { name: "Fournitures", href: "/products" },
];

export const COMPANY_LINKS: NavLink[] = [
  { name: "Notre histoire", href: "/about" },
  { name: "Notre savoir-faire", href: "/about" },
  { name: "Certifications", href: "/about" },
];

/** Desktop header links: the catalogue universes followed by the company pages. */
export const HEADER_LINKS: NavLink[] = [
  { name: "Matelas", href: "/products", emphasized: true },
  { name: "Mousses", href: "/products" },
  { name: "Salon Mousse", href: "/products" },
  { name: "À propos", href: "/about" },
  { name: "Boutique", href: "/products" },
];

/** Catalogue filter labels, shared by the desktop sidebar and the mobile chips. */
export const PRODUCT_FILTERS = ["Tout Voir", "Matelas", "Mousses", "Salon Mousse"] as const;
