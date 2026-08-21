import Image from "next/image";
import Link from "next/link";

interface CategoryTileProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  sizes: string;
  /** Classes for the tile wrapper, controlling the asymmetric grid layout. */
  className?: string;
  /** Typography of the title, larger for the lead tile. */
  titleClassName?: string;
  captionClassName?: string;
}

export default function CategoryTile({
  href,
  imageSrc,
  imageAlt,
  title,
  subtitle,
  sizes,
  className = "",
  titleClassName = "font-headline-lg text-headline-lg mb-1",
  captionClassName = "absolute bottom-6 left-6 text-surface-bright z-20",
}: CategoryTileProps) {
  return (
    <Link
      href={href}
      className={`relative group overflow-hidden rounded-[24px] cursor-pointer block ${className}`.trim()}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        loading="lazy"
        quality={85}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes={sizes}
      />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10"></div>
      <div className={captionClassName}>
        <h2 className={titleClassName}>{title}</h2>
        <p className="font-technical-sm tracking-widest uppercase opacity-80">{subtitle}</p>
      </div>
    </Link>
  );
}
