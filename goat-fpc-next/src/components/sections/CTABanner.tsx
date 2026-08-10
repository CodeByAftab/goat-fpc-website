import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { WarliArt } from "@/components/decorative/WarliArt";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-16">
      {/* Warli Art Right */}
      <div className="absolute right-0 top-0 h-full w-16 opacity-20 md:w-24">
        <WarliArt variant="right" className="h-full w-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex items-center gap-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10">
              <Phone className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-white md:text-3xl">
                Need Help or Have Questions?
              </h2>
              <p className="text-white/70">Our team is ready to support you.</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-medium text-primary transition-colors hover:bg-white/90"
          >
            Contact Us
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
