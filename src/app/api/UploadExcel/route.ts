import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbconnect";
import Product from "@/models/Product";
import * as XLSX from "xlsx";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const json = XLSX.utils.sheet_to_json(sheet);

    await connectToDB();

    for (const item of json) {
      const { _id, title, price, description, imageUrls, category, stock, rating } = item as {
        _id?: string;
        title: string;
        description?: string;
        price: number;
        imageUrls?: string;
        category?: string;
        stock?: number;
        rating?: number;
      };

      const images = imageUrls
        ? imageUrls.split(",").map((url) => url.trim())
        : [];

      if (_id) {
        await Product.findByIdAndUpdate(_id, {
        title,
        description,
        price,
        imageUrls:images,
        category,
        stock,
        rating,
        });
      } else {
        await Product.create({
          _id,
        title,
        description,
        price,
        imageUrls:images,
        category,
        stock,
        rating,
        });
      }
    }

    return NextResponse.json({ message: "Products imported successfully" });
  } catch (error) {
    console.error("Excel Upload Error:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
