export type Offer = {
  id: number;
  title: string;
  description: string;
  images: string[];
  rate: string;
  isPremium: boolean;
  type: string;
  inside: string[];
  bedrooms: number;
  adults: number;
  price: number;
  host: string;
  avatar: string;
  isPro: boolean;
  reviewIds: number[];
  isFavorites: boolean;
  city: string;
};

export type Review = {
  id: number;
  nickname: string;
  avatar: string;
  date: string;
  rate: number;
  text: string;
};
