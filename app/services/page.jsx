"use client";

import React from "react";
import { motion } from "framer-motion";
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
        Experts Solutions offers a complete suite of technology, automation,
        and compliance services designed to simplify and strengthen business.
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
        From ERP and Tally solutions to cloud hosting, mobile applications, CRM
        systems, and taxation services — we provide end-to-end support under
        one roof. Our services help businesses work smarter, stay compliant,
        and achieve long-term growth with reliable digital transformation.
      </motion.p>
    </motion.div>

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
        sm:justify-start
      "
    >
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
          mx-auto 
          sm:mx-0
          md:ml-130
        "
      >
        Explore Our Solutions
      </motion.button>
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
               Software AMC & Other
              </h2>

              <p
                className="mt-4 text-center text-base sm:text-lg"
                style={{ color: "#191970" }}
              >
                360° suite of business automation, software solutions, cloud
                hosting and taxation consulting for MSMEs, startups, corporates & NGOs.
              </p>

              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-26 w-fit">
                {[
                  "ERP / Accounting / Inventory Software",
                  "Tally Prime & Ecosystem Services",
                  "Software Support AMC",
                  "Customisation & Integration",
                  "Cloud Hosting Services",
                  "Mobile Applications",
                  "CRM Solutions",
                  "Payroll Software",
                  "Accounts & Taxation Services",
                  "Corporate Training",
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============= SECTION 2 (ERP) ============= */}
      <section   
     id="erp"
 className="min-h-screen flex items-center py-10 bg-[#87CEEB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
            <motion.img
              src="/about2.jpg"
              className="w-full lg:w-1/2 h-52 sm:h-60 md:h-72 lg:h-[450px] rounded-3xl object-cover"
            />

            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center" style={{ color: "#191970" }}>
                Corporate Training
              </h2>

              <p className="mt-4 text-center text-base sm:text-lg" style={{ color: "#191970" }}>
                We provide robust business software designed for accuracy, efficiency & compliance.
              </p>

              <ul className="mt-6 space-y-3 mx-auto lg:ml-50 w-fit">
                {[
                  "Tally Prime (Silver, Gold, Server)",
                  "TEZ ERP",
                  "Inventory Systems",
                  "GST & Tax Modules",
                  "Industry ERPs",
                ].map((x, i) => (
                  <li key={i} className="text-base sm:text-lg font-medium flex items-center gap-3">
                    ✔ {x}
                  </li>
                ))}
              </ul>
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
                 As a Tally 3 Star Partner, Experts Solutions offers the complete
                Tally lifecycle — from license purchase to customization and
                integration.
              </p>

              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-27 w-fit">
                {[
                   "Tally License Sales",
                  "TSS Renewal",
                  "Tally Customisation",
                  "Tally Integration (ERP ↔ Tally)",
                  "Excel-to-Tally Import",
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
            </motion.div>
          </motion.div>
        </div>
      </section>

       {/* -------------------------------------------------------- */}
      {/* SECTION 4 – SOFTWARE SUPPORT, AMC & TRAINING */}
      {/* -------------------------------------------------------- */}
      <section
      id="amc"
      className="min-h-screen flex items-center py-10 bg-[#87CEEB]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-10">
            <motion.img
              src="/about4.jpg"
              className="w-full lg:w-1/2 h-52 sm:h-60 md:h-72 lg:h-[450px] rounded-3xl object-cover"
            />

            <div className="lg:w-1/2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center" style={{ color: "#191970" }}>
                Integration 
              </h2>

           
              <ul className="mt-6 space-y-3 mx-auto lg:ml-50 w-fit">
                {[
                  "Office on Cloud",
                  "Tally on AWS",
                  "ERP on Cloud",
                  "Virtual Cloud Hosting",
                  "Annual Support & Training Free",
                ].map((x, i) => (
                  <li key={i} className="text-base sm:text-lg font-medium flex items-center gap-3">
                    ✔ {x}
                  </li>
                ))}
              </ul>
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

        

              {/* FIXED LIST — now centered on mobile */}
              <ul className="mt-6 space-y-3 mx-auto lg:ml-30 w-fit">
                {[
                  "Biz App",
                  "Credflow App",
                  "ERP App",
                  "CRM App",
                  "Payroll & Attendance App",
                  "Free Training + Annual Support",
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      




    </main>
  );
}
