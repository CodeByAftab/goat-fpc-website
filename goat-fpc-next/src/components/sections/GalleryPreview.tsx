import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY_IMAGES } from "@/lib/constants";

export function GalleryPreview() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <SectionHeading title="Gallery" centered={false} className="mb-0" />
          <Link href="/gallery" className="btn-outline group text-xs py-2 px-4">
            View Full Gallery
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {GALLERY_IMAGES.slice(0, 5).map((image, index) => (
            <Link
              key={index}
              href="/gallery"
              className="card-clean group relative aspect-square overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
