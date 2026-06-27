import Header from "./Header";
import Footer from "./Footer";
import LazyWhatsAppFAB from "./LazyWhatsAppFAB";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip Navigation — accessible shortcut for keyboard / screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-brand-navy focus:text-white focus:font-semibold focus:px-5 focus:py-3 focus:rounded-md focus:shadow-lg focus:outline-none"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="flex-1 pt-[var(--header-offset-mobile)] sm:pt-[var(--header-offset-desktop)]"
      >
        {children}
      </main>
      <Footer />
      <LazyWhatsAppFAB />
    </div>
  );
}
