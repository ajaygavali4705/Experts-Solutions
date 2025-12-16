"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiMenu, HiX } from "react-icons/hi";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [tallyOpen, setTallyOpen] = useState(false);
  const [cloudOpen, setCloudOpen] = useState(false);

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

          {/* DESKTOP PRODUCT DROPDOWN */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <Link href="/product">Product</Link>
            </div>

            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md py-3 w-64 z-50 hidden group-hover:block">

              {/* Tally Prime */}
              <div className="relative group/sub px-4 py-2 hover:bg-gray-100">
                <span className="flex justify-between items-center">
                  Tally Prime <FaChevronDown className="text-xs" />
                </span>

                <div className="absolute top-0 left-full bg-white shadow-lg rounded-md w-64 py-2 hidden group-hover/sub:block">
                  <Link href="/product#tally-new" className="block px-4 py-2 hover:bg-gray-100">Tally Prime New License</Link>
                  <Link href="/product#tss" className="block px-4 py-2 hover:bg-gray-100">Tally Software Services</Link>
                  <Link href="/product#addons" className="block px-4 py-2 hover:bg-gray-100">Tally Add-Ons</Link>
                  <Link href="/product#capital" className="block px-4 py-2 hover:bg-gray-100">Tally Capital</Link>
                  <Link href="/product#mobile" className="block px-4 py-2 hover:bg-gray-100">Tally On Mobile</Link>
                </div>
              </div>

              {/* ERP */}
              <Link href="/product#erp" className="block px-4 py-2 hover:bg-gray-100">ERP Software</Link>

              {/* Cloud Solution */}
              <div className="relative group/sub px-4 py-2 hover:bg-gray-100">
                <span className="flex justify-between items-center">
                  Cloud Solution <FaChevronDown className="text-xs" />
                </span>

                <div className="absolute top-0 left-full bg-white shadow-lg rounded-md w-64 py-2 hidden group-hover/sub:block">
                  <Link href="/product#cloud" className="block px-4 py-2 hover:bg-gray-100">Tally On Cloud</Link>
                  <Link href="/product#office" className="block px-4 py-2 hover:bg-gray-100">Office on Cloud</Link>
                </div>
              </div>

              <Link href="/product#hrms" className="block px-4 py-2 hover:bg-gray-100">HRMS & Payroll Software</Link>
              <Link href="/product#otto" className="block px-4 py-2 hover:bg-gray-100">OTTO – Conversational AI Business Bot</Link>
            </div>
          </div>

          {/* DESKTOP SERVICES DROPDOWN */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1">
              <Link href="/services">Services</Link>
            </div>

            <div className="absolute top-full left-0 bg-white shadow-lg rounded-md p-4 hidden group-hover:block w-72 z-50">
              <Link href="/services#ecosystem" className="block py-2 hover:text-blue-700">Software AMC</Link>
              <Link href="/services#erp" className="block py-2 hover:text-blue-700">Corporate Training</Link>
              <Link href="/services#tally" className="block py-2 hover:text-blue-700">Implementation</Link>
              <Link href="/services#amc" className="block py-2 hover:text-blue-700">Integration </Link>
              <Link href="/services#mobile" className="block py-2 hover:text-blue-700">Customisation</Link>
              <Link href="/services#account" className="block py-2 hover:text-blue-700">Accounts & Taxation</Link>
            </div>
          </div>

          <Link href="/blogs">Blogs</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/admin">Login</Link>

          <Link href="/contact">
            <button className="bg-[#191970] text-white px-4 py-2 rounded-md hover:bg-[#191970]">Contact</button>
          </Link>
        </div>

        {/* Mobile Icon */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl text-gray-700">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white text-center shadow-lg px-6 py-4 space-y-2 text-gray-700 font-medium max-h-[80vh] overflow-y-auto">

          <Link href="/" onClick={() => setOpen(false)} className="block w-full py-2 border-b">Home</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block w-full py-2 border-b">About</Link>

          {/* MOBILE PRODUCT DROPDOWN */}
          <div>
            <div onClick={() => setProductOpen(!productOpen)} className="w-full py-2 border-b font-medium cursor-pointer">Product</div>

            {productOpen && (
              <div className="bg-gray-100 rounded-md p-3">

                {/* Tally Prime */}
                <div>
                  <div onClick={() => setTallyOpen(!tallyOpen)} className="font-medium cursor-pointer">Tally Prime</div>
                  {tallyOpen && (
                    <div className="pl-4 mt-1">
                      <Link href="/product#tally-new" onClick={() => setOpen(false)} className="block py-2">Tally Prime New License</Link>
                      <hr className="border-gray-300" />
                      <Link href="/product#tss" onClick={() => setOpen(false)} className="block py-2">Tally Software Services</Link>
                      <hr className="border-gray-300" />
                      <Link href="/product#addons" onClick={() => setOpen(false)} className="block py-2">Tally Add-Ons</Link>
                      <hr className="border-gray-300" />
                      <Link href="/product#capital" onClick={() => setOpen(false)} className="block py-2">Tally Capital</Link>
                      <hr className="border-gray-300" />
                      <Link href="/product#mobile" onClick={() => setOpen(false)} className="block py-2">Tally On Mobile</Link>
                    </div>
                  )}
                </div>

                <Link href="/product#erp" onClick={() => setOpen(false)} className="block font-medium py-2">ERP Software</Link>
                <hr className="border-gray-300" />

                {/* Cloud Solution */}
                <div>
                  <div onClick={() => setCloudOpen(!cloudOpen)} className="font-medium cursor-pointer">Cloud Solution</div>
                  {cloudOpen && (
                    <div className="pl-4 mt-1">
                      <Link href="/product#cloud" onClick={() => setOpen(false)} className="block py-2">Tally On Cloud</Link>
                      <hr className="border-gray-300" />
                      <Link href="/product#office" onClick={() => setOpen(false)} className="block py-2">Office on Cloud</Link>
                    </div>
                  )}
                </div>

                <hr className="border-gray-300" />
                <Link href="/product#hrms" onClick={() => setOpen(false)} className="block font-medium py-2">HRMS & Payroll Software</Link>
                <hr className="border-gray-300" />
                <Link href="/product#otto" onClick={() => setOpen(false)} className="block font-medium py-2">OTTO – Conversational AI Business Bot</Link>

              </div>
            )}
          </div>

          {/* MOBILE SERVICES DROPDOWN */}
        {/* MOBILE SERVICES DROPDOWN */}
<div>
  <div
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full py-2 border-b cursor-pointer"
  >
    Services
  </div>

  {serviceOpen && (
    <div className="mt-2 bg-gray-100 rounded-md p-2 text-center"> {/* Changed text-left -> text-center */}
      <Link href="/services#ecosystem" onClick={() => setOpen(false)} className="block py-2">Software AMC</Link>
      <hr className="border-gray-300" />
      <Link href="/services#erp" onClick={() => setOpen(false)} className="block py-2">Corporate Training</Link>
      <hr className="border-gray-300" />
      <Link href="/services#tally" onClick={() => setOpen(false)} className="block py-2">Implementation</Link>
      <hr className="border-gray-300" />
      <Link href="/services#amc" onClick={() => setOpen(false)} className="block py-2">Integration</Link>
      <hr className="border-gray-300" />
      <Link href="/services#mobile" onClick={() => setOpen(false)} className="block py-2">Customisation</Link>
      <hr className="border-gray-300" />
      <Link href="/services#account" onClick={() => setOpen(false)} className="block py-2">Accounts & Taxation</Link>
    </div>
  )}
</div>

          <Link href="/blogs" onClick={() => setOpen(false)} className="block w-full py-2 border-b">Blogs</Link>
          <Link href="/gallery" onClick={() => setOpen(false)} className="block w-full py-2 border-b">Gallery</Link>
          <Link href="/admin" onClick={() => setOpen(false)} className="block w-full py-2 border-b">Login</Link>

          <Link href="/contact" onClick={() => setOpen(false)}>
            <button className="w-full bg-[#A72028] text-white px-4 py-3 rounded-md mt-2">Contact</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
