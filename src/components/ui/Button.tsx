import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type ButtonVariant = "primary" | "care" | "medicine" | "equipment" | "digital" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#0F5F73] text-white hover:bg-[#0C4C5C] shadow-sm",
  care: "bg-arovia-care text-white hover:bg-emerald-600 shadow-sm",
  medicine: "bg-arovia-medicine text-white hover:bg-rose-600 shadow-sm",
  equipment: "bg-arovia-equipment text-white hover:bg-blue-600 shadow-sm",
  digital: "bg-arovia-digital text-white hover:bg-violet-600 shadow-sm",
  outline: "border border-slate-300 bg-white text-arovia-ink hover:border-arovia-cyan hover:text-cyan-700",
  ghost: "bg-transparent text-arovia-ink hover:bg-slate-100",
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
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors",
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
