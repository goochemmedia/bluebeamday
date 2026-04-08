"use client";

import { useState } from "react";
import { Lang } from "@/lib/translations";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProgramSection from "@/components/ProgramSection";
import LocationSection from "@/components/LocationSection";
import RegistrationSection from "@/components/RegistrationSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [lang, setLang] = useState<Lang>("nl");

  const toggleLang = () =>
    setLang((prev) => (prev === "nl" ? "en" : prev === "en" ? "de" : "nl"));

  return (
    <>
      <Header lang={lang} onToggleLang={toggleLang} />
      <main>
        <HeroSection lang={lang} />
        <ProgramSection lang={lang} />
        <LocationSection lang={lang} />
        <RegistrationSection lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
