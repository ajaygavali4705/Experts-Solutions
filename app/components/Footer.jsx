"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaGoogle,
} from "react-icons/fa";

export default function Footer() {
  const [openPages, setOpenPages] = useState(false);
  const [openSolutions, setOpenSolutions] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false); // Mobile services dropdown


  return (
    <footer className="w-full bg-[#0F2347] pt-0 pb-10">

      {/* CTA */}
      <section className="w-full bg-[#8b1f2f] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h2 className="text-5xl font-bold" whileHover={{ scale: 1.03 }}>
            Ready to simplify business with technology?
          </motion.h2>

          <motion.p
            className="mt-5 text-xl text-gray-200 max-w-4xl mx-auto"
            whileHover={{ scale: 1.03 }}
          >
            Let Experts Solutions be your partner in automation, taxation,
            and digital transformation.
          </motion.p>

         <div className="flex justify-center mt-8 gap-6 flex-wrap">
  <Link href="/contact">
    <motion.button
      whileHover={{ scale: 1.1, y: -3 }}
      className="bg-[#87CEEB] text-black font-bold px-6 py-2 rounded-md"
    >
      Get A Free Trial
    </motion.button>
  </Link>
</div>

        </div>
      </section>

      {/* DESKTOP FOOTER */}
{/* DESKTOP FOOTER */}
<div className="max-w-7xl mx-auto px-6 pt-12 hidden md:grid md:grid-cols-6 gap-10 text-gray-700 text-center md:text-left">

  {/* Logo */}
  <div className="flex flex-col items-center md:items-start">
    <Image
      src="/images/Expert_logo.jpg"
      alt="Experts Solutions Logo"
      width={120}
      height={120}
      className="mb-4 rounded-xl"
    />
  </div>

  {/* Pages */}
  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-100 mb-3">Pages</h4>
    <ul className="space-y-2 text-white text-sm">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/about">About</Link></li>
      <li><Link href="/product">Product</Link></li>
      <li><Link href="/services">Services</Link></li>
      <li><Link href="/blogs">Blog</Link></li>
      <li><Link href="/gallery">Gallery</Link></li>
      <li><Link href="/contact">Contact</Link></li>
    </ul>
  </div>

  {/* Services */}
  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-100 mb-3">Services</h4>
    <ul className="space-y-2 text-white text-sm">
      <li><Link href="/services#software-amc">Software AMC</Link></li>
      <li><Link href="/services#corporate-training">Corporate Training</Link></li>
      <li><Link href="/services#implementation">Implementation</Link></li>
      <li><Link href="/services#integration">Integration</Link></li>
      <li><Link href="/services#customization">Customization</Link></li>
      <li><Link href="/services#account-taxation">Account & Taxation</Link></li>
    </ul>
  </div>

  {/* Products */}
  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-100 mb-3">Products</h4>
    <ul className="space-y-2 text-white text-sm">
      <li><Link href="/product#tally-new">Tally Prime</Link></li>
      <li><Link href="/product#erp">ERP Software</Link></li>
      <li><Link href="/product#cloud">Cloud Solution</Link></li>
      <li><Link href="/product#hrms">HRMS and Payroll Software</Link></li>
      <li><Link href="/product#otto">OTTO</Link></li>
    </ul>
  </div>

  {/* Contact */}
  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-100 mb-3">Contact</h4>
    <ul className="space-y-2 text-white text-sm">
      <li>Branch Office:</li>
      <li>E/1009, Oro Avenue, Life Republic, Marunji, Pune – 411057</li>
      <li>Email: sales@experts.net.in</li>
      <li>Phone: +91 7700005316</li>
    </ul>
  </div>

  <div className="flex flex-col items-center md:items-start">
    <h4 className="font-semibold text-gray-100 mb-3"> </h4>
    <ul className="space-y-2 text-white text-sm">
      <li>Registered Office:</li>
      <li>4/5, Laxmi Sadan Building, Ground Floor, Behind Patil Sainath Plaza, Zaver Road End, Station Road, Mulund (W), Maharashtra – 400080</li>
      <li>Email: sales@experts.net.in</li>
      <li>Phone: +91 9821322456</li>
    </ul>
  </div>
</div>



      {/* MOBILE FOOTER */}
{/* MOBILE FOOTER */}
<div className="md:hidden px-6 pt-12 text-center text-white space-y-6">

  {/* Logo */}
  <div className="flex flex-col items-center">
    <Image
      src="/images/Expert_logo.jpg"
      alt="Experts Solutions Logo"
      width={120}
      height={120}
      className="mb-4 rounded-xl"
    />
  </div>

  {/* PAGES */}
  <button
    onClick={() => setOpenPages(!openPages)}
    className="w-full max-w-xs mx-auto px-6 py-3 bg-[#102b55] text-white rounded-xl font-semibold"
  >
    Pages
  </button>

  {openPages && (
  <div className="bg-[#102b55] p-4 rounded-md space-y-2 max-w-xs mx-auto text-sm">
      <Link href="/" className="block">Home</Link>
      <Link href="/about" className="block">About</Link>
      <Link href="/product" className="block">Product</Link>
      <Link href="/services" className="block">Services</Link>
      <Link href="/blogs" className="block">Blog</Link>
      <Link href="/gallery" className="block">Gallery</Link>
      <Link href="/contact" className="block">Contact</Link>
    </div>
  )}



 <button
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full max-w-xs mx-auto px-6 py-3 bg-[#102b55] text-white rounded-xl font-semibold"
  >
    Service
  </button>

{/* SERVICES */}
{serviceOpen && (
  <div className="bg-[#102b55] p-2 rounded-md max-w-xs mx-auto text-sm">
    <Link href="/services#software-amc" className="block py-2">Software AMC</Link>
    <Link href="/services#corporate-training" className="block py-2">Corporate Training</Link>
    <Link href="/services#implementation" className="block py-2">Implementation</Link>
    <Link href="/services#integration" className="block py-2">Integration</Link>
    <Link href="/services#customization" className="block py-2">Customization</Link>
    <Link href="/services#account-taxation" className="block py-2">Account & Taxation</Link>
  </div>
)}

  {/* PRODUCTS (MATCH DESKTOP) */}
  <button
    onClick={() => setOpenSolutions(!openSolutions)}
    className="w-full max-w-xs mx-auto px-6 py-3 bg-[#102b55] text-white rounded-xl font-semibold"
  >
    Products
  </button>

{/* PRODUCTS (MATCH DESKTOP) */}
{openSolutions && (
  <div className="bg-[#102b55] p-4 rounded-md space-y-2 max-w-xs mx-auto text-sm">
    <Link href="/product#tally-new" className="block">Tally Prime</Link>
    <Link href="/product#erp" className="block">ERP Software</Link>
    <Link href="/product#cloud" className="block">Cloud Solution</Link>
    <Link href="/product#hrms" className="block">HRMS and Payroll Software</Link>
    <Link href="/product#otto" className="block">OTTO</Link>
  </div>
)}



 

  {/* CONTACT — BRANCH */}
  <div className="space-y-2 pt-4 text-sm">
    <p className="font-semibold">Branch Office:</p>
    <p>
      E/1009, Oro Avenue, Life Republic,<br />
      Marunji, Pune – 411057
    </p>
    <p>Email: sales@experts.net.in</p>
    <p>Phone: +91 7700005316</p>
  </div>

  {/* CONTACT — REGISTERED */}
  <div className="space-y-2 pt-4 text-sm">
    <p className="font-semibold">Registered Office:</p>
    <p>
      4/5, Laxmi Sadan Building, Ground Floor,<br />
      Behind Patil Sainath Plaza, Zaver Road End,<br />
      Station Road, Mulund (W), Maharashtra – 400080
    </p>
    <p>Email: sales@experts.net.in</p>
    <p>Phone: +91 9821322456</p>
  </div>
</div>

      

      {/* BOTTOM BAR */}
      <div className="w-full pt-4 text-center text-sm text-gray-100">
        <div className="max-w-7xl mx-auto mb-5 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          <p className="text-sm text-white">
            Developed by{" "}
            <Link
              href="https://www.goanny.com"
              target="_blank"
              className="text-blue-600 hover:underline font-semibold"
            >
              Goanny Technologies Pvt Ltd
            </Link>
          </p>

          {/* Social Icons */}
          <div className="flex flex-col items-center gap-2 md:flex-row">
            <span className="text-gray-100 font-semibold text-sm">
              Lets connect
            </span>

            <div className="flex text-white space-x-4 text-lg">
              <Link href="https://www.facebook.com/profile.php?id=61552732301698" target="_blank">
                <FaFacebookF />
              </Link>
              <Link href="https://www.linkedin.com/feed/" target="_blank">
                <FaLinkedinIn />
              </Link>
              <Link href="https://wa.me/917700005314" target="_blank">
                <FaWhatsapp />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </Link>
              <Link href="https://www.instagram.com/experts_solutions2011/" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="https://maps.app.goo.gl/dm2HCwr1odhxE4BB9" target="_blank">
                <FaGoogle />
              </Link>
            </div>
          </div>
        </div>

        © {new Date().getFullYear()} Experts Solutions — All rights reserved.
      </div>
    </footer>
  );
}
