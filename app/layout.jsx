"use client";

import "./globals.css";
import { usePathname } from "next/navigation";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FixedContactButton from "./components/FixedContactButton";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith("/admin/");
 

  return (
    <html lang="en">
      <head />
      <body>
        {!isAdminRoute && <Navbar />}
        {!isAdminRoute && <FixedContactButton />}

        <main className="pt-18">{children}</main>

        {!isAdminRoute && <Footer />}
      </body>
    </html>
  );
}
