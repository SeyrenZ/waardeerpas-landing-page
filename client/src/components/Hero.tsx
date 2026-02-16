import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckIcon,
  Coins,
  FileXIcon,
  Gift,
  Heart,
  ShoppingBag,
} from "lucide-react";
import { LogoStrip } from "@/components/LogoStrip";

export function Hero() {
  const usps = [
    {
      icon: CheckIcon,
      text: "Binnen 16 minuten aangesloten",
    },
    {
      icon: FileXIcon,
      text: "Geen complexe contracten",
    },
    {
      icon: Coins,
      text: "Vanaf €6 per medewerker p/m",
    },
  ];

  return (
    <div className="relative sm:pt-20 pt-14">
      {/* Main Hero Banner - Dark Blue to match Touch Incentive's bold header style */}
      <section className="bg-[#1E2460] sm:py-32 py-14 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Background Pattern/Texture could go here */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] opacity-20"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4 leading-tight">
            Het beloningsplatform voor gemotiveerde medewerkers
          </h1>

          <p className="text-sm sm:text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Waardeerpas helpt bedrijven hun personeel waarderen met slimme
            rewards en persoonlijke beleving.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#FF5758] hover:bg-[#FF5758]/90 text-white font-bold sm:text-lg text-base px-8 h-12 rounded-full shadow-lg shadow-[#FF5758]/20 transition-all hover:scale-105">
              Early Access
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1E2460] font-bold sm:text-lg text-base px-8 h-12 rounded-full transition-all"
            >
              Plan een meeting
            </Button>
          </div>
        </div>
      </section>

      {/* USPs Section - Added below Hero */}
      <section className="bg-[#FF5758] sm:py-6 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12 text-white font-bold text-sm sm:text-lg">
          {usps.map((usp, index) => (
            <Fragment key={index}>
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full">
                  <usp.icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <span>{usp.text}</span>
              </div>
              {index < usps.length - 1 && (
                <div className="hidden md:block text-white/40">|</div>
              )}
            </Fragment>
          ))}
        </div>
      </section>

      <LogoStrip />

      {/* The "One Stop Shop" Section */}
      <section className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1E2460] mb-4">
              Eén centraal punt voor waardering
            </h2>
            <p className="text-[#FF5758] font-bold sm:text-xl uppercase tracking-wide">
              Belevenissen, Producten & Vitaliteit
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: ShoppingBag,
                title: "Exclusieve Voordelen",
                description:
                  "Meer dan 15.000 aanbiedingen op digitale producten, fysieke producten en dagjes uit. Alles om jouw medewerkers te verrassen.",
                href: "#aanbod",
              },
              {
                icon: Gift,
                title: "Keuze cadeaus",
                description:
                  "Eenvoudig personeel belonen met keuze cadeaus. Geef ze de vrijheid om zelf iets moois uit te zoeken.",
                href: "#",
              },
              {
                icon: Heart,
                title: "Kerstcadeaus",
                description:
                  "Regel kerstcadeaus met 1 druk op de knop. Volledige ontzorging tijdens de drukste tijd van het jaar.",
                href: "#",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-between group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-sm border border-[#1E2460]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-10 h-10 text-[#FF5758]" />
                  </div>

                  <h3 className="text-xl font-bold text-[#1E2460] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#1E2460]/70 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <Button
                  asChild
                  variant="link"
                  className="text-[#1E2460] font-bold group-hover:text-[#FF5758] transition-colors p-0 cursor-pointer"
                >
                  <a href={feature.href}>
                    Lees meer <ArrowRight className="w-4 h-4 mt-0.5" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
