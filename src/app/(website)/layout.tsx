import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <AosInit />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      {/* Mobile FAB */}
      <a className="fixed bottom-6 right-6 z-[60] bg-secondary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all md:hidden" href="tel:966583165533">
        <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
      </a>
    </div>
  );
}
