export type ProductType = {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string[];
  category: string;
  stock?: number;
  rating?: number;
  createdAt?: string;
  updatedAt?: string;
};
