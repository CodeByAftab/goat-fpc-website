"use client";

import { cn } from "@/lib/utils";

interface WarliFigureProps {
  type?: "farmer" | "goat" | "tree" | "sun" | "house" | "dancer";
  className?: string;
  size?: number;
  color?: string;
}

export function WarliFigure({ type = "farmer", className, size = 80, color = "#C75B12" }: WarliFigureProps) {
  const renderFigure = () => {
    switch (type) {
      case "farmer":
        return (
          <g>
            {/* Head */}
            <circle cx="40" cy="12" r="8" fill="none" stroke={color} strokeWidth="2" />
            {/* Body - triangle */}
            <polygon points="40,20 28,45 52,45" fill="none" stroke={color} strokeWidth="2" />
            {/* Legs */}
            <line x1="32" y1="45" x2="24" y2="65" stroke={color} strokeWidth="2" />
            <line x1="48" y1="45" x2="56" y2="65" stroke={color} strokeWidth="2" />
            {/* Arms */}
            <line x1="30" y1="30" x2="16" y2="40" stroke={color} strokeWidth="2" />
            <line x1="50" y1="30" x2="64" y2="40" stroke={color} strokeWidth="2" />
            {/* Tool in hand */}
            <line x1="64" y1="40" x2="72" y2="28" stroke={color} strokeWidth="2" />
          </g>
        );
      case "goat":
        return (
          <g>
            {/* Body */}
            <ellipse cx="40" cy="40" rx="20" ry="12" fill="none" stroke={color} strokeWidth="2" />
            {/* Head */}
            <circle cx="62" cy="32" r="6" fill="none" stroke={color} strokeWidth="2" />
            {/* Horns */}
            <path d="M60,26 Q56,18 62,16" fill="none" stroke={color} strokeWidth="2" />
            <path d="M64,26 Q68,18 62,16" fill="none" stroke={color} strokeWidth="2" />
            {/* Legs */}
            <line x1="28" y1="52" x2="28" y2="68" stroke={color} strokeWidth="2" />
            <line x1="36" y1="52" x2="36" y2="68" stroke={color} strokeWidth="2" />
            <line x1="44" y1="52" x2="44" y2="68" stroke={color} strokeWidth="2" />
            <line x1="52" y1="52" x2="52" y2="68" stroke={color} strokeWidth="2" />
            {/* Tail */}
            <path d="M20,36 Q12,32 16,28" fill="none" stroke={color} strokeWidth="2" />
          </g>
        );
      case "tree":
        return (
          <g>
            {/* Trunk */}
            <line x1="40" y1="70" x2="40" y2="30" stroke={color} strokeWidth="3" />
            {/* Branches - triangular foliage */}
            <polygon points="40,10 20,35 60,35" fill="none" stroke={color} strokeWidth="2" />
            <polygon points="40,20 25,40 55,40" fill="none" stroke={color} strokeWidth="2" />
            {/* Dots on tree */}
            <circle cx="35" cy="25" r="2" fill={color} />
            <circle cx="45" cy="25" r="2" fill={color} />
            <circle cx="40" cy="30" r="2" fill={color} />
          </g>
        );
      case "sun":
        return (
          <g>
            <circle cx="40" cy="40" r="12" fill="none" stroke={color} strokeWidth="2" />
            {/* Rays */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const x1 = 40 + 16 * Math.cos(rad);
              const y1 = 40 + 16 * Math.sin(rad);
              const x2 = 40 + 24 * Math.cos(rad);
              const y2 = 40 + 24 * Math.sin(rad);
              return (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="2" />
              );
            })}
            {/* Inner dots */}
            <circle cx="40" cy="40" r="3" fill={color} />
          </g>
        );
      case "house":
        return (
          <g>
            {/* Roof */}
            <polygon points="40,10 15,35 65,35" fill="none" stroke={color} strokeWidth="2" />
            {/* Walls */}
            <rect x="22" y="35" width="36" height="30" fill="none" stroke={color} strokeWidth="2" />
            {/* Door */}
            <rect x="35" y="48" width="10" height="17" fill="none" stroke={color} strokeWidth="2" />
            {/* Window */}
            <rect x="26" y="42" width="8" height="8" fill="none" stroke={color} strokeWidth="2" />
            {/* Decorative dots */}
            <circle cx="40" cy="22" r="2" fill={color} />
            <circle cx="35" cy="28" r="1.5" fill={color} />
            <circle cx="45" cy="28" r="1.5" fill={color} />
          </g>
        );
      case "dancer":
        return (
          <g>
            {/* Head */}
            <circle cx="40" cy="12" r="8" fill="none" stroke={color} strokeWidth="2" />
            {/* Body */}
            <line x1="40" y1="20" x2="40" y2="45" stroke={color} strokeWidth="2" />
            {/* Arms raised in dance */}
            <path d="M40,28 Q28,18 20,24" fill="none" stroke={color} strokeWidth="2" />
            <path d="M40,28 Q52,18 60,24" fill="none" stroke={color} strokeWidth="2" />
            {/* Skirt/dress - triangle */}
            <polygon points="40,45 24,68 56,68" fill="none" stroke={color} strokeWidth="2" />
            {/* Decorative dots on dress */}
            <circle cx="36" cy="55" r="1.5" fill={color} />
            <circle cx="44" cy="55" r="1.5" fill={color} />
            <circle cx="40" cy="62" r="1.5" fill={color} />
          </g>
        );
      default:
        return null;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      className={cn("pointer-events-none", className)}
    >
      {renderFigure()}
    </svg>
  );
}
