import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { ImpactSection } from "@/components/ImpactSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
        <ImpactSection />
      </main>

      <Footer />
      <CookieBanner />
    </div>
  );
}
