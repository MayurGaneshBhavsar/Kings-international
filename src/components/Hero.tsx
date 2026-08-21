import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Factory, 
  Layers, 
  FlaskConical, 
  Cpu 
} from 'lucide-react';

interface Slide {
  image: string;
  badge: string;
  title: string;
  description: string;
  primaryText: string;
  primaryLink: string;
  secondaryText: string;
  secondaryLink: string;
}

export const Hero: React.FC = () => {
  const slides: Slide[] = [
    {
      image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1920&q=80', // bright industrial factory
      badge: 'Pioneers in Processing & Export',
      title: 'Premium Industrial Minerals & Iron Ores',
      description: 'Kings International is a trusted manufacturer, processor, and exporter of high-grade Magnetite, Hematite, and custom-milled B2B mineral fillers.',
      primaryText: 'Explore Products',
      primaryLink: '/products',
      secondaryText: 'Send Inquiry',
      secondaryLink: '/contact'
    },
    {
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80', // bright laboratory / testing
      badge: 'ISO 9001:2015 Certified',
      title: 'Strict Quality Control & Batch Purity',
      description: 'We operate state-of-the-art laboratories in Gujarat, ensuring rigorous particle size checks (mesh size) and chemical composition analysis.',
      primaryText: 'Quality Assurance',
      primaryLink: '/quality',
      secondaryText: 'Download Tech Sheet',
      secondaryLink: '/products/magnetite'
    },
    {
      image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1920&q=80', // bright shipping port
      badge: 'Global Supply & Warehousing',
      title: 'Port-to-Port Sea Logistics & Operations',
      description: 'Located close to major ports (Mundra & Kandla) for efficient international shipping, reliable bulk supplies, and tailored packaging.',
      primaryText: 'Industries Served',
      primaryLink: '/industries',
      secondaryText: 'Contact Sales',
      secondaryLink: '/contact'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-play the slideshow
  useEffect(() => {
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const quickLinks = [
    {
      title: 'Iron Oxides',
      desc: 'Synthetic & natural coloring pigments.',
      link: '/products/iron-oxide',
      icon: <FlaskConical className="w-16 h-16 stroke-[1.25]" />,
      bg: 'bg-brand-dark' // #0b1e3f
    },
    {
      title: 'Magnetite Powder',
      desc: 'High Fe dense medium separation ore.',
      link: '/products/magnetite',
      icon: <Factory className="w-16 h-16 stroke-[1.25]" />,
      bg: 'bg-brand-primary' // #0f2c59
    },
    {
      title: 'Manganese Dioxide',
      desc: 'High-grade industrial depolarizing agent.',
      link: '/products/manganese-dioxide',
      icon: <Layers className="w-16 h-16 stroke-[1.25]" />,
      bg: 'bg-[#143773]'
    },
    {
      title: 'Talc Powder',
      desc: 'Premium hydrous magnesium silicate.',
      link: '/products/talc',
      icon: <Cpu className="w-16 h-16 stroke-[1.25]" />,
      bg: 'bg-brand-secondary' // #1d4ed8
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* 1. Interactive Slideshow Container */}
      <div className="relative min-h-[580px] md:min-h-[640px] flex items-center overflow-hidden bg-brand-dark group">
        
        {/* Background Images Layer */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover object-center transition-transform duration-[6500ms] ease-out ${
                    isActive ? 'scale-105' : 'scale-100'
                  }`}
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />
                {/* Visual Gradient Overlay for Text Readability - Darker on the left, lighter on the right to show light images */}
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20" />
                
                {/* Tech Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f2c59_1px,transparent_1px),linear-gradient(to_bottom,#0f2c59_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25" />
              </div>
            );
          })}
        </div>

        {/* Text Content Overlay - pt-36 to clear the absolute top navbar */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-20 text-white flex items-center min-h-[500px] md:min-h-[560px] w-full">
          <div className="relative w-full min-h-[380px] flex items-center">
            {slides.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={idx}
                  className={`absolute inset-0 flex flex-col justify-center space-y-6 transition-all duration-700 ${
                    isActive ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0 z-0 pointer-events-none'
                  }`}
                >
                  {/* Badge */}
                  <div className={`inline-flex items-center gap-2 bg-brand-secondary/25 border border-brand-secondary/40 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-accent w-fit transition-all duration-700 delay-100 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <ShieldCheck className="w-4 h-4 text-brand-accent" />
                    {slide.badge}
                  </div>
                  
                  {/* Title */}
                  <h1 className={`text-3xl sm:text-5xl md:text-6.5xl font-extrabold tracking-tight font-display leading-tight text-white max-w-4xl transition-all duration-700 delay-300 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {slide.title}
                  </h1>
                  
                  {/* Description */}
                  <p className={`text-base md:text-lg text-slate-300 font-normal leading-relaxed max-w-3xl transition-all duration-700 delay-500 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {slide.description}
                  </p>
                  
                  {/* Action Buttons */}
                  <div className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 delay-700 transform ${
                    isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    <Link
                      to={slide.primaryLink}
                      className="px-6 py-3.5 bg-brand-secondary hover:bg-brand-secondary/95 text-white font-bold transition-all duration-200 text-sm uppercase tracking-wider inline-flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      {slide.primaryText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      to={slide.secondaryLink}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold transition-all duration-200 text-sm uppercase tracking-wider inline-block cursor-pointer shadow-md backdrop-blur-xs"
                    >
                      {slide.secondaryText}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Chevrons */}
        <button
          onClick={prevSlide}
          className="absolute left-6 z-30 p-3 rounded-full bg-brand-dark/40 hover:bg-brand-secondary border border-white/10 text-white hover:scale-105 transition-all duration-200 cursor-pointer backdrop-blur-xs hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 z-30 p-3 rounded-full bg-brand-dark/40 hover:bg-brand-secondary border border-white/10 text-white hover:scale-105 transition-all duration-200 cursor-pointer backdrop-blur-xs hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full cursor-pointer transition-all duration-300 ${
                idx === activeIndex ? 'w-8 bg-brand-secondary' : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* 2. Horizontal Quick Access Product Ribbon (Creatively styled like reference site) */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b-4 border-brand-secondary text-white relative z-25">
        {quickLinks.map((item, idx) => (
          <Link
            key={idx}
            to={item.link}
            className={`flex flex-col justify-between p-8 md:p-10 ${item.bg} hover:brightness-110 active:brightness-95 transition-all duration-300 group border-r border-b border-white/5 last:border-r-0`}
          >
            <div className="space-y-4">
              {/* Icon Container */}
              <div className="text-brand-accent group-hover:text-white transition-colors duration-300 inline-block">
                {item.icon}
              </div>
              
              {/* Text Context */}
              <div className="space-y-1">
                <h3 className="font-bold text-sm sm:text-base font-display uppercase tracking-wider text-white">
                  {item.title}
                </h3>
                <p className="text-[11px] text-slate-350 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Circular Navigation Arrow */}
            <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white mt-6 group-hover:bg-white group-hover:text-brand-dark group-hover:border-white transition-all duration-350 shadow-sm shrink-0">
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
