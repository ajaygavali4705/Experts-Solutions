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
      <section className="w-full bg-[#8b1f2f] h-[650] py-16 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-7xl font-bold text-center pt-20 text-[#ffff] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Services
            </motion.h1>

            <motion.p
              className="mt-4 text-xl text-center font-semibold mx-1 text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions offers a complete suite of technology,
              automation, and compliance services designed to simplify and
              strengthen business 
            </motion.p>
                 <motion.p
              className="text-xl text-center font-semibold mx-3 text-gray-100"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
         operations. From ERP and Tally solutions to
              cloud hosting, mobile applications, CRM systems, and taxation
              services we provide end-to-end support under one roof. Our
              services help businesses work smarter, stay compliant, and achieve
              long-term growth with reliable digital transformation. Experts
              Solutions offers a complete 360° suite of business automation,
              software solutions, accounting services, cloud hosting, and taxation consulting.
            </motion.p>
             
          
          </motion.div>
          <div className="mt-6 flex h-[60] flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.07 }}
              className="bg-[#87CEEB] text-lg text-black ml-130  font-bold px-5 py-2.5 rounded-md w-full sm:w-auto"
            >
              Explore Our Solutions
            </motion.button>
          </div>
        </div>
      </section>

      {/* ======================== SECTION 1 ======================== */}
      {/* ======================== SECTION 1 ======================== */}
      <section
        id="ecosystem"
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f2f4f7" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          {/* ONE BOX WRAPPER */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 
                 flex flex-col lg:flex-row items-center gap-16"
          >
            {/* IMAGE */}
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              src="/about1.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover 
    hover:scale-[1.02] transition-all duration-300
  "
            />

            {/* CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h2
                className="text-4xl font-extrabold text-center tracking-tight leading-tight"
                style={{ color: "#191970" }}
              >
                Our Service Ecosystem
              </h2>

              <p
                className="mt-4 text-center text-lg leading-relaxed"
                style={{ color: "#191970" }}
              >
                360° suite of business automation, software solutions,
                accounting, cloud hosting and taxation consulting for MSMEs,
                startups, corporates, NGOs.
              </p>

              <ul className="mt-4 space-y-2">
                {[
                  "ERP / Accounting / Inventory Software",
                  "Tally Prime & Tally Ecosystem Services",
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
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg font-medium"
                    style={{ color: "#191970" }}
                  >
                    <span className="text-[#191970] text-xl">✔</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 2 – ERP & Accounting */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16"
          >
            <motion.img
              src="/about2.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <motion.div className="lg:w-1/2">
              <h2
                className="text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                ERP, Accounting & Software Solutions
              </h2>
              <p
                className="mt-5 text-center text-lg"
                style={{ color: "#191970" }}
              >
                We provide robust business management software designed for
                financial accuracy, operational efficiency, and compliance
                management.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Tally Prime (Silver, Gold, Server)",
                  "TEZ ERP",
                  "Inventory Management Systems",
                  "GST & Tax Compliance Modules",
                  "Industry-specific ERPs",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 3 – Tally Services */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <motion.img
              src="/about3.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2
                className="text-4xl font-extrabold text-center"
                style={{ color: "#191970" }}
              >
                Tally Solutions
              </h2>
              <p
                className="mt-5 text-center text-lg"
                style={{ color: "#191970" }}
              >
                As a Tally 3 Star Partner, Experts Solutions offers the complete
                Tally lifecycle — from license purchase to customization and
                integration.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Tally License Sales",
                  "TSS Renewal",
                  "Tally Customisation",
                  "Tally Integration (ERP ↔ Tally)",
                  "Excel-to-Tally Import",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 4 – Cloud Solutions */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#eef1f5" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about4.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                SOFTWARE SUPPORT, AMC & TRAINING
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "Office on Cloud",
                  "Tally on AWS",
                  "ERP on Cloud",
                  "Virtual Cloud Hosting",
                  "Annual Support & Training Free",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
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
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f2f4f7" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about5.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                Mobile Applications
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "Biz App",
                  "Credflow App",
                  "ERP App",
                  "CRM App",
                  "Payroll & Attendance App",
                  "Free Training + Annual Support",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 6 – CRM Solutions */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about6.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                CRM Solutions
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "ERP with CRM",
                  "CRM Standalone",
                  "CRM Systems",
                  "Follow-ups",
                  "Client Management",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 7 – Accounts & Taxation */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f8f9fc" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about7.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                Accounts & Taxation
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "Bookkeeping & Finalization",
                  "GST Filings",
                  "TDS / PT / IT Filings",
                  "ROC / PAN / TAN / EXIM Registrations",
                  "Trust / NGO / Partnership / Pvt Ltd Registrations",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 8 – Payroll Solutions */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#eef1f5" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about8.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                Payroll & HRMS
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "Payroll Automation",
                  "Attendance App",
                  "Salary Calculation",
                  "PF / ESIC Reports",
                  "Employee Management",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 9 – Corporate Training */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f2f4f7" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about9.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                Corporate Training
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "ERP Training",
                  "Tally Training",
                  "Accounting Workshops",
                  "HR & Payroll Training",
                  "Custom Corporate Programs",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------- */}
      {/* SECTION 10 – AMC & Support */}
      {/* -------------------------------------------------------- */}
      <section
        className="min-h-screen flex items-center py-10"
        style={{ backgroundColor: "#f9fafb" }}
      >
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">
            <img
              src="/about10.jpg"
              className="
    w-full lg:w-1/2 
    h-60 lg:h-[450px] 
    rounded-3xl shadow-xl object-cover
  "
            />

            <div className="lg:w-1/2">
              <h2 className="text-4xl font-extrabold text-center">
                Software AMC & Support
              </h2>

              <ul className="mt-8 space-y-4">
                {[
                  "Dedicated Support Team",
                  "Remote & Onsite Support",
                  "Tally AMC",
                  "ERP AMC",
                  "Cloud AMC",
                ].map((x, i) => (
                  <li
                    key={i}
                    className="text-lg font-medium flex items-center gap-3"
                    style={{ color: "#191970" }}
                  >
                    ✔ {x}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
