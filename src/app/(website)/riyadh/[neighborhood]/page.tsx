import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getSettings } from "@/lib/actions";

const neighborhoods = {
  "al-yasmin": { name: "حي الياسمين", nameEn: "Al-Yasmin" },
  "al-narjis": { name: "حي النرجس", nameEn: "Al-Narjis" },
  "al-rimal": { name: "حي الرمال", nameEn: "Al-Rimal" },
  "al-arid": { name: "حي العارض", nameEn: "Al-Arid" },
  "al-suwaidi": { name: "حي السويدي", nameEn: "Al-Suwaidi" },
  "al-naseem": { name: "حي النسيم", nameEn: "Al-Naseem" },
  "al-rawdah": { name: "حي الروضة", nameEn: "Al-Rawdah" },
  "al-munsiyah": { name: "حي المونسية", nameEn: "Al-Munsiyah" },
};

export async function generateStaticParams() {
  return Object.keys(neighborhoods).map((neighborhood) => ({
    neighborhood,
  }));
}

export async function generateMetadata({ params }: { params: { neighborhood: string } }) {
  const areaInfo = neighborhoods[params.neighborhood as keyof typeof neighborhoods];
  if (!areaInfo) return { title: "غير موجود" };

  const title = `شركة شفط بيارات ب${areaInfo.name} | وايت شفط صرف صحي 24 ساعة`;
  const description = `أفضل شركة شفط بيارات وتسليك مجاري ب${areaInfo.name} بالرياض. نوفر وايت شفط 24 ساعة بأحدث المعدات. اتصل بنا للحصول على خدمة سريعة واحترافية.`;

  return {
    title,
    description,
    keywords: [`شفط بيارات الرياض`, `شركة شفط بيارات ب${areaInfo.name}`, `وايت شفط ب${areaInfo.name}`, `شفط صرف صحي الرياض`, `تسليك مجاري ب${areaInfo.name}`, `تنظيف بيارات ب${areaInfo.name}`, `شفط بيارات 24 ساعة بالرياض`, `رقم شفط بيارات ب${areaInfo.name}`],
    openGraph: {
      title,
      description,
      type: "website",
    },
  };
}

export default async function NeighborhoodPage({ params }: { params: { neighborhood: string } }) {
  const areaInfo = neighborhoods[params.neighborhood as keyof typeof neighborhoods];
  if (!areaInfo) notFound();

  const settings = await getSettings();
  const phone = settings?.phone || "966583165533";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "شفط بيارات وتسليك مجاري",
    "provider": {
      "@type": "LocalBusiness",
      "name": "بيارات الرياض",
      "telephone": phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": areaInfo.name,
        "addressRegion": "الرياض",
        "addressCountry": "SA"
      }
    },
    "areaServed": {
      "@type": "Neighborhood",
      "name": areaInfo.name
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `هل تقدمون خدمة شفط البيارات في ${areaInfo.name} على مدار الساعة؟`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `نعم، نحن نوفر خدمة شفط بيارات 24 ساعة في ${areaInfo.name} وجميع أنحاء الرياض للحالات الطارئة.`
        }
      },
      {
        "@type": "Question",
        "name": `كم يستغرق وصول وايت الشفط إلى ${areaInfo.name}؟`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `نظراً لتواجد سياراتنا في مختلف أحياء الرياض، يمكننا الوصول إليك في ${areaInfo.name} خلال 30 إلى 45 دقيقة من اتصالك.`
        }
      },
      {
        "@type": "Question",
        "name": `هل خدماتكم تشمل تسليك المجاري وتنظيف البيارة؟`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "بالتأكيد، شركتنا تقدم حلولاً متكاملة تشمل شفط الصرف الصحي، تسليك المجاري المسدودة، وتنظيف وتعقيم البيارات بأفضل المواد."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative bg-primary pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx88XBNpoHmloeR3p8IhfSCn8nLXAPc74leqKmTUGLTM6Um1IPxG1NYf_6wrE-rQDAY21pexoca6LlsU-Sx3YGHlvK7zwT8DrGpgw7Jv-YwNlXaHv9aUZI0D4FY_dvn2tINJgSww03TxOWeWFjnHtif7T0sQuj4wOKrwtoRD7rbj1ydACPG4Icopwdg6H70S2h1ctEXZybMUKf8PxGKQRhxgxaQdkT7Ifkd5BG4R4m7XFwjooyeouUFEVXjKRrNBdQuFL0WmcWe-DN" alt={`شفط بيارات ${areaInfo.name}`} fill className="object-cover" priority />
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-headline-xl mb-6">شركة شفط بيارات ب{areaInfo.name}</h1>
          <p className="text-xl max-w-3xl mx-auto mb-10 opacity-90">
            أفضل خدمات شفط الصرف الصحي وتسليك المجاري في {areaInfo.name} بالرياض. فريق طوارئ مجهز بأحدث وايتات الشفط لخدمتك على مدار 24 ساعة.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${phone}`} className="bg-secondary text-white px-8 py-4 rounded-xl font-cta text-lg flex items-center gap-2 hover:bg-secondary/90 transition-all">
              <span className="material-symbols-outlined">call</span>
              اتصل الآن للطوارئ
            </a>
            <a href={`https://wa.me/${phone.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-8 py-4 rounded-xl font-cta text-lg flex items-center gap-2 hover:bg-[#128C7E] transition-all">
              تواصل عبر الواتساب
            </a>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 max-w-5xl mx-auto px-8 prose prose-lg prose-slate text-on-surface-variant">
        <h2 className="text-primary text-3xl font-headline-lg">أفضل وايت شفط ب{areaInfo.name}</h2>
        <p>
          إذا كنت تبحث عن <strong>شركة شفط بيارات بالرياض</strong> متخصصة وتعمل في <strong>{areaInfo.name}</strong>، فإننا في "بيارات الرياض" نفخر بتقديم أسرع وأفضل خدمة. نحن نتفهم تماماً الإزعاج والمشاكل الصحية التي يسببها طفح البيارات وانسداد المجاري، ولذلك نوفر خدمة <strong>شفط بيارات 24 ساعة بالرياض</strong> لتلبية نداءات الطوارئ بفعالية وسرعة.
        </p>

        <h2 className="text-primary text-3xl font-headline-lg">خدماتنا في {areaInfo.name}</h2>
        <ul>
          <li><strong>شفط صرف صحي الرياض:</strong> نستخدم أحدث سيارات شفط المجاري (الوايتات) ذات القدرة العالية لضمان شفط البيارة بالكامل.</li>
          <li><strong>تسليك مجاري ب{areaInfo.name}:</strong> نعتمد على أجهزة ضغط المياه (الكمبروسر) لتفتيت أي ترسبات أو دهون متصلبة تتسبب في انسداد المجاري.</li>
          <li><strong>تنظيف بيارات ب{areaInfo.name}:</strong> الشفط وحده لا يكفي في بعض الأحيان! نقدم خدمة تنظيف وتعقيم البيارات للقضاء على الروائح الكريهة ومنع تجمع الحشرات.</li>
        </ul>

        <div className="my-12 relative h-80 rounded-2xl overflow-hidden shadow-lg not-prose">
          <Image src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcOveb0JXXVQoIiqKb8R-V84kDHSGM2awxJo9LfszkuPsD9dqiVH57wsJMjVwuw4iWe1j8GSC-rPlBzJHLhgBQEJUjWcj76mMrw8iNNfEAS3Bfjkjkh4RTIWID9i8Yk896RW_Kgs7yBAwhcMnmaO8ganawnvIA4NvPXv4CHN5z_Wxt7OuvHV40R6lxpV47inkQd7DMKHEJe-yVZ5jK18K7Gi_gcH3_wqSNnHqB_awcgvizoHKOyiDaU4OHUOyQjmGuesG8ceoyf5j6" alt={`تسليك مجاري ${areaInfo.name}`} fill className="object-cover" />
        </div>

        <h2 className="text-primary text-3xl font-headline-lg">لماذا نعتبر الخيار الأمثل في {areaInfo.name}؟</h2>
        <p>
          بفضل خبرتنا الطويلة كأفضل <strong>شركة شفط بيارات بالرياض</strong>، نتميز بالآتي:
        </p>
        <ol>
          <li>السرعة في الاستجابة: بمجرد اتصالك على <strong>رقم شفط بيارات بالرياض</strong>، نوجه أقرب سيارة لموقعك في {areaInfo.name}.</li>
          <li>الأسعار التنافسية: نقدم خدمات عالية الجودة بأسعار معقولة ومناسبة لجميع سكان الحي.</li>
          <li>العمالة المدربة: فريقنا يتكون من سباكين وفنيين محترفين في التعامل مع كافة مشاكل الصرف الصحي.</li>
          <li>العمل الاحترافي النظيف: نهتم بترك المكان نظيفاً بعد إتمام عملية الشفط أو التسليك.</li>
        </ol>

        <h2 className="text-primary text-3xl font-headline-lg mt-16 mb-8">الأسئلة الشائعة (FAQ)</h2>
        <div className="space-y-6 not-prose">
          {faqSchema.mainEntity.map((faq, index) => (
            <div key={index} className="bg-surface-container-lowest border border-outline-variant rounded-xl p-6 shadow-sm">
              <h3 className="font-headline-md text-primary text-xl mb-3 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">help</span>
                {faq.name}
              </h3>
              <p className="text-on-surface-variant leading-relaxed">
                {faq.acceptedAnswer.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-container py-16 text-center">
        <div className="max-w-3xl mx-auto px-8 space-y-6">
          <h2 className="text-3xl font-headline-lg text-primary">هل تواجه مشكلة في الصرف الصحي الآن؟</h2>
          <p className="text-lg text-on-surface-variant">
            لا تتردد في الاتصال بنا. <strong>وايت شفط بالرياض</strong> متواجد بالقرب منك وجاهز للانطلاق فوراً إلى موقعك في {areaInfo.name}.
          </p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-3 bg-secondary text-white px-10 py-5 rounded-2xl font-cta text-xl shadow-xl hover:scale-105 transition-transform">
            <span className="material-symbols-outlined">phone_in_talk</span>
            اتصل بـ {phone}
          </a>
        </div>
      </section>
    </>
  );
}
