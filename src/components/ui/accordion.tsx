// components/ui/Accordion.tsx
'use client';

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

const AccordionItem = ({ title, children, defaultOpen = false, className }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn("mb-4 overflow-hidden", className)}>
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between px-6 py-5 text-lg font-semibold text-gray-900",
          "bg-gray-50 rounded-2xl transition-all text-left",
          "hover:bg-gray-100 hover:text-[#800020]",
          isOpen && "bg-white shadow-md rounded-b-none"
        )}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <div className={cn(
          "flex h-8 w-8 items-center justify-center rounded-full bg-[#F9D0D9] transition-transform duration-200",
          isOpen && "rotate-180"
        )}>
          {isOpen ? (
            <Minus className="h-5 w-5 text-[#800020]" />
          ) : (
            <Plus className="h-5 w-5 text-[#800020]" />
          )}
        </div>
      </button>

      {/* Content */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border border-t-0 border-gray-200 rounded-b-2xl shadow-md px-6 pt-4 pb-7 text-gray-600 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};

type AccordionProps = {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
};

export default function Accordion({ children, type = 'single' }: AccordionProps) {
  // For multiple open support (optional future use)
  // For now we just render children as-is (each item controls itself)
  return <div className="w-full">{children}</div>;
}

// Export the item as the main usable component
export { AccordionItem };