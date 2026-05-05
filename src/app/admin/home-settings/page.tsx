"use client";

import { useState } from "react";

export default function HomeSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("تم حفظ إعدادات الصفحة الرئيسية بنجاح!");
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-6">إعدادات الصفحة الرئيسية</h2>
      
      <form onSubmit={handleSave} className="space-y-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant">
        
        {/* Hero Section */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">القسم الرئيسي (الواجهة)</h3>
          
          <div className="space-y-2">
            <label className="font-label-bold">العنوان الرئيسي</label>
            <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" defaultValue="دروب القمة لشفط البيارات" />
          </div>
          
          <div className="space-y-2">
            <label className="font-label-bold">النص الوصفي</label>
            <textarea className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-24" defaultValue="الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض. فريق محترف واستجابة فورية على مدار 24 ساعة." />
          </div>

          <div className="space-y-2 pt-4">
            <label className="font-label-bold">صور الخلفية (Slider)</label>
            <div className="flex flex-col gap-4">
              <div className="border-2 border-dashed border-outline p-8 rounded-xl text-center hover:bg-surface-container-low transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-4xl text-on-surface-variant mb-2">add_photo_alternate</span>
                <p className="text-label-bold">اضغط هنا لرفع صور جديدة</p>
                <p className="text-xs text-on-surface-variant mt-1">يُفضل مقاس 1920x1080 بصيغة WebP أو JPG</p>
              </div>
              
              {/* Dummy Images Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="relative rounded-lg overflow-hidden border border-outline group">
                  <img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover" alt="Hero 1" />
                  <button type="button" className="absolute top-1 left-1 bg-error text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-sm">delete</span></button>
                </div>
                <div className="relative rounded-lg overflow-hidden border border-outline group">
                  <img src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" className="w-full h-24 object-cover" alt="Hero 2" />
                  <button type="button" className="absolute top-1 left-1 bg-error text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"><span className="material-symbols-outlined text-sm">delete</span></button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">زر الإجراء (Call to Action)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold">نص الزر</label>
              <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" defaultValue="اتصل بنا الآن" />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold">الرابط (URL / Phone)</label>
              <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" dir="ltr" defaultValue="tel:966583165533" />
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={isSaving} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
            {isSaving ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">save</span>}
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}
