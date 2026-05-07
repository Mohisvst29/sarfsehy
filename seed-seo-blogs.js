import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://admin:admin21@#@cluster0.p783e.mongodb.net/sarfsehy?retryWrites=true&w=majority&appName=Cluster0";

const PostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  image: String,
  category: String,
  views: Number,
}, { timestamps: true });

const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);

const seoBlogs = [
  {
    title: "أسباب طفح البيارات في الرياض وكيفية تجنبها",
    slug: "reasons-for-sewage-overflow",
    excerpt: "تعرف على أهم أسباب طفح البيارات وانسداد المجاري في المنازل، ونصائح عملية من خبراء شركة شفط بيارات بالرياض لتجنب هذه المشكلة المزعجة.",
    content: "<h2>ما هي أسباب طفح البيارات؟</h2><p>طفح البيارات يعتبر من أكثر المشاكل المزعجة التي تواجه أصحاب المنازل في الرياض. من أهم الأسباب:</p><ul><li>رمي المخلفات الصلبة والدهون في الأحواض.</li><li>عدم شفط البيارة بشكل دوري (يُنصح بشفط البيارة كل 6 أشهر).</li><li>تلف أنابيب الصرف الصحي أو انسدادها بسبب جذور الأشجار.</li></ul><h2>كيف تتجنب طفح البيارة؟</h2><p>الصيانة الدورية هي الحل الأمثل. تواصل مع <strong>شركة شفط بيارات بالرياض</strong> لطلب خدمة الصيانة الوقائية وتسليك المجاري قبل تفاقم المشكلة.</p>",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAx88XBNpoHmloeR3p8IhfSCn8nLXAPc74leqKmTUGLTM6Um1IPxG1NYf_6wrE-rQDAY21pexoca6LlsU-Sx3YGHlvK7zwT8DrGpgw7Jv-YwNlXaHv9aUZI0D4FY_dvn2tINJgSww03TxOWeWFjnHtif7T0sQuj4wOKrwtoRD7rbj1ydACPG4Icopwdg6H70S2h1ctEXZybMUKf8PxGKQRhxgxaQdkT7Ifkd5BG4R4m7XFwjooyeouUFEVXjKRrNBdQuFL0WmcWe-DN",
    category: "نصائح الصيانة",
    views: 120
  },
  {
    title: "متى تحتاج إلى شفط بيارة منزلك؟ 5 علامات تحذيرية",
    slug: "when-to-pump-septic-tank",
    excerpt: "لا تنتظر حتى تتفاقم المشكلة! اكتشف 5 علامات تدل على ضرورة الاتصال برقم شفط بيارات بالرياض فوراً لشفط وتنظيف البيارة.",
    content: "<h2>علامات تدل على امتلاء البيارة</h2><p>إذا لاحظت أياً من هذه العلامات، فأنت بحاجة إلى <strong>وايت شفط بالرياض</strong> فوراً:</p><ol><li><strong>روائح كريهة:</strong> انبعاث روائح مجاري من البالوعات أو الحوش الخارجي.</li><li><strong>بطء التصريف:</strong> المياه تأخذ وقتاً طويلاً للتصريف في الأحواض والمراحيض.</li><li><strong>أصوات غريبة:</strong> سماع أصوات (قرقعة) عند تصريف المياه.</li><li><strong>ظهور مياه حول البيارة:</strong> رطوبة غير مبررة أو برك مياه حول غطاء البيارة.</li><li><strong>نمو الأعشاب بشكل غير طبيعي:</strong> حول منطقة الصرف الصحي.</li></ol><p>نحن نوفر خدمة <strong>شفط بيارات 24 ساعة بالرياض</strong> للحالات الطارئة.</p>",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8_NWMC6jzuFob-VJYJzaJpZ-am7fWduu70Qpwyr99OvneEdmAR9ZPFbsUG4Y0jOIUKnNvutZhhg9pLqiHixdjO_q-C-SFqJj6L3l9zv5GveGKov3gdfc810ZfeNGx6mD9Y8q1yU8IcWIxgJJgkGTRXVrM8s-8P_Vfug52az_gQ_1Uf8tFKfSmER78JG69R-tjNfjMawZWrVYQ-k8ElxCy9w3Bi2A_uZopGG9xMCyaMGe5u7BMxQCY3eV3YK9KnyIwCAb9PGoalKWK",
    category: "الصحة العامة",
    views: 85
  },
  {
    title: "أفضل طرق تسليك المجاري المسدودة في الرياض",
    slug: "best-unclogging-methods",
    excerpt: "تعرف على أحدث وأفضل الطرق المستخدمة في تسليك المجاري المسدودة، من الطرق المنزلية البسيطة إلى الطرق الاحترافية التي تستخدمها شركة تسليك مجاري بالرياض.",
    content: "<h2>طرق تسليك المجاري</h2><p>انسداد المجاري مشكلة طارئة تتطلب تدخلاً سريعاً. إليك بعض الطرق:</p><h3>1. الطرق المنزلية (للاسنِدادات البسيطة)</h3><p>استخدام الماء المغلي والبيكنج صودا مع الخل يمكن أن يذيب الدهون الخفيفة.</p><h3>2. التسليك بالضغط (الكمبروسر)</h3><p>تستخدم <strong>شركة تسليك مجاري بالرياض</strong> أجهزة ضغط المياه والهواء القوية لتفتيت التصلبات الدهنية والعوائق الكبيرة داخل المواسير.</p><h3>3. التسليك بالسوستة الكهربائية</h3><p>وهي أداة مرنة تدخل في المواسير وتنظفها من الرواسب العالقة.</p><p>لضمان أفضل النتائج، تواصل مع فريقنا المتخصص في <strong>شفط صرف صحي الرياض</strong> وتسليك المجاري.</p>",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8PN3k2-j6pqJaoDL6VyPY2rAQp_fQ4w7cwyWjuTcXylNc259eWwVflMPnf93yHWKiutLX2pwluYYXWaoHJ4iiNKm1Mi8fUFanWiQh0f6JqJXxKUBHnl-jOUZoI1pc9awH9DYyAEUTTFq620oM3oQ-DXYGFx3Y0GRZGlNk9blsgAVdN6GMLLImSvf-IXH-OJl7CUVZGOYeM09K4SL1PuQLiIIbwu3Fa2C8NSrRdpw_ALjLM10aynnYDFsSJrFHRRRiUirCbVsb7bxM",
    category: "نصائح الصيانة",
    views: 210
  },
  {
    title: "علامات انسداد الصرف الصحي ومخاطر تجاهلها",
    slug: "signs-of-sewage-blockage",
    excerpt: "تجاهل علامات انسداد الصرف الصحي قد يؤدي إلى كوارث بيئية ومادية. تعرف على العلامات المبكرة وكيفية التعامل معها مع أفضل شركة تنظيف بيارات بالرياض.",
    content: "<h2>مخاطر تجاهل انسداد المجاري</h2><p>العديد من الناس يتجاهلون علامات الانسداد المبكرة مما يؤدي إلى طفح البيارات وتلف البنية التحتية للمنزل. المخاطر تشمل:</p><ul><li>انتشار الحشرات والقوارض المسببة للأمراض.</li><li>تلوث مياه الشرب إذا اختلطت مع مياه الصرف.</li><li>تآكل أساسات المنزل بسبب الرطوبة المستمرة.</li></ul><p>في حالة الطوارئ، يمكنك الاتصال بـ <strong>رقم شفط بيارات بالرياض</strong> للحصول على <strong>وايت شفط بالرياض</strong> مجهز بأحدث المعدات للتعامل مع الانسدادات الصعبة.</p>",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcOveb0JXXVQoIiqKb8R-V84kDHSGM2awxJo9LfszkuPsD9dqiVH57wsJMjVwuw4iWe1j8GSC-rPlBzJHLhgBQEJUjWcj76mMrw8iNNfEAS3Bfjkjkh4RTIWID9i8Yk896RW_Kgs7yBAwhcMnmaO8ganawnvIA4NvPXv4CHN5z_Wxt7OuvHV40R6lxpV47inkQd7DMKHEJe-yVZ5jK18K7Gi_gcH3_wqSNnHqB_awcgvizoHKOyiDaU4OHUOyQjmGuesG8ceoyf5j6",
    category: "البيئة",
    views: 155
  },
  {
    title: "أضرار ترك البيارات ممتلئة بدون شفط دوري",
    slug: "damages-of-full-septic-tanks",
    excerpt: "الشفط الدوري للبيارات ليس رفاهية بل ضرورة. تعرف على الأضرار الجسيمة لترك البيارات ممتلئة وكيف تساعدك شركة شفط بيارات بالرياض في الوقاية منها.",
    content: "<h2>لماذا يجب شفط البيارة دورياً؟</h2><p>تراكم الرواسب الصلبة يقلل من المساحة الاستيعابية للبيارة بمرور الوقت. أضرار تركها ممتلئة تشمل:</p><ul><li>ارتجاع مياه الصرف إلى داخل المنزل.</li><li>تلف خطوط الصرف الرئيسية وتصدع جدران البيارة.</li><li>غرامات بيئية بسبب تسرب مياه الصرف إلى الشوارع.</li></ul><p>باعتبارنا <strong>أفضل شركة شفط بيارات بالرياض</strong>، نوصي بتنظيف البيارات بانتظام. نوفر خدمة <strong>تنظيف بيارات بالرياض</strong> باستخدام مواد كيميائية تقضي على الروائح وتفتت الدهون الصلبة.</p>",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5uwptGI6KpQ_-g7AFl4fqjD3-2VvyBYnD6kMBy-1mZd5653N0QUa8CFR38PxnKbWVF4HNfQnIIufFhmKNjRBU-T_wtaWS3CA5-edNxD92DsL0YNiVPuAfA1GVcKwmjhtt_nD7xzf7-TLgkxqDOgPH1nv30YU3Pe3tP_yhU87iY8r2jMl32bR6FCCuN05fiB8Gnui0qkEoV4GPPXmUIw879D2AwGl0FguZf_NfPVmC-ITjc-Smy9HuelHbzQkyIGHvpvJYRpJ2aCBF",
    category: "الصحة العامة",
    views: 198
  }
];

async function seedBlogs() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to DB");
    
    // Check existing
    const count = await Post.countDocuments();
    if (count > 0) {
      console.log("Posts exist. Deleting existing SEO posts...");
      // Optional: Delete existing to refresh, or just insert if empty. Let's just wipe and re-insert for freshness.
      await Post.deleteMany({});
    }

    await Post.insertMany(seoBlogs);
    console.log("Successfully seeded SEO blog posts!");
    process.exit(0);
  } catch (error) {
    console.error("Error seeding blogs:", error);
    process.exit(1);
  }
}

seedBlogs();
