export interface HeroSection {
  headline: string;
  subheadline: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary: { text: string; href: string };
  image: string;
}

export interface AboutSection {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
  image: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string; // emoji or lucide icon name
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface WebsiteData {
  meta: {
    businessName: string;
    tagline: string;
    primaryColor: string;
    secondaryColor: string;
    font: string;
  };
  navbar: {
    logo: string;
    links: { label: string; href: string }[];
  };
  hero: HeroSection;
  about: AboutSection;
  services: Service[];
  testimonials: Testimonial[];
  faq: FAQItem[];
  contact: {
    title: string;
    description: string;
    email: string;
    phone: string;
    address: string;
  };
  footer: {
    tagline: string;
    links: { label: string; href: string }[];
  };
}