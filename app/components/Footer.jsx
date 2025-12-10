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
            <motion.button
              whileHover={{ scale: 1.1, y: -3 }}
              className="bg-[#87CEEB] text-black font-bold px-6 py-2 rounded-md"
            >
              Request a Demo
            </motion.button>
          </div>
        </div>
      </section>

      {/* DESKTOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 pt-12 hidden md:grid md:grid-cols-5 gap-10 text-gray-700 text-center md:text-left">

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
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-100 mb-3">Solutions</h4>
          <ul className="space-y-2 text-white text-sm">
            <li>Tally Services</li>
            <li>Tally Prime Add-Ons</li>
            <li>Cloud Solutions</li>
            <li>ERP Software</li>
            <li>HRMS & Payroll Software</li>
            <li>CRM Solutions</li>
            <li>Accounts & Taxation Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-100 mb-3">Contact</h4>
          <ul className="space-y-2 text-white text-sm">
            <li>Branch Office:</li>
          <li>E/1009, Oro Avenue, Life Republic,
Marunji, Pune – 411057</li>
          <li>Email: sales@experts.net.in</li>
          <li>Phone: +91 7700005316</li>
          </ul>
        </div>

         <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-100 mb-3"> </h4>
          <ul className="space-y-2 text-white text-sm">
            <li>Registered Office:</li>
          <li>4/5, Laxmi Sadan Building, Ground Floor,
Behind Patil Sainath Plaza, Zaver Road End, Station Road,
Mulund (W), Maharashtra – 400080</li>
          <li>Email: sales@experts.net.in</li>
          <li>Phone: +91 9821322456</li>
          </ul>
        </div>
      </div>



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

        {/* PAGES BUTTON */}
      {/* PAGES BUTTON */}
<button
  onClick={() => setOpenPages(!openPages)}
  className="w-full max-w-xs mx-auto px-6 py-3 bg-[#102b55] text-white rounded-4xl font-semibold"
>
  Pages
</button>

{openPages && (
  <div className="bg-[#102b55] p-4 rounded-md space-y-3 text-center max-w-xs mx-auto">
    <Link href="/" className="block">Home</Link>
    <Link href="/services" className="block">Services</Link>
    <Link href="/about" className="block">About</Link>
    <Link href="/blogs" className="block">Blogs</Link>
    <Link href="/gallery" className="block">Gallery</Link>
  </div>
)}

{/* SOLUTIONS BUTTON */}
<button
  onClick={() => setOpenSolutions(!openSolutions)}
  className="w-full max-w-xs mx-auto px-6 py-3 bg-[#102b55] text-white rounded-4xl font-semibold"
>
  Solutions
</button>

{openSolutions && (
  <div className="bg-[#102b55] p-4 rounded-md space-y-3 text-center max-w-xs mx-auto">
    <p>ERP & Accounting</p>
    <p>Tally Services</p>
    <p>Cloud Hosting</p>
    <p>Mobile Apps</p>
    <p>CRM Solutions</p>
  </div>
)}

        {/* CONTACT */}
        <div className="text-center space-y-2 pt-4">
          <p>Branch Office:</p>
          <p>E/1009, Oro Avenue, Life Republic,
Marunji, Pune – 411057</p>
          <p>Email: sales@experts.net.in</p>
          <p>Phone: +91 7700005316</p>
        </div>
         <div className="text-center space-y-2 pt-4">
          <p>Registered Office:</p>
          <p>4/5, Laxmi Sadan Building, Ground Floor,
Behind Patil Sainath Plaza, Zaver Road End, Station Road,
Mulund (W), Maharashtra – 400080</p>
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
              <Link href="https://wa.me/919049002701" target="_blank">
                <FaWhatsapp />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube />
              </Link>
              <Link href="https://www.instagram.com/experts_solutions2011/" target="_blank">
                <FaInstagram />
              </Link>
              <Link href="https://www.google.com/intl/en_in/business/" target="_blank">
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
