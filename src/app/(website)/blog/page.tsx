import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/actions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "المدونة - بيارات الرياض",
  description: "اكتشف مقالات تعليمية ونصائح احترافية حول صيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض مقدمة من خبراء بيارات الرياض.",
  openGraph: {
    title: "المدونة - بيارات الرياض",
    description: "اكتشف مقالات تعليمية ونصائح احترافية حول صيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض مقدمة من خبراء بيارات الرياض.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "المدونة - بيارات الرياض",
    description: "اكتشف مقالات تعليمية ونصائح احترافية حول صيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض مقدمة من خبراء بيارات الرياض.",
  }
};

export default async function Blog() {
  const posts = await getPosts();
  
  // Use the newest post as the featured article, and the rest in the grid
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const gridPosts = posts.length > 1 ? posts.slice(1) : [];

  // Construct JSON-LD Schema for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "مدونة بيارات الرياض",
    "description": "مدونة بيارات الرياض: نصائح وحلول لبيئة أنظف وصيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض.",
    "url": "https://www.byaratriyadh.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "بيارات الرياض",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.byaratriyadh.com/icon.svg"
      }
    },
    "blogPost": posts.map((p: any) => ({
      "@type": "BlogPosting",
      "headline": p.title,
      "datePublished": new Date(p.createdAt || Date.now()).toISOString(),
      "dateModified": new Date(p.updatedAt || p.createdAt || Date.now()).toISOString(),
      "description": p.excerpt,
      "url": `https://www.byaratriyadh.com/blog/${p._id}`,
      "image": p.image ? [p.image] : []
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        {/* Hero Section */}
        <section className="py-stack-lg text-center" data-aos="fade-up">
          <h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm max-w-4xl mx-auto">مدونة بيارات الرياض: نصائح وحلول لبيئة أنظف</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            اكتشف مقالات تعليمية ونصائح احترافية حول صيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض.
          </p>
        </section>

        {/* Featured Article */}
        {featuredPost && (
          <section className="mb-stack-lg" data-aos="fade-up" data-aos-delay="100">
            <article className="relative w-full h-[500px] rounded-xl overflow-hidden group">
              <img 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                alt={featuredPost.title} 
                src={featuredPost.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuAx88XBNpoHmloeR3p8IhfSCn8nLXAPc74leqKmTUGLTM6Um1IPxG1NYf_6wrE-rQDAY21pexoca6LlsU-Sx3YGHlvK7zwT8DrGpgw7Jv-YwNlXaHv9aUZI0D4FY_dvn2tINJgSww03TxOWeWFjnHtif7T0sQuj4wOKrwtoRD7rbj1ydACPG4Icopwdg6H70S2h1ctEXZybMUKf8PxGKQRhxgxaQdkT7Ifkd5BG4R4m7XFwjooyeouUFEVXjKRrNBdQuFL0WmcWe-DN"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
              <div className="absolute bottom-0 p-stack-lg text-white w-full md:w-2/3">
                <span className="inline-block bg-secondary text-white px-3 py-1 rounded-full text-label-bold mb-4">أحدث المقالات • {featuredPost.category}</span>
                <h2 className="font-headline-lg text-headline-lg mb-4">{featuredPost.title}</h2>
                <p className="font-body-md text-body-md mb-6 opacity-90">{featuredPost.excerpt}</p>
                <Link href={`/blog/${featuredPost._id}`} className="bg-secondary-fixed text-white-fixed px-8 py-3 rounded-lg font-cta text-cta inline-flex w-max items-center gap-2 hover:bg-secondary-fixed-dim transition-colors active:scale-95">
                  اقرأ المزيد
                  <span className="material-symbols-outlined">arrow_back</span>
                </Link>
              </div>
            </article>
          </section>
        )}

        {/* Categories Filter */}
        <section className="mb-stack-md" data-aos="fade-up">
          <div className="flex flex-wrap items-center gap-4 border-b border-outline-variant pb-stack-sm">
            <button className="px-6 py-2 bg-primary text-white rounded-full font-label-bold">الكل</button>
            <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">نصائح الصيانة</button>
            <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">الصحة العامة</button>
            <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">البيئة</button>
          </div>
        </section>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-stack-lg" data-aos="fade-up">
          {gridPosts.map((post: any) => (
            <div key={post._id} className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                className="w-full h-48 object-cover" 
                alt={post.title} 
                src={post.image || "https://lh3.googleusercontent.com/aida-public/AB6AXuC8_NWMC6jzuFob-VJYJzaJpZ-am7fWduu70Qpwyr99OvneEdmAR9ZPFbsUG4Y0jOIUKnNvutZhhg9pLqiHixdjO_q-C-SFqJj6L3l9zv5GveGKov3gdfc810ZfeNGx6mD9Y8q1yU8IcWIxgJJgkGTRXVrM8s-8P_Vfug52az_gQ_1Uf8tFKfSmER78JG69R-tjNfjMawZWrVYQ-k8ElxCy9w3Bi2A_uZopGG9xMCyaMGe5u7BMxQCY3eV3YK9KnyIwCAb9PGoalKWK"}
              />
              <div className="p-stack-md">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-secondary font-label-bold text-label-bold">{post.category || "عام"}</span>
                  <span className="text-on-surface-variant text-sm opacity-70 dir-ltr text-right">
                    {new Date(post.createdAt || Date.now()).toLocaleDateString("ar-EG")}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-primary mb-2">{post.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href={`/blog/${post._id}`} className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all inline-block w-max">
                  <span>اقرأ المزيد</span>
                  <span className="material-symbols-outlined">chevron_left</span>
                </Link>
              </div>
            </div>
          ))}
          {posts.length === 0 && (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12 text-on-surface-variant">
              لا توجد مقالات منشورة حالياً. يرجى العودة لاحقاً.
            </div>
          )}
        </section>
{/* CTA Section */}
<section className="bg-primary-container rounded-2xl p-stack-lg text-center mb-stack-lg border border-primary relative overflow-hidden" data-aos="zoom-in">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg text-white mb-4">هل تحتاج إلى مساعدة فورية؟</h2>
<p className="font-body-lg text-body-lg text-white mb-8 max-w-xl mx-auto">فريق الطوارئ متاح على مدار الساعة للتعامل مع كافة مشاكل الصرف الصحي والفيضانات في الرياض.</p>
<div className="flex flex-col md:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-3 bg-secondary-fixed text-white-fixed px-10 py-4 rounded-xl font-cta text-cta hover:bg-secondary-fixed-dim transition-colors group" href="tel:+966583165533">
<span className="material-symbols-outlined group-hover:animate-pulse">phone_in_talk</span>
                        اتصل الآن للطوارئ
                    </a>
<Link href="/contact" className="inline-flex items-center justify-center gap-3 border-2 border-on-primary text-white px-10 py-4 rounded-xl font-cta text-cta hover:bg-on-primary/10 transition-colors">
                        طلب تسعيرة صيانة
                    </Link>
</div>
</div>
</section>
</main>

    </>
  );
}
