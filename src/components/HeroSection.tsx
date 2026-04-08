"use client";

import { translations, Lang } from "@/lib/translations";
import CountdownTimer from "./CountdownTimer";

const EVENT_DATE = new Date("2026-07-01T12:00:00+02:00");

interface HeroSectionProps {
  lang: Lang;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = translations[lang].hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-indigo-950/50" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24 pt-32">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8 animate-fade-in-up">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse-slow" />
          {t.badge}
        </div>

        {/* Title */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white mb-4 leading-none tracking-tight animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}
        >
          BPA{" "}
          <span className="block sm:inline bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">
            Bluebeam Day
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-xl sm:text-2xl md:text-3xl text-white/85 font-light mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}
        >
          {t.tagline}
        </p>

        {/* Date + Location pills */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards" }}
        >
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-5 py-2.5 rounded-xl">
            <svg className="w-4 h-4 text-blue-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-semibold text-sm sm:text-base">{t.date}</span>
          </div>
          <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white px-5 py-2.5 rounded-xl">
            <svg className="w-4 h-4 text-purple-200 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="font-semibold text-sm sm:text-base">{t.location}</span>
          </div>
        </div>

        {/* Countdown */}
        <div
          className="flex justify-center mb-12 animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}
        >
          <CountdownTimer lang={lang} targetDate={EVENT_DATE} />
        </div>

        {/* CTA Button */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#aanmelden"
            className="inline-flex items-center gap-3 bg-white text-blue-700 font-bold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-2xl shadow-2xl shadow-blue-900/30 hover:shadow-blue-900/50 transition-all duration-300 hover:-translate-y-1 hover:scale-105 group"
          >
            {t.cta}
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="mt-16 animate-fade-in-up"
          style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}
        >
          <a
            href="#programma"
            className="flex flex-col items-center gap-2 text-white/60 hover:text-white/90 transition-colors text-sm"
          >
            <span>{t.scrollDown}</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 80L1440 80L1440 40C1200 0 960 80 720 40C480 0 240 80 0 40L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
