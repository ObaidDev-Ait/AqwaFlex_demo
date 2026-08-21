type FormFieldVariant = "surface" | "on-primary";

const LABEL_CLASSES: Record<FormFieldVariant, string> = {
  surface: "font-technical-sm text-technical-sm uppercase text-on-tertiary-container ml-1",
  "on-primary": "font-technical-sm text-technical-sm uppercase text-on-primary-container",
};

const CONTROL_CLASSES: Record<FormFieldVariant, string> = {
  surface:
    "w-full bg-surface-bright border-0 border-b border-outline-variant focus:border-primary focus:ring-0 px-4 py-3 text-body-md transition-all",
  "on-primary":
    "w-full bg-transparent border-b-2 border-on-primary-container/30 focus:border-white py-4 outline-none transition-colors text-white placeholder-on-primary-container/50 font-body-md",
};

interface FormFieldProps {
  label: string;
  /** Which control to render. */
  as?: "input" | "textarea" | "select";
  variant?: FormFieldVariant;
  type?: string;
  placeholder?: string;
  rows?: number;
  options?: string[];
  /** Classes for the wrapping block, e.g. column spans. */
  className?: string;
  /** Extra classes appended to the control, e.g. a fixed height. */
  controlClassName?: string;
}

export default function FormField({
  label,
  as = "input",
  variant = "surface",
  type = "text",
  placeholder,
  rows,
  options,
  className = "",
  controlClassName = "",
}: FormFieldProps) {
  const controlClasses = `${CONTROL_CLASSES[variant]} ${controlClassName}`.trim();

  return (
    <div className={`space-y-2 ${className}`.trim()}>
      <label className={LABEL_CLASSES[variant]}>{label}</label>
      {as === "textarea" && (
        <textarea className={controlClasses} placeholder={placeholder} rows={rows} />
      )}
      {as === "select" && (
        <select className={`${controlClasses} appearance-none`}>
          {options?.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      )}
      {as === "input" && (
        <input className={controlClasses} placeholder={placeholder} type={type} />
      )}
    </div>
  );
}
