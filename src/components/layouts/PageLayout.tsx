import { Header } from "@/components/layouts/Header";
import { CallButton } from "@/components/ui/CallButton";
import { ScrollTop } from "@/components/ui/ScrollTop";
import { Footer } from "@/components/sections/Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
      <CallButton />
      <ScrollTop />
    </>
  );
}
