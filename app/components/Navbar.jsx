"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/Expert_logo.jpg"
            alt="Experts Solutions"
            width={90}
            height={50}
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admin">Admin</Link>

          <Link href="/contact">
            <button className="bg-[#A72028] text-white px-4 py-2 rounded-md hover:bg-[#8f1c23]">
              Contact
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-700"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
     {/* Mobile Menu */}
{open && (
  <div className="md:hidden bg-white text-center shadow-lg px-6 py-4 space-y-2 text-gray-700 font-medium">

    <Link
      href="/"
      onClick={() => setOpen(false)}
      className="block w-full py-2 border-b"
    >
      Home
    </Link>

    <Link
      href="/services"
      onClick={() => setOpen(false)}
      className="block w-full py-2 border-b"
    >
      Services
    </Link>

    <Link
      href="/about"
      onClick={() => setOpen(false)}
      className="block w-full py-2 border-b"
    >
      About
    </Link>

    <Link
      href="/blogs"
      onClick={() => setOpen(false)}
      className="block w-full py-2 border-b"
    >
      Blogs
    </Link>

    <Link
      href="/admin"
      onClick={() => setOpen(false)}
      className="block w-full py-2 border-b"
    >
      Admin
    </Link>

    <Link href="/contact" onClick={() => setOpen(false)}>
      <button className="w-full bg-[#A72028] text-white px-4 py-3 rounded-md hover:bg-[#8f1c23] mt-2">
        Contact
      </button>
    </Link>
  </div>
)}

    </nav>
  );
}