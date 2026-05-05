"use client";

import { useState, useEffect } from "react";
import { getSettings, updateSettings, uploadImage } from "@/lib/actions";

export default function SeoSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [settings, setSettings] = useState<any>({
    facebook: "",
    twitter: "",
    instagram: "",
    snapchat: "",
    tiktok: "",
    seoKeywords: "",
    seoMetaImage: "",
    googleAnalyticsId: "",
    googleTagManagerId: "",
    customHeadScripts: "",
    customBodyScripts: ""
  });

  const loadSettings = async () => {
    const data = await getSettings();
    setSettings(data);
  };

  useEffect(() => {
    loadSettings();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res: any = await uploadImage(formData);
      setSettings({ ...settings, seoMetaImage: res.url });
    } catch (err) {
      alert("حدث خطأ في رفع الصورة");
    } finally {
      setIsUploading(false);
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
      <h2 className="text-headline-lg font-headline-lg text-primary mb-6">SEO وأكواد التتبع والتواصل الاجتماعي</h2>
      
      <form onSubmit={handleSave} className="space-y-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant">
        
        {/* Social Links */}
        <div className="space-y-4">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">روابط التواصل الاجتماعي</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">Snapchat</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.snapchat || ""} onChange={e => setSettings({...settings, snapchat: e.target.value})} placeholder="https://snapchat.com/add/..." />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">TikTok</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.tiktok || ""} onChange={e => setSettings({...settings, tiktok: e.target.value})} placeholder="https://tiktok.com/@..." />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">Instagram</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.instagram || ""} onChange={e => setSettings({...settings, instagram: e.target.value})} placeholder="https://instagram.com/..." />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">Twitter / X</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.twitter || ""} onChange={e => setSettings({...settings, twitter: e.target.value})} placeholder="https://twitter.com/..." />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold flex items-center gap-2">Facebook</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.facebook || ""} onChange={e => setSettings({...settings, facebook: e.target.value})} placeholder="https://facebook.com/..." />
            </div>
          </div>
        </div>

        {/* SEO Settings */}
        <div className="space-y-4 pt-4 border-t border-outline-variant">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">تحسين محركات البحث (SEO)</h3>
          
          <div className="space-y-2">
            <label className="font-label-bold">الكلمات المفتاحية (تفصل بفاصلة)</label>
            <textarea className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-20" value={settings.seoKeywords || ""} onChange={e => setSettings({...settings, seoKeywords: e.target.value})} placeholder="شفط بيارات، وايت صرف صحي، تنظيف بيارات الرياض..." />
          </div>

          <div className="space-y-2">
            <label className="font-label-bold">الصورة الترويجية (Open Graph / Twitter Card)</label>
            <p className="text-sm text-on-surface-variant">هذه الصورة ستظهر عندما يتم مشاركة رابط الموقع على واتساب أو وسائل التواصل.</p>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="w-full p-2 rounded-lg border border-outline-variant outline-none focus:border-primary bg-white" />
            {isUploading && <span className="text-sm text-secondary">جاري رفع الصورة...</span>}
            {settings.seoMetaImage && (
              <div className="mt-4">
                <img src={settings.seoMetaImage} alt="SEO Meta" className="h-32 object-contain rounded-lg border border-outline-variant" />
                <button type="button" onClick={() => setSettings({...settings, seoMetaImage: ""})} className="text-error text-sm mt-2 block">إزالة الصورة</button>
              </div>
            )}
          </div>
        </div>

        {/* Tracking Scripts */}
        <div className="space-y-4 pt-4 border-t border-outline-variant">
          <h3 className="text-headline-md text-secondary border-b border-outline-variant pb-2">أكواد التتبع والإحصائيات (Tracking Scripts)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-label-bold">معرف Google Analytics (G-XXXXXXX)</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.googleAnalyticsId || ""} onChange={e => setSettings({...settings, googleAnalyticsId: e.target.value})} placeholder="G-XXXXXXXXXX" />
            </div>
            <div className="space-y-2">
              <label className="font-label-bold">معرف Google Tag Manager (GTM-XXXXX)</label>
              <input type="text" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" value={settings.googleTagManagerId || ""} onChange={e => setSettings({...settings, googleTagManagerId: e.target.value})} placeholder="GTM-XXXXXXX" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-label-bold text-error flex items-center gap-2">
              <span className="material-symbols-outlined">code</span>
              أكواد مخصصة في الـ Head (مثل كود إعلانات جوجل Ads، أو بيكسل)
            </label>
            <p className="text-sm text-on-surface-variant">ضع كود &lt;script&gt; بالكامل هنا. سيتم حقنه داخل علامة &lt;head&gt;.</p>
            <textarea dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-32 font-mono text-sm bg-slate-50" value={settings.customHeadScripts || ""} onChange={e => setSettings({...settings, customHeadScripts: e.target.value})} placeholder="<script>...</script>" />
          </div>

          <div className="space-y-2">
            <label className="font-label-bold text-error flex items-center gap-2">
              <span className="material-symbols-outlined">code</span>
              أكواد مخصصة في بداية الـ Body
            </label>
            <textarea dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-32 font-mono text-sm bg-slate-50" value={settings.customBodyScripts || ""} onChange={e => setSettings({...settings, customBodyScripts: e.target.value})} placeholder="<noscript>...</noscript>" />
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={isSaving || isUploading} className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
            {isSaving ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">save</span>}
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}
