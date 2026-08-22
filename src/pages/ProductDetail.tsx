import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Download, CheckCircle, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { InquiryForm } from '../components/InquiryForm';

export const ProductDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const inquiryFormRef = useRef<HTMLDivElement>(null);

  const product = products.find((p) => p.slug === slug);

  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  useEffect(() => {
    setDownloadSuccess(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!product) {
    return (
      <div className="flex-grow py-36 bg-slate-50 text-center flex flex-col justify-center items-center">
        <h2 className="text-3xl font-extrabold text-brand-dark mb-4 font-display">Product Not Found</h2>
        <p className="text-brand-text-muted mb-8 max-w-md">
          The mineral or chemical oxide you are looking for does not exist in our catalog.
        </p>
        <Link
          to="/"
          className="px-5 py-2.5 bg-brand-primary hover:bg-brand-dark text-white font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1.5"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  const scrollToInquiry = () => {
    inquiryFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadSpecs = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 3000);

      const element = document.createElement("a");
      const file = new Blob([
        `KINGS INTERNATIONAL - TECHNICAL DATASHEET\n` +
        `Product: ${product.name}\n` +
        `Chemical Formula: ${product.chemicalFormula || 'N/A'}\n` +
        `Category: ${product.category}\n` +
        `====================================================\n\n` +
        `DESCRIPTION:\n${product.description}\n\n` +
        `SPECIFICATIONS:\n` +
        product.specifications.map(s => `- ${s.label}: ${s.value}`).join('\n') +
        `\n\nAPPLICATIONS:\n` +
        product.applications.map(a => `- ${a}`).join('\n') +
        `\n\nDisclaimer: Specifications are representative of standard production runs. Kings International reserves the right to adjust sizing based on raw material reserves.`
      ], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `Kings-International-${product.slug}-datasheet.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1200);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden border-b-4 border-brand-secondary">
        <div className="absolute inset-0 z-0">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 to-brand-dark/80" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2 font-display">
            {product.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display uppercase tracking-tight">
            {product.name} Details
          </h1>
          <div className="text-xs font-semibold text-slate-350 mt-3 font-display">
            <Link to="/" className="hover:text-brand-accent transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-brand-accent transition-colors">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      {/* 2. Left-Sidebar & Main Content Grid */}
      <section className="py-16 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            
            {/* LEFT COLUMN: Sidebar Navigation */}
            <div className="lg:col-span-3 space-y-6">
              {/* Product Links List */}
              <div className="bg-white border border-slate-200 shadow-sm overflow-hidden rounded-sm">
                <div className="bg-brand-dark text-white py-4 px-5 text-sm font-bold uppercase tracking-wider border-b border-brand-secondary font-display">
                  All Products
                </div>
                <div className="divide-y divide-slate-150">
                  {products.map((p) => {
                    const isActive = p.slug === product.slug;
                    return (
                      <Link
                        key={p.slug}
                        to={`/products/${p.slug}`}
                        className={`flex items-center justify-between py-3.5 px-5 text-sm font-medium transition-all duration-200 group ${
                          isActive
                            ? 'bg-brand-secondary text-white font-bold'
                            : 'bg-white text-slate-700 hover:bg-slate-50 hover:text-brand-secondary'
                        }`}
                      >
                        <span className="capitalize">{p.name}</span>
                        <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                          isActive ? 'text-white translate-x-0.5' : 'text-slate-400 group-hover:translate-x-0.5'
                        }`} />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleDownloadSpecs}
                  disabled={isDownloading}
                  className="w-full bg-[#e11d48] hover:bg-[#be123c] text-white py-3.5 px-4 font-bold text-center flex items-center justify-center gap-2 rounded-sm text-sm uppercase tracking-wider transition-colors duration-200 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed shadow-sm"
                >
                  {isDownloading ? (
                    <>
                      <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                      Downloading...
                    </>
                  ) : downloadSuccess ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Specs Saved
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" /> Download Brochure
                    </>
                  )}
                </button>

                <button
                  onClick={scrollToInquiry}
                  className="w-full bg-brand-primary hover:bg-brand-dark text-white py-3.5 px-4 font-bold text-center block rounded-sm text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-sm"
                >
                  Request A Quote
                </button>
              </div>
            </div>

            {/* RIGHT COLUMN: Product Technical Information */}
            <div className="lg:col-span-9 bg-white border border-slate-200 p-6 sm:p-10 shadow-sm rounded-sm space-y-10">
              
              {/* Product Header */}
              <div className="border-b border-slate-200 pb-5">
                <h2 className="text-2xl md:text-3.5xl font-extrabold text-brand-dark font-display uppercase tracking-tight">
                  {product.name}
                </h2>
                {product.chemicalFormula && (
                  <p className="text-brand-secondary font-semibold text-sm mt-1">
                    Chemical Formula: {product.chemicalFormula}
                  </p>
                )}
              </div>

              {/* Two Side-by-Side Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="aspect-[4/3] bg-slate-100 border border-slate-200 overflow-hidden relative rounded-sm">
                  <img
                    src={product.images[0]}
                    alt={`${product.name} Sample 1`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] bg-slate-100 border border-slate-200 overflow-hidden relative rounded-sm">
                  <img
                    src={product.images[1] || product.images[0]}
                    alt={`${product.name} Sample 2`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Subheading and Primary Overview */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-dark font-display border-l-4 border-brand-secondary pl-3 uppercase tracking-wide">
                  {product.name} - High Purity Grade Industrial Mineral by Kings International
                </h3>
                <p className="text-brand-text-muted text-sm md:text-base leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>

              {/* Key Features List */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-brand-dark font-display border-b border-slate-100 pb-2 uppercase tracking-wide">
                  Key Features & Advantages
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-brand-text-muted">
                      <span className="text-brand-secondary font-bold text-sm shrink-0 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Specifications Table */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-brand-dark font-display border-b border-slate-100 pb-2 uppercase tracking-wide">
                  Product Specifications & Properties
                </h3>
                <div className="overflow-x-auto border border-slate-200 rounded-sm">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-brand-dark font-bold font-display text-xs uppercase tracking-wider">
                        <th className="py-3 px-4 w-1/3">Property / Parameter</th>
                        <th className="py-3 px-4">Technical Specification / Value</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-brand-dark text-xs uppercase tracking-wide">Brand Name</td>
                        <td className="py-3 px-4 text-xs md:text-sm text-brand-text-muted">Kings International</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-brand-dark text-xs uppercase tracking-wide">Origin / Plant Location</td>
                        <td className="py-3 px-4 text-xs md:text-sm text-brand-text-muted">Khopoli, Maharashtra (India)</td>
                      </tr>
                      <tr className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-brand-dark text-xs uppercase tracking-wide">Export Loading Port</td>
                        <td className="py-3 px-4 text-xs md:text-sm text-brand-text-muted">Nhava Sheva (JNPT), Mumbai</td>
                      </tr>
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                          <td className="py-3 px-4 font-semibold text-brand-dark text-xs uppercase tracking-wide">{spec.label}</td>
                          <td className="py-3 px-4 text-xs md:text-sm text-brand-text-muted">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Industrial Applications */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-brand-dark font-display border-b border-slate-100 pb-2 uppercase tracking-wide">
                  Applications & Usage
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {product.applications.map((app, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-brand-text-muted">
                      <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full shrink-0 mt-2" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packaging and Storage */}
              <div className="space-y-3 bg-slate-50 p-5 border border-slate-200 rounded-sm">
                <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider font-display">
                  Packaging, Handling & Storage
                </h4>
                <p className="text-xs sm:text-sm text-brand-text-muted leading-relaxed">
                  Our products are securely packed in heavy-duty 25 kg multi-wall HDPE bags or bulk jumbo bags (1 M.T.), palletized and shrink-wrapped for international sea transport. Store in a cool, dry place. Keep bags tightly closed when not in use to avoid moisture absorption.
                </p>
              </div>

              {/* Why Choose Kings International */}
              <div className="space-y-4">
                <h3 className="text-base font-bold text-brand-dark font-display border-b border-slate-100 pb-2 uppercase tracking-wide">
                  Why Choose Kings International?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-slate-200 p-4 rounded-sm text-center">
                    <span className="font-bold text-brand-secondary text-lg block mb-1">State-of-the-Art Plant</span>
                    <span className="text-xs text-brand-text-muted">Khopoli facility equipped with modern processing machinery.</span>
                  </div>
                  <div className="border border-slate-200 p-4 rounded-sm text-center">
                    <span className="font-bold text-brand-secondary text-lg block mb-1">JNPT Port Proximity</span>
                    <span className="text-xs text-brand-text-muted">Strategic location near Mumbai ensures fast shipping operations.</span>
                  </div>
                  <div className="border border-slate-200 p-4 rounded-sm text-center">
                    <span className="font-bold text-brand-secondary text-lg block mb-1">Quality Guaranteed</span>
                    <span className="text-xs text-brand-text-muted">Consistent purity and sizing check across every single batch.</span>
                  </div>
                </div>
              </div>



            </div>

          </div>
        </div>
      </section>

      {/* 3. Embedded Inquiry Form */}
      <section ref={inquiryFormRef} className="py-20 bg-white border-t border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3.5xl font-extrabold text-brand-dark font-display uppercase tracking-tight">
              Request Sizing & Quotation
            </h2>
            <p className="text-sm text-brand-text-muted mt-2">
              Send your parameters and packing requests for {product.name} to our export department.
            </p>
          </div>
          <InquiryForm prefilledProduct={product.slug} />
        </div>
      </section>
    </div>
  );
};
