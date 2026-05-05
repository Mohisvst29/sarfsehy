import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-900 dark:text-blue-100">دروب القمة</div>
        <nav className="hidden md:flex gap-8 items-center">
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 pb-1" href="/">الرئيسية</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 transition-colors" href="/services">خدماتنا</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 transition-colors" href="/about">من نحن</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 transition-colors" href="/contact">اتصل بنا</Link>
          <Link className="font-public-sans text-sm font-semibold tracking-tight text-slate-600 dark:text-slate-400 hover:text-blue-900 hover:bg-slate-50 transition-colors" href="/blog">المدونة</Link>
        </nav>
        <div className="flex gap-4 items-center">
          <a className="hidden sm:flex flex-col text-right" href="tel:966583165533">
            <span className="text-[10px] text-slate-400 font-bold">اتصل الآن</span>
            <span className="font-public-sans text-sm font-semibold tracking-tight text-blue-900 dark:text-blue-300">966583165533</span>
          </a>
          <a href="tel:966583165533" className="bg-primary text-on-primary px-6 py-2 rounded-lg font-cta text-cta hover:opacity-90 transition-opacity flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">emergency_home</span>
            اتصال طوارئ
          </a>
        </div>
      </div>
    </header>
  );
}
