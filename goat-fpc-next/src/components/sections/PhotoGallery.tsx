import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";

export function PhotoGallery() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <SectionHeading title="Photo Gallery" centered={false} className="mb-0" />
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            View All Photos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {GALLERY_IMAGES.map((photo) => (
            <div
              key={photo.src}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
