import Image from "next/image";
import { cn } from "@/lib/utils";

const ratios = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-video",
  "4/5": "aspect-[4/5]",
} as const;

export function ImageFrame({
  src,
  alt,
  ratio = "3/2",
  priority = false,
  className,
  sizes = "(min-width: 1024px) 40vw, 100vw",
}: {
  src?: string;
  alt: string;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={cn("group relative overflow-hidden rounded-md bg-arovia-soft", ratios[ratio], className)}>
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]" />
      ) : (
        <div className="flex h-full items-center justify-center p-6 text-center text-sm text-arovia-muted">{alt}</div>
      )}
    </div>
  );
}
