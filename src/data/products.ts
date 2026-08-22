import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'iron-oxide',
    slug: 'iron-oxide',
    name: 'Iron Oxide',
    chemicalFormula: 'Fe₂O₃ / Fe₃O₄',
    category: 'Pigments & Oxides',
    shortDescription: 'One of the most widely used inorganic pigments in industry, valued for its strong coloring power, chemical stability, and ease of use across formulations.',
    description: 'Iron Oxide is one of the most widely used inorganic pigments in industry, valued for its strong coloring power, chemical stability, and ease of use across formulations. Kings International manufactures and exports Iron Oxide in Red, Yellow, and Black — supplying paints and coatings, construction, ceramics, plastics, rubber, and fertilizer industries in India and abroad.\n\nWhat is Iron Oxide?\nIron Oxide is an iron-based compound available in three primary forms — Red (Fe₂O₃), Yellow (FeOOH), and Black (Fe₃O₄) — each suited to different applications based on color strength, opacity, and stability. Our manufacturing process is built for consistency: every batch matches the last in shade, particle size, and purity.',
    images: [
      '/products/iron-oxide.png',
      'https://images.unsplash.com/photo-1508873696983-2df519f0397e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      'High tinting strength and colour consistency, batch to batch',
      'UV and weather resistant — colour holds under sun and moisture',
      'Thermally stable, suited to ceramics, rubber, and friction materials',
      'Chemically inert — resists acids, alkalis, and solvents',
      'Fine, uniform particle size for smooth dispersion',
      'Non-toxic, free of heavy metals'
    ],
    specifications: [
      { label: 'Chemical Formula', value: 'Fe₂O₃ / Fe₃O₄' },
      { label: 'Red Iron Oxide', value: 'Highest opacity and depth of colour; used in paints, cement and concrete, rubber, and ceramics' },
      { label: 'Yellow Iron Oxide', value: 'Bright, stable colour with strong tinting power; used in paints, enamels, plastics, and paper' },
      { label: 'Black Iron Oxide', value: 'Deepest shade with anti-corrosive properties; used in coatings, cement, and surface treatments' },
      { label: 'Packaging', value: 'Supplied in 25 kg bags or bulk packaging, moisture-resistant and suited for export shipment.' }
    ],
    applications: [
      'Paints & Coatings',
      'Construction & Concrete',
      'Ceramics & Glass',
      'Plastics & Rubber',
      'Wood Polish',
      'Brake Linings',
      'Fertilizers'
    ]
  },
  {
    id: 'magnetite',
    slug: 'magnetite',
    name: 'Magnetite',
    chemicalFormula: 'Fe₃O₄',
    category: 'Iron Oxides & Ores',
    shortDescription: 'High density, magnetic properties, and iron content, suited for construction concrete shielding and catalyst production.',
    description: 'Magnetite (Fe₃O₄) is an iron oxide valued for its high density, magnetic properties, and iron content. Kings International supplies Magnetite for construction, ceramics, and catalyst applications across India and export markets.',
    images: [
      '/products/magnetite.png',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      'High density and specific gravity, suited for gravity separation processes',
      'High iron (Fe) content with consistent purity',
      'Fine, controlled particle size distribution',
      'Chemically stable and non-toxic'
    ],
    specifications: [
      { label: 'Chemical Formula', value: 'Fe₃O₄' },
      { label: 'Mineral Type', value: 'Ferromagnetic Iron Oxide' },
      { label: 'Density / SG', value: 'High specific gravity (~4.9 - 5.1 g/cm³)' },
      { label: 'Purity Level', value: 'Consistent industrial grade' },
      { label: 'Packaging', value: 'Supplied in 25 kg bags or bulk packaging, graded to particle size on request.' }
    ],
    applications: [
      'Construction — heavy aggregate in high-density concrete for radiation shielding and counterweight applications',
      'Ceramics & Pigments — black colourant and functional filler',
      'Catalysts — base material in catalyst manufacturing'
    ]
  },
  {
    id: 'manganese-dioxide',
    slug: 'manganese-dioxide',
    name: 'Manganese Dioxide',
    chemicalFormula: 'MnO₂',
    category: 'Processed Minerals',
    shortDescription: 'Naturally occurring oxide mineral valued for its oxidising properties, colour strength, and stability at high temperatures.',
    description: 'Manganese Dioxide (MnO₂) is a naturally occurring oxide mineral valued for its oxidising properties, colour strength, and stability at high temperatures. Kings International supplies Manganese Dioxide across India and export markets, suited to a wide range of industrial applications.',
    images: [
      '/products/manganese-dioxide.png',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      'High manganese content with consistent purity',
      'Strong oxidising and depolarising properties',
      'Stable at high temperatures',
      'Fine, controlled particle size'
    ],
    specifications: [
      { label: 'Chemical Formula', value: 'MnO₂' },
      { label: 'Oxidising Action', value: 'High reactivity/depolarising efficiency' },
      { label: 'Thermal Profile', value: 'Thermally stable at high temperatures' },
      { label: 'Packaging', value: 'Supplied in 25 kg bags or bulk packaging, graded to particle size on request.' }
    ],
    applications: [
      'Dry Cell Batteries — a depolariser and active cathode material in zinc-carbon and alkaline batteries',
      'Ferrite & Ceramics — a raw material in ferrite production and as a colourant/flux in ceramics',
      'Glass — a decolouriser to offset the green tint from iron impurities',
      'Welding Electrodes — a flux-forming additive in electrode coatings',
      'Catalysts — used as a catalyst and catalyst carrier in chemical processing',
      'Animal Feed & Fertilizers — a manganese micronutrient source'
    ]
  },
  {
    id: 'talc',
    slug: 'talc',
    name: 'Talc',
    chemicalFormula: 'Mg₃Si₄O₁₀(OH)₂',
    category: 'Processed Minerals',
    shortDescription: 'Naturally occurring hydrous magnesium silicate valued for its softness, chemical inertness, and platy particle structure.',
    description: 'Talc (Mg₃Si₄O₁₀(OH)₂) is a naturally occurring hydrous magnesium silicate valued for its softness, chemical inertness, and platy particle structure. Kings International supplies Talc across India and export markets, suited to a wide range of industrial applications.',
    images: [
      '/products/talc.png',
      'https://images.unsplash.com/photo-1505944270255-72b8c68c6a70?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1582738411706-bfc8e691d1c2?auto=format&fit=crop&w=800&q=80',
    ],
    features: [
      'High purity with consistent whiteness',
      'Soft, platy particle structure for smooth dispersion',
      'Chemically inert and non-reactive',
      'Low abrasiveness and good lubricity',
      'Fine, controlled particle size'
    ],
    specifications: [
      { label: 'Chemical Formula', value: 'Mg₃Si₄O₁₀(OH)₂' },
      { label: 'Structure', value: 'Platy / Lamellar shape' },
      { label: 'Whiteness Grade', value: 'Premium high-whiteness' },
      { label: 'Packaging', value: 'Supplied in 25 kg bags or bulk packaging, graded to particle size on request.' }
    ],
    applications: [
      'Paints & Coatings — an extender pigment improving opacity, texture, and durability',
      'Plastics — a filler reinforcing stiffness and dimensional stability, primarily in polypropylene',
      'Ceramics — a flux and body material improving strength and thermal shock resistance',
      'Paper — a coating and filler material improving smoothness and printability',
      'Cosmetics — a base material in powders and personal care formulations',
      'Rubber — an anti-tack agent and filler in rubber compounding'
    ]
  }
];
