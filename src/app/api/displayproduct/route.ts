import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbconnect";
import Product from "@/models/Product";

export async function GET(req: NextRequest) {
  await connectToDB();
  const searchParams = req.nextUrl.searchParams;
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 6;
  const skip = (page - 1) * limit;

  try {
    const products = await Product.find({})
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Product.countDocuments();

    return NextResponse.json({ products, total });
  } catch (err) {
    console.error("Error fetching products:", err);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}
