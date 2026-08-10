import { Building2, Users, MapPin, Calendar, Hash } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ORG_PROFILE } from "@/lib/constants";

export function OrgProfile() {
  const infoItems = [
    { icon: Building2, label: "Organization Name", value: ORG_PROFILE.name },
    { icon: Hash, label: "Registration No.", value: ORG_PROFILE.registrationNo },
    { icon: Calendar, label: "Date of Incorporation", value: ORG_PROFILE.dateOfIncorporation },
    { icon: MapPin, label: "Registered Office", value: ORG_PROFILE.registeredOffice },
    { icon: Users, label: "Shareholders", value: ORG_PROFILE.shareholders },
    { icon: Users, label: "Associated Farmers", value: ORG_PROFILE.associatedFarmers },
    { icon: Users, label: "Goats in Network", value: ORG_PROFILE.goatsInNetwork },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Organization Profile"
          subtitle="Learn about our mission and impact."
        />
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left Card */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <p className="mb-6 text-text-muted">
              Goat Agri Farmer Producer Company Limited (Goat Agri FPC) is a registered
              Farmer Producer Company operating in Raipur and nearby blocks of Chhattisgarh.
              We are dedicated to empowering farmers through integrated goat farming,
              breed improvement, veterinary support, and value addition services.
            </p>
            <div className="space-y-4">
              {infoItems.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-text-dark">{item.label}</p>
                    <p className="text-sm text-text-muted">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/images/about/team.jpg"
                alt="Goat Agri FPC team"
                className="aspect-[4/3] w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Quote Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-primary/90 p-6 text-white">
              <p className="font-heading text-lg italic">
                &ldquo;Together we grow, together we prosper.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
