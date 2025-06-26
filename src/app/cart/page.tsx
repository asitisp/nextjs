'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCartItems(JSON.parse(cart));
    }
  }, []);

  const updateLocalStorage = (items: CartItem[]) => {
    localStorage.setItem("cart", JSON.stringify(items));
  };

  const handleRemove = (id: string) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const updateQuantity = (id: string, delta: number) => {
    const updated = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCartItems(updated);
    updateLocalStorage(updated);
  };

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="flex gap-4 items-center border p-4 rounded-md shadow-sm">
              <Image src={item.imageUrl} alt={item.title} className="w-24 h-24 object-cover" />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Price: ₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button className="btn btn-sm" onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button className="btn btn-sm" onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>
              <button onClick={() => handleRemove(item.id)} className="btn btn-sm btn-error text-white">Remove</button>
            </div>
          ))}

          <div className="text-right text-lg font-semibold mt-6">
            Total: ₹{total.toFixed(2)}
          </div>
        </div>
      )}
    </div>
  );
}
