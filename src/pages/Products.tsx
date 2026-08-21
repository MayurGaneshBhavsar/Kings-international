import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  // Extract unique categories from products, prepend 'All'
  const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&w=1200&q=80"
            alt="Kings International Industrial Raw Minerals"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2.5 font-display">
            Premium Mineral Catalog
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display">
            Our Products
          </h1>
          <div className="h-1 w-20 bg-brand-secondary mx-auto mt-4" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 text-xs font-semibold text-brand-text-muted">
          <a href="/" className="hover:text-brand-secondary transition-colors">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-brand-dark">Products</span>
        </div>
      </div>

      {/* Main Grid and Filtering Section */}
      <section className="py-20 bg-white flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            title="Industrial Minerals & Chemical Oxides"
            subtitle="Kings International offers customized, laboratory-tested minerals for global manufacturing and heavy industrial applications."
          />

          {/* Categories Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-200 border cursor-pointer ${
                  selectedCategory === category
                    ? 'bg-brand-secondary text-white border-brand-secondary'
                    : 'bg-white text-brand-dark border-slate-200 hover:border-brand-secondary hover:text-brand-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-dashed border-slate-200">
              <p className="text-brand-text-muted font-medium">No products found in this category.</p>
            </div>
          )}

          {/* Sourcing and Custom Grading Note */}
          <div className="mt-16 bg-slate-50 border border-slate-200 p-8">
            <h3 className="text-lg font-bold text-brand-dark mb-3 font-display">
              Custom Mineral Sourcing & Grading
            </h3>
            <p className="text-sm text-brand-text-muted leading-relaxed">
              If your manufacturing process requires specific parameters or minerals not listed in our standard catalogue (such as custom mesh sizes for bentonite, silica sand grading, barytes specific gravity levels, or specialized iron oxide color shades), please contact our laboratory team directly. We routinely formulate custom blends and adjust milling grades to meet unique customer specifications.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-primary py-12 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl font-bold font-display text-white">
            Need Bulk Testing Samples?
          </h2>
          <p className="text-sm text-blue-100 max-w-xl mx-auto">
            We provide verified physical samples of our minerals and pigments for lab checks prior to commercial orders.
          </p>
          <a
            href="/contact"
            className="px-5 py-2.5 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold text-xs uppercase tracking-wider inline-block cursor-pointer shadow-md"
          >
            Request Mineral Samples
          </a>
        </div>
      </section>
    </div>
  );
};
