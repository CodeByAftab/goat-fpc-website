import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ARTICLES, EVENTS } from "@/lib/constants";

export function ArticlesEvents() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Latest Articles */}
          <div>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <SectionHeading
                title="Latest Articles"
                centered={false}
                className="mb-0"
              />
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover"
              >
                View All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {ARTICLES.map((article, index) => (
                <article
                  key={index}
                  className="flex gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="mb-1 flex items-center gap-2 text-xs text-text-muted">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="mb-1 font-heading text-sm font-semibold text-primary">
                      {article.title}
                    </h3>
                    <p className="text-xs text-text-muted">{article.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Upcoming Events */}
          <div>
            <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <SectionHeading
                title="Upcoming Events"
                centered={false}
                className="mb-0"
              />
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary-hover"
              >
                View All Events
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="space-y-4">
              {EVENTS.map((event, index) => (
                <article
                  key={index}
                  className="flex gap-4 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md"
                >
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-lg bg-primary text-white">
                    <span className="text-xl font-bold">{event.date.day}</span>
                    <span className="text-xs">{event.date.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-1 font-heading text-sm font-semibold text-primary">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
