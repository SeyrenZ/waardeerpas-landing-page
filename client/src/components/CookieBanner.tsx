import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const accepted = localStorage.getItem("waardeerpas-cookies-accepted");
    if (!accepted) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("waardeerpas-cookies-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-in slide-in-from-bottom-10 duration-500">
      <div className="max-w-7xl mx-auto bg-white/95 backdrop-blur-sm border border-[#1E2460]/10 shadow-lg rounded-xl p-4 md:flex md:items-center md:justify-between gap-4">
        <div className="flex-1 mb-4 md:mb-0">
          <p className="text-[#1E2460] text-sm md:text-base">
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
            Door verder te gaan, gaat u akkoord met ons gebruik van cookies.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsVisible(false)}
            className="text-[#1E2460] border-[#1E2460]/20 hover:bg-[#1E2460]/5"
          >
            Weigeren
          </Button>
          <Button 
            size="sm"
            onClick={acceptCookies}
            className="bg-[#FF5758] hover:bg-[#FF5758]/90 text-white"
          >
            Accepteren
          </Button>
        </div>
      </div>
    </div>
  );
}
