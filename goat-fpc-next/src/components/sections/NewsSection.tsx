import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS } from "@/lib/constants";

export function NewsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <SectionHeading title="Latest News & Updates" centered={false} className="mb-0" />
          <Link href="/gallery" className="btn-outline group text-xs py-2 px-4">
            View All News
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid gap-4 md:grid-cols-3">
          {NEWS.map((article) => (
            <article key={article.id} className="card-clean overflow-hidden">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="p-4">
                <h3 className="mb-1.5 text-sm font-bold text-text-dark">
                  {article.title}
                </h3>
                
                <div className="mb-2 flex items-center gap-1.5 text-[11px] text-text-muted">
                  <Calendar className="h-3 w-3" />
                  {article.date}
                </div>
                
                <p className="mb-3 text-xs text-text-muted leading-relaxed">
                  {article.description}
                </p>
                
                <Link href="#" className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-primary-hover">
                  Read More
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
