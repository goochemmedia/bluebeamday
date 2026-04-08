"use client";

import { useRef } from "react";
import { translations, Lang } from "@/lib/translations";
import { motion, useInView } from "framer-motion";

interface LocationSectionProps {
  lang: Lang;
}

export default function LocationSection({ lang }: LocationSectionProps) {
  const t = translations[lang].location;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="locatie" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative shape */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-70" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/3 opacity-70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-purple-600 bg-purple-50 px-4 py-1.5 rounded-full mb-4 border border-purple-100">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Address card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">{t.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{t.address}</p>
                  <a
                    href="https://maps.google.com/?q=Van+der+Valk+Hotel+Amersfoort-A1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-purple-600 transition-colors group"
                  >
                    {t.directions}
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-2 gap-4">
              {t.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-3 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-200"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <span className="text-sm font-medium text-gray-700">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Organizer badge */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
              <div className="bg-white rounded-xl overflow-hidden w-24 h-10 flex items-center justify-center p-1 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bpa-logo.png"
                  alt="BPA Bouwplaatsautomatisering"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <span className="text-gray-400 text-base font-light">×</span>
              <div className="bg-white rounded-xl overflow-hidden w-24 h-10 flex items-center justify-center p-1 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bluebeam-logo.jpg"
                  alt="Bluebeam"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 h-[400px] lg:h-[500px]"
          >
            <iframe
              title="Van der Valk Hotel Amersfoort"
              src="https://maps.google.com/maps?q=Van+der+Valk+Hotel+Amersfoort-A1,+Woudweg+2,+3816+KX+Amersfoort&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
