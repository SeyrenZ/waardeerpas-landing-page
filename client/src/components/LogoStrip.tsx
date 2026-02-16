import { useEffect, useState } from "react";

const logos = [
  { name: "Efteling", url: "/efteling-logo.svg" },
  { name: "Bol.com", url: "/bol-logo.png" },
  { name: "Basic-Fit", url: "/basic-fit-logo.svg" },
  { name: "Rituals", url: "/rituals-logo.png" },
  { name: "Pathé", url: "/pathe-logo.png" },
];

export function LogoStrip() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">
          Trotse partners van Waardeerpas
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center justify-center h-10 w-28 relative group opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.url}
                alt={`${logo.name} logo`}
                className="sm:max-h-8 max-h-10 max-w-full object-contain filter group-hover:scale-110 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement!.innerText = logo.name;
                  e.currentTarget.parentElement!.className =
                    "text-xl font-bold text-gray-400 font-heading";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
