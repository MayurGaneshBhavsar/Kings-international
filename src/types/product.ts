export interface ProductSpecification {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  chemicalFormula?: string;
  shortDescription: string;
  description: string;
  images: string[]; // At least 3 images for the gallery, as requested
  features: string[]; // Highlights like "✓ High quality"
  specifications: ProductSpecification[];
  applications: string[];
  category: string;
}
