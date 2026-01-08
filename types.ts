
export interface Clinic {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  imageUrl: string;
  specialties: string[];
}

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  rating: number;
  text: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
