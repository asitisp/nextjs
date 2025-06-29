import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function adminMiddleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token || token.role !== "admin") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return null;
}
