import { Button } from "@/components/ui/button";

export function ImpactSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto bg-[#FFFAEB]">
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
  );
}
