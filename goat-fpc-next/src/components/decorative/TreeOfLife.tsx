import { cn } from "@/lib/utils";

interface TreeOfLifeProps {
  className?: string;
}

export function TreeOfLife({ className }: TreeOfLifeProps) {
  return (
    <div className={cn("pointer-events-none", className)}>
      <svg
        viewBox="0 0 200 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Tree trunk */}
        <path
          d="M100 300 L100 150"
          stroke="#D4A843"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Main branches */}
        <path
          d="M100 250 L60 220 M100 250 L140 220"
          stroke="#D4A843"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M100 200 L50 170 M100 200 L150 170"
          stroke="#D4A843"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M100 150 L70 120 M100 150 L130 120"
          stroke="#D4A843"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Leaves and fruits */}
        <circle cx="60" cy="220" r="15" fill="#D4A843" opacity="0.3" />
        <circle cx="140" cy="220" r="15" fill="#D4A843" opacity="0.3" />
        <circle cx="50" cy="170" r="18" fill="#D4A843" opacity="0.3" />
        <circle cx="150" cy="170" r="18" fill="#D4A843" opacity="0.3" />
        <circle cx="70" cy="120" r="20" fill="#D4A843" opacity="0.3" />
        <circle cx="130" cy="120" r="20" fill="#D4A843" opacity="0.3" />
        <circle cx="100" cy="80" r="25" fill="#D4A843" opacity="0.3" />
        {/* Decorative birds */}
        <circle cx="80" cy="100" r="4" fill="#D4A843" />
        <circle cx="120" cy="95" r="4" fill="#D4A843" />
        {/* Ground decoration */}
        <path
          d="M70 280 Q100 270 130 280"
          stroke="#D4A843"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M80 290 Q100 282 120 290"
          stroke="#D4A843"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </div>
  );
}
