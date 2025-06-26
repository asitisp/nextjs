'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

type ProductType = {
  _id: string;
  title: string;
  content?: string;
  description?: string;
  pricing: string;
  mrp: string;
  images?: { url: string }[];
};

type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

export default function ProductListPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const limit = 6;

  const addToCart = (product: ProductType) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const exists = cart.find((item: CartItem) => item.id === product._id);

    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({
        id: product._id,
        title: product.title,
        price: Number(product.pricing),
        quantity: 1,
        imageUrl: product.images?.[0]?.url || "",
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart`);
  };

  const fetchProducts = useCallback(async () => {
    try {
      const res = await fetch(`/api/displayproduct?page=${page}`);
      const data = await res.json();
      setProducts(data.products || []);
      setTotal(data.total || 0);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Remove unused functions
  // const deleteProduct = ...
  // const updateProductTitle = ...

  // Optional: define buynow or remove it
  const buynow = (product: ProductType) => {
    alert(`Buying now: ${product.title}`);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="border p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{product.title}</h2>
            <p>{product.content}</p>

            {product.images?.map((img, idx) => (
              <Image
                key={idx}
                src={img.url}
                alt={`Image of ${product.title}`}
                width={300}
                height={128}
                className="w-full h-32 object-cover mt-2"
              />
            ))}

            <div className="mt-2 space-x-2">
              <button
                onClick={() => addToCart(product)}
                className="btn btn-sm btn-error"
              >
                Add to cart
              </button>
              <button
                onClick={() => buynow(product)}
                className="btn btn-sm btn-warning"
              >
                Buy now
              </button>
            </div>

            <p>{product.description}</p>
            <p>{product.pricing}</p>
            <p>{product.mrp}</p>
            <p>
              {Math.round(
                (Number(product.pricing) / Number(product.mrp)) * 100
              )}
              % discount
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex gap-4 justify-center">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="btn"
        >
          Prev
        </button>
        <span className="text-lg font-semibold">Page {page}</span>
        <button
          onClick={() => setPage((p) => (p * limit < total ? p + 1 : p))}
          disabled={page * limit >= total}
          className="btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}
