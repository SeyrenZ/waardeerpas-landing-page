import { Check } from "lucide-react";

const categories = [
  {
    title: "ONTSPANNING",
    image: "/images/cat-wellness.jpg",
    items: ["Sauna's", "Yoga", "Beauty", "Etc."]
  },
  {
    title: "HEALTH & SPORT",
    image: "/images/cat-sport.jpg",
    items: ["Fitness", "Sportclubs", "Bootcamp", "Etc."]
  },
  {
    title: "EROP UIT",
    image: "/images/cat-fun.jpg",
    items: ["Pretparken", "Dierentuinen", "Bioscoop", "Etc."]
  },
  {
    title: "CULINAIR",
    image: "/images/cat-food.jpg",
    items: ["Restaurants", "Bezorgdiensten", "Keukengerei", "Etc."]
  },
  {
    title: "OP REIS",
    image: "/images/cat-travel.jpg",
    items: ["Stedentrips", "Hotels", "Koffers", "Etc."]
  },
  {
    title: "IN HUIS",
    image: "/images/cat-home.jpg",
    items: ["Interieur", "Keukenapparatuur", "Home media", "Etc."]
  },
  {
    title: "MOBILITEIT",
    image: "/images/cat-mobility.jpg",
    items: ["Fiets", "Deelauto", "Slipcursus", "Etc."]
  },
  {
    title: "DIGITAAL",
    image: "/images/cat-digital.jpg",
    items: ["Cursussen", "Streamingdiensten", "E-books", "Etc."]
  },
  {
    title: "PRODUCTEN",
    image: "/images/cat-products.jpg",
    items: ["Speakers", "Sporthorloges", "Tassen", "Etc."]
  },
  {
    title: "WERKPLEK",
    image: "/images/cat-work.jpg",
    items: ["Bureaus", "Stoelen", "Randapparatuur", "Etc."]
  }
];

export function CategoryGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#FF5758] mb-8">
            Dit biedt Waardeerpas!
          </h2>
          
          <ul className="space-y-3 text-[#1E2460] text-lg">
            {[
              "Meer dan 10.000 contentpartners voor volop keuze en variatie!",
              "Maandelijks nieuwe aanbiedingen en voordelen, speciaal voor jouw medewerkers.",
              "Een mix van alles: uitjes, activiteiten, culinaire ervaringen, cadeaubonnen, producten en meer.",
              "Heb jij tips? Deel ze en help ons inspirerende contentpartners toevoegen.",
              "Met de Waardeerpas regel je teamuitjes en profiteer je van mooie kortingen via ons partnernetwerk."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="font-bold text-[#FF5758] mt-1.5">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <div className="bg-[#FF5758] text-white text-center font-bold py-2 px-1 uppercase text-sm tracking-wider rounded-t-lg">
                {category.title}
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="pt-3">
                <ul className="space-y-1">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-sm text-[#1E2460] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1E2460] rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
