import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  className?: string;
}

export function StatsCard({ icon: Icon, value, label, className }: StatsCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <div className="text-center">
        <h3 className="font-heading text-2xl font-bold text-primary md:text-3xl">
          {value}
        </h3>
        <p className="mt-1 text-sm text-text-muted">{label}</p>
      </div>
    </div>
  );
}
