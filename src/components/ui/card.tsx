// components/ui/card.tsx
import Image from "next/image";
import { ProductType } from "@/types/product";

interface CardProps {
  product: ProductType;
}

export default function Card({ product }: CardProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div className="relative w-full h-52">
        {product.imageUrl?.[0] && (
  <Image
    src={product.imageUrl[0]}
    alt={product.title}
    fill
    className="object-cover rounded"
    priority
    
  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
  />
)}

      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.title}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-semibold mt-2">₹{product.price}</p>
      </div>
    </div>
  );
}
