"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
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

          <Link href="/">Home</Link>
          <Link href="/about">About us</Link>

          {/* DESKTOP DROPDOWN */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <Link href="/services">Services</Link>
            </div>

            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 
              hidden group-hover:block w-72 z-50">

              <Link href="/services#ecosystem" className="block py-2 hover:text-blue-700">
                 Software AMC & other
              </Link>
              <Link href="/services#erp" className="block py-2 hover:text-blue-700">
                Corporate Training
              </Link>
              <Link href="/services#tally" className="block py-2 hover:text-blue-700">
                Implementation
              </Link>
              <Link href="/services#amc" className="block py-2 hover:text-blue-700">
                 Integration 
              </Link>
              <Link href="/services#mobile" className="block py-2 hover:text-blue-700">
                Customisation
              </Link>
             

            </div>
          </div>
          <Link href="/product">Product</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admin">Admin</Link>

          <Link href="/contact">
            <button className="bg-[#191970] text-white px-4 py-2 rounded-md hover:bg-[#191970]">
              Contact
            </button>
          </Link>
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

          {/* MOBILE SERVICES DROPDOWN */}
      {/* MOBILE SERVICES DROPDOWN */}
<div>
  <div
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full flex justify-center items-center py-2 border-b cursor-pointer"
  >
    {/* Services text is clickable as link */}
    <Link
      href="/services"
      onClick={() => setOpen(false)}
      className="text-center w-full"
    >
      Services
    </Link>
  </div>

  {serviceOpen && (
    <div
      className="
        mt-2 bg-gray-100 rounded-md p-2 text-left
        max-h-[50vh] overflow-y-auto
      "
    >
      <Link href="/services#ecosystem" onClick={() => setOpen(false)} className="block py-2">
                 Software AMC & other
      </Link>
      <Link href="/services#erp" onClick={() => setOpen(false)} className="block py-2">
                Corporate Training
      </Link>
      <Link href="/services#tally" onClick={() => setOpen(false)} className="block py-2">
                Implementation
      </Link>
      <Link href="/services#amc" onClick={() => setOpen(false)} className="block py-2">
                 Integration 
      </Link>
      <Link href="/services#mobile" onClick={() => setOpen(false)} className="block py-2">
                Customisation
      </Link>
    
    </div>
  )}
</div>

          <Link href="/blogs" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Blogs
          </Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Gallery
          </Link>
          <Link href="/admin" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
            Admin
          </Link>
          <Link href="/product" onClick={() => setOpen(false)} className="block w-full py-2 border-b">
           Product
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
