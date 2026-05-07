import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/AnimatedCounter";
import HeroCarousel from "@/components/HeroCarousel";
import { getSettings } from "@/lib/actions";

export default async function Home() {
  const settings = await getSettings();
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "شفط بيارات وتسليك مجاري بالرياض",
        "provider": {
          "@type": "LocalBusiness",
          "name": "بيارات الرياض",
          "url": "https://www.byaratriyadh.com"
        },
        "areaServed": {
          "@type": "City",
          "name": "الرياض"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "هل توفرون خدمة شفط بيارات 24 ساعة بالرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "نعم، نقدم خدمات شفط بيارات وتسليك مجاري على مدار 24 ساعة في جميع أحياء الرياض للتعامل مع الحالات الطارئة."
            }
          },
          {
            "@type": "Question",
            "name": "كم سعر وايت شفط الصرف الصحي بالرياض؟",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "تعتمد الأسعار على حجم الوايت ونوع المشكلة، لكننا نتميز بتقديم أفضل أسعار شركات شفط البيارات بالرياض مع ضمان جودة الخدمة."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
<HeroCarousel settings={settings} />
{/* Trust Section (Why Choose Us) - Bento Layout */}
<section className="py-24 max-w-7xl mx-auto px-8" data-aos="fade-up">
<div className="text-center mb-16 space-y-4">
<h2 className="font-headline-lg text-headline-lg text-primary">لماذا تختار بيارات الرياض؟</h2>
<div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="md:col-span-2 group relative overflow-hidden bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="w-full md:w-1/2 space-y-4">
<div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>speed</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">استجابة فائقة السرعة</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                            ندرك أن مشاكل الصرف الصحي لا تحتمل التأجيل، لذا نضمن وصول فريقنا إليكم في غضون 30 دقيقة من الاتصال في أي مكان بالرياض.
                        </p>
</div>
<div className="w-full md:w-1/2 aspect-video rounded-2xl overflow-hidden relative">
<Image fill className="object-cover" alt="شركة شفط بيارات بالرياض واستجابة سريعة" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD5PPCfKQ299mJnjQYRma4X1qI7rJMnNVXayYacRwANJOeZ7xhZ8L4TmabwfA2r7m8B_bjv8uwWbgs1wosW6yRsITydln3AiLzHAjEk14EXTESGX2WmaGpJflI1lqf3ff1Rlce3tpGbV9N2oUebrSzjCxYjVd420bNnvISOmF2mk2NF76beWIvk5GLsnnDBjlCX2BIrUO0-g2nsKFI-VIjbWxA6h4nurKNe2tQOqBcXJlKI-vYqbeOPm2NP0dJnpIzYU7go6lwNqV2"/>
</div>
</div>
</div>
<div className="bg-primary p-8 rounded-3xl border border-primary text-white flex flex-col justify-between">
<div className="space-y-4">
<div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-white">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
</div>
<h3 className="font-headline-md text-headline-md">أسطول متطور</h3>
<p className="font-body-md text-body-md opacity-80">
                        نستخدم أحدث وايتات الشفط ذات القدرة العالية لضمان إفراغ البيارات تماماً دون أي تسريب أو روائح.
                    </p>
</div>
<div className="pt-6">
<div className="flex -space-x-4 space-x-reverse">
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-200"></div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-300"></div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-slate-400"></div>
<div className="w-10 h-10 rounded-full border-2 border-primary bg-white flex items-center justify-center text-primary text-[10px] font-bold" dir="ltr">
  <AnimatedCounter to={50} prefix="+" />
</div>
</div>
</div>
</div>
<div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant hover:border-secondary/50 transition-colors">
<div className="space-y-4">
<div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>cleaning_services</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary">تنظيف شامل</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
                        خدماتنا لا تقتصر على الشفط فقط، بل تشمل تنظيف وتعقيم الموقع لضمان بيئة صحية وآمنة لعائلتكم.
                    </p>
</div>
</div>
<div className="md:col-span-2 group relative overflow-hidden bg-secondary p-8 rounded-3xl border border-secondary shadow-lg">
<div className="flex flex-col md:flex-row gap-8 items-center">
<div className="w-full md:w-1/2 space-y-4 text-white">
<div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
<span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>health_and_safety</span>
</div>
<h3 className="font-headline-md text-headline-md">بيئة آمنة وصحية</h3>
<p className="font-body-md text-body-md opacity-90">
                            نلتزم بأعلى معايير السلامة البيئية في التخلص من النفايات، مما يحمي منزلك والحي المحيط من الأوبئة والروائح الكريهة.
                        </p>
</div>
<div className="w-full md:w-1/2 flex justify-center">
<span className="material-symbols-outlined text-[120px] text-white opacity-20">shield_with_heart</span>
</div>
</div>
</div>
</div>
</section>
{/* Services Preview Section */}
<section className="bg-slate-50 py-24" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-8">
<div className="flex justify-between items-end mb-12">
<div className="space-y-2">
<span className="text-secondary font-bold text-label-bold">خدماتنا المتخصصة</span>
<h2 className="font-headline-lg text-headline-lg text-primary">حلول متكاملة للصرف الصحي</h2>
</div>
<Link href="/services" className="hidden md:flex text-primary font-cta text-cta items-center gap-2 hover:gap-4 transition-all">
                    عرض جميع الخدمات
                    <span className="material-symbols-outlined">arrow_back</span>
</Link>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Service 1 */}
<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group hover:-translate-y-2 transition-all duration-300">
<div className="h-56 relative overflow-hidden">
<Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt="وايت شفط بالرياض" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOveb0JXXVQoIiqKb8R-V84kDHSGM2awxJo9LfszkuPsD9dqiVH57wsJMjVwuw4iWe1j8GSC-rPlBzJHLhgBQEJUjWcj76mMrw8iNNfEAS3Bfjkjkh4RTIWID9i8Yk896RW_Kgs7yBAwhcMnmaO8ganawnvIA4NvPXv4CHN5z_Wxt7OuvHV40R6lxpV47inkQd7DMKHEJe-yVZ5jK18K7Gi_gcH3_wqSNnHqB_awcgvizoHKOyiDaU4OHUOyQjmGuesG8ceoyf5j6"/>
<div className="absolute top-4 right-4 bg-emerald-500 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                            متاح الآن
                        </div>
</div>
<div className="p-8 space-y-4">
<h3 className="font-headline-md text-headline-md text-primary">خدمات الشفط</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                شفط بيارات بمختلف الأحجام
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                تفريغ غرف التفتيش الرئيسية
                            </li>
</ul>
</div>
</div>
{/* Service 2 */}
<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group hover:-translate-y-2 transition-all duration-300">
<div className="h-56 relative overflow-hidden">
<Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt="تنظيف بيارات بالرياض" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5uwptGI6KpQ_-g7AFl4fqjD3-2VvyBYnD6kMBy-1mZd5653N0QUa8CFR38PxnKbWVF4HNfQnIIufFhmKNjRBU-T_wtaWS3CA5-edNxD92DsL0YNiVPuAfA1GVcKwmjhtt_nD7xzf7-TLgkxqDOgPH1nv30YU3Pe3tP_yhU87iY8r2jMl32bR6FCCuN05fiB8Gnui0qkEoV4GPPXmUIw879D2AwGl0FguZf_NfPVmC-ITjc-Smy9HuelHbzQkyIGHvpvJYRpJ2aCBF"/>
</div>
<div className="p-8 space-y-4">
<h3 className="font-headline-md text-headline-md text-primary">تنظيف الخزانات</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                تنظيف وتعقيم الخزانات العلوية
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                غسيل خزانات أرضية بمواد آمنة
                            </li>
</ul>
</div>
</div>
{/* Service 3 */}
<div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm group hover:-translate-y-2 transition-all duration-300">
<div className="h-56 relative overflow-hidden">
<Image fill className="object-cover group-hover:scale-110 transition-transform duration-500" alt="تسليك مجاري بالرياض" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PN3k2-j6pqJaoDL6VyPY2rAQp_fQ4w7cwyWjuTcXylNc259eWwVflMPnf93yHWKiutLX2pwluYYXWaoHJ4iiNKm1Mi8fUFanWiQh0f6JqJXxKUBHnl-jOUZoI1pc9awH9DYyAEUTTFq620oM3oQ-DXYGFx3Y0GRZGlNk9blsgAVdN6GMLLImSvf-IXH-OJl7CUVZGOYeM09K4SL1PuQLiIIbwu3Fa2C8NSrRdpw_ALjLM10aynnYDFsSJrFHRRRiUirCbVsb7bxM"/>
</div>
<div className="p-8 space-y-4">
<h3 className="font-headline-md text-headline-md text-primary">صيانة السباكة</h3>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                كشف تسربات المياه إلكترونياً
                            </li>
<li className="flex items-center gap-3 text-on-surface-variant font-body-md">
<span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                                إصلاح وتغيير خطوط الصرف
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>
{/* Urgent CTA Section */}
<section className="py-20" data-aos="zoom-in">
<div className="max-w-5xl mx-auto px-8">
<div className="bg-primary-container rounded-[2.5rem] p-12 text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-secondary/20 to-transparent opacity-50"></div>
<div className="relative z-10 space-y-8">
<div className="flex justify-center">
<div className="w-16 h-16 bg-error/20 rounded-full flex items-center justify-center">
<span className="material-symbols-outlined text-error text-3xl animate-pulse">warning</span>
</div>
</div>
<h2 className="font-headline-lg text-headline-lg text-white">لا تنتظر الكارثة، نحن متاحون على مدار الساعة</h2>
<p className="font-body-lg text-body-lg text-white max-w-2xl mx-auto">
                        انسداد البيارات قد يؤدي إلى أضرار جسيمة في البنية التحتية وانتشار الروائح. اتصل بنا الآن ليرسل لك فريقنا أقرب وايت شفط لموقعك.
                    </p>
<div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4">
<a className="bg-secondary text-white px-10 py-5 rounded-2xl font-cta text-headline-md shadow-2xl flex items-center gap-4 hover:scale-105 transition-transform" href="tel:966583165533">
<span className="material-symbols-outlined">phone_forwarded</span>
                            966583165533
                        </a>
<div className="text-white/60 font-body-md flex items-center gap-2">
<span className="material-symbols-outlined text-emerald-400">check</span>
                            دعم فني مباشر متوفر الآن
                        </div>
</div>
</div>
</div>
</div>
</section>

{/* SEO Text Block & Neighborhood Links */}
<section className="bg-white py-16 border-t border-slate-100">
  <div className="max-w-7xl mx-auto px-8">
    <div className="prose prose-lg prose-slate max-w-none text-on-surface-variant mb-12">
      <h1 className="text-primary font-headline-lg text-3xl mb-4">أفضل شركة شفط بيارات بالرياض</h1>
      <p>
        إذا كنت تبحث عن <strong>شركة شفط بيارات بالرياض</strong> ذات مصداقية عالية وسرعة استجابة، فإن "بيارات الرياض" هي خيارك الأول. نحن نوفر <strong>وايت شفط بالرياض</strong> مجهز بأحدث تقنيات الشفط وسحب المياه لحل مشكلة طفح البيارات بشكل جذري.
      </p>
      <h2 className="text-primary font-headline-md text-2xl mt-8 mb-4">لماذا نحن أفضل شركة تنظيف وتسليك مجاري بالرياض؟</h2>
      <p>
        بفضل الله ثم بخبرة فريقنا، نقدم خدمات متكاملة تشمل <strong>شفط صرف صحي الرياض</strong>، <strong>تسليك مجاري بالرياض</strong>، وتخليص أنابيب الصرف من الدهون والتراكمات الصلبة التي تسبب الانسداد المتكرر. فريقنا مستعد لتقديم خدمات <strong>شفط بيارات 24 ساعة بالرياض</strong> في أوقات الطوارئ، وكل ذلك بأسعار تنافسية. بمجرد الاتصال على <strong>رقم شفط بيارات بالرياض</strong> الموضح بالموقع، يتم توجيه أقرب فريق إليك فوراً.
      </p>
    </div>

    <div className="space-y-4">
      <h3 className="text-secondary font-headline-md text-xl">تغطيتنا في أحياء الرياض (Local SEO)</h3>
      <div className="flex flex-wrap gap-3">
        {['الياسمين', 'النرجس', 'الرمال', 'العارض', 'السويدي', 'النسيم', 'الروضة', 'المونسية'].map((neighborhood) => (
          <Link key={neighborhood} href={`/riyadh/al-${neighborhood === 'الياسمين' ? 'yasmin' : neighborhood === 'النرجس' ? 'narjis' : neighborhood === 'الرمال' ? 'rimal' : neighborhood === 'العارض' ? 'arid' : neighborhood === 'السويدي' ? 'suwaidi' : neighborhood === 'النسيم' ? 'naseem' : neighborhood === 'الروضة' ? 'rawdah' : 'munsiyah'}`} className="px-4 py-2 bg-surface-container-low text-primary rounded-full hover:bg-secondary hover:text-white transition-colors border border-outline-variant text-sm font-label-bold">
            شفط بيارات حي {neighborhood}
          </Link>
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
}
