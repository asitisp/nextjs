
import React from "react";
import Hero from "@/components/ui/Hero";
import Card from "@/components/ui/card";
import FeaturedProducts from "@/components/featuredProducts";
import Product from "@/models/Product";
import { connectToDB } from "@/lib/dbconnect";
import { Pagination } from "@/components/ui/pagination";

export default async function  Home() {

   await connectToDB();
  const featured = await Product.find({category:"cooler"}).sort({ createdAt: -1 }).limit(5);
  const allProducts = await Product.find().sort({ createdAt: -1 });

  return (
    <>
    <div className="bg-stone-100 justify-center flex flex-col items-center">
    <h1 className="text-2xl font-bold mt-20">Featured Products</h1>
    <main className="max-w-7xl mx-auto px-4 py-6 ">
      
      <FeaturedProducts products={JSON.parse(JSON.stringify(featured))} />
    </main>
    </div>
    <Hero />
    <div className="max-w-7xl mx-auto md:flex-row items-center justify-between  grid grid-cols-1 md:grid-cols-5 gap-4">
    {allProducts.map((product) => (
      <Card key={product._id} product={product} />
    ))}
    
</div>
<Pagination/>

    </>
  );
}
