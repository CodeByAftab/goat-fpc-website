import {
  ClipboardList,
  FileCheck,
  Users,
  IndianRupee,
  Handshake,
  PartyPopper,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MEMBERSHIP_PROCESS } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  ClipboardList,
  FileCheck,
  Users,
  IndianRupee,
  Handshake,
  PartyPopper,
};

export function MembershipProcess() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="MEMBERSHIP PROCESS"
          subtitle="Simple steps to join our farming community."
        />
        <div className="relative">
          {/* Timeline */}
          <div className="absolute left-0 top-12 hidden h-0.5 w-full bg-dashed bg-primary/30 lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-6">
            {MEMBERSHIP_PROCESS.map((step, index) => {
              const Icon = iconMap[step.icon] || ClipboardList;
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Step Number */}
                  <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg">
                    <span className="font-heading font-bold">{step.step}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-1 font-heading text-sm font-semibold text-primary">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
