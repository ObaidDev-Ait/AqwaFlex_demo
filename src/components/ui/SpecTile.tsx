import MaterialIcon from "./MaterialIcon";

interface SpecTileProps {
  /** Material Symbols icon name. */
  icon: string;
  label: string;
  value: string;
}

export default function SpecTile({ icon, label, value }: SpecTileProps) {
  return (
    <div className="flex items-center gap-3">
      <MaterialIcon name={icon} className="text-primary text-3xl" />
      <div>
        <p className="text-[10px] uppercase tracking-wider text-outline">{label}</p>
        <p className="font-technical-sm text-technical-sm">{value}</p>
      </div>
    </div>
  );
}
