"use client";

import { useState } from "react";
import Link from "next/link";

export default function MobileMenu({ settings }: { settings: any }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="p-2 text-primary dark:text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-3xl">
          {isOpen ? "close" : "menu"}
        </span>
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-[100%] left-0 w-full bg-surface dark:bg-slate-900 shadow-lg border-b border-outline-variant flex flex-col px-6 py-4 space-y-4 z-50">
          <Link onClick={() => setIsOpen(false)} className="font-public-sans text-lg font-bold text-primary dark:text-blue-100 border-b border-outline-variant dark:border-slate-700 pb-2" href="/">الرئيسية</Link>
          <Link onClick={() => setIsOpen(false)} className="font-public-sans text-lg font-bold text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors border-b border-outline-variant dark:border-slate-700 pb-2" href="/services">خدماتنا</Link>
          <Link onClick={() => setIsOpen(false)} className="font-public-sans text-lg font-bold text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors border-b border-outline-variant dark:border-slate-700 pb-2" href="/about">من نحن</Link>
          <Link onClick={() => setIsOpen(false)} className="font-public-sans text-lg font-bold text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors border-b border-outline-variant dark:border-slate-700 pb-2" href="/contact">اتصل بنا</Link>
          <Link onClick={() => setIsOpen(false)} className="font-public-sans text-lg font-bold text-on-surface-variant dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors pb-2" href="/blog">المدونة</Link>
          
          <div className="pt-4 flex flex-col gap-3">
            <a href={`tel:${settings.phone || "966583165533"}`} className="bg-surface-container-low text-primary px-6 py-3 rounded-lg font-cta text-center border border-primary flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">call</span>
              {settings.phone || "966583165533"}
            </a>
            <a href={settings.ctaLink || "tel:966583165533"} className="bg-primary text-white px-6 py-3 rounded-lg font-cta text-center shadow-md flex items-center justify-center gap-2">
              <span className="material-symbols-outlined">emergency_home</span>
              {settings.ctaText || "اتصال طوارئ"}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
