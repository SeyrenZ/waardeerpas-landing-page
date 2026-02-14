import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Heart, ShoppingBag } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-20">
      {/* Main Hero Banner - Dark Blue to match Touch Incentive's bold header style */}
      <section className="bg-[#1E2460] py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background Pattern/Texture could go here */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Op zoek naar blije medewerkers?
            <br />
            <span className="text-[#FF5758]">Waardeer ze met de Waardeerpas!</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Blije medewerkers zijn geen luxe, maar een randvoorwaarde voor een goede organisatie.
            Wij bieden één centraal punt voor waardering en voordelen.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg"
              className="bg-[#FF5758] hover:bg-[#FF5758]/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-[#FF5758]/20 transition-all hover:scale-105"
            >
              Daag ons uit!
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E2460] font-bold text-lg px-8 py-6 rounded-full transition-all"
            >
              Bekijk demo
            </Button>
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
            {/* Card 1: Belevenissen */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Belevenissen & Uitjes
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Creëer blijvende herinneringen met exclusieve toegang tot unieke ervaringen en activiteiten die verbondenheid versterken.
              </p>
              <Button 
                variant="link" 
                className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0"
              >
                Lees meer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Card 2: Fysieke Producten */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Fysieke Producten
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Exclusieve toegang tot een gesloten platform met hoogwaardige lifestyle-producten, gadgets en verzorgingsartikelen.
              </p>
              <Button 
                variant="link" 
                className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0"
              >
                Lees meer <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Card 3: Vitaliteit/Geschenken */}
            <div className="flex flex-col items-center text-center group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-[#FF5758]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                Personeelsgeschenken
              </h3>
              <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                Medewerkers boeien, binden en behouden met plezier en beleving? Investeer in energieke medewerkers.
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

      {/* Intro Text Section (Bottom part of "Above Fold") */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <h2 className="text-3xl font-heading font-bold text-[#1E2460] mb-6">
              Impactvolle waardering creëren wij samen
            </h2>
            <p className="text-lg text-[#1E2460]/80 mb-6 leading-relaxed">
              Wij helpen jou om medewerkers bewust voor jou te laten kiezen en van jouw merk te laten houden met een effectief loyaliteitsprogramma! Dit onderscheidt jouw organisatie en levert je meer betrokkenheid, minder verzuim en een hogere medewerkerstevredenheid op.
            </p>
            <Button className="bg-[#1E2460] text-white hover:bg-[#1E2460]/90 rounded-full px-8">
              Ontdek onze werkwijze
            </Button>
          </div>
          <div className="flex-1 relative">
             <div className="absolute -inset-4 bg-[#FF5758]/10 rounded-3xl transform rotate-3"></div>
             <img 
              src="/images/hero-team.jpg" 
              alt="Happy team" 
              className="relative rounded-2xl shadow-xl w-full object-cover h-80"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
