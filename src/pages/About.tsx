import React from 'react';

export const About: React.FC = () => {
  const vitalFactors = [
    'Advanced infrastructure base',
    'Experienced and skilled workforce',
    'Superior quality products',
    'Ethical business policies',
    'Market-leading competitive pricing',
    'Timely delivery'
  ];

  const industriesColumn1 = [
    'Construction',
    'Paints',
    'Glass',
    'Ceramics',
    'Cosmetics',
    'Rubber',
    'Plastics',
    'Animal Feed'
  ];

  const industriesColumn2 = [
    'Paper',
    'Oil Drilling',
    'Fertilizers',
    'Brake Lining',
    'Foundry',
    'Welding Electrodes',
    'Water & WasteWater Treatment',
    'DMS in Coal Industry',
    'Magnetic Fluid'
  ];

  // A custom checkmark SVG bullet
  const CheckBullet: React.FC = () => (
    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-secondary text-white shrink-0 mt-0.5">
      <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      </svg>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Kings International Corporate Office"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark/95" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2c59_1px,transparent_1px),linear-gradient(to_bottom,#0f2c59_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-15" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-3xl md:text-4.5xl font-extrabold text-white font-display">
            About The Company
          </h1>
          <div className="text-xs font-semibold text-slate-400 mt-2 font-display">
            <a href="/" className="hover:text-brand-accent transition-colors">Home</a>
            <span className="mx-2">/</span>
            <span>About Us</span>
            <span className="mx-2">/</span>
            <span className="text-white">About The Company</span>
          </div>
        </div>
      </div>

      {/* 2. Main content area */}
      <main className="py-16 flex-grow bg-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12 text-brand-text-dark">
          
          {/* Section 1: Intro Text + Building Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Text content */}
            <div className="lg:col-span-7 space-y-5 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Kings International</strong> is a manufacturer and exporter specialising in the manufacturing and exporting of Iron Oxide, Processed Minerals, Concrete and Cement Colors, Hematite, and Magnetite. Established over 35 years ago, the company has developed a strong reputation in the market for its quality of products, ethical business policies, and timely delivery.
              </p>
              
              {/* Goals Sub-section directly under intro (matching screenshot) */}
              <div className="space-y-4 pt-4">
                <h2 className="text-xl font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-100 pb-2">
                  Our Goals
                </h2>
                <p className="text-sm">
                  At Kings International, we strive to be a leading player in the iron oxide and processed minerals business, and look to be one of the most trusted names in the industry.
                </p>
                <p className="text-sm">
                  We have a state-of-the-art plant in Khopoli, Maharashtra, strategically located in close proximity to Nhava Sheva Port, for manufacturing and processing Iron Oxide, Concrete Colors, and Minerals, equipped with modern machinery manned by experienced personnel who pursue the company's quest for quality.
                </p>
                <p className="text-sm">
                  Kings International stands out in an unorganized industry through its professional management, strong infrastructure, and clear focus.
                </p>
                <p className="text-sm">
                  Backed by a sound financial standing and a customer-first approach, we have a presence across 15+ countries worldwide.
                </p>
              </div>
            </div>

            {/* Framed office building image (right side) */}
            <div className="lg:col-span-5">
              <div className="bg-white p-3.5 border border-slate-200 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
                  alt="Kings International Office Building"
                  className="w-full h-auto object-cover border border-slate-100"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Vital Factors Checklist */}
          <div className="space-y-5 pt-4">
            <h2 className="text-xl font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-100 pb-2">
              Some of the Vital Factors That Help Us Stay Ahead of Our Counterparts
            </h2>
            
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-2">
              {vitalFactors.map((factor, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm">
                  <CheckBullet />
                  <span className="font-semibold text-brand-text-dark">{factor}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm leading-relaxed pt-2">
              We have employed a proficient team of professionals who assist us in providing supreme quality products. The team works in close proximity with one another, upholding a healthy and collaborative environment within the premises.
            </p>
          </div>

          {/* Section 3: Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {/* Vision */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-100 pb-2">
                Our Vision
              </h2>
              <p className="text-sm leading-relaxed text-brand-text-muted">
                Our vision focuses our attention on the future of our company and its long-term well-being. We aspire to achieve this by working closely with our clients and partners as they strive to turn their own ideas into reality. Our vision is about reaching our full potential as a partner to all those we work with, and ensuring long-term, satisfying business relationships.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-100 pb-2">
                Our Mission
              </h2>
              <p className="text-sm leading-relaxed text-brand-text-muted">
                Our mission is to deliver optimal products of quality and service at the most competitive prices. For us, customer satisfaction is the most important thing. We are friendly in our dealings with customers, which helps us retain existing clients and expand our reach.
              </p>
            </div>
          </div>

          {/* Section 4: Industries We Serve (Checklist columns) */}
          <div className="space-y-5 pt-6">
            <h2 className="text-xl font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-100 pb-2">
              Industries We Serve
            </h2>
            <p className="text-sm leading-relaxed">
              Kings International offers a wide range of Products that cater to varied Industries listed below. Our professional approach & familiarity of local and international markets assist us to establish a goodwill in the National as well as in the International market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3.5 pl-2">
              {/* Column 1 */}
              <ul className="space-y-3.5">
                {industriesColumn1.map((ind, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckBullet />
                    <span className="font-semibold text-brand-text-dark">{ind}</span>
                  </li>
                ))}
              </ul>
              
              {/* Column 2 */}
              <ul className="space-y-3.5">
                {industriesColumn2.map((ind, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckBullet />
                    <span className="font-semibold text-brand-text-dark">{ind}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};
