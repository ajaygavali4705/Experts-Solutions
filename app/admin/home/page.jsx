"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminNavbar from "../navbar";

export default function AdminHome() {
  const router = useRouter();

  
useEffect(() => {
  const isCookie = document.cookie.includes("adminLoggedIn=true");
  if (!isCookie) {
    router.replace("/admin");
  }
}, []);
  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    router.replace("/admin");
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />
      <div className="p-6">
        <h1 className="text-3xl font-bold">Welcome Admin</h1>
        <p className="text-gray-600 mt-2">
          This page is protected.
        </p>
      </div>
    </>
  );
}
