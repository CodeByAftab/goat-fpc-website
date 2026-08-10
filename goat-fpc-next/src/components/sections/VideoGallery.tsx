import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VIDEOS } from "@/lib/constants";

export function VideoGallery() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <SectionHeading title="Videos" centered={false} className="mb-0" />
          <Link
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-white px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
          >
            View All Videos
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((video, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-110">
                    <Play className="h-6 w-6 translate-x-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 rounded bg-black/70 px-2 py-1 text-xs text-white">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-heading text-sm font-semibold text-primary">
                  {video.title}
                </h3>
                <p className="text-xs text-text-muted">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
