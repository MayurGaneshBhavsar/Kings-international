import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = true,
  light = false,
}) => {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'}`}>
      <h2
        className={`text-3xl md:text-4xl font-display font-bold tracking-tight mb-4 ${
          light ? 'text-white' : 'text-brand-dark'
        }`}
      >
        {title}
      </h2>
      <div
        className={`h-1 w-20 bg-brand-secondary mb-4 ${
          centered ? 'mx-auto' : 'mr-auto'
        }`}
      />
      {subtitle && (
        <p
          className={`text-lg leading-relaxed ${
            light ? 'text-blue-100' : 'text-brand-text-muted'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
