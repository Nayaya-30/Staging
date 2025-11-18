"use client";

import React from "react";
import Image from "next/image";
import { FaRocket as FaRocketAlt } from "react-icons/fa6";
import { MdNotifications } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi2";
import Button from "@/components/waitlist/ui/Button";
import { PRIMARY_COLOR } from "@/lib/constants";

interface HeroProps {
  handleScrollToJoin: () => void;
}

export default function Hero({ handleScrollToJoin }: HeroProps) {
  return (
    <>
      <section className="py-12 md:py-24 text-center">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <div
            onClick={handleScrollToJoin}
            className="bg-[#FCE7EB] font-bold text-xs sm:text-[14px] mx-auto flex items-center justify-center rounded-3xl w-auto max-w-xs sm:max-w-md p-2 mb-4 sm:mb-6 cursor-pointer"
            style={{
              color: PRIMARY_COLOR,
              animation: "pulseScaleShadow 2s infinite",
            }}
          >
            <FaRocketAlt className="mr-2 h-4 w-4" />
            Launching Soon - Reserve Your Spot Now
            <style jsx>{`
              @keyframes pulseScaleShadow {
                0%,
                100% {
                  transform: scale(1);
                  box-shadow: 0 0 0 0 rgba(252, 231, 235, 0.5);
                }
                50% {
                  transform: scale(1.05);
                  box-shadow: 0 0 20px 10px rgba(252, 231, 235, 0.5);
                }
              }
            `}</style>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Smart Inventory Management
            <br />
            <span className="" style={{ color: PRIMARY_COLOR }}>
              Made Simple
            </span>
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join <b>2,847</b> businesses waiting for the revolutionary platform
            that will transform how they handle stock, shipments, and supply
            chain logistics.
          </p>
          <Button
            variant="primary"
            className={`
              text-base sm:text-lg flex items-center mx-auto justify-center gap-2 
              border border-transparent hover:cursor-pointer
              hover:bg-white 
              hover:text-[${PRIMARY_COLOR}] 
              hover:border-[${PRIMARY_COLOR}]
            `}
            onClick={handleScrollToJoin}
          >
            <MdNotifications />
            Join the Waitlist
          </Button>
        </div>
        <div className="text-[#6B7280] mt-3 text-sm">
          Get 50% off when we launch • No credit card required
        </div>
      </section>
      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative rounded-xl overflow-hidden ">
            <Image
              src="/dashboard-preview.png"
              alt="StockKeeper Dashboard Preview"
              width={1200}
              height={675}
              className="w-full h-auto object-cover"
            />
            <div
              className="absolute top-4 right-4 sm:top-7 sm:right-12 text-white text-xs sm:text-sm font-semibold shadow-md flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <div className="bg-white/20 p-2 sm:p-3 rounded-full">
                <FaCalendarCheck size={16} />
              </div>
              <div>
                <p className="font-bold text-lg sm:text-[24px]">Q2 2026</p>
                <p className="font-medium text-[10px] sm:text-[14px]">
                  Launch Date
                </p>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-9 sm:left-16 bg-white text-xs sm:text-sm font-semibold shadow-lg flex items-center p-3 sm:p-4 rounded-lg sm:rounded-xl gap-2">
              <div className="bg-[#FCE7EB] p-2 sm:p-3 rounded-full">
                <HiUserGroup size={16} style={{ color: PRIMARY_COLOR }} />
              </div>
              <div>
                <p className="font-bold text-lg sm:text-[24px] text-[#111827]">
                  2867
                </p>
                <p className="font-medium text-[10px] sm:text-[14px] text-[#4B5563]">
                  On waitlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}