"use client";

import { useState } from "react";
import { Send, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactFormMap() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="section-padding bg-cream">
      <div className="container-custom">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div>
            <SectionHeading
              title="Send Us a Message"
              subtitle="Fill out the form below and we will get back to you as soon as possible."
              centered={false}
              className="mb-8"
            />
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter subject"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-text-dark">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter your message"
                />
              </div>

              {/* reCAPTCHA placeholder */}
              <div className="rounded-lg border border-border-light bg-white p-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="recaptcha"
                    className="h-4 w-4 rounded border-border-light text-primary focus:ring-primary"
                  />
                  <label htmlFor="recaptcha" className="text-sm text-text-muted">
                    I&apos;m not a robot
                  </label>
                  <div className="ml-auto">
                    <div className="h-8 w-8 rounded border border-border-light bg-cream" />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div>
            <SectionHeading
              title="Find Us"
              centered={false}
              className="mb-8"
            />
            <div className="overflow-hidden rounded-xl bg-white shadow-md">
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex h-full items-center justify-center">
                  <div className="text-center">
                    <MapPin className="mx-auto mb-2 h-12 w-12 text-primary/40" />
                    <p className="text-sm text-text-muted">
                      Google Maps embed placeholder
                    </p>
                    <p className="mt-2 text-xs text-text-light">
                      Raipur, Chhattisgarh, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
