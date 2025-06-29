// app/api/products/route.ts
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbconnect";
import Product from "@/models/Product";
import { adminMiddleware } from "@/middleware/admin";

export async function POST(req: NextRequest) {
  const check = await adminMiddleware(req);
  if (check) return check;

  const product = await req.json();

  try {
    await connectToDB();
    const newProduct = await Product.create(product);
    return NextResponse.json({ message: "Product created", product: newProduct });
  }  catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}