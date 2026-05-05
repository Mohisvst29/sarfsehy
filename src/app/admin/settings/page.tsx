"use client";

import { useState } from "react";

export default function AccountSettingsPage() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert("تم تغيير كلمة المرور بنجاح!");
    }, 1000);
  };

  return (
    <div className="max-w-xl mx-auto pb-10">
      <h2 className="text-headline-lg font-headline-lg text-primary mb-6">إعدادات الحساب</h2>
      
      <form onSubmit={handleSave} className="space-y-6 bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant">
        
        <div className="text-center mb-8">
          <div className="h-24 w-24 rounded-full bg-primary-container mx-auto mb-4 overflow-hidden border-4 border-outline-variant">
            <img alt="Admin Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1SSFotOKd-93MJzDthbWL32ZZSt2jo2-ttrofTKb2iwISH3vTrOfmc4JMhmKsiIFr4DxHmCKlmb0oKysMeDKZC-mrCekbwVkA3EF7U10E2UrbK6affJ6-sKni2T5MUGYx7atrSMIbwByaEHZJ6f5dTnz98AgjqsRwVcDM6ib8kARq8tLooXvH1_cRWsZ2elB8aZF_7yi8vMMM84hD4grs9p48Zyqj8bObawz8JUy0LLLkwtb5lWA2uXudU03tWoIArWXtx3m93kv2" />
          </div>
          <h3 className="font-bold text-primary text-headline-md">مدير النظام</h3>
          <p className="text-on-surface-variant">admin@darub.com</p>
        </div>

        <div className="space-y-4 border-t border-outline-variant pt-6">
          <h4 className="font-bold text-secondary mb-2">تغيير كلمة المرور</h4>
          
          <div className="space-y-2">
            <label className="font-label-bold">كلمة المرور الحالية</label>
            <input required type="password" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-left" />
          </div>
          
          <div className="space-y-2">
            <label className="font-label-bold">كلمة المرور الجديدة</label>
            <input required type="password" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-left" />
          </div>

          <div className="space-y-2">
            <label className="font-label-bold">تأكيد كلمة المرور الجديدة</label>
            <input required type="password" dir="ltr" className="w-full p-3 rounded-lg border border-outline-variant outline-none focus:border-primary text-left" />
          </div>
        </div>

        <div className="pt-6 flex justify-end">
          <button type="submit" disabled={isSaving} className="w-full bg-primary text-white px-8 py-3 rounded-xl font-bold flex justify-center items-center gap-2 hover:opacity-90 disabled:opacity-50 transition-all">
            {isSaving ? <span className="material-symbols-outlined animate-spin">sync</span> : <span className="material-symbols-outlined">lock_reset</span>}
            تحديث كلمة المرور
          </button>
        </div>
      </form>
    </div>
  );
}
