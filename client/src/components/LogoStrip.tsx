import { useEffect, useState } from "react";

const logos = [
  { name: "Efteling", url: "https://logo.clearbit.com/efteling.com" },
  { name: "Bol.com", url: "https://logo.clearbit.com/bol.com" },
  { name: "Basic-Fit", url: "https://logo.clearbit.com/basic-fit.com" },
  { name: "Rituals", url: "https://logo.clearbit.com/rituals.com" },
  { name: "Pathé", url: "https://logo.clearbit.com/pathe.nl" },
];

export function LogoStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trotse partners van Waardeerpas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {logos.map((logo) => (
            <div key={logo.name} className="flex items-center justify-center h-12 w-32 relative group">
              <img 
                src={logo.url} 
                alt={`${logo.name} logo`} 
                className="max-h-12 max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerText = logo.name;
                  e.currentTarget.parentElement!.className = "text-xl font-bold text-gray-400 font-heading";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
