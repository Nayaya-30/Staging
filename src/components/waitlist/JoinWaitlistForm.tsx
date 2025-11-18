"use client";

import React, { useState, useEffect } from "react";
import { FaRocket as FaRocketAlt } from "react-icons/fa6";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import Card from "@/components/waitlist/ui/Card";
import Input from "@/components/waitlist/ui/Input";
import Button from "@/components/waitlist/ui/Button";
import { PRIMARY_COLOR } from "@/lib/constants";

const schema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function JoinWaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [modalTitle, setModalTitle] = useState("You're In!");
  const [modalMessage, setModalMessage] = useState("Welcome to the StockKeeper waitlist! We'll email you the moment we launch.");

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Lock scroll when modal is open
  useEffect(() => {
    if (showThankYou) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [showThankYou]);

  const onSubmit = async (data: FormData) => {
    if (isSubmitting) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/waitlist/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.email.trim(),
          fullName: data.fullName.trim(),
          companyName: data.companyName?.trim() || null,
        }),
      });

      const result = await response.json();
      console.log("Waitlist API Response:", { ok: response.ok, status: response.status, result });

      if (!response.ok) {
        const errorMsg = result.message || "Failed to join waitlist";

        if (errorMsg.toLowerCase().includes("already registered") || 
            errorMsg.toLowerCase().includes("already exists") || 
            errorMsg.includes("duplicate")) {
          
          // Duplicate email — treat as success
          setModalTitle("Welcome Back!");
          setModalMessage("You're already on the waitlist! We'll notify you as soon as we launch.");
          toast.success("You're already signed up!");
          setShowThankYou(true);
          reset();
          return;
        }

        throw new Error(errorMsg);
      }

      // Fresh success
      setModalTitle("You're In!");
      setModalMessage("Welcome to the StockKeeper waitlist! We'll email you the moment we launch.");
      toast.success("Successfully joined the waitlist!");
      setShowThankYou(true);
      reset();

    } catch (error: any) {
      console.error("Waitlist error:", error);
      toast.error(error.message || "Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Your existing form — unchanged */}
      <section className="py-16 md:py-24 bg-gray-50" id="join">
        {/* ... all your form code exactly as before ... */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">
            Secure Your Spot Today
          </h2>
          <p className="text-md text-gray-600 mb-10 md:mb-12">
            Join 2,847 businesses already on the waitlist!
          </p>

          <Card className="bg-white p-5 md:p-10 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              {/* ... all inputs and button unchanged ... */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left mb-1">Full Name</label>
                  <Input type="text" placeholder="John Doe" {...register("fullName")} disabled={isSubmitting} className="placeholder:text-gray-400" />
                  {errors.fullName && <p className="text-red-500 text-sm mt-1 text-left">{errors.fullName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 text-left mb-1">Email Address</label>
                  <Input type="email" placeholder="john@company.com" {...register("email")} disabled={isSubmitting} className="placeholder:text-gray-400" />
                  {errors.email && <p className="text-red-500 text-sm mt-1 text-left">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 text-left mb-1">Company Name (Optional)</label>
                <Input type="text" placeholder="Your Company" {...register("companyName")} disabled={isSubmitting} className="placeholder:text-gray-400" />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-base md:text-lg py-3.5 mt-2 flex items-center justify-center gap-2 disabled:opacity-60"
                style={{ backgroundColor: PRIMARY_COLOR }}
              >
                <FaRocketAlt size={22} />
                {isSubmitting ? "Joining..." : "Join the Waitlist Now"}
              </Button>

              <p className="text-sm text-gray-500 mt-4">
                We&apos;ll notify you as soon as we launch. No spam, ever.
              </p>

              <div className="pt-6 border-t border-gray-100 mt-6">
                <div className="grid grid-cols-2 gap-y-4 max-w-sm mx-auto md:flex md:justify-around">
                  {["50% Off", "Priority Access", "Exclusive Features", "Free Trial"].map((benefit) => (
                    <div key={benefit} className="flex flex-col items-center">
                      <span className="h-6 w-6 rounded-full bg-emerald-400 text-white flex items-center justify-center mb-1">
                        <Check className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* Perfect Modal with Dynamic Text */}
      {showThankYou && (
        <>
          <div className="fixed inset-0 bg-black/60 z-50" onClick={() => setShowThankYou(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full text-center animate-in fade-in zoom-in duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-12 h-12 text-emerald-600" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">{modalTitle}</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">{modalMessage}</p>
              <Button
                onClick={() => setShowThankYou(false)}
                style={{ backgroundColor: PRIMARY_COLOR }}
                className="px-8 py-3 text-lg font-semibold"
              >
                Got it, thanks!
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
}