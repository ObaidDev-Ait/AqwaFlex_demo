import Link from "next/link";
import { BRAND_LOGO_SRC, BRAND_NAME } from "@/lib/brand";

interface BrandLogoProps {
  /** Wrapper classes for the link. */
  className?: string;
  /** Classes for the logo image itself. */
  imageClassName?: string;
  /** Inline styles for the logo image (used for the theme-aware filter). */
  imageStyle?: React.CSSProperties;
  /** Rendered next to the logo when set. */
  wordmarkClassName?: string;
}

export default function BrandLogo({
  className = "",
  imageClassName = "",
  imageStyle,
  wordmarkClassName,
}: BrandLogoProps) {
  return (
    <Link href="/" className={className}>
      {/* eslint-disable-next-line @next/next/no-img-element -- inlined data URI, no optimisation possible */}
      <img alt={BRAND_NAME} className={imageClassName} style={imageStyle} src={BRAND_LOGO_SRC} />
      {wordmarkClassName && <span className={wordmarkClassName}>{BRAND_NAME}</span>}
    </Link>
  );
}
