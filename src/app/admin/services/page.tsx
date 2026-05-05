"use client";

import { useState, useEffect, useRef } from "react";
import { getServices, addService, deleteService, uploadImage } from "@/lib/actions";

export default function ServicesSettingsPage() {
  const [services, setServices] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [newService, setNewService] = useState({ title: "", desc: "", icon: "plumbing", image: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadServices = async () => {
    const data = await getServices();
    setServices(data);
  };

  useEffect(() => {
    loadServices();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res: any = await uploadImage(formData);
      setNewService({ ...newService, image: res.url });
    } catch (err) {
      alert("حدث خطأ في رفع الصورة");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await addService({ ...newService, description: newService.desc });
    setShowAdd(false);
    setNewService({ title: "", desc: "", icon: "plumbing", image: "" });
    loadServices();
  };

  const handleDelete = async (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذه الخدمة؟")) {
      await deleteService(id);
      loadServices();
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-headline-lg font-headline-lg text-primary">إدارة الخدمات</h2>
        <button onClick={() => setShowAdd(true)} className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
          <span className="material-symbols-outlined">add</span>
          إضافة خدمة
        </button>
      </div>
      
      {showAdd && (
        <form onSubmit={handleAdd} className="bg-surface-container-low p-6 rounded-2xl mb-8 border border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-4">
          <input required placeholder="عنوان الخدمة" className="p-3 rounded-lg border w-full" value={newService.title} onChange={e => setNewService({...newService, title: e.target.value})} />
          <input required placeholder="اسم الأيقونة (مثال: plumbing)" className="p-3 rounded-lg border w-full dir-ltr text-right" value={newService.icon} onChange={e => setNewService({...newService, icon: e.target.value})} />
          <textarea required placeholder="وصف الخدمة" className="p-3 rounded-lg border w-full md:col-span-2" value={newService.desc} onChange={e => setNewService({...newService, desc: e.target.value})} />
          
          <div className="md:col-span-2">
            <label className="block font-label-bold mb-2">صورة الخدمة</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} className="p-2 border rounded-lg w-full bg-white" ref={fileInputRef} />
            {isUploading && <span className="text-sm text-secondary mt-2 inline-block">جاري رفع الصورة...</span>}
            {newService.image && <img src={newService.image} alt="Preview" className="h-20 w-32 object-cover mt-2 rounded-lg border border-outline" />}
          </div>

          <div className="md:col-span-2 flex gap-4 mt-4">
            <button type="submit" disabled={isUploading} className="bg-primary text-white px-6 py-2 rounded-xl disabled:opacity-50">حفظ الخدمة</button>
            <button type="button" onClick={() => setShowAdd(false)} className="text-error px-6 py-2">إلغاء</button>
          </div>
        </form>
      )}

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant">
              <th className="px-6 py-4 font-label-bold">الصورة/الأيقونة</th>
              <th className="px-6 py-4 font-label-bold">عنوان الخدمة</th>
              <th className="px-6 py-4 font-label-bold">الوصف</th>
              <th className="px-6 py-4 font-label-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {services.map((srv) => (
              <tr key={srv._id || srv.id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-6 py-4 flex gap-3 items-center">
                  <span className="material-symbols-outlined text-secondary bg-secondary-container/20 p-2 rounded-lg shrink-0">{srv.icon}</span>
                  {srv.image && <img src={srv.image} alt={srv.title} className="w-16 h-12 object-cover rounded-lg border border-outline" />}
                </td>
                <td className="px-6 py-4 font-bold text-primary">{srv.title}</td>
                <td className="px-6 py-4 text-on-surface-variant max-w-xs">{srv.description || srv.desc}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button onClick={() => handleDelete(srv._id)} className="p-2 text-error hover:bg-error-container rounded-lg"><span className="material-symbols-outlined">delete</span></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
