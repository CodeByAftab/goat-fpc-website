import { cn } from "@/lib/utils";

interface WarliArtProps {
  className?: string;
  variant?: "left" | "right" | "full";
}

export function WarliArt({ className, variant = "left" }: WarliArtProps) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg
        viewBox="0 0 100 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Tree trunk */}
        <path
          d="M50 400 L50 200"
          stroke="#C75B12"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Branches */}
        <path
          d="M50 350 L30 330 M50 350 L70 330"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 300 L25 275 M50 300 L75 275"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M50 250 L30 225 M50 250 L70 225"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Leaves */}
        <circle cx="30" cy="330" r="8" fill="#C75B12" opacity="0.3" />
        <circle cx="70" cy="330" r="8" fill="#C75B12" opacity="0.3" />
        <circle cx="25" cy="275" r="10" fill="#C75B12" opacity="0.3" />
        <circle cx="75" cy="275" r="10" fill="#C75B12" opacity="0.3" />
        <circle cx="30" cy="225" r="12" fill="#C75B12" opacity="0.3" />
        <circle cx="70" cy="225" r="12" fill="#C75B12" opacity="0.3" />
        {/* Farmer figure 1 */}
        <circle cx="20" cy="180" r="6" fill="#C75B12" />
        <path
          d="M20 186 L20 210 M20 195 L10 205 M20 195 L30 205 M20 210 L12 230 M20 210 L28 230"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Farmer figure 2 */}
        <circle cx="80" cy="170" r="6" fill="#C75B12" />
        <path
          d="M80 176 L80 200 M80 185 L70 195 M80 185 L90 195 M80 200 L72 220 M80 200 L88 220"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Goat figure */}
        <ellipse cx="50" cy="150" rx="15" ry="8" fill="#C75B12" opacity="0.6" />
        <circle cx="65" cy="145" r="4" fill="#C75B12" />
        <path
          d="M35 150 L30 165 M45 150 L40 165 M55 150 L50 165 M65 150 L60 165"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        {/* Hut */}
        <path
          d="M50 100 L30 120 L70 120 Z"
          fill="#C75B12"
          opacity="0.4"
        />
        <rect x="38" y="120" width="24" height="20" fill="#C75B12" opacity="0.4" />
        {/* Women carrying pots */}
        <circle cx="15" cy="100" r="5" fill="#C75B12" />
        <path
          d="M15 105 L15 125 M15 112 L8 120 M15 112 L22 120 M15 125 L10 140 M15 125 L20 140"
          stroke="#C75B12"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="15" cy="95" r="4" fill="#C75B12" opacity="0.5" />
      </svg>
    </div>
  );
}
