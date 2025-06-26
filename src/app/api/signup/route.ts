// app/api/signup/route.ts
import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import User from '@/models/User';
import { connectToDB } from '@/lib/dbconnect';


export async function POST(req: NextRequest) {
  await connectToDB();

  try {
    const { username, email, password, role = 'user' } = await req.json();

    if (!username || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    return NextResponse.json({ success: true, user });
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error("Image upload error:", error.message);
  } else {
    console.error("Image upload error:", error);
  }
  return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

