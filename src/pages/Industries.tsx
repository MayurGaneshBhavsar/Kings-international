import React from 'react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../components/SectionHeading';
import { Building, Paintbrush, Box, Droplet, Factory, Waves, Layers } from 'lucide-react';

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  image: string;
  description: string;
  details: string;
  recommendedProducts: { name: string; slug: string }[];
}

export const Industries: React.FC = () => {
  const industriesList: IndustryItem[] = [
    {
      icon: <Building className="w-6 h-6 text-brand-secondary" />,
      title: 'Construction',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
      description: 'High-density mineral weighting agents for pipeline coatings and heavy structural aggregates.',
      details: 'In major civil engineering works, high specific gravity is vital. Our magnetite is processed specifically for heavy concrete aggregates, oil/gas pipeline concrete coatings, and radiation shielding barriers, ensuring maximum density and structural integrity.',
      recommendedProducts: [
        { name: 'Magnetite', slug: 'magnetite' },
        { name: 'Iron Oxide', slug: 'iron-oxide' },
      ],
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-brand-secondary" />,
      title: 'Paints & Coatings',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=800&q=80',
      description: 'Vibrant, UV-stable red, yellow, and black oxides for primers, industrial paints, and wood stains.',
      details: 'Paints and protective finishes require high-tinting pigments that resist environmental weathering. Our synthetic red, yellow, and black iron oxides are checked for oil absorption and dispersion parameters, making them ideal for rust-inhibitive red oxide primers, architectural finishes, and marine coatings.',
      recommendedProducts: [
        { name: 'Iron Oxide', slug: 'iron-oxide' },
        { name: 'Talc', slug: 'talc' },
      ],
    },
    {
      icon: <Box className="w-6 h-6 text-brand-secondary" />,
      title: 'Concrete & Cement Products',
      image: 'https://images.unsplash.com/photo-1526253038957-bce54e05968e?auto=format&fit=crop&w=800&q=80',
      description: 'Colorfast pigments for coloring architectural tiles, paving blocks, and ready-mix concrete.',
      details: 'Architectural masonry products like interlocking pavers, designer roofing tiles, and precast concrete walls rely on pigments that do not leach or fade in alkaline environments. Our coloring oxides are fully alkali-resistant and remain color-constant despite heavy sunlight exposure.',
      recommendedProducts: [
        { name: 'Iron Oxide', slug: 'iron-oxide' },
      ],
    },
    {
      icon: <Droplet className="w-6 h-6 text-brand-secondary" />,
      title: 'Ceramics & Glass',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      description: 'Pure iron oxides, quartz, and silica for glass coloration, pottery bodies, and glazing.',
      details: 'Our mineral selection provides primary inputs for glaze color depth, body texture, and heat expansion. We supply high-grade talc, custom quartz powders, and pure iron oxides to glass, porcelain, and ceramic tile manufacturing plants worldwide.',
      recommendedProducts: [
        { name: 'Iron Oxide', slug: 'iron-oxide' },
        { name: 'Talc', slug: 'talc' },
        { name: 'Magnetite', slug: 'magnetite' },
      ],
    },
    {
      icon: <Factory className="w-6 h-6 text-brand-secondary" />,
      title: 'Foundry & Metallurgy',
      image: 'https://images.unsplash.com/photo-1516216628859-9bccecab13ca?auto=format&fit=crop&w=800&q=80',
      description: 'Swelling bentonite binders, refractory silica, and magnetite sand additives for smooth mold finishes.',
      details: 'Metals casting demands molding media with excellent thermal stability. We supply premium-grade swelling bentonite as a binder for green sand molds, and magnetite powder sand additives to prevent casting defects (like pinholes and metal penetration) during high-temperature pours.',
      recommendedProducts: [
        { name: 'Magnetite', slug: 'magnetite' },
        { name: 'Manganese Dioxide', slug: 'manganese-dioxide' },
      ],
    },
    {
      icon: <Waves className="w-6 h-6 text-brand-secondary" />,
      title: 'Water Treatment & Filtration',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80',
      description: 'High-density magnetic magnetite media for industrial effluent and heavy metal filtration.',
      details: 'Magnetite acts as an efficient magnetic filtration medium. Because of its density and chemical stability, it is used in multi-media filters to remove heavy metals and suspended solids from industrial wastewater, and in magnetic separation cleaning tanks.',
      recommendedProducts: [
        { name: 'Magnetite', slug: 'magnetite' },
      ],
    },
    {
      icon: <Layers className="w-6 h-6 text-brand-secondary" />,
      title: 'Chemical Sourcing & Manufacturing',
      image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      description: 'Mineral catalysts, polymer fillers, friction materials, and customized compound fillers.',
      details: 'Our minerals function as high-value fillers and compound agents. From friction components in vehicle brake pads (where talc and magnetite control density and wear) to mineral fillers in plastics and paper, we deliver custom-milled powders with exact particle size distributions.',
      recommendedProducts: [
        { name: 'Iron Oxide', slug: 'iron-oxide' },
        { name: 'Talc', slug: 'talc' },
        { name: 'Manganese Dioxide', slug: 'manganese-dioxide' },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80"
            alt="Kings International Mineral Sourcing Industries"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2.5 font-display">
            Applications & Sectors
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display">
            Industries We Serve
          </h1>
          <div className="h-1 w-20 bg-brand-secondary mx-auto mt-4" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 text-xs font-semibold text-brand-text-muted">
          <a href="/" className="hover:text-brand-secondary transition-colors">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-brand-dark">Industries</span>
        </div>
      </div>

      {/* Main Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            title="Supplying Critical Raw Inputs Globally"
            subtitle="Our processed minerals and pigments fulfill specific physical and chemical roles in primary industrial sectors."
          />

          {/* Industry Cards Grid */}
          <div className="space-y-16">
            {industriesList.map((ind, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-slate-100 pb-16 last:border-b-0 last:pb-0 ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image block (5 cols) */}
                <div className={`lg:col-span-5 relative ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video overflow-hidden border border-slate-200 shadow-premium">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover hover:scale-102 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Text content block (7 cols) */}
                <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-brand-bg-light border border-brand-secondary/15">
                      {ind.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-brand-dark font-display">
                      {ind.title}
                    </h2>
                  </div>
                  
                  <p className="text-sm font-semibold text-brand-secondary uppercase tracking-wider font-display">
                    {ind.description}
                  </p>
                  
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {ind.details}
                  </p>

                  {/* Recommended products links */}
                  <div className="pt-2">
                    <span className="text-xs font-bold text-brand-dark uppercase tracking-wider font-display block mb-2">
                      Recommended Kings Minerals:
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {ind.recommendedProducts.map((p, pIdx) => (
                        <Link
                          key={pIdx}
                          to={`/products/${p.slug}`}
                          className="px-3.5 py-1.5 bg-slate-100 hover:bg-brand-secondary hover:text-white text-brand-dark text-xs font-bold transition-all duration-200 border border-slate-200 inline-block"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA section */}
      <section className="bg-brand-primary py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold font-display text-white">
            Have a Specialized Industrial Application?
          </h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto">
            Our technicians routinely assist engineering teams in qualifying raw material grades for specialized manufacturing processes.
          </p>
          <a
            href="/contact"
            className="px-6 py-3.5 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm uppercase tracking-wider inline-block cursor-pointer shadow-md"
          >
            Submit Application Details
          </a>
        </div>
      </section>
    </div>
  );
};
