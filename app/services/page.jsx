"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";


const fade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      <section
        className="w-full h-auto md:h-[650px] py-16 px-4 md:px-6 border-b border-gray-200 relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/bg-experts.jpg')",
        }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-[#8b1f2fb0]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-6 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* TITLE */}
            <motion.h1
              className="
          text-4xl 
          sm:text-5xl 
          md:text-7xl 
          font-bold 
          text-center 
          pt-10 
          md:pt-20 
          text-white 
          leading-tight
        "
              whileHover={{ scale: 1.02 }}
            >
              Services
            </motion.h1>

            {/* SUBTEXT 1 */}
            <motion.p
              className="
          mt-4 
          text-base 
          sm:text-lg 
          md:text-xl 
          text-center 
          font-semibold 
          mx-2 
          md:mx-1 
          text-gray-100
        "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions offers a complete suite of technology,
              automation, and compliance services designed to simplify and
              strengthen business.
            </motion.p>

            {/* SUBTEXT 2 */}
            <motion.p
              className="
          text-base 
          sm:text-lg 
          md:text-xl 
          text-center 
          font-semibold 
          mx-3 
          text-gray-100 
          mt-2
        "
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              From ERP and Tally solutions to cloud hosting, mobile
              applications, CRM systems, and taxation services — we provide
              end-to-end support under one roof. Our services help businesses
              work smarter, stay compliant, and achieve long-term growth with
              reliable digital transformation.
            </motion.p>
          </motion.div>

          {/* BUTTON */}
{/* BUTTON */}
<div
  className="
    mt-6 
    flex 
    flex-col 
    sm:flex-row 
    gap-4 
    w-full sm:w-auto
    justify-center
    items-center    /* Ensure center alignment for mobile */
  "
>
  <Link href="/product">
    <motion.button
      whileHover={{ scale: 1.07 }}
      className="
        bg-[#87CEEB] 
        text-lg 
        text-black 
        font-bold 
        px-6 
        py-3 
        rounded-md
        w-full sm:w-auto   /* Full width on mobile, auto on desktop */
        max-w-xs           /* Optional: limit mobile width */
        text-center
      "
    >
      Products
    </motion.button>
  </Link>
</div>

        </div>
      </section>

      {/* ======================== SECTION 1 ======================== */}
      {/* ============= SECTION 1 ============= */}
      <section
        id="ecosystem"
        className="min-h-screen flex items-center py-10 bg-[#f2f4f7]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl 
              p-6 sm:p-10 
              flex flex-col lg:flex-row items-center gap-10"
          >
            {/* IMAGE */}
            <motion.img
              src="/about1.jpg"
              className="
                w-full lg:w-1/2 
                h-52 sm:h-60 md:h-72 lg:h-[450px] 
                rounded-3xl shadow-xl object-cover 
              "
            />

            {/* CONTENT */}
            <motion.div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Software AMC Tally 
              </h2>

              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Ensure uninterrupted business performance.
              </p>

              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-33 w-fit">
                {[
                  "Unlimited Remote Support",
                  "License Troubleshooting",
                  "Data Troubleshooting",
                  "Data Splitting",
                  "Training & Support",
                  "Accounting",
                  "Inventory",
                  "Banking",
                  "GSTR -1, GSTR -2B, GSTR -3B",
                  "E-way Bill & E-Invoice",
                  "Payroll & TDS And TCS",
                  "Job Work & Manufacturing Process",
                  "Tally.NET Remote Access",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg font-medium"
                    style={{ color: "#191970" }}
                  >
                    <span className="text-xl">✔</span> {item}
                  </motion.li>
                ))}
                
              </ul>
              {/* REQUEST DEMO BUTTON */}
<div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============= SECTION 2 (ERP) ============= */}
      <section
        id="erp"
        className="min-h-screen flex items-center py-10 bg-[#87CEEB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
            <motion.img
              src="/about2.jpg"
              className="w-full lg:w-1/2 h-52 sm:h-60 md:h-72 lg:h-[450px] rounded-3xl object-cover"
            />

            <div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Corporate Training
              </h2>

              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Empower your team with expert-led training.
              </p>

              <ul className="mt-6 space-y-3 mx-auto lg:ml-30 w-fit">
                {[
                  "Core Accounting Principles",
                  "GST and Taxation Compliance",
                  "Inventory and Stock Management",
                  "Payroll Processing",
                  "Financial Reporting and Analysis ",
                  "Banking and Reconciliation",
                  "Data Management & Security",
                  "Increased Productivity and Efficiency",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-lg font-medium flex items-center gap-3"
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
     Get A Quote
    </motion.button>
  </Link>
</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 3 – Tally Services */}
      {/* -------------------------------------------------------- */}
      <section
        id="tally"
        className="min-h-screen flex items-center py-10 bg-[#f2f4f7]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl 
              p-6 sm:p-10 
              flex flex-col lg:flex-row items-center gap-10"
          >
            {/* IMAGE */}
            <motion.img
              src="/about3.jpg"
              className="
                w-full lg:w-1/2 
                h-52 sm:h-60 md:h-72 lg:h-[450px] 
                rounded-3xl shadow-xl object-cover 
              "
            />

            {/* CONTENT */}
            <motion.div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Implementation
              </h2>

              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Seamless deployment tailored to your business.
              </p>

              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-15 w-fit">
                {[
                  "We handle complete setup, configuration, data migration, and user onboarding to ensure your Tally and other software solutions are implemented correctly from day one.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg font-medium"
                    style={{ color: "#191970" }}
                  >
                    <span className="text-xl">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 4 – SOFTWARE SUPPORT, AMC & TRAINING */}
      {/* -------------------------------------------------------- */}
      <section
        id="amc"
        className="min-h-screen flex items-center py-10 bg-[#87CEEB]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
            <motion.img
              src="/about4.jpg"
              className="w-full lg:w-1/2 h-52 sm:h-60 md:h-72 lg:h-[450px] rounded-3xl object-cover"
            />

            <div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Integration
              </h2>
              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Connect your systems for smarter workflows.
              </p>
              <ul className="mt-6 space-y-3 mx-auto lg:ml-30 w-fit">
                {[
                  " Integrate Tally with your CRM, ERP, e-commerce, banking systems, or third-party apps to automate data flow and eliminate manual work.",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-lg font-medium flex items-center gap-3"
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 5 – Mobile Apps */}
      {/* -------------------------------------------------------- */}
      <section
        id="mobile"
        className="min-h-screen flex items-center py-10 bg-[#f2f4f7]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl 
              p-6 sm:p-10 
              flex flex-col lg:flex-row items-center gap-10"
          >
            {/* IMAGE */}
            <motion.img
              src="/about5.jpg"
              className="
                w-full lg:w-1/2 
                h-52 sm:h-60 md:h-72 lg:h-[450px] 
                rounded-3xl shadow-xl object-cover 
              "
            />

            {/* CONTENT */}
            <motion.div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Customisation
              </h2>
              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Software that works exactly the way you do.
              </p>
              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-20 w-fit">
                {[
                  "From invoice formats to workflow modifications and custom modules—get tailor-made enhancements that fit your business processes perfectly.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg font-medium"
                    style={{ color: "#191970" }}
                  >
                    <span className="text-xl">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

  {/* -------------------------------------------------------- */}
      {/* SECTION 5 – Mobile Apps */}
      {/* -------------------------------------------------------- */}
      <section
        id="mobile"
        className="min-h-screen flex items-center py-10 bg-[#f2f4f7]"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl 
              p-6 sm:p-10 
              flex flex-col lg:flex-row items-center gap-10"
          >
            {/* IMAGE */}
            <motion.img
              src="/about5.jpg"
              className="
                w-full lg:w-1/2 
                h-52 sm:h-60 md:h-72 lg:h-[450px] 
                rounded-3xl shadow-xl object-cover 
              "
            />

            {/* CONTENT */}
            <motion.div className="lg:w-1/2">
              <h2
                className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Customisation
              </h2>
              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                Software that works exactly the way you do.
              </p>
              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-20 w-fit">
                {[
                  "From invoice formats to workflow modifications and custom modules—get tailor-made enhancements that fit your business processes perfectly.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 text-base sm:text-lg font-medium"
                    style={{ color: "#191970" }}
                  >
                    <span className="text-xl">✔</span> {item}
                  </motion.li>
                ))}
              </ul>
              <div className="flex justify-center mt-10">
  <Link href="/contact#products">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
{/* SECTION – Accounts & Taxation (LAST SECTION) */}
{/* -------------------------------------------------------- */}
<section
  id="account"
  className="min-h-screen flex items-center py-10 bg-[#87CEEB]"
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-20">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl 
        p-6 sm:p-10 
        flex flex-col lg:flex-row items-center gap-10"
    >
      {/* IMAGE */}
      <motion.img
        src="/blog5.jpg"
        className="
          w-full lg:w-1/2 
          h-52 sm:h-60 md:h-72 lg:h-[450px] 
          rounded-3xl shadow-xl object-cover
        "
        alt="Accounts and Taxation Services"
      />

      {/* CONTENT */}
      <motion.div className="lg:w-1/2">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center"
          style={{ color: "#191970" }}
        >
          Accounts & Taxation
        </h2>

        <p
          className="mt-4 text-center text-base sm:text-lg font-semibold"
          style={{ color: "#191970" }}
        >
          End-to-end accounting and taxation services to keep your business
          compliant, accurate, and growth-ready.
        </p>

        <ul className="mt-6 space-y-3 mx-auto lg:ml-24 w-fit">
          {[
            "Book Keeping & Accountancy",
            "Finalization of Books",
            "Tax Audit",
            "GST, TDS, PT, IT, PAN, Exim, Udyam Registrations",
            "Proprietorship, Partnership, Pvt Ltd, LLP, Trust & NGO Registrations",
            "Business Process Automation",
            "GST, TDS, PT, IT Return Filings",
          ].map((item, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 text-base sm:text-lg font-medium"
              style={{ color: "#191970" }}
            >
              <span className="text-xl">✔</span> {item}
            </motion.li>
          ))}
        </ul>
        <div className="flex justify-center mt-10">
  <Link href="/contact#tax">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className="
        bg-[#191970]
        text-white
        text-lg
        font-bold
        px-8
        py-3
        rounded-md
        shadow-md
      "
    >
      Get A Quote
    </motion.button>
  </Link>
</div>
      </motion.div>
    </motion.div>
  </div>
</section>


    </main>
  );
}







  