interface SectionHeadingProps {
  /** Small uppercase label displayed above the title. */
  eyebrow?: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  className = "",
  titleClassName = "font-headline-xl text-headline-xl text-primary",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <span className="font-technical-sm text-technical-sm tracking-widest uppercase text-on-tertiary-container mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className={titleClassName}>{title}</h2>
    </div>
  );
}
