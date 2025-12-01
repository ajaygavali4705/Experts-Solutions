import { NextResponse } from "next/server";

export function middleware(req) {
  const url = req.nextUrl.clone();
  const isLoggedIn = req.cookies.get("adminLoggedIn")?.value === "true";

  // If accessing /admin/home, /admin/about, /admin/blocks, etc.
  if (url.pathname.startsWith("/admin") && url.pathname !== "/admin") {
    if (!isLoggedIn) {
      url.pathname = "/admin"; 
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
