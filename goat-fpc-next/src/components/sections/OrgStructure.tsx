import { Users, Briefcase, Database, Settings, UserCheck, Stethoscope } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ORG_STRUCTURE } from "@/lib/constants";

export function OrgStructure() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Organizational Structure"
          subtitle="Our team is dedicated to serving farmers."
        />
        <div className="relative">
          {/* Board of Directors */}
          <div className="mb-12 flex justify-center">
            <div className="flex items-center gap-3 rounded-xl bg-primary px-6 py-4 text-white shadow-lg">
              <Users className="h-5 w-5" />
              <span className="font-heading font-semibold">{ORG_STRUCTURE.board}</span>
            </div>
          </div>

          {/* Connection Line */}
          <div className="absolute left-1/2 top-16 h-8 w-0.5 -translate-x-1/2 bg-primary/30" />

          {/* Managers Level */}
          <div className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {ORG_STRUCTURE.managers.map((manager, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-2 h-8 w-0.5 bg-primary/30" />
                <div className="flex w-full items-center gap-2 rounded-lg border border-border-light bg-white p-3 shadow-sm">
                  <Briefcase className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-xs font-medium text-text-dark">{manager}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="absolute left-1/2 top-40 h-8 w-0.5 -translate-x-1/2 bg-primary/30" />

          {/* Teams Level */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {ORG_STRUCTURE.teams.map((team, index) => {
              const icons = [UserCheck, Stethoscope, Database, Settings, UserCheck];
              const Icon = icons[index] || Users;
              return (
                <div key={index} className="flex flex-col items-center">
                  <div className="mb-2 h-8 w-0.5 bg-primary/30" />
                  <div className="flex w-full items-center gap-2 rounded-lg border border-border-light bg-white p-3 shadow-sm">
                    <Icon className="h-4 w-4 shrink-0 text-primary" />
                    <span className="text-xs font-medium text-text-dark">{team}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
