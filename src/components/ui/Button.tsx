"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { buttonHover, buttonTap } from "@/lib/animation-variants";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "care" | "medicine" | "equipment" | "digital" | "outline" | "ghost";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-arovia-cyan text-white hover:bg-cyan-600 shadow-sm",
  care: "bg-arovia-care text-white hover:bg-emerald-600 shadow-sm",
  medicine: "bg-arovia-medicine text-white hover:bg-rose-600 shadow-sm",
  equipment: "bg-arovia-equipment text-white hover:bg-blue-600 shadow-sm",
  digital: "bg-arovia-digital text-white hover:bg-violet-600 shadow-sm",
  outline: "border border-slate-300 bg-white text-arovia-ink hover:border-arovia-cyan hover:text-cyan-700",
  ghost: "bg-transparent text-arovia-ink hover:bg-slate-100",
};

interface ButtonProps {
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  ariaLabel?: string;
}

export function Button({
  href,
  variant = "primary",
  className,
  children,
  type = "button",
  disabled,
  onClick,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-base font-semibold transition-colors",
    variants[variant],
    disabled && "pointer-events-none opacity-60",
    className,
  );

  if (href) {
    return (
      <motion.div whileHover={buttonHover} whileTap={buttonTap} className="inline-flex">
        <Link href={href} className={classes} aria-label={ariaLabel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={disabled ? undefined : buttonHover}
      whileTap={disabled ? undefined : buttonTap}
    >
      {children}
    </motion.button>
  );
}
