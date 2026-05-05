import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      
<main className="max-w-7xl mx-auto px-8 py-12">
{/* Hero Section */}
<section className="mb-stack-lg grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-aos="fade-up">
<div>
<span className="inline-flex items-center gap-2 bg-secondary-container text-white px-3 py-1 rounded-full text-label-bold mb-4">
<span className="material-symbols-outlined text-sm" data-icon="check_circle" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    متاح الآن في جميع أحياء الرياض
                </span>
<h1 className="font-headline-xl text-headline-xl text-primary mb-6 leading-tight">طلب خدمة شفط وتسليك سريعة</h1>
<p className="text-body-lg text-on-surface-variant mb-8 max-w-xl">
                    نحن في بيارات الرياض نوفر حلولاً صناعية دقيقة لخدمات الصرف الصحي. فريقنا مجهز بأحدث الشاحنات الثقيلة للتعامل مع كافة حالات الطوارئ على مدار 24 ساعة.
                </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<a className="flex items-center justify-center gap-3 bg-primary text-white py-4 px-6 rounded-xl font-cta text-cta hover:bg-primary-container transition-all" href="tel:966583165533">
<span className="material-symbols-outlined" data-icon="call">call</span>
                        اتصال مباشر
                    </a>
<a className="flex items-center justify-center gap-3 bg-secondary text-white py-4 px-6 rounded-xl font-cta text-cta hover:opacity-90 transition-all" href="https://wa.me/966583165533">
<span className="material-symbols-outlined" data-icon="chat">chat</span>
                        واتساب سريع
                    </a>
</div>
</div>
<div className="relative h-[400px] rounded-3xl overflow-hidden border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A professional high-angle shot of a heavy-duty industrial sewage vacuum truck parked on a clean Riyadh street during a bright day. The truck is pristine with professional company branding in deep blue and white. The background shows modern urban infrastructure under a clear blue sky, emphasizing a clean and reliable service environment. The lighting is crisp and high-contrast, highlighting the metallic precision of the equipment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUydFWTkr6rwYxbeV-hhwZ4nohtiyKuaHgooW30-20AK-poVSDdTWnZ2pbwzYh6EcWLlJQJ2sbJ_WA7ttaofpZp_5eQ8nA7zGSRpyXWsxjOFu8pLKlsCV2BM3UHKZykfluS8srI8D4F-S2zsAlipDubty8q_mvPhd-tnc0bN7JtXGwIJT-_-7I_2zYpO8DL4aG0T9C1Nqq8Rx52X9zQCtl8RV9jrW0osf9sYId_vttmNyLqCRtAHfjqin7qi1fybAhHqg1teKDJTEj"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
<div className="absolute bottom-6 right-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl flex items-center justify-between">
<div>
<p className="text-sm font-bold text-primary">جاهزية تامة</p>
<p className="text-xs text-on-surface-variant">أكثر من 50 شاحنة في الخدمة</p>
</div>
<span className="material-symbols-outlined text-secondary text-4xl" data-icon="verified_user" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
</div>
</div>
</section>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
{/* Request Form (2/3 width on desktop) */}
<div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-primary-fixed rounded-xl flex items-center justify-center text-primary">
<span className="material-symbols-outlined" data-icon="assignment_late">assignment_late</span>
</div>
<div>
<h2 className="text-headline-md font-headline-md text-primary">نموذج طلب خدمة طارئة</h2>
<p className="text-sm text-on-surface-variant">يرجى تعبئة البيانات وسيتم التواصل معك خلال 5 دقائق</p>
</div>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-label-bold text-on-surface">الاسم بالكامل</label>
<input className="w-full p-3 rounded-lg border-slate-200 focus:border-primary focus:ring-primary bg-slate-50" placeholder="أدخل اسمك" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-label-bold text-on-surface">رقم الجوال</label>
<input className="w-full p-3 rounded-lg border-slate-200 focus:border-primary focus:ring-primary bg-slate-50 text-left" dir="ltr" placeholder="05XXXXXXXX" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-label-bold text-on-surface">نوع الخدمة</label>
<select className="w-full p-3 rounded-lg border-slate-200 focus:border-primary focus:ring-primary bg-slate-50">
<option>شفط بيارات</option>
<option>تسليك مجاري</option>
<option>تنظيف خزانات</option>
<option>صيانة سباكة عامة</option>
</select>
</div>
<div className="space-y-2">
<label className="block text-label-bold text-on-surface">الحي (في الرياض)</label>
<input className="w-full p-3 rounded-lg border-slate-200 focus:border-primary focus:ring-primary bg-slate-50" placeholder="مثال: حي الصحافة، حي الملقا..." type="text"/>
</div>
</div>
<div className="space-y-4">
<label className="block text-label-bold text-on-surface">مستوى الاستعجال</label>
<div className="grid grid-cols-3 gap-4">
<label className="cursor-pointer">
<input defaultChecked className="hidden peer" name="urgency" type="radio"/>
<div className="p-4 text-center rounded-xl border-2 border-slate-200 peer-checked:border-primary peer-checked:bg-primary-fixed transition-all">
<span className="block font-bold">عادي</span>
<span className="text-xs">خلال 24 ساعة</span>
</div>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="urgency" type="radio"/>
<div className="p-4 text-center rounded-xl border-2 border-slate-200 peer-checked:border-secondary peer-checked:bg-secondary-container transition-all">
<span className="block font-bold">عاجل</span>
<span className="text-xs">خلال 4 ساعات</span>
</div>
</label>
<label className="cursor-pointer">
<input className="hidden peer" name="urgency" type="radio"/>
<div className="p-4 text-center rounded-xl border-2 border-slate-200 peer-checked:border-error peer-checked:bg-error-container transition-all">
<span className="block font-bold">طارئ جداً</span>
<span className="text-xs">فوراً - حالة حرجة</span>
</div>
</label>
</div>
</div>
<button className="w-full bg-primary text-white py-4 rounded-xl font-cta text-cta hover:bg-primary-container transition-all flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined" data-icon="send">send</span>
                        إرسال طلب الخدمة
                    </button>
</form>
</div>
{/* Sidebar Info */}
<div className="space-y-8">
{/* 24/7 Card */}
<div className="bg-primary-container text-white p-8 rounded-3xl relative overflow-hidden">
<div className="relative z-10">
<span className="material-symbols-outlined text-5xl mb-4 text-white" data-icon="schedule" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
<h3 className="text-headline-md font-headline-md mb-2">نعمل على مدار الساعة</h3>
<p className="text-white leading-relaxed">
                            فريق الطوارئ لدينا متواجد في كافة مناوبات الليل والنهار، حتى في العطلات الرسمية لضمان سلامة منزلك.
                        </p>
</div>
<div className="absolute -bottom-4 -left-4 opacity-10">
<span className="material-symbols-outlined text-[120px]" data-icon="support_agent">support_agent</span>
</div>
</div>
{/* Locations Card */}
<div className="bg-white p-8 rounded-3xl border border-slate-200">
<h3 className="text-headline-sm font-bold text-primary mb-6 flex items-center gap-2">
<span className="material-symbols-outlined text-secondary" data-icon="location_on">location_on</span>
                        تغطية شاملة للرياض
                    </h3>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                            شمال الرياض (الياسمين، الملقا، النرجس)
                        </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                            شرق الرياض (الرمال، النسيم، الروضة)
                        </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                            غرب الرياض (الشفا، السويدي، لبن)
                        </li>
<li className="flex items-center gap-3 text-on-surface-variant">
<span className="w-2 h-2 bg-secondary rounded-full"></span>
                            وسط وجنوب الرياض
                        </li>
</ul>
<div className="mt-8 pt-8 border-t border-slate-100 h-48 rounded-xl overflow-hidden grayscale">
<img className="w-full h-full object-cover" data-alt="A clean, minimalist map illustration showing the city of Riyadh with professional data points and network lines connecting different districts. The map is rendered in corporate blue and gray tones, emphasizing service coverage and logistical efficiency. The style is modern, technical, and clean, perfectly fitting an industrial service provider's website." src="https://lh3.googleusercontent.com/aida-public/AB6AXuASg_dy3rV8zHRzUaK_J3g0P9E7IBLJIRFD503wzl4YwUMHwVO_EkwUNv7tRQoQ8m0Oqc5SLhTYK4Mw5RLMGFWUH1EtKySQeL81Si-D-Nxw_gl22aGeWZfCoDu5wHeGvJmJgfaZR1I3jiWF46Sa81ORYmF4mt55eYeafN36jfuEXPNqkryHYRksRkRmPiD69Ze8j9TdmNW17GmH1xjVTB118xQ0L9rwXqh8ljxXZODYLWAgZLEaiV5RE73YHMJKYXbjmSYqKrNrII4p"/>
</div>
</div>
{/* Trust Badges */}
<div className="flex flex-wrap justify-center gap-6 py-4 opacity-60 grayscale hover:grayscale-0 transition-all">
<span className="material-symbols-outlined text-4xl" data-icon="health_and_safety">health_and_safety</span>
<span className="material-symbols-outlined text-4xl" data-icon="gavel">gavel</span>
<span className="material-symbols-outlined text-4xl" data-icon="workspace_premium">workspace_premium</span>
</div>
</div>
</div>
</main>

    </>
  );
}
