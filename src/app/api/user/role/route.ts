// app/api/user/role/route.ts
import { NextRequest, NextResponse } from "next/server";
import  {connectToDB}  from "@/lib/dbconnect";
import User from "@/models/User";
import { adminMiddleware } from "@/middleware/admin";

export async function PUT(req: NextRequest) {
  const check = await adminMiddleware(req);
  if (check) return check;

  const { email, role } = await req.json();

  try {
    await connectToDB();

    const updated = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!updated) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "Role updated", user: updated });
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
