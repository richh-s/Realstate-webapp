export interface Listing {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    address: { street: string; city: string; state: string; zip: string; };
    features: string[];
    images: { url: string; alt: string; }[];
    agent: { name: string; phone: string; email: string; photo: string; };
    listedDate: string;
    propertyType: string;
  }
  
  export const listings: Listing[] = [/* === paste your 1..10 objects here unchanged === */];
  