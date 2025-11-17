"use client";
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PreviewSection from "@/components/PreviewSection";
import CountdownSection from "@/components/CountdownSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import JoinWaitlistForm from "@/components/JoinWaitlistForm";

export default function WaitlistPage() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Header />
      <Hero />
      <PreviewSection />
      <CountdownSection />
      <BenefitsSection />
      <FeaturesSection />
      <JoinWaitlistForm />
    </div>
  );
}