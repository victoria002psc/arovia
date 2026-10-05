import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type ButtonVariant = "primary" | "care" | "medicine" | "equipment" | "digital" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-arovia-navy text-white hover:bg-arovia-charcoal",
  care: "bg-arovia-care-dark text-white hover:bg-arovia-navy",
  medicine: "bg-arovia-pharmacy-dark text-white hover:bg-arovia-navy",
  equipment: "bg-arovia-equipment-dark text-white hover:bg-arovia-navy",
  digital: "bg-arovia-digital-dark text-white hover:bg-arovia-navy",
  outline: "border border-arovia-navy/20 bg-white text-arovia-navy hover:border-arovia-navy",
  ghost: "bg-transparent text-arovia-navy hover:bg-arovia-soft",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-sm",
  md: "min-h-11 px-5 text-base",
  lg: "min-h-12 px-6 text-base",
};

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  disabled,
  loading = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200",
    variants[variant],
    sizes[size],
    isDisabled && "pointer-events-none opacity-60",
    className,
  );

  const content = (
    <>
      {loading && <Icon name="LoaderCircle" className="h-4 w-4 animate-spin" />}
      {children}
    </>
  );

  if (href && /^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes} aria-label={ariaLabel} aria-disabled={isDisabled || undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} disabled={isDisabled} onClick={onClick} aria-label={ariaLabel} aria-busy={loading || undefined}>
      {content}
    </button>
  );
}
