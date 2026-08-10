import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  MapPin,
  Phone,
  Mail,
  Clock,
};

export function ContactCards() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_INFO.map((info, index) => {
            const Icon = iconMap[info.icon] || MapPin;
            return (
              <div
                key={index}
                className="flex flex-col items-center rounded-xl bg-white p-6 text-center shadow-md transition-all hover:shadow-lg"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 font-heading text-lg font-semibold text-primary">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-text-muted">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
