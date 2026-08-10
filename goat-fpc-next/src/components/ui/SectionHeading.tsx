import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-8",
        centered && "text-center",
        className
      )}
    >
      <h2 className="font-heading text-2xl font-bold text-text-dark md:text-3xl">
        {title}
      </h2>
      
      {/* Decorative divider */}
      <div className={cn("mt-2.5 flex items-center gap-1.5", centered && "justify-center")}>
        <div className="h-px w-6 bg-terracotta/40" />
        <div className="h-1 w-1 rotate-45 bg-terracotta" />
        <div className="h-px w-12 bg-terracotta" />
        <div className="h-1 w-1 rotate-45 bg-terracotta" />
        <div className="h-px w-6 bg-terracotta/40" />
      </div>
      
      {subtitle && (
        <p className="mt-2.5 text-sm text-text-muted">{subtitle}</p>
      )}
    </div>
  );
}
