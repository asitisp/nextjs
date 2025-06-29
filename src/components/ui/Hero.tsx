'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Side */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
            Welcome to <span className="text-yellow-300">RNCOMPANY</span>
          </h1>
          <p className="text-lg sm:text-xl mb-8">
            Discover amazing products and exclusive time-limited offers. Shop smart. Save big.
          </p>
          <Link href="/products">
            <button className="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">
              Shop Now
            </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <Image
            src="/next.svg" // Replace with your image path
            alt="Hero"
            className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-xl"
            width={100}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
