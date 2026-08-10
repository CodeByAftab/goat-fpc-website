"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, User, ChevronRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow duration-300",
        isScrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-11 w-11 overflow-hidden rounded-full border border-primary/20 bg-cream flex items-center justify-center">
              <svg viewBox="0 0 60 60" className="h-8 w-8">
                <circle cx="30" cy="30" r="28" fill="#1B5E20" opacity="0.1" />
                <text x="30" y="35" textAnchor="middle" fontFamily="serif" fontSize="18" fontWeight="bold" fill="#1B5E20">G</text>
              </svg>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold leading-tight text-text-dark">
                {SITE_CONFIG.shortName}
              </h1>
              <p className="text-[10px] text-text-muted leading-tight">
                Farmer Producer Company Limited
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-2 text-[13px] font-medium transition-colors",
                  pathname === link.href
                    ? "text-primary"
                    : "text-text-body hover:text-primary"
                )}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary" />
                )}
              </Link>
            ))}
          </nav>

          {/* Member Login */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/admin/login"
              className="btn-primary text-xs py-2 px-4"
            >
              <User className="h-3.5 w-3.5" />
              Member Login
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-dark hover:text-primary"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-50 w-full max-w-sm transform bg-white shadow-xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-border-light p-4">
            <span className="text-sm font-bold text-text-dark">{SITE_CONFIG.shortName}</span>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-text-dark hover:text-primary"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "flex items-center justify-between px-4 py-3 text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-primary bg-primary/5"
                        : "text-text-dark hover:bg-cream"
                    )}
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-border-light p-4">
            <Link
              href="/admin/login"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 bg-primary py-3 text-sm font-medium text-white"
            >
              <User className="h-4 w-4" />
              Member Login
            </Link>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}
