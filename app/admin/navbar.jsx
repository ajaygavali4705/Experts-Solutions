"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

export default function AdminNavbar({ onLogout }) {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 w-full">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/images/Expert_logo.jpg"
            alt="Experts Solutions"
            width={90}
            height={50}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">

          <Link href="/admin/home">Updates</Link>
          <Link href="/admin/blogs">Bolgs</Link>
          <Link href="/admin/gallery">Gallery</Link>
         

           <button
            onClick={onLogout}
            className="bg-[#8B1F2F] text-white px-4 py-1 rounded hover:bg-[#8B1F2F]/90 transition"
          >
            Logout
          </button>
        </div>

        {/* Mobile Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
     {open && (
  <div
    className="
      md:hidden 
      bg-white 
      text-center 
      shadow-lg 
      px-6 py-4 
      space-y-2 
      text-gray-700 
      font-medium
      max-h-[80vh]          /* make nav scrollable */
      overflow-y-auto        /* enable vertical scroll */
    "
  >


          <Link href="/" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Home
          </Link>

          <Link href="/about" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            About
          </Link>

      

          <Link href="/blogs" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Blogs
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Gallery
          </Link>
          <Link href="/admin" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Admin
          </Link>

        </div>
      )}
    </nav>
  );
}