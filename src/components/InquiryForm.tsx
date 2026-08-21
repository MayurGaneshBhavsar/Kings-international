import React, { useState } from 'react';
import { Mail, Phone, User, Building, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { products } from '../data/products';

interface InquiryFormProps {
  prefilledProduct?: string;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({ prefilledProduct = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    product: prefilledProduct,
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{7,20}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.product) {
      newErrors.product = 'Please select a product';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message or specifications';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for that field
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        companyName: '',
        email: '',
        phone: '',
        product: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <div className="bg-white border border-slate-200 p-8 shadow-premium rounded-sm">
      {submitSuccess ? (
        <div className="text-center py-10" role="alert">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-50 text-green-600 rounded-full mb-6">
            <CheckCircle className="w-10 h-10" />
          </div>
          <h3 className="text-2xl font-bold text-brand-dark mb-3 font-display">
            Inquiry Submitted Successfully
          </h3>
          <p className="text-brand-text-muted mb-8 max-w-md mx-auto">
            Thank you for reaching out to Kings International. Our technical sales team will review your requirements and get back to you within 24 business hours.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-2.5 bg-brand-primary hover:bg-brand-secondary text-white font-semibold transition-all duration-200 text-sm"
          >
            Submit Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <h3 className="text-2xl font-bold text-brand-dark mb-6 font-display border-b border-slate-100 pb-4">
            Request a Quote / Send Inquiry
          </h3>
          
          <div className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-brand-dark mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <User className="w-4.5 h-4.5" />
                </span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`form-input !pl-10 ${errors.name ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                  placeholder="Your Full Name"
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
              </div>
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-brand-dark mb-1.5">
                Company Name *
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                  <Building className="w-4.5 h-4.5" />
                </span>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`form-input !pl-10 ${errors.companyName ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                  placeholder="Acme Corporation"
                />
              </div>
              {errors.companyName && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.companyName}
                </p>
              )}
            </div>

            {/* Email and Phone Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-brand-dark mb-1.5">
                  Business Email *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <Mail className="w-4.5 h-4.5" />
                  </span>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input !pl-10 ${errors.email ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                    placeholder="email@company.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-brand-dark mb-1.5">
                  Phone Number *
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400">
                    <Phone className="w-4.5 h-4.5" />
                  </span>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`form-input !pl-10 ${errors.phone ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            {/* Product Interested In */}
            <div>
              <label htmlFor="product" className="block text-sm font-semibold text-brand-dark mb-1.5">
                Product of Interest *
              </label>
              <select
                id="product"
                name="product"
                value={formData.product}
                onChange={handleChange}
                className={`form-input ${errors.product ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
              >
                <option value="">-- Select a Mineral or Oxide --</option>
                {products.map((p) => (
                  <option key={p.id} value={p.slug}>
                    {p.name} {p.chemicalFormula ? `(${p.chemicalFormula})` : ''}
                  </option>
                ))}
              </select>
              {errors.product && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.product}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-brand-dark mb-1.5">
                Detailed Requirements (Quantity, Grade, Mesh Sizing, Destination Port) *
              </label>
              <div className="relative">
                <span className="absolute top-3 left-3.5 text-slate-400">
                  <MessageSquare className="w-4.5 h-4.5" />
                </span>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={`form-input !pl-10 resize-y ${errors.message ? 'border-red-500 focus:border-red-500 focus:shadow-[0_0_0_3px_rgba(239,68,68,0.15)]' : ''}`}
                  placeholder="Please state your required quantity, specifications (e.g. mesh size), packaging preferences, and delivery terms..."
                />
              </div>
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-500 flex items-center">
                  <AlertCircle className="w-3.5 h-3.5 mr-1" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3.5 bg-brand-secondary hover:bg-brand-dark text-white font-bold transition-all duration-200 shadow-sm cursor-pointer flex items-center justify-center ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Processing Inquiry...
                </>
              ) : (
                'Submit Inquiry Request'
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
