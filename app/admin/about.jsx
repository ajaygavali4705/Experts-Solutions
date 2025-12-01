"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isAdminLoggedIn } from "./auth";
import AdminNavbar from "./navbar";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    if (!isAdminLoggedIn()) {
      router.push("/admin");
    }
  }, []);

  return (
    <>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold">About Section</h1>
      </div>
    </>
  );
}
