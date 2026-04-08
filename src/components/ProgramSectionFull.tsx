"use client";

import { useRef } from "react";
import { translations, Lang } from "@/lib/translations";
import { motion, useInView } from "framer-motion";

interface ProgramSectionProps {
  lang: Lang;
}

const TYPE_CONFIG = {
  keynote: { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200", dot: "bg-purple-600", icon: "⚡" },
  talk: { bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-200", dot: "bg-blue-600", icon: "💬" },
  case: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-600", icon: "🏗️" },
  break: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-200", dot: "bg-amber-500", icon: "☕" },
  discussion: { bg: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-200", dot: "bg-indigo-600", icon: "🗣️" },
};

export default function ProgramSection({ lang }: ProgramSectionProps) {
  const t = translations[lang].program;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programma" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full mb-4 border border-blue-100">
            {t.sectionLabel}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            {t.title}
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200 px-4 py-2 rounded-full">
            <span>⚠️</span>
            {t.provisional}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-500 to-purple-600 opacity-20 rounded-full" />

          <div className="space-y-2">
            {t.items.map((item, index) => {
              const typeKey = (item.type || "talk") as keyof typeof TYPE_CONFIG;
              const config = TYPE_CONFIG[typeKey] || TYPE_CONFIG.talk;
              const isBreak = item.type === "break";

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={`relative pl-14 pb-6 ${index < t.items.length - 1 ? "border-b border-gray-50" : ""}`}
                >
                  {/* Dot */}
                  <div
                    className={`absolute left-3 top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md ${config.dot} z-10`}
                  />

                  <div
                    className={`rounded-2xl p-4 sm:p-5 transition-all duration-200 ${
                      isBreak
                        ? "bg-gray-50 border border-gray-100"
                        : "bg-white border border-gray-100 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50 card-hover"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      {/* Time */}
                      <div className="flex items-center gap-3 shrink-0">
                        <span className="text-sm font-bold text-gray-400 tabular-nums w-12">
                          {item.time}
                        </span>
                        <span className="text-lg">{config.icon}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-start gap-2 mb-1">
                          <h3
                            className={`font-bold text-base sm:text-lg leading-snug ${
                              isBreak ? "text-gray-600" : "text-gray-900"
                            }`}
                          >
                            {item.title}
                          </h3>
                          {"duration" in item && item.duration && (
                            <span className={`inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-full border ${config.bg} ${config.text} ${config.border}`}>
                              {item.duration}
                            </span>
                          )}
                        </div>
                        <p className={`text-sm leading-relaxed ${isBreak ? "text-gray-400" : "text-gray-500"}`}>
                          {item.description}
                        </p>
                        {"speakers" in item && item.speakers && (
                          <div className="mt-2 flex items-center gap-1.5">
                            <svg className="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span className="text-xs text-blue-500 font-medium">{item.speakers}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
