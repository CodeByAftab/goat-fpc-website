"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SUCCESS_STORIES } from "@/lib/constants";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? SUCCESS_STORIES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === SUCCESS_STORIES.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <SectionHeading
          title="Success Stories"
          subtitle="Hear from our farmers who have transformed their lives."
        />
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {SUCCESS_STORIES.map((story, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 md:w-1/3"
                >
                  <div className="h-full rounded-xl bg-white p-6 shadow-md">
                    <Quote className="mb-4 h-8 w-8 text-primary/30" />
                    <p className="mb-6 italic text-text-muted">
                      &ldquo;{story.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-heading text-sm font-bold text-primary">
                        {story.name.split(" ").map(n => n.charAt(0)).slice(0, 2).join("")}
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-primary">
                          {story.name}
                        </p>
                        <p className="text-xs text-text-muted">
                          {story.role}, {story.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-cream"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-5 w-5 text-primary" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 translate-x-4 -translate-y-1/2 rounded-full bg-white p-2 shadow-md transition-colors hover:bg-cream"
            aria-label="Next story"
          >
            <ChevronRight className="h-5 w-5 text-primary" />
          </button>

          {/* Dot Indicators */}
          <div className="mt-8 flex justify-center gap-2">
            {SUCCESS_STORIES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-primary/30"
                }`}
                aria-label={`Go to story ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
