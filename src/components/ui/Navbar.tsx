'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-black">
          Rncompany
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex gap-8 items-center">
          <li><Link href="/" className="text-gray-700 hover:text-black">Home</Link></li>
          <li><Link href="/products" className="text-gray-700 hover:text-black">Products</Link></li>
          <li><Link href="/offers" className="text-gray-700 hover:text-black">Offers</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-black">Contact</Link></li>
          <li><Link href="/signup" onClick={toggleMenu}>signup</Link></li>
          <li><Link href="/login" onClick={toggleMenu}>login</Link></li>
          <li><Link href="/cart" onClick={toggleMenu}>cart</Link></li>
        </ul>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden px-6 pb-4 space-y-3 bg-white shadow">
          <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="/products" onClick={toggleMenu}>Products</Link></li>
          <li><Link href="/offers" onClick={toggleMenu}>Offers</Link></li>
          <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          <li><Link href="/signup" onClick={toggleMenu}>signup</Link></li>
          <li><Link href="/login" onClick={toggleMenu}>login</Link></li>
          <li><Link href="/cart" onClick={toggleMenu}>cart</Link></li>
        </ul>
      )}
    </nav>
  );
}
