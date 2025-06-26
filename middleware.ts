// middleware.ts
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const url = req.nextUrl;

  const isAuthPage = url.pathname === "/login";
  const isProtectedRoute = !isAuthPage;

  if (!token && isProtectedRoute) {
    // Not logged in, trying to access protected route
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    // Logged in, trying to visit login page
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|static|favicon.ico).*)"], // match all routes except public ones
};
