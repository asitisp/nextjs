'use client';

import { Footer2, Footer4 } from "@/components/ui/Footer";
import { Hero1, Hero2, Hero3 } from "@/components/ui/Hero";
import {  NavbarWithKeys } from "@/components/ui/Navbar";





export default function Home() {




   return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <NavbarWithKeys />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <footer className="footer-center bg-base-200 text-base-content w-full">        
      <Footer4 />
      <Footer2 />
    </footer>
    </main>
  );
}

