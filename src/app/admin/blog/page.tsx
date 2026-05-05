"use client";

import { useState, useEffect } from "react";
import { getPosts, addPost, deletePost } from "@/lib/actions";

export default function BlogSettingsPage() {
  const [posts, setPosts] = useState<any[]>([]);
  const [showAdd, setShowAdd] = useState(false);
  const [newPost, setNewPost] = useState({ title: "", content: "" });

  const loadPosts = async () => {
    const data = await getPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    await addPost(newPost);
    setShowAdd(false);
    setNewPost({ title: "", content: "" });
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
        <button onClick={() => setShowAdd(true)} className="bg-primary text-on-primary px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all">
          <span className="material-symbols-outlined">post_add</span>
          مقال جديد
        </button>
      </div>
      
      {showAdd && (
        <form onSubmit={handleAdd} className="bg-surface-container-low p-6 rounded-2xl mb-8 border border-outline-variant grid grid-cols-1 gap-4">
          <input required placeholder="عنوان المقال" className="p-3 rounded-lg border w-full" value={newPost.title} onChange={e => setNewPost({...newPost, title: e.target.value})} />
          <textarea required placeholder="محتوى المقال..." className="p-3 rounded-lg border w-full h-32" value={newPost.content} onChange={e => setNewPost({...newPost, content: e.target.value})} />
          <div className="flex gap-4">
            <button type="submit" className="bg-primary text-white px-6 py-2 rounded-xl">نشر المقال</button>
            <button type="button" onClick={() => setShowAdd(false)} className="text-error px-6 py-2">إلغاء</button>
          </div>
        </form>
      )}

      <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden">
        <table className="w-full text-right">
          <thead>
            <tr className="bg-surface-container-low border-b border-outline-variant text-on-surface-variant">
              <th className="px-6 py-4 font-label-bold">عنوان المقال</th>
              <th className="px-6 py-4 font-label-bold">تاريخ النشر</th>
              <th className="px-6 py-4 font-label-bold">المشاهدات</th>
              <th className="px-6 py-4 font-label-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant">
            {posts.map((post) => (
              <tr key={post._id} className="hover:bg-surface-container-low/50 transition-colors">
                <td className="px-6 py-4 font-bold text-primary">{post.title}</td>
                <td className="px-6 py-4 text-on-surface-variant dir-ltr text-right">{new Date(post.createdAt || Date.now()).toLocaleDateString("ar-EG")}</td>
                <td className="px-6 py-4 text-secondary font-bold">{post.views || 0}</td>
                <td className="px-6 py-4 flex justify-center gap-2">
                  <button onClick={() => handleDelete(post._id)} className="p-2 text-error hover:bg-error-container rounded-lg"><span className="material-symbols-outlined">delete</span></button>
                </td>
              </tr>
            ))}
            {posts.length === 0 && (
              <tr><td colSpan={4} className="text-center py-8 text-on-surface-variant">لا توجد مقالات مضافة بعد.</td></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
