import { Check, Star, RefreshCw, Zap, Users, Lightbulb } from "lucide-react";

const categories = [
  {
    title: "ONTSPANNING",
    image: "/images/cat-wellness.jpg",
    items: ["Sauna's", "Yoga", "Beauty", "Etc."],
  },
  {
    title: "HEALTH & SPORT",
    image: "/images/cat-sport.jpg",
    items: ["Fitness", "Sportclubs", "Bootcamp", "Etc."],
  },
  {
    title: "EROP UIT",
    image: "/images/cat-fun.jpg",
    items: ["Pretparken", "Dierentuinen", "Bioscoop", "Etc."],
  },
  {
    title: "CULINAIR",
    image: "/images/cat-food.jpg",
    items: ["Restaurants", "Bezorgdiensten", "Keukengerei", "Etc."],
  },
  {
    title: "OP REIS",
    image: "/images/cat-travel.jpg",
    items: ["Stedentrips", "Hotels", "Koffers", "Etc."],
  },
  {
    title: "IN HUIS",
    image: "/images/cat-home.jpg",
    items: ["Interieur", "Keukenapparatuur", "Home media", "Etc."],
  },
  {
    title: "MOBILITEIT",
    image: "/images/cat-mobility.jpg",
    items: ["Fiets", "Deelauto", "Slipcursus", "Etc."],
  },
  {
    title: "DIGITAAL",
    image: "/images/cat-digital.jpg",
    items: ["Cursussen", "Streamingdiensten", "E-books", "Etc."],
  },
  {
    title: "PRODUCTEN",
    image: "/images/cat-products.jpg",
    items: ["Speakers", "Sporthorloges", "Tassen", "Etc."],
  },
  {
    title: "WERKPLEK",
    image: "/images/cat-work.jpg",
    items: ["Bureaus", "Stoelen", "Randapparatuur", "Etc."],
  },
];

export function CategoryGrid() {
  return (
    <section
      id="aanbod"
      className="sm:py-20 py-10 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-[#1E2460] mb-6">
            Ontdek de kracht van{" "}
            <span className="text-[#FF5758]">keuzevrijheid</span>
          </h2>
          <p className="sm:text-xl text-[#1E2460]/70 max-w-3xl mx-auto">
            Van ontspanning tot avontuur en van gadgets tot gezonde extra's. Wij
            bieden voor ieder wat wils.
          </p>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-14 sm:mb-20">
          {[
            {
              icon: Star,
              title: "Enorm Aanbod",
              text: "Meer dan 10.000 partners zorgen voor eindeloze keuze en variatie.",
            },
            {
              icon: RefreshCw,
              title: "Altijd Iets Nieuws",
              text: "Maandelijks verse deals en exclusieve acties, speciaal voor jouw team.",
            },
            {
              icon: Zap,
              title: "Alles-in-één Mix",
              text: "Van dagjes uit en diners tot gadgets en wellness. Alles op één plek.",
            },
            {
              icon: Lightbulb,
              title: "Jouw Inbreng Telt",
              text: "Mis je een favoriete plek? Wij voegen jouw tips toe aan het aanbod.",
            },
            {
              icon: Users,
              title: "Slimme Teamuitjes",
              text: "Regel eenvoudig teamuitjes en profiteer direct van groepskorting.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex  gap-4 p-6 bg-gray-50 rounded-xl border border-[#1E2460]/5 hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-[#FF5758]/10 rounded-full flex items-center justify-center text-[#FF5758]">
                  <feature.icon className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#1E2460] text-lg mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#1E2460]/70 text-sm leading-relaxed">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer rounded-2xl overflow-hidden bg-gray-50 border border-gray-200 shadow-[0_1px_3px_rgba(30,36,96,0.08)] hover:shadow-[0_12px_32px_rgba(30,36,96,0.15)] transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="aspect-4/5 overflow-hidden relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                {/* Permanent subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E2460]/70 via-[#1E2460]/10 to-transparent transition-opacity duration-500" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#FF5758]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Category badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-block bg-white/95 backdrop-blur-sm text-[#1E2460] group-hover:bg-[#FF5758] group-hover:text-white font-bold py-1.5 px-3 uppercase text-[10px] tracking-[0.12em] rounded-full transition-all duration-300 shadow-sm">
                    {category.title}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                  <span className="inline-flex items-center gap-1.5 text-white text-xs font-semibold tracking-wide">
                    Ontdek meer
                    <svg
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="px-4 py-3.5">
                <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs text-[#1E2460]/70 font-medium flex items-center gap-1.5"
                    >
                      <span className="w-[4px] h-[4px] rounded-full bg-[#FF5758]/50" />

                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
