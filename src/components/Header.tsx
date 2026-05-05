import Link from 'next/link';
import { getSettings } from '@/lib/actions';
import MobileMenu from './MobileMenu';

export default async function Header() {
  const settings = await getSettings();

  return (
    <header className="bg-surface dark:bg-slate-900 sticky top-0 z-50 border-b border-outline-variant relative shadow-sm">
      <div className="flex justify-between items-center w-full px-4 md:px-8 py-4 max-w-7xl mx-auto">
        
        {/* Logo and Mobile Menu toggle */}
        <div className="flex items-center gap-2">
          <MobileMenu settings={settings} />
          <Link href="/" className="flex items-center gap-2 mr-2 md:mr-0">
            {settings.logoUrl ? (
              <img src={settings.logoUrl} alt={settings.siteTitle || "دروب القمة"} style={{ height: `${settings.logoSize || 60}px` }} className="object-contain" />
            ) : (
              <div className="text-2xl font-bold text-primary dark:text-blue-100">{settings.siteTitle || "دروب القمة"}</div>
            )}
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-primary border-b-2 border-primary pb-1" href="/">الرئيسية</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="/services">خدماتنا</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="/about">من نحن</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="/contact">اتصل بنا</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-colors" href="/blog">المدونة</Link>
        </nav>
        
        {/* Desktop CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <a className="flex flex-col text-right" href={`tel:${settings.phone || "966583165533"}`}>
            <span className="text-[10px] text-on-surface-variant font-bold">اتصل الآن</span>
            <span className="font-public-sans text-sm font-semibold tracking-tight text-primary" dir="ltr">{settings.phone || "966583165533"}</span>
          </a>
          <a href={settings.ctaLink || "tel:966583165533"} className="bg-primary text-on-primary px-6 py-2 rounded-lg font-cta text-cta hover:opacity-90 transition-opacity flex items-center gap-2 shadow-sm">
            <span className="material-symbols-outlined text-sm">emergency_home</span>
            {settings.ctaText || "اتصال طوارئ"}
          </a>
        </div>

        {/* Mobile CTA (only shown on mobile instead of desktop CTA) */}
        <div className="md:hidden flex">
          <a href={settings.ctaLink || "tel:966583165533"} className="bg-primary text-on-primary px-3 py-2 rounded-lg font-cta text-xs hover:opacity-90 transition-opacity flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-sm">call</span>
            اتصال
          </a>
        </div>
      </div>
    </header>
  );
}
