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
      {/* Mobile FAB removed */}
    </div>
  );
}
