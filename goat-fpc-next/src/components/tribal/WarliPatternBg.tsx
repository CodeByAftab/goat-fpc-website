"use client";

import { cn } from "@/lib/utils";

interface WarliPatternBgProps {
  className?: string;
  variant?: "dots" | "lines" | "triangles" | "mixed";
}

export function WarliPatternBg({ className, variant = "mixed" }: WarliPatternBgProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Dots pattern */}
          <pattern id="warli-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
            <circle cx="16" cy="16" r="1.5" fill="#C75B12" opacity="0.15" />
            <circle cx="0" cy="0" r="1" fill="#1B5E20" opacity="0.1" />
            <circle cx="32" cy="0" r="1" fill="#1B5E20" opacity="0.1" />
            <circle cx="0" cy="32" r="1" fill="#1B5E20" opacity="0.1" />
            <circle cx="32" cy="32" r="1" fill="#1B5E20" opacity="0.1" />
          </pattern>

          {/* Lines pattern */}
          <pattern id="warli-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M0 20 L20 0 L40 20 L20 40 Z" fill="none" stroke="#C75B12" strokeWidth="0.5" opacity="0.1" />
          </pattern>

          {/* Triangles pattern */}
          <pattern id="warli-triangles" x="0" y="0" width="48" height="48" patternUnits="userSpaceOnUse">
            <polygon points="24,4 4,40 44,40" fill="none" stroke="#C75B12" strokeWidth="0.5" opacity="0.12" />
            <polygon points="24,12 12,36 36,36" fill="none" stroke="#1B5E20" strokeWidth="0.5" opacity="0.08" />
          </pattern>

          {/* Mixed pattern */}
          <pattern id="warli-mixed" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
            {/* Central triangle */}
            <polygon points="32,8 8,56 56,56" fill="none" stroke="#C75B12" strokeWidth="0.5" opacity="0.12" />
            {/* Dots at corners */}
            <circle cx="32" cy="8" r="2" fill="#C75B12" opacity="0.15" />
            <circle cx="8" cy="56" r="2" fill="#C75B12" opacity="0.15" />
            <circle cx="56" cy="56" r="2" fill="#C75B12" opacity="0.15" />
            {/* Inner triangle */}
            <polygon points="32,20 18,48 46,48" fill="none" stroke="#1B5E20" strokeWidth="0.5" opacity="0.08" />
            {/* Zigzag lines */}
            <path d="M0 32 L8 24 L16 32 L24 24 L32 32 L40 24 L48 32 L56 24 L64 32" fill="none" stroke="#D4A843" strokeWidth="0.5" opacity="0.08" />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill={`url(#warli-${variant})`} />
      </svg>
    </div>
  );
}
