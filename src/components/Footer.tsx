import React from 'react';
import { Link } from 'react-router-dom';
import { Crown, Mail, Phone, MapPin } from 'lucide-react';
import { products } from '../data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t-4 border-brand-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Company Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 w-fit">
              <div className="bg-brand-secondary p-2 flex items-center justify-center text-white">
                <Crown className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight font-display leading-none">
                  KINGS
                </span>
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-widest leading-none mt-0.5">
                  INTERNATIONAL
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Kings International is a premier global manufacturer, processor, and exporter of high-grade industrial minerals and iron oxide chemical pigments.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-colors text-white"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-colors text-white"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-sm bg-brand-primary flex items-center justify-center hover:bg-brand-secondary transition-colors text-white"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display border-b border-brand-primary/45 pb-2">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-sm">
              {products.slice(0, 6).map((product) => (
                <li key={product.id}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="hover:text-white hover:underline transition-colors text-slate-400 block"
                  >
                    {product.name} {product.chemicalFormula ? `(${product.chemicalFormula})` : ''}
                  </Link>
                </li>
              ))}
              {products.length > 6 && (
                <li>
                  <Link
                    to="/products"
                    className="text-brand-accent hover:underline text-xs font-bold uppercase tracking-wider block"
                  >
                    + View All Minerals
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display border-b border-brand-primary/45 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  Quality & Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white hover:underline transition-colors text-slate-400 block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6 font-display border-b border-brand-primary/45 pb-2">
              Contact Information
            </h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                <span>
                  <strong>Registered Office:</strong><br />
                  Kings Tower, Plot No. 42-A, Industrial Growth Centre, Sector 8, Gandhidham, Gujarat, India - 370201
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-secondary shrink-0" />
                <a href="tel:+912836224000" className="hover:text-white transition-colors">
                  +91 2836 224 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                <a href="mailto:info@kingsinternational.com" className="hover:text-white transition-colors">
                  info@kingsinternational.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-brand-primary/20 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>© 2026 Kings International. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-350">Privacy Policy</a>
            <a href="#" className="hover:text-slate-350">Terms of Use</a>
            <a href="#" className="hover:text-slate-350">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
