// app/api/imageupload/route.ts
import { NextRequest, NextResponse } from "next/server";
import ImageKit from "imagekit";
import { connectToDB } from "@/lib/dbconnect";
import Product from "@/models/Product";

const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY!,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const data = await req.formData();
    const files = data.getAll("files");

    const title = data.get("title")?.toString() || "";
    const description = data.get("description")?.toString() || "";
    const pricing = data.get("pricing")?.toString() || "";
    const mrp = data.get("mrp")?.toString() || "";
    const content = data.get("content")?.toString() || "";
    const otherDetails = data.get("otherDetails")?.toString() || "";

    const images = [];

    for (const file of files) {
      if (typeof file === "string") continue;

      const bytes = await (file as Blob).arrayBuffer();
      const buffer = Buffer.from(bytes);

      const upload = await imagekit.upload({
        file: buffer,
        fileName: (file as File).name,
      });

      // ✅ Push the object directly (NOT wrapped in an array)
      images.push({
        url: upload.url,
        name: upload.name,
        type: upload.fileType,
      });
    }

    // ✅ Double check the shape is correct
    console.log("✅ Final images array before saving:", images);

    // ❗ NEVER stringify here!
    const product = await Product.create({
      title,
      description,
      pricing,
      mrp,
      content,
      otherDetails,
      images, // ✅ Send real array of objects
      tags: [],
    });

    return NextResponse.json({ success: true, data: product });
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}