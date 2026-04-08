"use client";

import { translations, Lang } from "@/lib/translations";

interface FooterProps {
  lang: Lang;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang].footer;

  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-white rounded-xl overflow-hidden w-36 h-14 flex items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bpa-logo.png"
                  alt="BPA Bouwplaatsautomatisering"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-gray-500 text-lg font-light">×</span>
              <div className="bg-white rounded-xl overflow-hidden w-36 h-14 flex items-center justify-center p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bluebeam-logo.jpg"
                  alt="Bluebeam"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.organizedBy} BPA Bouwplaatsautomatisering, uw specialist in digitale oplossingen voor de bouwsector.
            </p>
          </div>

          {/* Event info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              BPA Bluebeam Day 2026
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Woensdag 1 juli 2026
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Van der Valk Hotel Amersfoort
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                Woudweg 2, 3816 KX Amersfoort
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">
              {t.contact}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:info@bouwplaatsautomatisering.nl"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors group"
                >
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  info@bouwplaatsautomatisering.nl
                </a>
              </li>
              <li>
                <a
                  href="https://www.bouwplaatsautomatisering.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
                  </svg>
                  www.bouwplaatsautomatisering.nl
                </a>
              </li>
            </ul>

            {/* Platinum Partner badge */}
            <div className="mt-6 inline-flex items-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 px-4 py-2.5 rounded-xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://bouwplaatsautomatisering.nl/wp-content/uploads/2026/01/BB-Platinum-Partner-Logo-White-Horizontal-3x.png"
                alt="Bluebeam Platinum Partner"
                width={180}
                className="h-auto"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
            <span>© {new Date().getFullYear()} BPA Bouwplaatsautomatisering. {t.rights}</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
              <span>BPA Bluebeam Day · 1 juli 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
