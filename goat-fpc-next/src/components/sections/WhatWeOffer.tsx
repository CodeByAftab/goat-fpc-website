import { Check, Sprout, Dna, Stethoscope, GraduationCap, Shield } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DETAILED_SERVICES } from "@/lib/constants";

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  farming: Sprout,
  breeding: Dna,
  vaccination: Stethoscope,
  training: GraduationCap,
  "ajah-fi": Shield,
};

export function WhatWeOffer() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="What We Offer"
          subtitle="Comprehensive support for every aspect of goat farming."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {DETAILED_SERVICES.map((service) => {
            const Icon = SERVICE_ICONS[service.id] ?? Sprout;
            return (
              <div
                key={service.id}
                className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={`/images/services/${service.id}.jpg`}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute -bottom-5 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg ring-4 ring-white">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="p-6 pt-8">
                  <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-accent-orange">
                    {service.description}
                  </p>
                  <h3 className="mb-3 font-heading text-lg font-bold text-primary">
                    {service.title}
                  </h3>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/15">
                          <Check className="h-2.5 w-2.5 text-primary" />
                        </div>
                        <span className="text-sm text-text-dark">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
