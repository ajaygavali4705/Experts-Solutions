"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#0F2347] pt-0 pb-10">

      {/* CTA */}
      <section className="w-full bg-[#8b1f2f] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h2
            className="text-5xl font-bold"
            whileHover={{ scale: 1.03 }}
          >
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
            {["Request a Demo",].map((x, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                className={
                  i === 0
                    
                    ? "bg-[#87CEEB] text-black font-bold px-6 py-2 rounded-md"
                    : "border border-white px-6 py-2 rounded-md"
                }
              >
                {x}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6  pt-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-gray-700 text-center md:text-left">

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
            <li>ERP & Accounting</li>
            <li>Tally Services</li>
            <li>Cloud Hosting</li>
            <li>Mobile Apps</li>
            <li>CRM Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-semibold text-gray-100 mb-3">Contact</h4>
          <ul className="space-y-2 text-white text-sm">
            <li>Pune, Maharashtra, India</li>
            <li>Email: info@experts.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="w-full pt-4 text-center text-sm text-gray-100">
        <div className="max-w-7xl mx-auto mb-5 mt-2 flex flex-col md:flex-row items-center justify-between gap-4 text-center">

          {/* Developer Credit */}
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
              <Link href="https://www.facebook.com" target="_blank">
                <FaFacebookF className="hover:text-blue-500 transition" />
              </Link>
              <Link href="https://www.linkedin.com" target="_blank">
                <FaLinkedinIn className="hover:text-blue-500 transition" />
              </Link>
              <Link href="https://wa.me/919049002701" target="_blank">
                <FaWhatsapp className="hover:text-green-500 transition" />
              </Link>
              <Link href="https://www.youtube.com" target="_blank">
                <FaYoutube className="hover:text-red-500 transition" />
              </Link>
              <Link href="https://www.instagram.com" target="_blank">
                <FaInstagram className="hover:text-pink-500 transition" />
              </Link>
            </div>
          </div>
        </div>

        © {new Date().getFullYear()} Experts Solutions — All rights reserved.
      </div>
    </footer>
  );
}
