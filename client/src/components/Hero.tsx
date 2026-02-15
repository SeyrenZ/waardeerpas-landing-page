import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, ShoppingBag } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-20">
      {/* Main Hero Banner - Dark Blue to match Touch Incentive's bold header style */}
      <section className="bg-[#1E2460] py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background Pattern/Texture could go here */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 leading-tight">
            Het beloningsplatform voor gemotiveerde medewerkers
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Waardeerpas helpt bedrijven hun personeel waarderen met slimme rewards en persoonlijke beleving.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#FF5758] hover:bg-[#FF5758]/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#FF5758]/20 transition-all hover:scale-105"
            >
              Early Access
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E2460] font-bold text-lg px-8 py-6 rounded-full transition-all"
            >
              Plan een meeting
            </Button>
          </div>
        </div>
      </section>

      {/* USPs Section - Added below Hero */}
      <section className="bg-[#FF5758] py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 text-white font-bold text-lg">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check"><path d="M20 6 9 17l-5-5"/></svg>
            </div>
            <span>Binnen 16 minuten aangesloten</span>
          </div>
          <div className="hidden md:block text-white/40">|</div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-x"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m14.5 12.5-5 5"/><path d="m9.5 12.5 5 5"/></svg>
            </div>
            <span>Geen complexe contracten</span>
          </div>
          <div className="hidden md:block text-white/40">|</div>
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-coins"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></svg>
            </div>
            <span>Vanaf €6 per medewerker p/m</span>
          </div>
        </div>
      </section>

      {/* The "One Stop Shop" Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FFFAEB]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1E2460] mb-4">
              Eén centraal punt voor waardering
            </h2>
            <p className="text-[#FF5758] font-bold text-xl uppercase tracking-wide">
              Belevenissen, Producten & Vitaliteit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1: Kortingen */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Exclusieve Voordelen
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Meer dan 15.000 aanbiedingen op digitale producten, fysieke producten en dagjes uit. Alles om jouw medewerkers te verrassen.
              </p>
              <Button 
                asChild
                variant="link" 
                className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0 cursor-pointer"
              >
                <a href="#aanbod">Lees meer <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
            </div>

            {/* Card 2: Keuze Cadeaus */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Keuze cadeaus
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Eenvoudig personeel belonen met keuze cadeaus. Geef ze de vrijheid om zelf iets moois uit te zoeken.
              </p>
              <Button 
                variant="link" 
                className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0"
              >
                Lees meer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Card 3: Kerstcadeaus */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Kerstcadeaus
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Regel kerstcadeaus met 1 druk op de knop. Volledige ontzorging tijdens de drukste tijd van het jaar.
              </p>
              <Button 
                variant="link" 
                className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0"
              >
                Lees meer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
