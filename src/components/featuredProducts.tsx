"use client";

import { ProductType } from "@/types/product";
import Card from "@/components/ui/card";

export default function FeaturedProducts({ products }: { products: ProductType[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product._id} product={product} />
      ))}
    </div>
  );
}
