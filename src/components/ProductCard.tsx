import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="block relative aspect-square overflow-hidden bg-slate-100 border border-slate-200 shadow-premium hover:shadow-premium-hover transition-all duration-300 group rounded-sm"
    >
      {/* Product Image */}
      <img
        src={product.images[0]}
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />

      {/* Chemical Formula Overlay (Top-Right) */}
      {product.chemicalFormula && (
        <span className="absolute top-3 right-3 bg-brand-dark/90 text-white font-medium text-[10px] px-2 py-0.5 uppercase tracking-wider font-display z-10 transition-opacity duration-300 group-hover:opacity-0">
          {product.chemicalFormula}
        </span>
      )}

      {/* Centered white bottom block */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 border-t border-slate-200 py-3.5 px-2 text-center transition-all duration-300 group-hover:bg-brand-secondary group-hover:border-brand-secondary">
        <span className="font-bold text-xs sm:text-sm font-display text-brand-dark uppercase tracking-widest block transition-colors duration-300 group-hover:text-white">
          {product.name}
        </span>
      </div>
    </Link>
  );
};
