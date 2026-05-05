import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      
<main className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
{/* Hero Section */}
<section className="py-stack-lg text-center" data-aos="fade-up">
<h1 className="font-headline-xl text-headline-xl text-primary mb-stack-sm max-w-4xl mx-auto">مدونة دروب القمة: نصائح وحلول لبيئة أنظف</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
                اكتشف مقالات تعليمية ونصائح احترافية حول صيانة الصرف الصحي والمحافظة على سلامة منزلك في الرياض.
            </p>
</section>
{/* Featured Article */}
<section className="mb-stack-lg" data-aos="fade-up" data-aos-delay="100">
<article className="relative w-full h-[500px] rounded-xl overflow-hidden group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A high-pressure water jetting truck parked on a modern Riyadh street under clear blue skies. The professional equipment is glossy and well-maintained, reflecting the bright desert sun. Technicians in high-visibility safety gear are methodically organizing industrial hoses. The composition is clean and professional, conveying reliability and infrastructure expertise." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx88XBNpoHmloeR3p8IhfSCn8nLXAPc74leqKmTUGLTM6Um1IPxG1NYf_6wrE-rQDAY21pexoca6LlsU-Sx3YGHlvK7zwT8DrGpgw7Jv-YwNlXaHv9aUZI0D4FY_dvn2tINJgSww03TxOWeWFjnHtif7T0sQuj4wOKrwtoRD7rbj1ydACPG4Icopwdg6H70S2h1ctEXZybMUKf8PxGKQRhxgxaQdkT7Ifkd5BG4R4m7XFwjooyeouUFEVXjKRrNBdQuFL0WmcWe-DN"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
<div className="absolute bottom-0 p-stack-lg text-on-primary w-full md:w-2/3">
<span className="inline-block bg-secondary text-on-secondary px-3 py-1 rounded-full text-label-bold mb-4">أحدث المقالات</span>
<h2 className="font-headline-lg text-headline-lg mb-4">الدليل الشامل لصيانة شبكات الصرف الصحي في المنشآت التجارية الكبرى</h2>
<p className="font-body-md text-body-md mb-6 opacity-90">تعرف على أفضل الممارسات والجداول الزمنية الموصى بها من قبل خبراء دروب القمة لضمان استمرارية العمل دون أعطال مفاجئة.</p>
<Link href="#" className="bg-secondary-fixed text-on-secondary-fixed px-8 py-3 rounded-lg font-cta text-cta inline-flex w-max items-center gap-2 hover:bg-secondary-fixed-dim transition-colors active:scale-95">
                        اقرأ المزيد
                        <span className="material-symbols-outlined">arrow_back</span>
</Link>
</div>
</article>
</section>
{/* Categories Filter */}
<section className="mb-stack-md" data-aos="fade-up">
<div className="flex flex-wrap items-center gap-4 border-b border-outline-variant pb-stack-sm">
<button className="px-6 py-2 bg-primary text-on-primary rounded-full font-label-bold">الكل</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">نصائح الصيانة</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">الصحة العامة</button>
<button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container rounded-full font-label-bold transition-colors">البيئة</button>
</div>
</section>
{/* Article Grid */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter mb-stack-lg" data-aos="fade-up">
{/* Card 1 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="A close-up shot of a modern industrial kitchen drainage system being inspected by a professional plumber using a digital borescope camera. The setting is clean and metallic, with focused light hitting the tools. The image style is sharp and corporate, emphasizing technical precision and advanced diagnostic technology used in modern plumbing services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8_NWMC6jzuFob-VJYJzaJpZ-am7fWduu70Qpwyr99OvneEdmAR9ZPFbsUG4Y0jOIUKnNvutZhhg9pLqiHixdjO_q-C-SFqJj6L3l9zv5GveGKov3gdfc810ZfeNGx6mD9Y8q1yU8IcWIxgJJgkGTRXVrM8s-8P_Vfug52az_gQ_1Uf8tFKfSmER78JG69R-tjNfjMawZWrVYQ-k8ElxCy9w3Bi2A_uZopGG9xMCyaMGe5u7BMxQCY3eV3YK9KnyIwCAb9PGoalKWK"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">نصائح الصيانة</span>
<span className="text-on-surface-variant text-sm opacity-70">١٥ أكتوبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">كيف تتجنب انسداد البيارات في الشتاء؟</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">تعرف على الخطوات الاستباقية لحماية منزلك من مشاكل الصرف الصحي الناتجة عن مياه الأمطار والبرودة الشديدة في مدينة الرياض.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="A large-scale industrial water filtration and cleaning setup for a residential rooftop tank in Riyadh. The sky is a warm sunset orange, casting a professional glow on the specialized suction hoses and cleaning equipment. The image highlights environmental safety and the rigorous cleaning standards maintained by municipality-licensed services." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuKueJuTBsHm72f4uvUYNVjt_2iffSk8MlqVu0deAEiCOb_8hC5YZbyNdGCaAH_84XtdAVRhbfEqh4hqFMNcbcusA_EEs69NLCFFnv1y_V2f6gUjs0nZA8h437eXWiY-OJrEl1cK4ZCSnlDBIgqwU_ZAjl8JByMqTNOdy4fS0VfJi_OXTTSHSCMHOkSDQ3TVwIbebasg-aS-EaKEhA4Cgah_t2IMFdRq2Y8MhsEaN7TuDxgYMqUpAcgndPN0NT-i1zRRngqUwREFkd"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">الصحة العامة</span>
<span className="text-on-surface-variant text-sm opacity-70">١٢ أكتوبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">أهمية تنظيف خزانات المياه بشكل دوري</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">تأثير تراكم الرواسب على جودة مياه الشرب وصحتك العامة، وما هي المعايير الصحية التي نتبعها في تعقيم الخزانات الأرضية والعلوية.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
{/* Card 3 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="An expansive construction site in Riyadh with heavy-duty excavation machinery working on deep infrastructure sewer lines. The lighting is bright mid-day sun, creating high-contrast shadows that define the structural depth of the project. The overall mood is one of industrial progress and expert engineering in civil works." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAr3avKqoHfbebsZy4qx38YOrrvG12wdsdhl2huqpnn1QwHIxbM_J3PWw2gEG5i_oQYbyx9UXiYQDWbIhFq57ZBXmfy0xX-jkDxid5_UQwRlELyqmU5Gh_c7o2FXA2FY982rep7s27eHnWfONqEe_4IU8ZhBD6-UkmPG5fQl84b8AX9V3Q7Kt4mym0-xtGCm8-yJEycQ6Vpqq8iDteaIVhS-RPN1WwUDcIUDqvLXmVl4s6AgERWUgd4qXNBu_5M6_pZ6O46lKl6Cr-b"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">البيئة</span>
<span className="text-on-surface-variant text-sm opacity-70">٨ أكتوبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">تقنيات الشفط الحديثة وحماية البيئة</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">كيف نساهم في تقليل البصمة الكربونية من خلال استخدام شاحنات شفط متطورة تمنع التسرب والروائح الكريهة في الأحياء السكنية.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
{/* Card 4 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="A professional technician's hand holding a detailed plumbing blueprint and a tablet showing real-time sensor data from a residential pipe network. The background is a clean, minimalist home utility room. This image emphasizes the combination of traditional expertise and modern digital monitoring in plumbing maintenance." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbvmS5Jc2jkJ2syIi63ePXi_gt2uyCXCsmo4PXne29_VcIrB45IVGmh-Cgqkni7qXS5FDmG1GWn-E4R7w-5UklSwWSiuuFZDDrxCg28RD8BjZVhzf_GEVb36zswouYiJvzNrCxS0psgW5-vHb4W3I_atb6-gs0fIgervGqpfgX1qtx5tdBcvz4-dInvZHsW5SW6ek5UYAHIWXbZyg0oj6L5j8u3cafDNTfDcCGqXQ6V53t0PVQdTYf7YUpAhPdmY0ZifJmKreV_d4Y"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">نصائح الصيانة</span>
<span className="text-on-surface-variant text-sm opacity-70">٥ أكتوبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">علامات تحذيرية لانسداد الأنابيب المخفية</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">لا تنتظر الكارثة! اكتشف الروائح والأصوات التي تشير إلى وجود مشكلة في شبكة الصرف قبل أن تتفاقم وتسبب أضراراً إنشائية.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
{/* Card 5 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="Close-up of high-quality, durable plumbing fittings and valves organized neatly in a professional toolbox. The surfaces are metallic and polished, reflecting a cool white laboratory-style light. The aesthetic is extremely orderly and professional, symbolizing the 'Quality Materials' pillar of the RiyadhPro brand identity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdCIIdIc5B6P1x7p_nVCNETMrUoZ-NHuTWnHsaW6zqNv9HvbcA4peajjY0aHxV3fJUiVlDSprNaxdmXvY-QVAZbx84j9H1SdrtzzuMIDNs9rc2J4k2IxeUgcR6dlAo6ifYQd_cHx-tKI519ayw6u548cIhk0UCKBtzINcp5YDzwlkdchKPFXbPDHHYMEFh38FKbw-Fch7Ujr_cnldNpAgD34xwFFprsKpIhFNnXX0EBTqtqLZ5YYIEmmiB1EAbrV-CdnvTBQiHSPJS"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">البيئة</span>
<span className="text-on-surface-variant text-sm opacity-70">١ أكتوبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">معايير التخلص من النفايات السائلة</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">التزام دروب القمة بالقوانين البيئية في الرياض وتوجيه النفايات لمحطات المعالجة المعتمدة لضمان استدامة الموارد المائية.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
{/* Card 6 */}
<div className="bg-surface-container-lowest border border-outline-variant rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
<img className="w-full h-48 object-cover" data-alt="A professional plumbing technician wearing a branded uniform and protective gloves, precisely adjusting a high-pressure valve on a large water manifold. The background is a clean, organized mechanical room with industrial pipes. The lighting is bright and even, reinforcing the calm and expert professional tone of the RiyadhPro service team." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVdpWHAdArJ6HVPAvlz19aLrGVZjgP_fnGTUNUHsFxi-_eBxsfKDrTbX7HdKID88guExw1RFHq8qCCP0MTXTJl5COr6xC2bmtOBejiou98S7RUWe_AJydHN3D3eIsdiccVMYiabbQOMB622AL_9CYelbmbqCeYTfGJsB0p9vDIiAUaMxrc53MaGdyIa2c_-mAFpOGlBfCIGnQ00A_Wjc5s0tXc57IppBMYohk-SvIRSKLRRjm-774KIqJQxwH42x7THJF3CX1xDm5"/>
<div className="p-stack-md">
<div className="flex justify-between items-center mb-3">
<span className="text-secondary font-label-bold text-label-bold">نصائح الصيانة</span>
<span className="text-on-surface-variant text-sm opacity-70">٢٨ سبتمبر ٢٠٢٤</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">تجهيز منزلك الجديد بنظام صرف مثالي</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-3">نصائح للمقبلين على البناء حول كيفية اختيار أقطار الأنابيب ومواقع غرف التفتيش لتسهيل عمليات الصيانة المستقبلية.</p>
<button className="text-secondary font-cta text-cta flex items-center gap-1 hover:gap-3 transition-all">
<span>اقرأ المزيد</span>
<span className="material-symbols-outlined">chevron_left</span>
</button>
</div>
</div>
</section>
{/* CTA Section */}
<section className="bg-primary-container rounded-2xl p-stack-lg text-center mb-stack-lg border border-primary relative overflow-hidden" data-aos="zoom-in">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
<div className="relative z-10">
<h2 className="font-headline-lg text-headline-lg text-on-primary mb-4">هل تحتاج إلى مساعدة فورية؟</h2>
<p className="font-body-lg text-body-lg text-on-primary-container mb-8 max-w-xl mx-auto">فريق الطوارئ متاح على مدار الساعة للتعامل مع كافة مشاكل الصرف الصحي والفيضانات في الرياض.</p>
<div className="flex flex-col md:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center gap-3 bg-secondary-fixed text-on-secondary-fixed px-10 py-4 rounded-xl font-cta text-cta hover:bg-secondary-fixed-dim transition-colors group" href="tel:+966583165533">
<span className="material-symbols-outlined group-hover:animate-pulse">phone_in_talk</span>
                        اتصل الآن للطوارئ
                    </a>
<Link href="/contact" className="inline-flex items-center justify-center gap-3 border-2 border-on-primary text-on-primary px-10 py-4 rounded-xl font-cta text-cta hover:bg-on-primary/10 transition-colors">
                        طلب تسعيرة صيانة
                    </Link>
</div>
</div>
</section>
</main>

    </>
  );
}
