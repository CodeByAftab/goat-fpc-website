"use client";

import { cn } from "@/lib/utils";

interface WarliBorderProps {
  className?: string;
  variant?: "top" | "bottom" | "left" | "right";
}

export function WarliBorder({ className, variant = "top" }: WarliBorderProps) {
  const isHorizontal = variant === "top" || variant === "bottom";

  return (
    <div
      className={cn(
        "pointer-events-none select-none overflow-hidden",
        isHorizontal ? "h-12 w-full" : "h-full w-12",
        className
      )}
    >
      <svg
        viewBox={isHorizontal ? "0 0 1200 48" : "0 0 48 1200"}
        className={cn("h-full w-full", variant === "bottom" && "rotate-180", variant === "right" && "rotate-180")}
        preserveAspectRatio="none"
      >
        {/* Linear zigzag pattern */}
        {isHorizontal ? (
          <>
            {/* Zigzag line */}
            <path
              d="M0 24 L30 12 L60 24 L90 12 L120 24 L150 12 L180 24 L210 12 L240 24 L270 12 L300 24 L330 12 L360 24 L390 12 L420 24 L450 12 L480 24 L510 12 L540 24 L570 12 L600 24 L630 12 L660 24 L690 12 L720 24 L750 12 L780 24 L810 12 L840 24 L870 12 L900 24 L930 12 L960 24 L990 12 L1020 24 L1050 12 L1080 24 L1110 12 L1140 24 L1170 12 L1200 24"
              fill="none"
              stroke="#C75B12"
              strokeWidth="2"
              opacity="0.6"
            />
            {/* Triangle motifs */}
            {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map((x, i) => (
              <g key={i} opacity="0.5">
                <polygon points={`${x + 60},8 ${x + 52},24 ${x + 68},24`} fill="#C75B12" />
                <polygon points={`${x + 60},40 ${x + 52},24 ${x + 68},24`} fill="#1B5E20" />
                {/* Small dots */}
                <circle cx={x + 30} cy="24" r="2" fill="#D4A843" />
                <circle cx={x + 90} cy="24" r="2" fill="#D4A843" />
              </g>
            ))}
            {/* Repetitive dot pattern */}
            {Array.from({ length: 50 }, (_, i) => (
              <circle key={`dot-${i}`} cx={i * 24 + 12} cy="36" r="1.5" fill="#C75B12" opacity="0.3" />
            ))}
          </>
        ) : (
          <>
            {/* Vertical zigzag */}
            <path
              d="M24 0 L12 30 L24 60 L12 90 L24 120 L12 150 L24 180 L12 210 L24 240 L12 270 L24 300 L12 330 L24 360 L12 390 L24 420 L12 450 L24 480 L12 510 L24 540 L12 570 L24 600 L12 630 L24 660 L12 690 L24 720 L12 750 L24 780 L12 810 L24 840 L12 870 L24 900 L12 930 L24 960 L12 990 L24 1020 L12 1050 L24 1080 L12 1110 L24 1140 L12 1170 L24 1200"
              fill="none"
              stroke="#C75B12"
              strokeWidth="2"
              opacity="0.6"
            />
            {[0, 120, 240, 360, 480, 600, 720, 840, 960, 1080].map((y, i) => (
              <g key={i} opacity="0.5">
                <polygon points={`8,${y + 60} 24,${y + 52} 24,${y + 68}`} fill="#C75B12" />
                <polygon points={`40,${y + 60} 24,${y + 52} 24,${y + 68}`} fill="#1B5E20" />
                <circle cx="24" cy={y + 30} r="2" fill="#D4A843" />
                <circle cx="24" cy={y + 90} r="2" fill="#D4A843" />
              </g>
            ))}
          </>
        )}
      </svg>
    </div>
  );
}
