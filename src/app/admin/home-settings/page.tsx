"use client";

import { useState, useEffect, useRef } from "react";
import { getSettings, updateSettings, uploadImage } from "@/lib/actions";

export default function HomeSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const [settings, setSettings] = useState<any>({
    siteTitle: "دروب القمة لشفط البيارات",
    siteDescription: "الحل الجذري والسريع لمشاكل البيارات والمجاري بالرياض.",
    logoUrl: "",
    logoSize: 60,
    primaryColor: "#001e40",
    secondaryColor: "#006c4a",
    ctaText: "اتصل بنا الآن",
    ctaLink: "tel:+966583165533"
  });

  const loadSettings = async () => {
    const data = await getSettings();
    setSettings(data);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploadingLogo(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res: any = await uploadImage(formData);
      setSettings({ ...settings, logoUrl: res.url });
    } catch (err) {
      alert("حدث خطأ في رفع الشعار");
    } finally {
      setIsUploadingLogo(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    await updateSettings(settings);
    setIsSaving(false);
    alert("تم حفظ الإعدادات بنجاح!");
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-6">إعدادات الصفحة الرئيسية والشعار</h2>
      
      <form onSubmit={handleSave} className="space-y-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant">
        
        {/* Logo Section */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">شعار الموقع (Logo)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold">صورة الشعار</label>
              <input type="file" accept="image/*" onChange={handleLogoUpload} className="w-full p-2 rounded-lg border border-outline-variant outline-none focus:border-primary bg-white" />
              {isUploadingLogo && <span className="text-sm text-secondary">جاري رفع الشعار...</span>}
            </div>
            <div className="space-y-2">
              <label className="font-label-bold">حجم الشعار (بالبكسل)</label>
              <input type="number" min="20" max="200" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary dir-ltr" value={settings.logoSize} onChange={e => setSettings({...settings, logoSize: parseInt(e.target.value)})} />
            </div>
          </div>
          {settings.logoUrl && (
            <div className="mt-4 p-4 border border-outline-variant rounded-lg bg-surface-container-low flex flex-col items-center gap-2">
              <span className="text-sm text-on-surface-variant mb-2">معاينة الشعار بالحجم المحدد:</span>
              <img src={settings.logoUrl} alt="Logo Preview" style={{ height: `${settings.logoSize}px` }} className="object-contain" />
              <button type="button" onClick={() => setSettings({...settings, logoUrl: ""})} className="text-error text-sm mt-2">إزالة الشعار</button>
            </div>
          )}
        </div>

        {/* Colors Section */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">ألوان الموقع (الألوان الأساسية)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">
                اللون الرئيسي (Primary)
                <div className="w-6 h-6 rounded border border-outline-variant" style={{ backgroundColor: settings.primaryColor }}></div>
              </label>
              <div className="flex gap-2">
                <input type="color" className="p-1 rounded border border-outline-variant h-12 w-12 cursor-pointer" value={settings.primaryColor} onChange={e => setSettings({...settings, primaryColor: e.target.value})} />
                <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary dir-ltr uppercase" value={settings.primaryColor} onChange={e => setSettings({...settings, primaryColor: e.target.value})} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">
                اللون الثانوي (Secondary)
                <div className="w-6 h-6 rounded border border-outline-variant" style={{ backgroundColor: settings.secondaryColor }}></div>
              </label>
              <div className="flex gap-2">
                <input type="color" className="p-1 rounded border border-outline-variant h-12 w-12 cursor-pointer" value={settings.secondaryColor} onChange={e => setSettings({...settings, secondaryColor: e.target.value})} />
                <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary dir-ltr uppercase" value={settings.secondaryColor} onChange={e => setSettings({...settings, secondaryColor: e.target.value})} />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">القسم الرئيسي (الواجهة)</h3>
          
          <div className="space-y-2">
            <label className="font-label-bold">العنوان الرئيسي</label>
            <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.siteTitle} onChange={e => setSettings({...settings, siteTitle: e.target.value})} />
          </div>
          
          <div className="space-y-2">
            <label className="font-label-bold">النص الوصفي</label>
            <textarea className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-24" value={settings.siteDescription} onChange={e => setSettings({...settings, siteDescription: e.target.value})} />
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">زر الإجراء (Call to Action)</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold">نص الزر</label>
              <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.ctaText} onChange={e => setSettings({...settings, ctaText: e.target.value})} />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold">الرابط (URL / Phone)</label>
              <input type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" dir="ltr" value={settings.ctaLink} onChange={e => setSettings({...settings, ctaLink: e.target.value})} />
            </div>
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={isSaving || isUploadingLogo} className="bg-primary text-on-primary px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
            {isSaving ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">save</span>}
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}
