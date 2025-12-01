"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 pt-0">

      {/* ------------------------------------------------------ */}
      {/* CTA SECTION INSIDE FOOTER */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-[#0F2347] py-16 px-6">
        <div className="max-w-7xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl font-bold"
            whileHover={{ scale: 1.03 }}
          >
            Ready to simplify business with technology?
          </motion.h2>

          <motion.p
            className="mt-3 text-gray-200 max-w-3xl mx-auto"
            whileHover={{ scale: 1.03 }}
          >
            Let Experts Solutions be your partner in automation, taxation, and
            digital transformation.
          </motion.p>

          <div className="flex justify-center mt-8 gap-6">
            {["Contact Us", "Request a Demo", "Get a Quote"].map((x, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1, y: -3 }}
                className={
                  i === 0
                    ? "bg-white text-[#0F2347] px-6 py-2 rounded-md"
                    : i === 1
                    ? "bg-[#A72028] px-6 py-2 rounded-md"
                    : "border border-white px-6 py-2 rounded-md"
                }
              >
                {x}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CLASSIC FOOTER */}
      {/* ------------------------------------------------------ */}
      <div className="max-w-7xl mx-auto px-6 pt-12 grid grid-cols-1  md:grid-cols-4 gap-10 text-gray-700">

        {/* Logo + About */}
        <div>
          <h3 className="text-xl font-bold text-[#A72028]">Experts Solutions</h3>
          <p className="mt-3 text-sm text-gray-600">
            A trusted partner for business automation, ERP, MIS, taxation,
            cloud services & mobile app development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blogs">Blog</Link></li>
            <li><Link href="/admin">Admin</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>ERP & Accounting</li>
            <li>Tally Services</li>
            <li>Cloud Hosting</li>
            <li>Mobile Apps</li>
            <li>CRM Solutions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>Pune, Maharashtra, India</li>
            <li>Email: info@experts.com</li>
            <li>Phone: +91 98765 43210</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
        {/* Bottom Section */}
        <div className="w-full  pb-4 text-center text-sm text-gray-700">
    <div className="max-w-7xl mx-auto mb-5 mt-2  flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
      <p className="text-sm">
        Developed by{" "}
        <Link
          href="https://www.goanny.com"
          target="_blank"
          className="text-blue-600 hover:underline font-semibold"
        >
          Goanny Technologies Pvt Ltd
        </Link>
      </p>

      <div className="flex flex-col items-center md:flex-row gap-2">
        <span className="text-gray-600 font-semibold text-sm">Lets connect</span>

        <div className="flex space-x-4 text-lg">
          <Link href="https://www.facebook.com" target="_blank">
            <FaFacebookF className="hover:text-blue-500 transition" />
          </Link>
          <Link href="https://www.linkedin.com" target="_blank">
            <FaLinkedinIn className="hover:text-blue-500 transition" />
          </Link>
         <Link href="https://wa.me/919049002701" target="_blank">
          <FaWhatsapp className="hover:text-blue-500 transition" />
        </Link>
          <Link href="https://www.youtube.com" target="_blank">
            <FaYoutube className="hover:text-blue-500 transition" />
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
