"use client";

import Link from "next/link";
import { ArrowRight, ChevronRight, Users, User, MapPin } from "lucide-react";
import { STATS } from "@/lib/constants";

const GoatIcon = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <img 
    src="/images/icons/goat-silhouette.png" 
    alt="Goat" 
    className={className}
    style={style || { filter: "brightness(0) invert(1)" }}
  />
);

const iconMap = [Users, User, GoatIcon, MapPin];

export function HomeHero() {
  return (
    <section className="relative min-h-[650px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero/hero-banner.png')" }}
      />

      {/* Gradient Overlay - Left side for text */}
      <div className="absolute inset-0 bg-gradient-to-r from-cream/80 from-45% via-cream/40 to-transparent" />

      <div className="container-custom relative z-10">
        <div className="flex min-h-[650px] items-center">
          {/* Left Content */}
          <div className="w-full max-w-xl py-16 md:py-24">
            {/* Section Label */}
            <div className="mb-5 flex items-center gap-3">
              <span className="text-xs font-semibold tracking-widest text-terracotta uppercase">
                Goat Agri Farmer Producer Company
              </span>
              <div className="h-px w-8 bg-terracotta/40" />
              <div className="h-1 w-1 rotate-45 bg-terracotta" />
              <div className="h-px w-4 bg-terracotta/40" />
            </div>

            {/* Main Heading */}
            <h1 className="font-heading text-4xl font-bold leading-[1.1] text-text-dark md:text-5xl lg:text-6xl">
              Empowering Farmers,
              <br />
              Enriching <span className="text-primary">Lives</span>
            </h1>

            {/* Decorative Divider */}
            <div className="my-5 flex items-center gap-2">
              <div className="h-px w-12 bg-terracotta" />
              <div className="h-1 w-1 rotate-45 bg-terracotta" />
              <div className="h-px w-6 bg-terracotta" />
              <div className="h-1 w-1 rotate-45 bg-terracotta" />
              <div className="h-px w-3 bg-terracotta/40" />
            </div>

            {/* Description */}
            <p className="mb-7 max-w-md text-sm leading-relaxed text-text-body">
              Building a sustainable future through integrated goat farming
              and farmer empowerment.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link href="/membership" className="btn-primary group">
                Join Us Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="btn-outline group">
                Know More
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 pt-10 md:grid-cols-4">
              {STATS.map((stat, index) => {
                const Icon = iconMap[index];
                return (
                  <div key={index} className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white shrink-0">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-base font-bold text-text-dark leading-tight">
                        {stat.value}
                      </p>
                      <p className="text-[10px] text-text-muted leading-tight truncate">{stat.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Tagline Badge */}
      <div className="absolute bottom-10 right-10 z-10 hidden lg:block">
        <div className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur-md px-5 py-3 shadow-xl border border-white/20">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shrink-0">
            <GoatIcon className="h-5 w-5" style={{ filter: "brightness(0) invert(1)" }} />
          </div>
          <p className="text-sm font-medium text-white leading-snug drop-shadow-md">
            Together we grow,
            <br />
            together we <span className="text-ochre-light font-semibold">prosper.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
