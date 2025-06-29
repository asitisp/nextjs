import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/dbconnect';
import Product from '@/models/Product';
import imagekit from '@/lib/imagekit';
import { v4 as uuidv4 } from 'uuid';

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const formData = await req.formData();

    const title = formData.get('title') as string;
    const description = formData.get('description') as string;
    const price = Number(formData.get('price'));
    const category = formData.get('category') as string;
    const stock = Number(formData.get('stock'));
    const rating = Number(formData.get('rating'));

    const imageFiles = formData.getAll('images') as File[]; // <-- support multiple images

    if (!title || !price || !category || imageFiles.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const imageUrls: string[] = [];

    for (const file of imageFiles) {
      const buffer = Buffer.from(await file.arrayBuffer());
      const uploadResponse = await imagekit.upload({
        file: buffer,
        fileName: `${uuidv4()}-${file.name}`,
      });
      imageUrls.push(uploadResponse.url);
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      imageUrl: imageUrls, // store array of URLs
      category,
      stock,
      rating,
    });

    return NextResponse.json({ success: true, product: newProduct }, { status: 201 });

  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}