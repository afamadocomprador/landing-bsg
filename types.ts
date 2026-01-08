
export interface PlanFeature {
  text: string;
  isStrong?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  pricePeriod: string;
  priceLabel: string;
  features: PlanFeature[];
  buttonText: string;
  isPopular?: boolean;
  accentColor: string;
}

export interface Testimonial {
  initials: string;
  name: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
