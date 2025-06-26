import { connectToDB } from "@/lib/dbconnect";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  await connectToDB();

  try {
    const { email, role } = await req.json();

    const updated = await User.findOneAndUpdate(
      { email },
      { role },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Role updated", user: updated });

  } catch (error) {
    console.error("Role update failed:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
