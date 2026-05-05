import { getPostById, getPosts } from "@/lib/actions";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  if (!post) return { title: "مقال غير موجود" };
  
  return {
    title: `${post.title} - بيارات الرياض`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    }
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);
  
  if (!post) {
    notFound();
  }

  // Get recent posts for the sidebar
  const allPosts = await getPosts();
  const recentPosts = allPosts.filter((p: any) => p._id.toString() !== post._id.toString()).slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-sm font-label-bold text-on-surface-variant">
              <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full">{post.category || "عام"}</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">calendar_today</span> {new Date(post.createdAt || Date.now()).toLocaleDateString("ar-EG")}</span>
              <span className="flex items-center gap-1"><span className="material-symbols-outlined text-sm">visibility</span> {post.views || 0} قراءة</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-headline-xl text-primary leading-tight font-black">{post.title}</h1>
          </div>

          {post.image && (
            <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg relative">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="prose prose-lg prose-slate max-w-none text-on-surface-variant leading-relaxed">
            {/* The content could be HTML or just text. For now, we'll render it safely. If the admin used a rich text editor, dangerouslySetInnerHTML should be used. */}
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          </div>

          {/* Share Section */}
          <div className="border-t border-outline-variant pt-8 mt-12 flex items-center justify-between">
            <span className="font-bold text-primary">شارك المقال:</span>
            <div className="flex gap-4">
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=`} target="_blank" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733590.png" className="w-4 h-4 opacity-70 hover:opacity-100" style={{filter: 'invert(0)'}} />
              </a>
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title)}`} target="_blank" className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" className="w-4 h-4 opacity-70 hover:opacity-100" style={{filter: 'invert(0)'}} />
              </a>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6">
            <h3 className="text-xl font-bold text-primary mb-4 border-b border-outline-variant pb-2">مقالات ذات صلة</h3>
            <div className="space-y-4">
              {recentPosts.length > 0 ? recentPosts.map((p: any) => (
                <Link href={`/blog/${p._id}`} key={p._id} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                    <img src={p.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuAx88XBNpoHmloeR3p8IhfSCn8nLXAPc74leqKmTUGLTM6Um1IPxG1NYf_6wrE-rQDAY21pexoca6LlsU-Sx3YGHlvK7zwT8DrGpgw7Jv-YwNlXaHv9aUZI0D4FY_dvn2tINJgSww03TxOWeWFjnHtif7T0sQuj4wOKrwtoRD7rbj1ydACPG4Icopwdg6H70S2h1ctEXZybMUKf8PxGKQRhxgxaQdkT7Ifkd5BG4R4m7XFwjooyeouUFEVXjKRrNBdQuFL0WmcWe-DN"} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary text-sm group-hover:text-secondary line-clamp-2">{p.title}</h4>
                    <span className="text-xs text-on-surface-variant mt-1 block">{new Date(p.createdAt || Date.now()).toLocaleDateString("ar-EG")}</span>
                  </div>
                </Link>
              )) : (
                <div className="text-sm text-on-surface-variant">لا توجد مقالات أخرى حالياً.</div>
              )}
            </div>
          </div>

          <div className="bg-primary text-white rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 space-y-4">
              <span className="material-symbols-outlined text-4xl text-secondary">support_agent</span>
              <h3 className="text-xl font-bold">هل تحتاج لخدمة طوارئ؟</h3>
              <p className="text-sm opacity-90">فريقنا مستعد لتلبية طلبك على مدار 24 ساعة في كافة أحياء الرياض.</p>
              <a href="tel:+966583165533" className="block w-full bg-secondary text-white py-3 rounded-lg font-bold hover:bg-secondary/90 transition-colors">اتصل بنا الآن</a>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
