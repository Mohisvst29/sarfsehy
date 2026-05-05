import Link from "next/link";

export default function AdminDashboard() {
  return (
    <>
      <div className="mb-8">
        <h2 className="text-headline-lg font-headline-lg text-primary mb-2">أهلاً بك في لوحة تحكم الموقع</h2>
        <p className="text-body-lg text-on-surface-variant">من هنا يمكنك إدارة محتوى الموقع بالكامل بكل سهولة.</p>
      </div>

      {/* Metrics Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-stack-lg">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col gap-2 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <span className="material-symbols-outlined text-primary p-2 bg-primary-container/10 rounded-lg" data-icon="plumbing">plumbing</span>
          </div>
          <div className="mt-4">
            <h3 className="text-on-surface-variant font-label-bold text-label-bold">إجمالي الخدمات</h3>
            <p className="text-headline-lg font-headline-lg text-primary">8</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col gap-2 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <span className="material-symbols-outlined text-secondary p-2 bg-secondary-container/20 rounded-lg" data-icon="article">article</span>
          </div>
          <div className="mt-4">
            <h3 className="text-on-surface-variant font-label-bold text-label-bold">المقالات المنشورة</h3>
            <p className="text-headline-lg font-headline-lg text-primary">12</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col gap-2 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <span className="material-symbols-outlined text-on-tertiary-container p-2 bg-tertiary-fixed/20 rounded-lg" data-icon="visibility">visibility</span>
          </div>
          <div className="mt-4">
            <h3 className="text-on-surface-variant font-label-bold text-label-bold">زيارات الموقع (هذا الشهر)</h3>
            <p className="text-headline-lg font-headline-lg text-primary">+3,240</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant flex flex-col gap-2 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-center">
            <span className="material-symbols-outlined text-error p-2 bg-error-container/30 rounded-lg" data-icon="update">update</span>
          </div>
          <div className="mt-4">
            <h3 className="text-on-surface-variant font-label-bold text-label-bold">آخر تحديث للموقع</h3>
            <p className="text-headline-md font-headline-md text-primary mt-2">اليوم</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
        <div className="bg-surface-container-low p-stack-md rounded-2xl border border-outline-variant flex flex-col gap-4">
          <h3 className="text-headline-md font-headline-md text-primary mb-2">الوصول السريع</h3>
          
          <Link href="/admin/home-settings" className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:bg-primary hover:text-white transition-all group">
            <span className="material-symbols-outlined p-3 bg-primary-container/10 group-hover:bg-on-primary/20 rounded-lg" data-icon="imagesmode">imagesmode</span>
            <div className="text-right">
              <p className="font-label-bold text-label-bold">تغيير صور الرئيسية</p>
              <p className="text-sm opacity-70">إضافة أو تعديل صور الـ Slider في الواجهة</p>
            </div>
          </Link>
          
          <Link href="/admin/blog" className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:bg-primary hover:text-white transition-all group">
            <span className="material-symbols-outlined p-3 bg-secondary-container/20 group-hover:bg-on-primary/20 rounded-lg" data-icon="post_add">post_add</span>
            <div className="text-right">
              <p className="font-label-bold text-label-bold">كتابة مقالة جديدة</p>
              <p className="text-sm opacity-70">نشر محتوى جديد لتحسين الـ SEO</p>
            </div>
          </Link>

          <Link href="/admin/contact-settings" className="flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant rounded-xl hover:bg-primary hover:text-white transition-all group">
            <span className="material-symbols-outlined p-3 bg-tertiary-fixed/20 group-hover:bg-on-primary/20 rounded-lg" data-icon="contact_phone">contact_phone</span>
            <div className="text-right">
              <p className="font-label-bold text-label-bold">تحديث أرقام التواصل</p>
              <p className="text-sm opacity-70">تغيير رقم الجوال الموحد أو الواتساب</p>
            </div>
          </Link>
        </div>

        {/* System Status Overview */}
        <div className="bg-primary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden flex flex-col justify-center">
          <div className="relative z-10">
            <p className="text-label-bold opacity-80 mb-2">حالة النظام</p>
            <h4 className="text-headline-lg font-bold">الموقع يعمل بكفاءة 100%</h4>
            <p className="text-body-md mt-4 opacity-90 leading-relaxed">
              جميع التغييرات التي تقوم بها هنا ستنعكس فوراً على الموقع المباشر (Live Website). تأكد من مراجعة المحتوى قبل الحفظ.
            </p>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -left-10 text-9xl opacity-10" data-icon="public">public</span>
        </div>
      </div>
    </>
  );
}
