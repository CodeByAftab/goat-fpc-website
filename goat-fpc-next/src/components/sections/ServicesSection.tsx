import { Tractor, Dna, Stethoscope, GraduationCap, Recycle, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Farm: Tractor,
  Dna,
  Stethoscope,
  GraduationCap,
  Recycle,
  Shield,
};

export function ServicesSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive support for sustainable goat farming."
        />
        
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon] || Tractor;
            return (
              <div key={index} className="card-clean p-5">
                <div className="icon-circle icon-circle-sm mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-base font-bold text-text-dark">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
