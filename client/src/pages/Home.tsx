import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFAEB]">
      <Navbar />
      <main>
        <Hero />
        <CategoryGrid />
      </main>
      
      <Footer />
      <CookieBanner />
    </div>
  );
}
