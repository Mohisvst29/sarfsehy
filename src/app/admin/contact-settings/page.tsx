"use client";

import { useState, useEffect } from "react";
import { getSettings, updateSettings } from "@/lib/actions";

export default function ContactSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [data, setData] = useState({
    phone: "",
    whatsapp: "",
    email: "",
    address: "",
    mapEmbed: ""
  });

  useEffect(() => {
    getSettings().then(res => {
      if (res) setData({
        phone: res.phone || "",
        whatsapp: res.whatsapp || "",
        email: res.email || "",
        address: res.address || "",
        mapEmbed: res.mapEmbed || ""
      });
    });
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateSettings(data);
      alert("تم تحديث معلومات التواصل بنجاح!");
    } catch (err) {
      alert("حدث خطأ أثناء الحفظ");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto pb-10">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-6">إعدادات التواصل</h2>
      
      <form onSubmit={handleSave} className="space-y-8 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="font-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary">call</span> رقم الجوال الموحد</label>
            <input value={data.phone} onChange={e => setData({...data, phone: e.target.value})} type="tel" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-right" />
          </div>
          
          <div className="space-y-2">
            <label className="font-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary">chat</span> رقم الواتساب</label>
            <input value={data.whatsapp} onChange={e => setData({...data, whatsapp: e.target.value})} type="tel" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-right" />
          </div>

          <div className="space-y-2">
            <label className="font-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary">mail</span> البريد الإلكتروني</label>
            <input value={data.email} onChange={e => setData({...data, email: e.target.value})} type="email" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-right" />
          </div>

          <div className="space-y-2">
            <label className="font-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary">location_on</span> العنوان</label>
            <input value={data.address} onChange={e => setData({...data, address: e.target.value})} type="text" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-label-bold flex items-center gap-2"><span className="material-symbols-outlined text-secondary">map</span> رابط خريطة جوجل (Embed)</label>
          <textarea value={data.mapEmbed} onChange={e => setData({...data, mapEmbed: e.target.value})} className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary h-24" dir="ltr" />
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={isSaving} className="bg-primary text-white px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
            {isSaving ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">save</span>}
            حفظ التغييرات
          </button>
        </div>
      </form>
    </div>
  );
}
