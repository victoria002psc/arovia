import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  width?: "content" | "wide";
}

export function Container({ children, className, width = "wide" }: ContainerProps) {
  return <div className={cn("mx-auto w-full px-5 lg:px-10", width === "content" ? "max-w-content" : "max-w-wide", className)}>{children}</div>;
}
