import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight, Crown, Mail } from 'lucide-react';
import { products } from '../data/products';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();


  // Handle scroll event to transition transparent header to solid
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Run once on load
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
    setMobileDropdownOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Click outside listener for dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleInquiryClick = () => {
    navigate('/contact');
  };

  // Build the outer header classes dynamically based on scroll state
  const getHeaderClasses = () => {
    const base = "w-full transition-all duration-300 z-50";
    if (isScrolled) {
      return `${base} fixed top-0 left-0 right-0 bg-brand-dark/95 backdrop-blur-md shadow-premium border-b border-white/5`;
    } else {
      return `${base} absolute top-0 left-0 right-0 bg-transparent border-b border-white/10`;
    }
  };

  return (
    <header className={getHeaderClasses()}>
      {/* Top Bar - Solid blue color highlight band matching the screenshot styling */}
      <div className="bg-brand-secondary text-white text-xs py-2 px-4 md:px-8 flex flex-wrap justify-between items-center border-b border-white/10 relative z-50">
        <div className="flex items-center space-x-4">
          <span className="font-semibold uppercase tracking-wider">Globally Supplying Premium Industrial Minerals</span>
          <span className="hidden sm:inline opacity-30">|</span>
          <span className="hidden sm:inline font-semibold uppercase tracking-wider">ISO 9001:2015 Certified</span>
        </div>
        <div className="flex items-center space-x-4 mt-1 sm:mt-0">
          <a href="mailto:info@kingsinternational.com" className="hover:text-brand-accent flex items-center gap-1 transition-colors font-medium">
            <Mail className="w-3.5 h-3.5 text-white" /> info@kingsinternational.com
          </a>
        </div>
      </div>

      {/* Main Nav Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="bg-brand-secondary p-2 flex items-center justify-center text-white transition-colors group-hover:bg-brand-accent">
              <Crown className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold text-white tracking-tight font-display leading-none">
                KINGS
              </span>
              <span className="text-xs font-bold text-brand-accent uppercase tracking-widest leading-none mt-0.5">
                INTERNATIONAL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - UPPERCASE styling matching reference site */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-accent' : 'text-slate-100 hover:text-brand-accent'
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-accent' : 'text-slate-100 hover:text-brand-accent'
                }`
              }
            >
              ABOUT US
            </NavLink>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                onMouseEnter={() => setDropdownOpen(true)}
                className={`px-3 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors outline-none cursor-pointer ${
                  location.pathname.startsWith('/products') ? 'text-brand-accent' : 'text-slate-100 hover:text-brand-accent'
                }`}
              >
                PRODUCTS
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {dropdownOpen && (
                <div
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white border border-slate-200 shadow-premium py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="px-4 py-2 border-b border-slate-100 mb-1">
                    <Link
                      to="/products"
                      className="text-xs font-bold text-brand-secondary hover:underline uppercase tracking-wider block"
                      onClick={() => setDropdownOpen(false)}
                    >
                      View All Products
                    </Link>
                  </div>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="px-4 py-2.5 text-sm text-brand-dark hover:bg-slate-50 hover:text-brand-secondary transition-colors flex justify-between items-center"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="flex flex-col">
                        <span className="font-semibold">{product.name}</span>
                        {product.chemicalFormula && (
                          <span className="text-xs text-brand-text-muted">{product.chemicalFormula}</span>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-brand-secondary" />
                    </Link>
                  ))}
                </div>
              )}
            </div>



            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-accent' : 'text-slate-100 hover:text-brand-accent'
                }`
              }
            >
              CONTACT
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <button
              onClick={handleInquiryClick}
              className="px-5 py-2.5 bg-brand-secondary hover:bg-white hover:text-brand-dark text-white font-bold text-sm transition-all duration-205 shadow-sm uppercase tracking-wider cursor-pointer"
            >
              Send Inquiry
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-200 hover:text-white p-2 focus:outline-none cursor-pointer"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-slate-800 shadow-premium absolute w-full left-0 z-40 max-h-[85vh] overflow-y-auto">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-bold transition-colors ${
                  isActive ? 'text-brand-accent bg-brand-primary/30' : 'text-slate-200 hover:text-white'
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-bold transition-colors ${
                  isActive ? 'text-brand-accent bg-brand-primary/30' : 'text-slate-200 hover:text-white'
                }`
              }
            >
              ABOUT US
            </NavLink>

            {/* Mobile Dropdown Header */}
            <div>
              <button
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-bold text-slate-200 hover:text-white transition-colors cursor-pointer"
              >
                <span>PRODUCTS</span>
                <ChevronDown className={`w-5 h-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileDropdownOpen && (
                <div className="bg-brand-primary/20 border-l-2 border-brand-accent py-1 mt-1 pl-4 space-y-1">
                  <Link
                    to="/products"
                    className="block px-3 py-2 text-sm font-semibold text-brand-accent"
                  >
                    View All Products
                  </Link>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      to={`/products/${product.slug}`}
                      className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-brand-accent"
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>



            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-bold transition-colors ${
                  isActive ? 'text-brand-accent bg-brand-primary/30' : 'text-slate-200 hover:text-white'
                }`
              }
            >
              CONTACT
            </NavLink>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={handleInquiryClick}
                className="w-full py-3 bg-brand-secondary hover:bg-brand-accent text-white font-bold text-center block uppercase tracking-wider text-sm cursor-pointer"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
