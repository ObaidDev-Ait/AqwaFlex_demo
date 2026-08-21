import MaterialIcon from "./MaterialIcon";

interface ContactInfoItemProps {
  /** Material Symbols icon name. */
  icon: string;
  iconFilled?: boolean;
  /** Classes for the circular icon badge. */
  iconClassName: string;
  label: string;
  value: React.ReactNode;
  valueClassName?: string;
  className?: string;
}

export default function ContactInfoItem({
  icon,
  iconFilled = false,
  iconClassName,
  label,
  value,
  valueClassName = "font-body-lg text-body-lg text-primary font-bold",
  className = "",
}: ContactInfoItemProps) {
  return (
    <div className={`flex items-start gap-5 group ${className}`.trim()}>
      <div
        className={`w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform ${iconClassName}`}
      >
        <MaterialIcon name={icon} filled={iconFilled} />
      </div>
      <div>
        <p className="font-technical-sm text-technical-sm uppercase text-on-tertiary-container mb-1">
          {label}
        </p>
        <p className={valueClassName}>{value}</p>
      </div>
    </div>
  );
}
