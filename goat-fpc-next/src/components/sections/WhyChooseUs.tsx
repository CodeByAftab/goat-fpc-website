import {
  Heart,
  Award,
  CheckCircle,
  TrendingUp,
  Handshake,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Heart,
  Award,
  CheckCircle,
  TrendingUp,
  Handshake,
};

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose Our Services?"
          subtitle="Trusted by farmers across Chhattisgarh."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = iconMap[item.icon] || Heart;
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
