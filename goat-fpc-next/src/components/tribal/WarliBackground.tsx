"use client";

import { cn } from "@/lib/utils";

interface WarliBackgroundProps {
  className?: string;
  variant?: "hero" | "section" | "contact";
}

export function WarliBackground({ className, variant = "hero" }: WarliBackgroundProps) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
        {/* Farmer with stick */}
        <g opacity="0.06" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <circle cx="80" cy="180" r="12" />
          <polygon points="80,192 60,240 100,240" />
          <line x1="65" y1="240" x2="50" y2="280" />
          <line x1="95" y1="240" x2="110" y2="280" />
          <line x1="60" y1="210" x2="35" y2="220" />
          <line x1="100" y1="210" x2="130" y2="195" />
          <line x1="130" y1="195" x2="145" y2="160" />
        </g>

        {/* Goat */}
        <g opacity="0.06" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <ellipse cx="180" cy="240" rx="35" ry="20" />
          <circle cx="220" cy="225" r="10" />
          <path d="M215,215 Q208,200 218,195" />
          <path d="M225,215 Q232,200 218,195" />
          <line x1="155" y1="260" x2="155" y2="290" />
          <line x1="170" y1="260" x2="170" y2="290" />
          <line x1="190" y1="260" x2="190" y2="290" />
          <line x1="205" y1="260" x2="205" y2="290" />
          <path d="M145,235 Q135,228 138,220" />
        </g>

        {/* Tree */}
        <g opacity="0.05" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <line x1="320" y1="320" x2="320" y2="200" />
          <polygon points="320,140 270,220 370,220" />
          <polygon points="320,170 285,240 355,240" />
          <circle cx="310" cy="195" r="3" fill="#A0522D" />
          <circle cx="330" cy="195" r="3" fill="#A0522D" />
          <circle cx="320" cy="210" r="3" fill="#A0522D" />
        </g>

        {/* House */}
        <g opacity="0.05" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <polygon points="450,200 410,240 490,240" />
          <rect x="420" y="240" width="60" height="50" />
          <rect x="442" y="265" width="16" height="25" />
          <rect x="425" y="250" width="12" height="12" />
        </g>

        {/* Dancer */}
        <g opacity="0.06" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <circle cx="580" cy="180" r="12" />
          <line x1="580" y1="192" x2="580" y2="240" />
          <path d="M580,210 Q560,195 545,205" />
          <path d="M580,210 Q600,195 615,205" />
          <polygon points="580,240 555,280 605,280" />
          <circle cx="572" cy="258" r="2" fill="#A0522D" />
          <circle cx="588" cy="258" r="2" fill="#A0522D" />
          <circle cx="580" cy="270" r="2" fill="#A0522D" />
        </g>

        {/* Sun */}
        <g opacity="0.08" fill="none" stroke="#D4A843" strokeWidth="1.5">
          <circle cx="1100" cy="100" r="40" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = 1100 + 50 * Math.cos(rad);
            const y1 = 100 + 50 * Math.sin(rad);
            const x2 = 1100 + 70 * Math.cos(rad);
            const y2 = 100 + 70 * Math.sin(rad);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
          <circle cx="1100" cy="100" r="8" fill="#D4A843" />
        </g>

        {/* Additional scattered elements */}
        <g opacity="0.04" fill="none" stroke="#A0522D" strokeWidth="1">
          {/* Small triangles pattern */}
          <polygon points="700,150 690,170 710,170" />
          <polygon points="730,150 720,170 740,170" />
          <polygon points="760,150 750,170 770,170" />
          
          {/* Dots */}
          <circle cx="800" cy="200" r="2" fill="#A0522D" />
          <circle cx="820" cy="200" r="2" fill="#A0522D" />
          <circle cx="840" cy="200" r="2" fill="#A0522D" />
          <circle cx="860" cy="200" r="2" fill="#A0522D" />
        </g>

        {/* Right side elements */}
        <g opacity="0.05" fill="none" stroke="#A0522D" strokeWidth="1.5">
          {/* Goat 2 */}
          <ellipse cx="1050" cy="350" rx="30" ry="18" />
          <circle cx="1085" cy="338" r="9" />
          <path d="M1080,329 Q1074,318 1082,314" />
          <path d="M1090,329 Q1096,318 1082,314" />
          <line x1="1028" y1="368" x2="1028" y2="395" />
          <line x1="1042" y1="368" x2="1042" y2="395" />
          <line x1="1058" y1="368" x2="1058" y2="395" />
          <line x1="1072" y1="368" x2="1072" y2="395" />
        </g>

        {/* Farmer 2 */}
        <g opacity="0.05" fill="none" stroke="#A0522D" strokeWidth="1.5">
          <circle cx="1120" cy="280" r="10" />
          <polygon points="1120,290 1105,325 1135,325" />
          <line x1="1110" y1="325" x2="1100" y2="355" />
          <line x1="1130" y1="325" x2="1140" y2="355" />
          <line x1="1108" y1="302" x2="1090" y2="310" />
          <line x1="1132" y1="302" x2="1150" y2="310" />
        </g>

        {/* Zigzag border pattern */}
        <g opacity="0.04" fill="none" stroke="#A0522D" strokeWidth="1">
          <path d="M0 750 L50 730 L100 750 L150 730 L200 750 L250 730 L300 750 L350 730 L400 750 L450 730 L500 750 L550 730 L600 750 L650 730 L700 750 L750 730 L800 750 L850 730 L900 750 L950 730 L1000 750 L1050 730 L1100 750 L1150 730 L1200 750" />
        </g>
      </svg>
    </div>
  );
}
