"use client";

import { useState, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";

interface HeaderProps {
  lang: Lang;
  onToggleLang: () => void;
}

export default function Header({ lang, onToggleLang }: HeaderProps) {
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#programma", label: t.nav.program },
    { href: "#locatie", label: t.nav.location },
    { href: "#aanmelden", label: t.nav.register },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-blue-900/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="bg-white rounded-xl overflow-hidden w-24 h-10 flex items-center justify-center p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bpa-logo.png"
                alt="BPA Bouwplaatsautomatisering"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <span className={`text-base font-light transition-colors ${scrolled ? "text-gray-400" : "text-white/60"}`}>×</span>
            <div className="bg-white rounded-xl overflow-hidden w-24 h-10 flex items-center justify-center p-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/bluebeam-logo.jpg"
                alt="Bluebeam"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            {/* Lang toggle */}
            <button
              onClick={onToggleLang}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                scrolled
                  ? "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 bg-white"
                  : "border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <span className="text-sm">{lang === "nl" ? "🇬🇧" : lang === "en" ? "🇩🇪" : "🇳🇱"}</span>
              {t.langToggle}
            </button>

            {/* CTA button */}
            <a
              href="#aanmelden"
              className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              {t.nav.register}
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                scrolled ? "text-gray-700 hover:bg-gray-100" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-xl">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex gap-2">
              <button
                onClick={() => { onToggleLang(); setMenuOpen(false); }}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
              >
                <span>{lang === "nl" ? "🇬🇧" : lang === "en" ? "🇩🇪" : "🇳🇱"}</span>
                {t.langToggle}
              </button>
              <a
                href="#aanmelden"
                onClick={() => setMenuOpen(false)}
                className="flex-1 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-700 text-white text-sm font-semibold px-4 py-3 rounded-xl"
              >
                {t.nav.register}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
