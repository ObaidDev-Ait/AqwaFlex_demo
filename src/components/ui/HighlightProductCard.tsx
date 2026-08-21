import Image from "next/image";
import Link from "next/link";

interface HighlightProductCardProps {
  name: string;
  description: string;
  href: string;
  imageSrc: string;
  badge: string;
  cta?: string;
}

export default function HighlightProductCard({
  name,
  description,
  href,
  imageSrc,
  badge,
  cta = "Découvrir",
}: HighlightProductCardProps) {
  return (
    <div className="group">
      <div className="aspect-[4/5] bg-surface-container relative rounded-[24px] overflow-hidden mb-8 premium-shadow">
        <Image
          src={imageSrc}
          alt={name}
          fill
          loading="lazy"
          quality={85}
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-6 left-6 glass-panel px-4 py-2 rounded-full font-technical-sm text-primary uppercase">
          {badge}
        </div>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-primary mb-2">{name}</h3>
      <p className="text-on-surface-variant font-body-md mb-6">{description}</p>
      <Link
        href={href}
        className="block text-center w-full py-4 rounded-full border border-primary text-primary font-technical-sm tracking-widest hover:bg-primary hover:text-on-primary transition-all uppercase"
      >
        {cta}
      </Link>
    </div>
  );
}
