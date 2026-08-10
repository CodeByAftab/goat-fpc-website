import { Eye, Target, Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VISION, MISSION } from "@/lib/constants";

export function VisionMission() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Vision Card */}
          <div className="rounded-xl border-l-4 border-accent-orange bg-white p-8 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary">
                Our Vision
              </h3>
            </div>
            <p className="text-text-muted">{VISION}</p>
          </div>

          {/* Mission Card */}
          <div className="rounded-xl border-l-4 border-accent-orange bg-white p-8 shadow-lg">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-primary">
                Our Mission
              </h3>
            </div>
            <ul className="space-y-3">
              {MISSION.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
