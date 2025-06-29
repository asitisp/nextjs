//login.tsx
import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/dbconnect";
import User from "@/models/User";
import bcrypt from "bcryptjs";


export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const { email, password } = await req.json();

    console.log("📥 Incoming login:", { email, password });

    if (!email || !password) {
      return NextResponse.json({ error: "Missing credentials" }, { status: 400 });
    }

    const user = await User.findOne({ email });

    if (!user) {
      console.log("❌ User not found");
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    console.log("👤 Fetched user:", {
      _id: user._id,
      email: user.email,
      password: "[hidden]",
      role: user.role,
    });

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("🔐 Password match result:", isMatch);

    if (!isMatch) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    return NextResponse.json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name ?? "",  // use default if name is missing
        email: user.email,
        role: user.role,
      },
    });
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}