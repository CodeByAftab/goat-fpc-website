import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/footer/footer-bg.png')" }}
      />

      {/* Main Footer Content */}
      <div className="container-custom relative z-10 pt-12 pb-28">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Social */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="h-12 w-12 overflow-hidden rounded-full border border-primary/20 bg-white flex items-center justify-center">
                <svg viewBox="0 0 60 60" className="h-9 w-9">
                  <circle cx="30" cy="30" r="28" fill="#1B5E20" opacity="0.1" />
                  <text x="30" y="35" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="bold" fill="#1B5E20">G</text>
                </svg>
              </div>
              <div>
                <h2 className="text-sm font-bold text-text-dark">{SITE_CONFIG.shortName}</h2>
                <p className="text-[10px] text-text-muted leading-tight">Farmer Producer Company Limited</p>
              </div>
            </Link>
            
            <p className="text-xs text-text-body leading-relaxed max-w-[250px]">
              Empowering farmers through integrated goat farming, innovation, and sustainable practices for a better tomorrow.
            </p>
            
            <div className="flex gap-2">
              {[
                { icon: "f", label: "Facebook" },
                { icon: "ig", label: "Instagram" },
                { icon: "in", label: "LinkedIn" },
                { icon: "yt", label: "YouTube" }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-hover"
                  aria-label={social.label}
                >
                  <span className="text-[10px] font-bold">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-wider text-text-dark uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-xs text-text-body transition-colors hover:text-primary"
                  >
                    <span className="text-terracotta text-[10px]">❋</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-wider text-text-dark uppercase">
              Our Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-xs text-text-body transition-colors hover:text-primary"
                  >
                    <span className="text-terracotta text-[10px]">❋</span>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="mb-3 text-xs font-bold tracking-wider text-text-dark uppercase">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shrink-0">
                  <MapPin className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs text-text-body leading-snug">
                  Raipur, Chhattisgarh, India<br />PIN – 492001
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shrink-0">
                  <Phone className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs text-text-body">+91 12345 67890</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shrink-0">
                  <Mail className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs text-text-body">info@goatagri.in</span>
              </li>
              <li className="flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs text-text-body">Mon – Sat: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
