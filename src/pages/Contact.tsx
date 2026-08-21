import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { InquiryForm } from '../components/InquiryForm';
import { Phone, Mail, MapPin, Clock, Globe } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Page Header Banner */}
      <div className="relative bg-brand-dark pt-36 pb-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80"
            alt="Kings International Contact Support"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-brand-dark/90" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="text-xs font-bold text-brand-accent uppercase tracking-widest mb-2.5 font-display">
            Get in Touch
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white font-display">
            Contact Us
          </h1>
          <div className="h-1 w-20 bg-brand-secondary mx-auto mt-4" />
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-100 border-b border-slate-200 py-3.5">
        <div className="max-w-7xl mx-auto px-4 text-xs font-semibold text-brand-text-muted">
          <a href="/" className="hover:text-brand-secondary transition-colors">Home</a>
          <span className="mx-2 text-slate-400">/</span>
          <span className="text-brand-dark">Contact Us</span>
        </div>
      </div>

      {/* Contact Grid Section */}
      <section className="py-20 flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            title="Connect With Our Sales Office"
            subtitle="Request quotations, test samples, quality sheets, or logistics terms. Our technical sales team is ready to respond."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Contact Cards & Info */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Direct Channels */}
              <div className="bg-slate-50 border border-slate-200 p-8 space-y-6">
                <h3 className="text-lg font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-200 pb-3">
                  Direct Sourcing Channels
                </h3>

                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-white border border-slate-200 text-brand-secondary h-11 w-11 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-display">Phone Number</h4>
                      <a href="tel:+912836224000" className="text-sm font-semibold text-brand-text-muted hover:text-brand-secondary transition-colors mt-0.5 block">
                        +91 2836 224 000
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-white border border-slate-200 text-brand-secondary h-11 w-11 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-display">Email Address</h4>
                      <a href="mailto:info@kingsinternational.com" className="text-sm font-semibold text-brand-text-muted hover:text-brand-secondary transition-colors mt-0.5 block">
                        info@kingsinternational.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="p-2.5 bg-white border border-slate-200 text-brand-secondary h-11 w-11 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-display">Working Hours</h4>
                      <p className="text-sm text-brand-text-muted mt-0.5">
                        Monday - Saturday: 09:00 AM - 06:00 PM (IST)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Address */}
              <div className="bg-slate-50 border border-slate-200 p-8 space-y-4">
                <h3 className="text-lg font-bold text-brand-dark font-display uppercase tracking-wider border-b border-slate-200 pb-3">
                  Registered Office Address
                </h3>
                
                <div className="flex gap-4">
                  <div className="p-2.5 bg-white border border-slate-200 text-brand-secondary h-11 w-11 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-brand-dark font-display">Kings International</h4>
                    <p className="text-sm text-brand-text-muted leading-relaxed">
                      Kings Tower, Plot No. 42-A, Industrial Growth Centre, Sector 8, Gandhidham, Gujarat, India - 370201
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive map placeholder */}
              <div className="bg-brand-dark border border-slate-700/50 p-6 text-white text-center flex flex-col justify-center items-center h-48 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
                </div>
                <div className="relative z-10 space-y-2">
                  <Globe className="w-10 h-10 text-brand-accent mx-auto animate-pulse" />
                  <h4 className="font-bold text-sm uppercase tracking-widest font-display">Geographical Location</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">
                    Located near Mundra and Kandla Sea Ports, Gujarat, India
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <InquiryForm />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
