import {
  Wallet,
  HeartPulse,
  Check,
  Umbrella,
  Users,
  BarChart,
  User,
  FileText,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreeOfLife } from "@/components/decorative/TreeOfLife";
import { MEMBERSHIP_BENEFITS, ELIGIBILITY_CRITERIA } from "@/lib/constants";

const benefitIconMap: Record<string, React.ElementType> = {
  Wallet,
  HeartPulse,
  Check,
  Umbrella,
  Users,
  BarChart,
};

const eligibilityIcons = [User, Users, Users, FileText, FileText];

export function BenefitsEligibility() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Benefits */}
          <div>
            <SectionHeading
              title="Benefits of Membership"
              centered={false}
              className="mb-8"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {MEMBERSHIP_BENEFITS.map((benefit, index) => {
                const Icon = benefitIconMap[benefit.icon] || Check;
                return (
                  <div
                    key={index}
                    className="rounded-xl border border-border-light bg-white p-4 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="mb-1 font-heading text-sm font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-text-muted">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Eligibility */}
          <div className="relative">
            <SectionHeading
              title="Eligibility Criteria"
              centered={false}
              className="mb-8"
            />
            <div className="space-y-4">
              {ELIGIBILITY_CRITERIA.map((criteria, index) => {
                const Icon = eligibilityIcons[index] || User;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm text-text-muted">{criteria}</p>
                  </div>
                );
              })}
            </div>

            {/* Tree of Life decoration */}
            <div className="absolute -right-4 bottom-0 h-48 w-32 opacity-30">
              <TreeOfLife className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
