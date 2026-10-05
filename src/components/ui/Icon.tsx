import { icons, type LucideProps } from "lucide-react";

export type IconName = keyof typeof icons;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName;
  label?: string;
}

export function Icon({ name, label, className, ...props }: IconProps) {
  const LucideIcon = icons[name];

  return (
    <LucideIcon
      className={className}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      {...props}
    />
  );
}
