"use client";

import { cn } from "@/lib/utils";

interface GondPatternProps {
  className?: string;
  color?: string;
  density?: "sparse" | "normal" | "dense";
}

export function GondPattern({ className, color = "#C75B12", density = "normal" }: GondPatternProps) {
  const spacing = density === "sparse" ? 40 : density === "dense" ? 16 : 24;
  const dotSize = density === "sparse" ? 2 : density === "dense" ? 1.5 : 1.5;

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden opacity-20", className)}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={`gond-${density}`} x="0" y="0" width={spacing} height={spacing} patternUnits="userSpaceOnUse">
            {/* Central dot */}
            <circle cx={spacing / 2} cy={spacing / 2} r={dotSize} fill={color} />
            {/* Corner dots for triangular feel */}
            <circle cx="0" cy="0" r={dotSize * 0.6} fill={color} opacity="0.5" />
            <circle cx={spacing} cy="0" r={dotSize * 0.6} fill={color} opacity="0.5" />
            <circle cx="0" cy={spacing} r={dotSize * 0.6} fill={color} opacity="0.5" />
            <circle cx={spacing} cy={spacing} r={dotSize * 0.6} fill={color} opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#gond-${density})`} />
      </svg>
    </div>
  );
}
