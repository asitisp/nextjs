
import Card from "@/components/ui/card";
import Product from "@/models/Product";
import { Pagination } from "@/components/ui/pagination";
 

export default async  function ProductsPage() {
 
 const allProducts = await Product.find().sort({ createdAt: -1 });


  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">All Products</h1>
     
      <div className="max-w-7xl mx-auto md:flex-row items-center justify-between  grid grid-cols-1 md:grid-cols-5 gap-4">
          {allProducts.map((product) => (
            <Card key={product._id} product={product} />
          ))}
         
        </div>   
      <Pagination/>
    </div>
  );
}
