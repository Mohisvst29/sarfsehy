"use client";

import { useState, useEffect, useRef } from "react";
import { getPosts, addPost, deletePost, uploadImage, updatePost } from "@/lib/actions";

export default function BlogSettingsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "", excerpt: "", category: "نصائح الصيانة", image: "" });
  const [editForm, setEditForm] = useState({ title: "", content: "", excerpt: "", category: "", image: "" });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const editFileInputRef = useRef<HTMLInputElement>(null);

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, isEdit: boolean = false) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const res: any = await uploadImage(formData);
      if (isEdit) {
        setEditForm({ ...editForm, image: res.url });
      } else {
        setNewPost({ ...newPost, image: res.url });
      }
    } catch (err) {
      alert("حدث خطأ في رفع الصورة");
    } finally {
      setIsUploading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPost(newPost);
    setShowAdd(false);
    setNewPost({ title: "", content: "", excerpt: "", category: "نصائح الصيانة", image: "" });
    loadPosts();
  };

  const handleEditClick = (post: any) => {
    setEditingId(post._id);
    setEditForm({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || "",
      category: post.category || "نصائح الصيانة",
      image: post.image || ""
    });
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingId) return;
    await updatePost(editingId, editForm);
    setEditingId(null);
    loadPosts();
  };

  const handleDelete = async (id: string) => {
    if (confirm("هل أنت متأكد من حذف هذه المقالة؟")) {
      await deletePost(id);
      loadPosts();
    }
  };

  return (
    <div className="max-w-5xl mx-auto pb-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-headline-lg font-headline-lg text-primary">إدارة المقالات</h2>
        <button onClick={() => { setShowAdd(true); setEditingId(null); }} className="bg-primary text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
          <span className="material-symbols-outlined">post_add</span>
          مقال جديد
        </button>
      </div>
      
      {showAdd && !editingId && (
        <form onSubmit={handleAdd} className="bg-surface-container-low p-6 rounded-2xl mb-8 border border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="col-span-1 md:col-span-2 text-headline-sm text-primary mb-2">إضافة مقال جديد</h3>
          <input required placeholder="عنوان المقال" className="p-3 rounded-lg border w-full" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
          <input required placeholder="التصنيف (مثال: نصائح الصيانة)" className="p-3 rounded-lg border w-full" value={newPost.category} onChange={e => setNewPost({...newPost, category: e.target.value})} />
          <textarea required placeholder="وصف قصير (مقتطف)..." className="p-3 rounded-lg border w-full md:col-span-2 h-20" value={newPost.excerpt} onChange={e => setNewPost({...newPost, excerpt: e.target.value})} />
          <textarea required placeholder="محتوى المقال الكامل..." className="p-3 rounded-lg border w-full md:col-span-2 h-32" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
          
          <div className="md:col-span-2">
            <label className="block font-label-bold mb-2">صورة المقال</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, false)} className="p-2 border rounded-lg w-full bg-white" ref={fileInputRef} />
            {isUploading && <span className="text-sm text-secondary mt-2 inline-block">جاري رفع الصورة...</span>}
            {newPost.image && <img src={newPost.image} alt="Preview" className="h-32 w-48 object-cover mt-2 rounded-lg border border-outline" />}
          </div>

          <div className="md:col-span-2 flex gap-4 mt-4">
            <button type="submit" disabled={isUploading} className="bg-primary text-white px-6 py-2 rounded-xl disabled:opacity-50">نشر المقال</button>
            <button type="button" onClick={() => setShowAdd(false)} className="text-error px-6 py-2">إلغاء</button>
          </div>
        </form>
      )}

      {editingId && (
        <form onSubmit={handleUpdate} className="bg-surface-container-low p-6 rounded-2xl mb-8 border border-outline-variant grid grid-cols-1 md:grid-cols-2 gap-4">
          <h3 className="col-span-1 md:col-span-2 text-headline-sm text-primary mb-2">تعديل المقال</h3>
          <input required placeholder="عنوان المقال" className="p-3 rounded-lg border w-full" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} />
          <input required placeholder="التصنيف (مثال: نصائح الصيانة)" className="p-3 rounded-lg border w-full" value={editForm.category} onChange={e => setEditForm({...editForm, category: e.target.value})} />
          <textarea required placeholder="وصف قصير (مقتطف)..." className="p-3 rounded-lg border w-full md:col-span-2 h-20" value={editForm.excerpt} onChange={e => setEditForm({...editForm, excerpt: e.target.value})} />
          <textarea required placeholder="محتوى المقال الكامل..." className="p-3 rounded-lg border w-full md:col-span-2 h-32" value={editForm.content} onChange={e => setEditForm({...editForm, content: e.target.value})} />
          
          <div className="md:col-span-2">
            <label className="block font-label-bold mb-2">صورة المقال</label>
            <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, true)} className="p-2 border rounded-lg w-full bg-white" ref={editFileInputRef} />
            {isUploading && <span className="text-sm text-secondary mt-2 inline-block">جاري رفع الصورة...</span>}
            {editForm.image && <img src={editForm.image} alt="Preview" className="h-32 w-48 object-cover mt-2 rounded-lg border border-outline" />}
          </div>

          <div className="md:col-span-2 flex gap-4 mt-4">
            <button type="submit" disabled={isUploading} className="bg-primary text-white px-6 py-2 rounded-xl disabled:opacity-50">تحديث المقال</button>
            <button type="button" onClick={() => setEditingId(null)} className="text-error px-6 py-2">إلغاء</button>
          </div>
        </form>
      )}

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant">
              <th className="px-6 py-4 font-label-bold">صورة المقال</th>
              <th className="px-6 py-4 font-label-bold">عنوان المقال</th>
              <th className="px-6 py-4 font-label-bold">التصنيف</th>
              <th className="px-6 py-4 font-label-bold">تاريخ النشر</th>
              <th className="px-6 py-4 font-label-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {posts.map((post) => (
              <tr key={post._id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-6 py-4">
                  {post.image ? (
                    <img src={post.image} alt={post.title} className="w-16 h-12 object-cover rounded-lg border border-outline" />
                  ) : (
                    <div className="w-16 h-12 bg-surface-variant rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined text-on-surface-variant">image</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4 font-bold text-primary">{post.title}</td>
                <td className="px-6 py-4">
                  <span className="bg-secondary-container text-white px-3 py-1 rounded-full text-xs">{post.category || 'عام'}</span>
                </td>
                <td className="px-6 py-4 text-on-surface-variant dir-ltr text-right">{new Date(post.createdAt || Date.now()).toLocaleDateString("ar-EG")}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button onClick={() => handleEditClick(post)} className="p-2 text-primary hover:bg-primary-container rounded-lg"><span className="material-symbols-outlined">edit</span></button>
                  <button onClick={() => handleDelete(post._id)} className="p-2 text-error hover:bg-error-container rounded-lg"><span className="material-symbols-outlined">delete</span></button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={5} className="text-center py-8 text-on-surface-variant">لا توجد مقالات مضافة بعد.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
