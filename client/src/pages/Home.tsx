import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFAEB]">
      <Navbar />
      <main>
        <Hero />
      </main>
      
      {/* Footer Placeholder */}
      <footer className="bg-[#1E2460] text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="opacity-70">&copy; 2026 Waardeerpas. Alle rechten voorbehouden.</p>
        </div>
      </footer>
    </div>
  );
}
