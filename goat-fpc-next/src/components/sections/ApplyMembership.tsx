"use client";

import { useState } from "react";
import { Send, Info } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TreeOfLife } from "@/components/decorative/TreeOfLife";
import { MEMBERSHIP_FEES } from "@/lib/constants";

export function ApplyMembership() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    village: "",
    block: "",
    district: "Raipur",
    goats: "",
    occupation: "",
    existingRearer: "",
    documents: null as File | null,
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="apply" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Apply for Membership"
          subtitle="Fill out the form below to apply for membership. Our team will get in touch with you."
        />
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your full name"
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
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Email ID
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Village *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.village}
                    onChange={(e) =>
                      setFormData({ ...formData, village: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your village"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Block *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.block}
                    onChange={(e) =>
                      setFormData({ ...formData, block: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your block"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    District *
                  </label>
                  <select
                    required
                    value={formData.district}
                    onChange={(e) =>
                      setFormData({ ...formData, district: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="Raipur">Raipur</option>
                    <option value="Dhamtari">Dhamtari</option>
                    <option value="Baloda Bazar">Baloda Bazar</option>
                    <option value="Mahasamund">Mahasamund</option>
                    <option value="Gariaband">Gariaband</option>
                    <option value="Durg">Durg</option>
                    <option value="Bhilai">Bhilai</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    No. of Goats You Own *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.goats}
                    onChange={(e) =>
                      setFormData({ ...formData, goats: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter number of goats"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Primary Occupation *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.occupation}
                    onChange={(e) =>
                      setFormData({ ...formData, occupation: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark placeholder-text-light focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    placeholder="Enter your occupation"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-text-dark">
                    Are you an existing goat rearer? *
                  </label>
                  <select
                    required
                    value={formData.existingRearer}
                    onChange={(e) =>
                      setFormData({ ...formData, existingRearer: e.target.value })
                    }
                    className="w-full rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-1 block text-sm font-medium text-text-dark">
                  Upload Documents *
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        documents: e.target.files?.[0] || null,
                      })
                    }
                    className="hidden"
                    id="documents"
                  />
                  <label
                    htmlFor="documents"
                    className="cursor-pointer rounded-lg border border-border-light bg-white px-4 py-2.5 text-sm text-text-dark hover:bg-cream"
                  >
                    Choose Files
                  </label>
                  <span className="text-xs text-text-muted">
                    (Aadhaar Card, Address Proof, Goat Ownership Proof)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  checked={formData.agreeTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreeTerms: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 rounded border-border-light text-primary focus:ring-primary"
                  id="agreeTerms"
                />
                <label htmlFor="agreeTerms" className="text-sm text-text-muted">
                  I agree to the terms and conditions and privacy policy.
                </label>
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
              >
                Submit Application
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Fee Card */}
          <div className="relative">
            <div className="sticky top-24 rounded-xl border border-border-light bg-white p-6 shadow-lg">
              <h3 className="mb-4 font-heading text-xl font-bold text-primary">
                Membership Fee
              </h3>
              <div className="mb-6 h-0.5 w-12 bg-accent-orange" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Individual Member</span>
                  <span className="font-heading text-xl font-bold text-primary">
                    ₹ {MEMBERSHIP_FEES.individual.amount} / Year
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-muted">Group Member</span>
                  <span className="font-heading text-xl font-bold text-primary">
                    ₹ {MEMBERSHIP_FEES.group.amount} / Year
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-2 rounded-lg bg-cream p-3">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <p className="text-xs text-text-muted">
                  Fees may vary as per company guidelines.
                </p>
              </div>

              {/* Tree of Life decoration */}
              <div className="absolute -bottom-4 -right-4 h-32 w-24 opacity-20">
                <TreeOfLife className="h-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
