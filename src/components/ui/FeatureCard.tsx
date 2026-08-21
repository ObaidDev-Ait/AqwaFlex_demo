import MaterialIcon from "./MaterialIcon";

interface FeatureCardProps {
  /** Material Symbols icon name. */
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-panel p-10 rounded-[24px] hover-lift group border border-primary/10">
      <div className="w-16 h-16 bg-primary-container text-on-primary-container rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        <MaterialIcon name={icon} className="text-3xl" />
      </div>
      <h3 className="font-headline-lg text-headline-lg text-primary mb-4">{title}</h3>
      <p className="text-on-surface-variant font-body-md">{description}</p>
    </div>
  );
}
