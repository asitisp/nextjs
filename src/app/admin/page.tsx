// app/admin/page.tsx

"use client";


import Link from "next/link";
import ProtectedPage from "@/components/Auth/Adminonly";


export default function AdminDashboard() {
  return (
    <ProtectedPage 
    adminContent={<><h1 className="text-xl font-bold pt-10 mt-20">Welcome, Admin</h1>
      
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen bg-gray-100 ">
      <Link
        href="/admin/uploadproduct"
        
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"
      >
        Upload New Product
      </Link>
      
      <Link href="/admin/rolechange" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">Manage Role</Link>
      <Link href="/admin/offer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">Create a Offer</Link>
      <Link href="/admin/usingexcel" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">using excel</Link>
      <h1> welcome and manage your products</h1>

</div>
</>
}
    moderatorContent={<><h1 className="text-xl font-bold pt-10 mt-20">Welcome, Moderator</h1>
      
    <div className="flex flex-col items-center gap-4 justify-center min-h-screen bg-gray-100 ">
      <Link
        href="/admin/uploadproduct"
        
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg"
      >
        Upload New Product
      </Link>
      
      
      <Link href="/admin/offer" className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded text-lg">Create a Offer</Link>
      <h1> welcome and manage your products</h1>

      </div></>
      } 
      ><h1 className="text-xl font-bold pt-10 mt-20">Welcome, Admin</h1>  </ProtectedPage>
  );
}

