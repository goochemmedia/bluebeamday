"use client";

import { useRef } from "react";
import { translations, Lang } from "@/lib/translations";
import { motion, useInView } from "framer-motion";

interface RegistrationSectionProps {
  lang: Lang;
}

export default function RegistrationSection({ lang }: RegistrationSectionProps) {
  const t = translations[lang].registration;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="aanmelden"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eff6ff 0%, #f5f3ff 50%, #faf5ff 100%)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-white px-4 py-1.5 rounded-full mb-4 border border-blue-100 shadow-sm">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-xl shadow-blue-900/10 border border-white/80 p-6 sm:p-10"
        >
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v2m0-2h2m-2 0H10m2-9a3 3 0 100-6 3 3 0 000 6zm0 0v3" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9a5 5 0 00-10 0" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Inschrijvingen gesloten</h3>
            <p className="text-gray-500 leading-relaxed max-w-sm mx-auto">
              De inschrijvingen voor dit evenement zijn gesloten. We hebben genoeg aanmeldingen ontvangen.
            </p>
            <p className="text-gray-400 text-sm mt-4">
              Vragen? Neem contact op via{" "}
              <a href="mailto:info@bpa.nl" className="text-blue-600 hover:underline">
                info@bpa.nl
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
