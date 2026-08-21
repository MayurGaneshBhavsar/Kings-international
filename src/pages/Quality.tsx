import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Layers, FlaskConical, Package, Ship, Settings } from 'lucide-react';

export const Quality: React.FC = () => {
  const steps = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: '1. Sourcing & Sorting',
      desc: 'Raw mineral ores are sourced from verified geographical deposits and physically sorted at our storage yards to eliminate external debris.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: '2. Milling & Screening',
      desc: 'Ores are crushed and processed in high-performance Raymond pulverizers and ball mills, utilizing vibrating screeners to maintain exact mesh ranges.'
    },
    {
      icon: <FlaskConical className="w-6 h-6" />,
      title: '3. Laboratory Validation',
      desc: 'Samples from each milled batch undergo physical and chemical testing, including specific gravity checks, sieve retention, and XRF analysis.'
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: '4. Secure Packaging',
      desc: 'Approved batches are bagged in multi-ply moisture-proof paper or HDPE bags, loaded onto pallets, and secured with shrink-wrap for export.'
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=1200&q=80"
            alt="Kings International Quality Lab"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2.5 font-display">
            Infrastructure & Verification
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display">
            Infrastructure & Quality Control
          </h1>
          <div className="h-1 w-20 bg-brand-secondary mx-auto mt-4" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 text-xs font-semibold text-brand-text-muted">
          <a href="/" className="hover:text-brand-secondary transition-colors">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-brand-dark">Infrastructure / Quality</span>
        </div>
      </div>

      {/* Main Section: Quality Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-3xl font-bold text-brand-dark font-display">
                Certified Processing Standard
              </h2>
              <div className="h-1 w-16 bg-brand-secondary" />
              
              <div className="text-brand-text-muted space-y-4 text-sm leading-relaxed">
                <p>
                  Industrial processes depend on raw material consistency. At Kings International, we structure our processing around a rigorous Quality Management System. Our operations are fully ISO 9001:2015 certified, guaranteeing that we maintain standard operating procedures from mining sourcing down to shipping dispatch.
                </p>
                <p>
                  Our primary processing hub in Gujarat integrates crushing, magnetic separation, fine milling, and automated packaging. By owning and managing these stages directly, we prevent contamination, control moisture percentages, and satisfy bulk supply contracts with zero quality variance.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-center">
                <div className="bg-slate-50 border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-brand-secondary font-display">ISO</div>
                  <div className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mt-1">9001:2015 Certified</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-brand-secondary font-display">100%</div>
                  <div className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mt-1">In-house Testing</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-4">
                  <div className="text-2xl font-bold text-brand-secondary font-display">API</div>
                  <div className="text-[10px] font-bold text-brand-dark uppercase tracking-wider mt-1">Grade Hematite</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 border-2 border-brand-secondary translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                alt="Kings International Processing Machinery"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Steps Section */}
      <section className="py-20 bg-brand-bg-light border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Process Workflow"
            subtitle="How we maintain consistent quality metrics through every phase of processing."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-6 space-y-4">
                <div className="w-12 h-12 bg-brand-secondary/15 text-brand-secondary flex items-center justify-center border border-brand-secondary/25">
                  {step.icon}
                </div>
                <h3 className="font-bold text-brand-dark font-display text-base">
                  {step.title}
                </h3>
                <p className="text-brand-text-muted text-xs leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Infrastructure Modules: Laboratory, Storage, Logistics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Module 1: Laboratory Testing */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 border-2 border-brand-secondary -translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=800&q=80"
                alt="Kings Testing Laboratory"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
            
            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-brand-secondary">
                <FlaskConical className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-display">Testing and Verification</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark font-display">
                State-of-the-Art Mineral Testing Laboratory
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Our plant includes a fully integrated testing facility staffed by qualified chemical analysts. We perform extensive measurements on all incoming raw ores and outgoing powders. Our laboratory checklist includes particle sizing via laser diffraction, specific gravity verification (using pycnometers for API hematite), oil absorption index testing for coloring pigments, and chemical compound mapping via wet chemical assays.
              </p>
            </div>
          </div>

          {/* Module 2: Packaging & Storage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center lg:flex-row-reverse">
            {/* Image (5 cols) - Order 2 on desktop */}
            <div className="lg:col-span-5 relative lg:order-2">
              <div className="absolute inset-0 border-2 border-brand-secondary translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                alt="Packaging and Storage Facilities"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
            
            {/* Content (7 cols) - Order 1 on desktop */}
            <div className="lg:col-span-7 space-y-4 lg:order-1">
              <div className="flex items-center gap-2 text-brand-secondary">
                <Package className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-display">Storage & Packaging</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark font-display">
                Packaging Systems & Controlled Warehousing
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Minerals are highly sensitive to atmospheric moisture. To protect our finished products, we utilize automated packing systems that bag powders securely in multi-ply paper sacks, HDPE woven bags, or jumbo bulk bags (1.0 to 1.5 MT) with high-density internal plastic liners. All bags are palletized on heat-treated wooden pallets and wrapped tightly with protective stretch-film to withstand marine shipping.
              </p>
            </div>
          </div>

          {/* Module 3: Logistics & Shipping */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 border-2 border-brand-secondary -translate-x-3 translate-y-3 z-0" />
              <img
                src="https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&w=800&q=80"
                alt="Kings Port Logistics"
                className="w-full h-full object-cover relative z-10 border border-slate-200"
              />
            </div>
            
            {/* Content (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-brand-secondary">
                <Ship className="w-5 h-5" />
                <span className="text-xs font-bold uppercase tracking-widest font-display">Logistics & Shipping</span>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark font-display">
                Global Logistics via Strategic Sea Ports
              </h3>
              <p className="text-sm text-brand-text-muted leading-relaxed">
                Our corporate warehousing hub is located near major container ports like Mundra and Kandla in Gujarat, India. This proximity reduces overland transport, minimizes transit times, and allows us to offer flexible FOB, CFR, or CIF delivery terms. We handle all custom declarations, phytosanitary checks, and certificate of analysis documentation, ensuring that international shipments move smoothly.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-16 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold font-display text-white">
            Need Quality Certificates for Your Records?
          </h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto">
            We can provide representative certificates of analysis (COA) and material safety datasheets (MSDS) for our mineral products.
          </p>
          <a
            href="/contact"
            className="px-6 py-3.5 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-sm uppercase tracking-wider inline-block cursor-pointer shadow-md"
          >
            Request Documentation
          </a>
        </div>
      </section>
    </div>
  );
};
