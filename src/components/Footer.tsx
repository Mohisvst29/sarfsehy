import Link from 'next/link';
import { getSettings } from '@/lib/actions';

export default async function Footer() {
  const settings = await getSettings();

  return (
    <>
      <div className="border-y border-slate-200 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-slate-400">تراخيصنا المعتمدة:</span>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">security</span>
            <span className="font-label-bold text-label-bold">ترخيص البلدية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">eco</span>
            <span className="font-label-bold text-label-bold">المعايير البيئية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">gpp_good</span>
            <span className="font-label-bold text-label-bold">شهادة الجودة</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-label-bold text-label-bold">سجل تجاري معتمد</span>
          </div>
        </div>
      </div>
      <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-8 py-12 max-w-7xl mx-auto">
          <div className="md:col-span-1 space-y-4">
            {settings.logoUrl ? (
              <img src={settings.logoUrl} alt={settings.siteTitle || "دروب القمة"} style={{ height: `${settings.logoSize || 60}px` }} className="object-contain" />
            ) : (
              <div className="text-xl font-black text-blue-900 dark:text-blue-100">{settings.siteTitle || "دروب القمة"}</div>
            )}
            <p className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {settings.siteDescription || "الشركة الرائدة في حلول الصرف الصحي وتفريغ البيارات في مدينة الرياض. خبرة تمتد لأكثر من 15 عاماً في خدمة المنازل والمنشآت."}
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary dark:text-blue-200">خدماتنا</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/services">خدمات الشفط</Link>
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/services">تنظيف الخزانات</Link>
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/services">صيانة السباكة</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary dark:text-blue-200">روابط سريعة</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/about">من نحن</Link>
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/contact">اتصل بنا</Link>
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="/blog">المدونة</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="font-bold text-primary dark:text-blue-200">قانوني</h4>
            <nav className="flex flex-col gap-3">
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="#">الشروط والأحكام</Link>
              <Link className="font-public-sans text-sm leading-relaxed text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-300 underline-offset-4 hover:underline" href="#">سياسة الخصوصية</Link>
            </nav>
          </div>
        </div>
        <div className="border-t border-slate-200 dark:border-slate-800 py-6 text-center">
          <p className="font-public-sans text-xs text-slate-400">© 2024 دروب القمة لخدمات الصرف الصحي. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </>
  );
}
