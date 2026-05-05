import Image from "next/image";
import Link from "next/link";
import { getServices } from "@/lib/actions";

export default async function Services() {
  const services = await getServices();

  return (
    <>
      <main>
        {/* Hero Section */}
        <section className="relative bg-primary-container text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 py-24 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary text-white text-sm font-bold mb-6">متاح الآن 24/7</span>
              <h1 className="font-headline-xl text-headline-xl mb-6 leading-tight">خدمات دروب القمة الاحترافية لصيانة وشفط البيارات بالرياض</h1>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-8">حلول هندسية متكاملة لشفط البيارات، تنظيف الخزانات، وصيانة السباكة بأحدث المعدات الألمانية وفريق فني متخصص.</p>
              <div className="flex flex-wrap gap-4">
                <a href="tel:966583165533" className="bg-on-tertiary-container text-primary px-8 py-4 rounded-xl font-cta text-cta flex items-center gap-2">
                  <span className="material-symbols-outlined" data-icon="phone_in_talk">phone_in_talk</span>
                  اطلب الخدمة فوراً
                </a>
                <Link href="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-cta text-cta hover:bg-white/10 transition-colors">عرض قائمة الأسعار</Link>
              </div>
            </div>
          </div>
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover opacity-30" alt="hero bg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBYbha6yy9bfKbIINgcWBO6PRngQH4AAwqek31NiCbnId1LLsBx7ZScgR8J45G865M4Y3LkedRp2j9z4E_zoEFIYznOQCCV6FmrbQYoYUWIjYglJSQt61KUnXOnFBa1uUJAr66pfBz2kU4JbBZI3G9jc4ZCrdQF071lLkoQg3cxWpEFkHk5ceXvAU5uCjvWs6hGH3zq40ne5R8wYnoybGw4By3-ic7KwAJW7uWb2JjEyvF-NkGQ-dP4sgqmu81CC2Mrf54VPEc0qyf"/>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent"></div>
          </div>
        </section>

        {/* Dynamic Services Grid */}
        <section className="max-w-7xl mx-auto px-8 py-24" data-aos="fade-up">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">خدماتنا الأساسية والإضافية</h2>
            <div className="w-24 h-1.5 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">نقدم مجموعة متكاملة من الخدمات لحل جميع مشاكل الصرف الصحي باستخدام أحدث التقنيات لضمان بيئة نظيفة وآمنة.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((srv: any, idx: number) => {
              const isEmergency = srv.title.includes("طوارئ");
              return (
                <div key={srv._id || idx} className={`group rounded-2xl border transition-all overflow-hidden ${isEmergency ? 'bg-error-container border-error/20 hover:shadow-xl' : 'bg-white border-slate-200 hover:shadow-xl hover:border-primary/20'}`}>
                  {srv.image && (
                    <div className="h-48 w-full overflow-hidden">
                      <img src={srv.image} alt={srv.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                  <div className="p-8">
                    {!srv.image && (
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${isEmergency ? 'bg-error' : 'bg-primary-fixed'}`}>
                        <span className={`material-symbols-outlined text-3xl ${isEmergency ? 'text-white' : 'text-primary'}`} data-icon={srv.icon}>{srv.icon}</span>
                      </div>
                    )}
                    <h3 className={`font-headline-md text-headline-md mb-4 ${isEmergency ? 'text-error' : 'text-primary'}`}>{srv.title}</h3>
                    <p className={`font-body-md mb-6 ${isEmergency ? 'text-on-error-container' : 'text-on-surface-variant'}`}>{srv.description || srv.desc}</p>
                    {isEmergency && (
                      <a className="inline-block bg-error text-white px-6 py-3 rounded-xl font-bold hover:bg-error/90 transition-colors" href="tel:+966583165533">اتصل للطوارئ</a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
{/* Process Section */}
<section className="bg-slate-50 dark:bg-slate-950 py-24" data-aos="fade-up">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">كيف نعمل؟ رحلة الخدمة</h2>
<p className="font-body-md text-body-md text-on-surface-variant">نتبع بروتوكولاً صارماً لضمان أعلى مستويات الجودة والنظافة خلال تنفيذ عمليات الشفط والصيانة.</p>
</div>
<div className="hidden md:block">
<span className="text-slate-300 text-6xl font-black">01-04</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
{/* Connector Line (Desktop) */}
<div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-slate-200 z-0"></div>
{/* Step 1 */}
<div className="relative z-10 text-center md:text-right">
<div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mx-auto md:mr-0 mb-6 border-4 border-white">١</div>
<h4 className="font-headline-md text-xl text-primary mb-3">الاتصال والطلب</h4>
<p className="font-body-md text-slate-600">نستقبل طلبكم عبر الهاتف أو الواتساب ونحدد الموقع بدقة عبر GPS.</p>
</div>
{/* Step 2 */}
<div className="relative z-10 text-center md:text-right">
<div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mx-auto md:mr-0 mb-6 border-4 border-white">٢</div>
<h4 className="font-headline-md text-xl text-primary mb-3">المعاينة الفنية</h4>
<p className="font-body-md text-slate-600">وصول الفني لتقييم حجم البيارة واكتشاف أي انسدادات في المواسير الرئيسية.</p>
</div>
{/* Step 3 */}
<div className="relative z-10 text-center md:text-right">
<div className="w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-xl mx-auto md:mr-0 mb-6 border-4 border-white">٣</div>
<h4 className="font-headline-md text-xl text-primary mb-3">الشفط الفوري</h4>
<p className="font-body-md text-slate-600">استخدام وايت الشفط المخصص لسحب الرواسب والمياه الملوثة بالكامل.</p>
</div>
{/* Step 4 */}
<div className="relative z-10 text-center md:text-right">
<div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mx-auto md:mr-0 mb-6 border-4 border-white">٤</div>
<h4 className="font-headline-md text-xl text-primary mb-3">التنظيف النهائي</h4>
<p className="font-body-md text-slate-600">غسيل المنطقة المحيطة وتعقيم غطاء البيارة لضمان عدم خروج روائح كريهة.</p>
</div>
</div>
</div>
</section>
{/* Trust Section */}
<section className="py-16 bg-white border-y border-slate-100" data-aos="zoom-in">
<div className="max-w-7xl mx-auto px-8">
<div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-4xl" data-icon="verified_user">verified_user</span>
<span className="font-bold text-slate-800">اعتماد البلدية</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-4xl" data-icon="security">security</span>
<span className="font-bold text-slate-800">شهادة آمان</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-4xl" data-icon="health_and_safety">health_and_safety</span>
<span className="font-bold text-slate-800">بيئة مستدامة</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-4xl" data-icon="engineering">engineering</span>
<span className="font-bold text-slate-800">كوادر فنية مدربة</span>
</div>
</div>
</div>
</section>
</main>

    </>
  );
}
