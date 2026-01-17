export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ButtonProps {
  label: string;
  onClick: () => void;
}

// Address structure for each property
export interface Address {
  state: string;
  city: string;
  country: string;
}

// Offers structure (beds, showers, occupants)
export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

// Main property interface
export interface PropertyProps {
  id: number;
  name: string;
  address: { state: string; city: string; country: string };
  rating: number;
  category: string[];
  price: number;
  offers: { bed: string; shower: string; occupants: string };
  image: string;
  discount: string;
}
