"use client";

import { useState, useEffect } from "react";
import { translations, Lang } from "@/lib/translations";

interface CountdownTimerProps {
  lang: Lang;
  targetDate: Date;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(targetDate: Date): TimeLeft {
  const diff = targetDate.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

export default function CountdownTimer({ lang, targetDate }: CountdownTimerProps) {
  const t = translations[lang].hero.countdown;
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDate));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  if (!mounted) return null;

  const units = [
    { value: timeLeft.days, label: t.days },
    { value: timeLeft.hours, label: t.hours },
    { value: timeLeft.minutes, label: t.minutes },
    { value: timeLeft.seconds, label: t.seconds },
  ];

  return (
    <div className="flex items-center gap-3 sm:gap-4">
      {units.map((unit, i) => (
        <div key={unit.label} className="flex items-center gap-3 sm:gap-4">
          <div className="countdown-box px-3 py-2 sm:px-4 sm:py-3 text-center min-w-[60px] sm:min-w-[72px]">
            <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums leading-none">
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs text-blue-200 mt-1 font-medium uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
          {i < units.length - 1 && (
            <span className="text-white/60 text-2xl font-light -mt-4 animate-pulse-slow">:</span>
          )}
        </div>
      ))}
    </div>
  );
}
