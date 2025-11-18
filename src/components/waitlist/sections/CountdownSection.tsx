"use client";

import React from "react";
import Countdown from "@/components/waitlist/Countdown";
import { PRIMARY_COLOR } from "@/lib/constants";

interface CountdownSectionProps {
  launchDate: Date;
}

export default function CountdownSection({ launchDate }: CountdownSectionProps) {
  return (
    <section
      className="py-10 md:py-16 text-white"
      style={{ backgroundColor: PRIMARY_COLOR }}
    >
      <div className="text-center container mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Launching in</h2>
        <p className="text-sm opacity-80 mb-6">
          Dont miss the exclusive early adopter benefits!
        </p>
        <Countdown targetDate={launchDate} />
      </div>
    </section>
  );
}