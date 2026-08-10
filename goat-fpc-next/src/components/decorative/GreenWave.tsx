import { cn } from "@/lib/utils";

interface GreenWaveProps {
  className?: string;
}

export function GreenWave({ className }: GreenWaveProps) {
  return (
    <div className={cn("absolute bottom-0 left-0 right-0", className)}>
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="url(#greenGradient)"
        />
        <defs>
          <linearGradient
            id="greenGradient"
            x1="720"
            y1="0"
            x2="720"
            y2="120"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#1B5E20" stopOpacity="0.8" />
            <stop offset="1" stopColor="#1B5E20" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
