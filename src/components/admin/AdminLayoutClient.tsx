"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminLayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNewRequestModalOpen, setIsNewRequestModalOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const navLinks = [
    { href: "/admin", icon: "dashboard", label: "نظرة عامة" },
    { href: "/admin/home-settings", icon: "home", label: "إعدادات الصفحة الرئيسية" },
    { href: "/admin/services", icon: "plumbing", label: "إدارة الخدمات" },
    { href: "/admin/blog", icon: "article", label: "إدارة المقالات" },
    { href: "/admin/contact-settings", icon: "contact_phone", label: "إعدادات التواصل" },
    { href: "/admin/seo-settings", icon: "public", label: "SEO وأكواد التتبع" },
    { href: "/admin/settings", icon: "manage_accounts", label: "إعدادات الحساب" },
  ];

  return (
    <div className="bg-background text-on-background min-h-screen flex">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* SideNavBar */}
      <aside className={`
        fixed md:sticky top-0 h-screen w-64 bg-surface-container-low border-r border-outline-variant py-stack-md flex flex-col z-[70] transition-transform duration-300
        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0 right-0 md:left-auto"}
      `}>
        <div className="px-6 mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-headline-sm font-headline-sm font-black text-primary">دروب القمة</h1>
            <p className="text-body-sm font-body-md text-on-surface-variant">مركز التحكم والارسال</p>
          </div>
          <button className="md:hidden text-on-surface-variant" onClick={() => setIsMobileMenuOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 flex flex-col gap-1 px-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 transition-all rounded-lg font-label-bold text-label-bold
                  ${isActive 
                    ? "bg-secondary-container text-white" 
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-high"}
                `}
              >
                <span className="material-symbols-outlined">{link.icon}</span>
                <span>{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-4 mt-auto mb-4">
          <button 
            onClick={() => { setIsNewRequestModalOpen(true); setIsMobileMenuOpen(false); }}
            className="w-full bg-primary text-white font-cta text-cta py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">add</span>
            طلب جديد
          </button>
        </div>

        <div className="border-t border-outline-variant pt-4 flex flex-col gap-1 px-2">
          <Link href="#" className="text-on-surface-variant hover:text-primary flex items-center gap-3 px-4 py-2 transition-all hover:bg-surface-container-high rounded-lg">
            <span className="material-symbols-outlined">verified_user</span>
            <span className="font-label-bold text-label-bold">بروتوكولات السلامة</span>
          </Link>
          <Link href="/" className="text-on-surface-variant hover:text-primary flex items-center gap-3 px-4 py-2 transition-all hover:bg-surface-container-high rounded-lg">
            <span className="material-symbols-outlined text-error">logout</span>
            <span className="font-label-bold text-label-bold text-error">تسجيل الخروج</span>
          </Link>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        {/* TopAppBar */}
        <header className="flex justify-between items-center px-gutter w-full h-16 bg-surface-container-lowest border-b border-outline-variant sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 hover:bg-surface-container-low rounded-full"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <h2 className="text-headline-md font-headline-md font-bold text-primary">
              {navLinks.find(l => l.href === pathname)?.label || "نظرة عامة على النظام"}
            </h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex bg-surface-container-low items-center px-4 py-2 rounded-full border border-outline-variant w-96 focus-within:border-primary transition-colors">
              <span className="material-symbols-outlined text-on-surface-variant mr-2">search</span>
              <input 
                className="bg-transparent border-none focus:ring-0 text-body-md w-full focus:outline-none placeholder:text-on-surface-variant/50" 
                placeholder="البحث عن طلب أو مركبة..." 
                type="text" 
              />
            </div>
            <div className="flex items-center gap-2 relative">
              <button 
                onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}
                className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors relative"
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full animate-pulse"></span>
              </button>
              
              {/* Notifications Dropdown */}
              {isNotificationsOpen && (
                <div className="absolute top-12 left-0 w-80 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg p-4 z-50">
                  <h3 className="font-bold text-primary mb-2 border-b border-outline-variant pb-2">الإشعارات</h3>
                  <div className="space-y-3">
                    <div className="text-sm border-l-2 border-secondary pl-2">
                      <p className="font-bold text-secondary">تم اكتمال الطلب #REQ-9082</p>
                      <p className="text-on-surface-variant text-xs">منذ 5 دقائق</p>
                    </div>
                    <div className="text-sm border-l-2 border-error pl-2">
                      <p className="font-bold text-error">طوارئ! فيضان خزان في حي اليرموك</p>
                      <p className="text-on-surface-variant text-xs">منذ 12 دقيقة</p>
                    </div>
                  </div>
                </div>
              )}

              <button 
                onClick={() => setIsSettingsOpen(!isSettingsOpen)}
                className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition-colors"
              >
                <span className="material-symbols-outlined">settings</span>
              </button>

              {/* User Profile */}
              <div className="h-8 w-8 rounded-full bg-primary-container overflow-hidden ml-2 border border-outline-variant cursor-pointer hover:ring-2 hover:ring-primary/50 transition-all">
                <img alt="Admin User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1SSFotOKd-93MJzDthbWL32ZZSt2jo2-ttrofTKb2iwISH3vTrOfmc4JMhmKsiIFr4DxHmCKlmb0oKysMeDKZC-mrCekbwVkA3EF7U10E2UrbK6affJ6-sKni2T5MUGYx7atrSMIbwByaEHZJ6f5dTnz98AgjqsRwVcDM6ib8kARq8tLooXvH1_cRWsZ2elB8aZF_7yi8vMMM84hD4grs9p48Zyqj8bObawz8JUy0LLLkwtb5lWA2uXudU03tWoIArWXtx3m93kv2" />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-gutter overflow-y-auto">
          {children}
        </main>
      </div>

      {/* New Request Modal */}
      {isNewRequestModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsNewRequestModalOpen(false)} />
          <div className="relative bg-surface-container-lowest rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
              <h2 className="text-headline-md font-bold text-primary flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">add_circle</span>
                إنشاء طلب جديد
              </h2>
              <button onClick={() => setIsNewRequestModalOpen(false)} className="text-on-surface-variant hover:text-error bg-white p-1 rounded-full shadow-sm">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            <div className="p-6 overflow-y-auto flex-1">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("تم إنشاء الطلب بنجاح!"); setIsNewRequestModalOpen(false); }}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-label-bold text-on-surface">اسم العميل</label>
                    <input required type="text" className="w-full p-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="أدخل اسم العميل" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-bold text-on-surface">رقم الجوال</label>
                    <input required type="tel" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none text-left" placeholder="05XXXXXXXX" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-label-bold text-on-surface">نوع الخدمة</label>
                    <select className="w-full p-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none">
                      <option>شفط بيارات</option>
                      <option>تسليك مجاري</option>
                      <option>تنظيف خزانات</option>
                      <option>طوارئ فيضان</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-label-bold text-on-surface">الحي / الموقع</label>
                    <input required type="text" className="w-full p-3 rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none" placeholder="مثال: حي الملقا" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-label-bold text-on-surface">مستوى الأولوية</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="priority" className="peer hidden" defaultChecked />
                      <div className="text-center p-3 rounded-lg border border-outline-variant peer-checked:bg-primary-fixed peer-checked:border-primary peer-checked:text-primary font-bold transition-all">عادي</div>
                    </label>
                    <label className="flex-1 cursor-pointer">
                      <input type="radio" name="priority" className="peer hidden" />
                      <div className="text-center p-3 rounded-lg border border-outline-variant peer-checked:bg-error-container peer-checked:border-error peer-checked:text-error font-bold transition-all">طوارئ قصوى</div>
                    </label>
                  </div>
                </div>
                <div className="pt-4 border-t border-outline-variant flex justify-end gap-3">
                  <button type="button" onClick={() => setIsNewRequestModalOpen(false)} className="px-6 py-2 rounded-lg font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors">إلغاء</button>
                  <button type="submit" className="px-6 py-2 rounded-lg font-bold bg-primary text-white hover:bg-primary-container transition-colors shadow-md">حفظ وإرسال الفريق</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
