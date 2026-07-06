export interface GalleryItem {
  id: number;
  title: string;
  category: 'Residential' | 'Commercial' | 'Concept';
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Layout' | 'Compass' | 'Paintbrush' | 'Building' | 'Sparkles' | 'Shield';
  description: string;
  fullDetails: string[];
}

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  content: string;
  date: string;
  avatar?: string;
  isCustom?: boolean; // to differentiate user-submitted reviews
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
}
