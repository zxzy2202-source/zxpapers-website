import Header from "./Header";
import Footer from "./Footer";
import WhatsAppFAB from "./WhatsAppFAB";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip Navigation — accessible shortcut for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-amber-500 focus:text-slate-900 focus:font-bold focus:px-6 focus:py-3 focus:rounded-xl focus:shadow-2xl focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1 pt-[88px]">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
