import { Check, Star, RefreshCw, Zap, Users, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "ONTSPANNING",
    image: "/images/cat-wellness.jpg",
    items: ["Sauna's", "Yoga", "Beauty", "Etc."]
  },
// ... (rest of categories remain the same)
  {
    title: "WERKPLEK",
    image: "/images/cat-work.jpg",
    items: ["Bureaus", "Stoelen", "Randapparatuur", "Etc."]
  }
];

export function CategoryGrid() {
  return (
    <section id="aanbod" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1E2460] mb-6">
            Ontdek de kracht van <span className="text-[#FF5758]">keuzevrijheid</span>
          </h2>
          <p className="text-xl text-[#1E2460]/70 max-w-3xl mx-auto">
            Van ontspanning tot avontuur en van gadgets tot gezonde extra's. Wij bieden voor ieder wat wils.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Star,
              title: "Enorm Aanbod",
              text: "Meer dan 10.000 partners zorgen voor eindeloze keuze en variatie."
            },
            {
              icon: RefreshCw,
              title: "Altijd Iets Nieuws",
              text: "Maandelijks verse deals en exclusieve acties, speciaal voor jouw team."
            },
            {
              icon: Zap,
              title: "Alles-in-één Mix",
              text: "Van dagjes uit en diners tot gadgets en wellness. Alles op één plek."
            },
            {
              icon: Lightbulb,
              title: "Jouw Inbreng Telt",
              text: "Mis je een favoriete plek? Wij voegen jouw tips toe aan het aanbod."
            },
            {
              icon: Users,
              title: "Slimme Teamuitjes",
              text: "Regel eenvoudig teamuitjes en profiteer direct van groepskorting."
            }
          ].map((feature, idx) => (
            <div key={idx} className="flex gap-4 p-6 bg-[#FFFAEB] rounded-xl border border-[#1E2460]/5 hover:shadow-md transition-shadow">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF5758]/10 rounded-full flex items-center justify-center text-[#FF5758]">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1E2460] text-lg mb-2">{feature.title}</h3>
                <p className="text-[#1E2460]/70 text-sm leading-relaxed">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col group cursor-pointer">
              <div className="bg-[#1E2460] group-hover:bg-[#FF5758] transition-colors text-white text-center font-bold py-2 px-1 uppercase text-xs tracking-wider rounded-t-lg">
                {category.title}
              </div>
              <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">Ontdek meer</p>
                </div>
              </div>
              <div className="pt-3 bg-white border-x border-b border-gray-100 rounded-b-lg p-3 h-full">
                <ul className="space-y-1.5">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-xs text-[#1E2460]/80 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[#FF5758] rounded-full"></span>
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
