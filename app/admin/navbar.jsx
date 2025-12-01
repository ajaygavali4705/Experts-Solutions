"use client";

import Link from "next/link";

export default function AdminNavbar({ onLogout }) {
  return (
    <nav className="w-full bg-[#A72028] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        <h2 className="text-xl font-semibold">Admin Panel</h2>

        <div className="flex items-center gap-6 text-white font-medium">
          <Link href="/admin" className="hover:text-gray-200">
            Home
          </Link>

          <Link href="/admin/about" className="hover:text-gray-200">
            About
          </Link>

          <Link href="/admin/blocks" className="hover:text-gray-200">
            Blocks
          </Link>

          <button
            onClick={onLogout}
            className="bg-white text-[#A72028] px-4 py-1 rounded hover:bg-gray-200"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
