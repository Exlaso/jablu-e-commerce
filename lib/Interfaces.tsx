export type dataforproduct = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  image:string
  rating: {
    rate: number;
    count: number;
  };
};
export interface dataforproductwithmetadata extends dataforproduct {
  count: number;
  color: string;
  size: string;
}
