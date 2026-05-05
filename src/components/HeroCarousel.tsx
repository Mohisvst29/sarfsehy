"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroCarousel({ settings }: { settings: any }) {
  const slides = settings?.heroSlides && settings.heroSlides.length > 0 
    ? settings.heroSlides 
    : [
        {
          image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDF2JY2It_2aI3AGd7G8yzLBe0UdcGuMTGqVRq_BMj10d965LZ4W5aUPDvLQRyPuh0nrK6lJi_xpU7Bi2EW7XyWJepe22gnV_xIua_-7-hJRY0jMZOVWBWFzUBwZm2-1koY_QLyyqVwdndaujb0vGzr2bfMzBoaLWEqrXfqSdu9nHRHLgnFXbTuVd87C0NfoqlPr57lvntTKB6UAHUqwDmu7qf_6I-JPTOIsYVZtobRBZ22dfI_fSyh2npjbTDEQyA2bfWJqbcaxk0D",
          heading: settings?.siteTitle || "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض",
          description: settings?.siteDescription || "نمتلك أسطولاً ضخماً من وايتات الشفط وفريقاً محترفاً لإعادة بيئتكم نظيفة وآمنة في وقت قياسي. نحن هنا لخدمتكم على مدار الساعة."
        }
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden bg-primary-container" data-aos="fade-in">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <img className="w-full h-full object-cover opacity-30" src={slides[currentIndex].image} alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-l from-primary-container via-primary-container/80 to-transparent"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-white text-label-bold font-label-bold">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
            خدمة معتمدة في الرياض
          </div>
          
          <div className="min-h-[160px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h1 className="font-headline-xl text-headline-xl text-white leading-tight">
                  {slides[currentIndex].heading}
                </h1>
                <p className="font-body-lg text-body-lg text-white max-w-xl">
                  {slides[currentIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a href={`tel:${settings?.phone || "966583165533"}`} className="bg-secondary text-white px-8 py-4 rounded-xl font-cta text-cta shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 z-20 relative">
              <span className="material-symbols-outlined">call</span>
              {settings?.ctaText || "اتصل بنا الآن"}
            </a>
            <Link href="/services" className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-xl font-cta text-cta hover:bg-white/20 transition-all flex items-center gap-3 z-20 relative">
              <span className="material-symbols-outlined">explore</span>
              خدماتنا
            </Link>
          </div>
          
          {slides.length > 1 && (
            <div className="flex gap-2 pt-4 relative z-20">
              {slides.map((_: any, idx: number) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-secondary w-8' : 'bg-white/50 w-2 hover:bg-white'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="hidden md:block">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 bg-white/10 rounded-2xl border border-white/5 text-center">
                <div className="text-white text-3xl font-black mb-1" dir="ltr">
                  <AnimatedCounter to={24} suffix="/7" />
                </div>
                <div className="text-white text-sm">متاحون دائماً</div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/5 text-center">
                <div className="text-white text-3xl font-black mb-1" dir="ltr">
                  <AnimatedCounter to={150} prefix="+" />
                </div>
                <div className="text-white text-sm">وايت شفط</div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/5 text-center">
                <div className="text-white text-3xl font-black mb-1" dir="ltr">
                  <AnimatedCounter to={30} />
                </div>
                <div className="text-white text-sm">دقيقة وصول</div>
              </div>
              <div className="p-6 bg-white/10 rounded-2xl border border-white/5 text-center">
                <div className="text-white text-3xl font-black mb-1" dir="ltr">
                  <AnimatedCounter to={100} suffix="%" />
                </div>
                <div className="text-white text-sm">ضمان الخدمة</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
