export interface LocationCarousalProps {
  locations: LocationCarousalItem[];
}

export interface LocationCarousalItem {
  image: any;
  title: string;
  description: String;
  reviews: { rating: number; reviewCount: number };
  location: string;
}
