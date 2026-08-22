import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Cpu, Award, Globe, HeartHandshake, ArrowRight, Building, Paintbrush, HelpCircle, Waves, Droplet, Factory } from 'lucide-react';
import { Hero } from '../components/Hero';
import { ProductCard } from '../components/ProductCard';
import { SectionHeading } from '../components/SectionHeading';
import { products } from '../data/products';

export const Home: React.FC = () => {
  // Show first 6 products for the homepage grid, and link to products page for more
  const homeProducts = products.slice(0, 6);

  const features = [
    {
      icon: <Award className="w-8 h-8 text-brand-secondary" />,
      title: 'Premium Quality',
      description: 'Rigorous laboratory testing at every stage ensures our minerals meet strict chemical and physical parameters.',
    },
    {
      icon: <Truck className="w-8 h-8 text-brand-secondary" />,
      title: 'Consistent Supply',
      description: 'Strategically located facilities and large stockpiles guarantee uninterrupted year-round deliveries.',
    },
    {
      icon: <Cpu className="w-8 h-8 text-brand-secondary" />,
      title: 'Customized Solutions',
      description: 'We process minerals to custom chemical grades and specific particle sizes (mesh size) as per customer needs.',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-secondary" />,
      title: 'Industry Expertise',
      description: 'Deep technical knowledge of mineral properties and applications across oil drilling, construction, and chemicals.',
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-secondary" />,
      title: 'Global Reach',
      description: 'Export network spanning major ports across Europe, the Americas, Middle East, and Asia-Pacific regions.',
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-brand-secondary" />,
      title: 'Reliable Service',
      description: 'Dedicated client representatives and transparent communication from order placement to port delivery.',
    },
  ];

  const industries = [
    { name: 'Construction', icon: <Building className="w-6 h-6" />, desc: 'Weighting materials, road base, and raw aggregative structures.' },
    { name: 'Paints & Coatings', icon: <Paintbrush className="w-6 h-6" />, desc: 'High-opacity red, yellow, and black oxide coloring pigments.' },
    { name: 'Concrete & Cement', icon: <HelpCircle className="w-6 h-6" />, desc: 'Architectural concrete block pigments, tile tinting, and high-density aggregate.' },
    { name: 'Ceramics', icon: <Droplet className="w-6 h-6" />, desc: 'High purity silica, iron oxides, and clays for glazing and bodies.' },
    { name: 'Foundry', icon: <Factory className="w-6 h-6" />, desc: 'Sand additives and high-performance swelling bentonite binders.' },
    { name: 'Water Treatment', icon: <Waves className="w-6 h-6" />, desc: 'Magnetic filtering magnetite and chemical neutralization components.' },
    { name: 'Chemical Industry', icon: <Cpu className="w-6 h-6" />, desc: 'Catalysts, compounding inputs, and industrial oxide bases.' },
    { name: 'Manufacturing', icon: <Factory className="w-6 h-6" />, desc: 'Specialized mineral fillers for paper, plastics, friction pads, and rubber.' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Kings International Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 border-2 border-brand-secondary translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Kings International Mineral Processing"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest block font-display">
                Established Supply Partner
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-display leading-tight">
                Your Trusted Partner in Industrial Minerals
              </h2>
              <div className="h-1 w-20 bg-brand-secondary" />
              
              <div className="text-brand-text-muted space-y-4 leading-relaxed">
                <p>
                  Kings International is an established global processor and exporter of top-grade industrial minerals and iron oxide chemical pigments. Operating from state-of-the-art facilities, we bridge the gap between raw natural reserves and highly demanding industrial production specifications.
                </p>
                <p>
                  With decades of operational expertise, our focus remains on providing stable product parameters, reliable volumes, and custom logistics solutions. Whether your production requires API-grade weighting ores, high-purity coloring pigments, or specialized mineral fillers, we provide quality consistency batch after batch.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="border-l-4 border-brand-secondary pl-4">
                  <h4 className="font-bold text-brand-dark">Quality Assured</h4>
                  <p className="text-xs text-brand-text-muted mt-1">Conforming to international specifications & API standards</p>
                </div>
                <div className="border-l-4 border-brand-secondary pl-4">
                  <h4 className="font-bold text-brand-dark">Global Logistics</h4>
                  <p className="text-xs text-brand-text-muted mt-1">Exporting safely to major worldwide ports via containerized sea freight</p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/about"
                  className="px-5 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Categories Section */}
      <section className="py-20 bg-brand-bg-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Premium Product Catalog"
            subtitle="Explore our comprehensive range of high-performance natural iron ore minerals and synthetic oxide pigments, processed to meet exact physical and chemical specifications."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="px-8 py-3.5 bg-brand-secondary hover:bg-brand-dark text-white font-bold text-sm uppercase tracking-wider inline-block rounded-full shadow-md transition-all duration-200 cursor-pointer"
            >
              All Products
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Kings International */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why Choose Kings International"
            subtitle="We maintain an unyielding commitment to mineral purity, process compliance, and supply chain integrity to support your manufacturing goals."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 p-8 hover:border-brand-secondary transition-colors duration-300">
                <div className="mb-4 inline-block p-3 bg-white border border-slate-200">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2.5 font-display">
                  {feat.title}
                </h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-20 bg-brand-dark text-white relative">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d4ed8_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed8_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeading
            title="Industries We Serve"
            subtitle="Our minerals and chemical oxides act as critical raw materials in primary manufacturing applications globally."
            light={true}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <div key={idx} className="bg-brand-primary/50 border border-slate-700/50 p-6 hover:border-brand-accent transition-colors group">
                <div className="text-brand-accent mb-4 group-hover:scale-110 transition-transform duration-350 inline-block">
                  {ind.icon}
                </div>
                <h3 className="text-base font-bold text-white mb-2 font-display uppercase tracking-wider">
                  {ind.name}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-secondary hover:bg-brand-accent text-white font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              Request Custom Sourcing
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Quality Commitment Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 order-2 lg:order-1">
              <span className="text-xs font-bold text-brand-secondary uppercase tracking-widest block font-display">
                Quality Verification & Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-dark font-display leading-tight">
                Committed to Consistent Quality
              </h2>
              <div className="h-1 w-20 bg-brand-secondary" />
              
              <div className="text-brand-text-muted space-y-4 leading-relaxed">
                <p>
                  In the bulk minerals industry, consistency is the ultimate measure of quality. A variance of even 0.5% in iron oxide purity or a slight shift in particle size distribution can disrupt complex industrial formulas.
                </p>
                <p>
                  At Kings International, we mitigate this risk through our structured Quality Management System. Our internal, fully equipped laboratories conduct comprehensive raw material analysis, in-process checking, and final pre-shipment validation. We verify:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm font-semibold text-brand-dark list-disc list-inside">
                  <li>Chemical purity (XRF & Wet Chemistry)</li>
                  <li>Specific gravity & bulk density</li>
                  <li>Laser particle size distribution</li>
                  <li>Oil absorption & pH parameters</li>
                  <li>Moisture content controls</li>
                  <li>Sieve residue analysis</li>
                </ul>
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="px-5 py-3 bg-brand-primary hover:bg-brand-secondary text-white font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  Request Technical Sheets
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative order-1 lg:order-2">
              <div className="absolute inset-0 border-2 border-brand-secondary -translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                alt="Kings International Laboratory & Quality Control"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Presence Section */}
      <section className="py-20 bg-brand-bg-light border-t border-slate-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Global Supply Capability"
            subtitle="Serving mineral importers, industrial buyers, and manufacturing corporations across six continents."
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-12">
            <div className="bg-white p-8 border border-slate-200 shadow-premium">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary font-display">30+</div>
              <div className="text-xs font-bold text-brand-dark uppercase tracking-wider mt-2 font-display">Countries Served</div>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-premium">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary font-display">150K+</div>
              <div className="text-xs font-bold text-brand-dark uppercase tracking-wider mt-2 font-display">MT Annual Output</div>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-premium">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary font-display">100%</div>
              <div className="text-xs font-bold text-brand-dark uppercase tracking-wider mt-2 font-display">Batch Traceability</div>
            </div>
            <div className="bg-white p-8 border border-slate-200 shadow-premium">
              <div className="text-3xl md:text-4xl font-extrabold text-brand-secondary font-display">24Hr</div>
              <div className="text-xs font-bold text-brand-dark uppercase tracking-wider mt-2 font-display">Inquiry Response</div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA Section */}
      <section className="bg-brand-primary py-16 text-white text-center relative">
        <div className="absolute inset-0 bg-brand-dark/20 z-0" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold font-display text-white">
            Looking for the Right Mineral Solution?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto font-normal">
            Our team is ready to understand your requirements and provide the right product solution.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm uppercase tracking-wider cursor-pointer transition-colors shadow-md"
            >
              Send Inquiry
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 border border-white hover:bg-white hover:text-brand-dark text-white font-bold text-sm uppercase tracking-wider cursor-pointer transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
