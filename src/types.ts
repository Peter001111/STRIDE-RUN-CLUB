export interface NavItem {
  label: string;
  href: string;
}

export interface WhyJoinCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface InfoCard {
  id: string;
  label: string;
  value: string;
  iconName: string;
  colorClass?: string;
}

export interface PrizeCard {
  place: string;
  rewardValue: string;
  shares: string;
  criteria: string;
  bgGrad: string;
  iconName: string;
}

export interface StepItem {
  number: number;
  text: string;
  subText?: string;
  highlight?: boolean;
}

export interface GalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "joining" | "challenge" | "pacer" | "community";
}

