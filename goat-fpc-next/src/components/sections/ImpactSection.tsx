import { Users, Leaf, Package } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { IMPACT_STATS } from "@/lib/constants";

const GoatSvg = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.5 4C6.5 4 7 2.5 8 2C9 1.5 9.5 2 9.5 2L10 3.5C10 3.5 11 3 12 3.5C13 4 12.5 5 12.5 5L14 6C14 6 15 5.5 16 6C17 6.5 16.5 8 16.5 8L17.5 9C18.5 9 19 10 18.5 11L17 12C17 12 17.5 13 17 14L15 14.5C15 14.5 15 16 14 17L14 20L15.5 22L14 22L12.5 20L11 22L9.5 22L11 20L11 17C11 17 10 17.5 9 17L8 14.5L6 14C5.5 13 6 12 6 12L4.5 11C4 10 4.5 9 5.5 9L6 8C6 8 5.5 6.5 6.5 5.5L6.5 4Z" />
  </svg>
);

const iconMap: Record<string, React.ElementType> = {
  Users,
  Goat: GoatSvg,
  Leaf,
  Package,
};

export function ImpactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Impact at a Glance"
          subtitle="Making a difference in the lives of farmers."
        />
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {IMPACT_STATS.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Users;
            return (
              <div key={index} className="card-clean flex flex-col items-center p-5 text-center">
                <div className="icon-circle icon-circle-sm mb-3">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-text-dark">
                  {stat.value}
                </h3>
                <p className="mt-0.5 text-xs text-text-muted">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
