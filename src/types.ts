export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  channels: string[];
  metrics: string;
}

export interface ContentPillar {
  id: string;
  name: string;
  focus: string;
  headline: string;
  description: string;
  exampleCreative: string;
  buyerPsychology: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  duration: string;
  description: string;
  actionItems: string[];
  output: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  priceMonthly: number;
  priceQuarterly: number;
  tagline: string;
  targetAudience: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  deliverablesSummary: {
    reels: string;
    adsMgmt: string;
    reporting: string;
    leadTracking: string;
  };
}

export interface AddOnItem {
  id: string;
  name: string;
  price: string;
  billingType: 'one-time' | 'monthly';
  description: string;
  includedScope: string[];
}

export interface CaseStudy {
  id: string;
  project: string;
  location: string;
  developerType: string;
  propertySegment: string;
  challenge: string;
  solution: string;
  stats: {
    label: string;
    value: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}
