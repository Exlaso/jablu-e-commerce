export type dataforproduct = {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  rating: {
    rate: number;
    count: number;
  };
  available_color: string[];
  available_size: string[];
};
export interface dataforproductwithmetadata extends dataforproduct {
  color: string;
  size: string;
  count: number;
}
