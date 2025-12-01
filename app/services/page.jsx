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

<section className="w-full bg-white py-16 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold text-center text-[#0A1A2F] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Our Services
            </motion.h1>

            <motion.p
              className="mt-4 text-center text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions offers a complete 360° suite of business automation, software solutions,
accounting services, cloud hosting, and taxation consulting.
            </motion.p>

            <motion.p
              className="mt-3 text-sm text-center text-gray-500"
              whileHover={{ scale: 1.03, color: "#A72028" }}
            >
             We combine technology + taxation + automation + cloud to deliver seamless, integrated,
cost-effective business solutions.
            </motion.p>
          </motion.div>

        
        </div>
      </section>


      {/* ======================== SECTION 1 ======================== */}
{/* ======================== SECTION 1 ======================== */}
<section
  id="ecosystem"
  className="min-h-screen flex items-center py-24"
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
        src="/image1.jpg"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px] hover:scale-[1.02] transition-all duration-300"
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
          360° suite of business automation, software solutions, accounting,
          cloud hosting and taxation consulting for MSMEs, startups, corporates, NGOs.
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f9fafb" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16"
    >
      <motion.img
        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <motion.div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center" style={{ color: "#191970" }}>
          ERP, Accounting & Software Solutions
        </h2>
        <p className="mt-5 text-center text-lg" style={{ color: "#191970" }}>
          We provide robust business management software designed for financial accuracy,
operational efficiency, and compliance management.
        </p>

        <ul className="mt-8 space-y-4">
          {[
            "Tally Prime (Silver, Gold, Server)",
            "TEZ ERP",
            "Inventory Management Systems",
            "GST & Tax Compliance Modules",
            "Industry-specific ERPs",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f8f9fc" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <motion.img
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center" style={{ color: "#191970" }}>
          Tally Solutions
        </h2>
       <p className="mt-5 text-center text-lg" style={{ color: "#191970" }}>
         As a Tally 3 Star Partner, Experts Solutions offers the complete Tally lifecycle — from
license purchase to customization and integration.
        </p>


        <ul className="mt-8 space-y-4">
          {[
            "Tally License Sales",
            "TSS Renewal",
            "Tally Customisation",
            "Tally Integration (ERP ↔ Tally)",
            "Excel-to-Tally Import",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#eef1f5" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">SOFTWARE SUPPORT, AMC & TRAINING</h2>

        <ul className="mt-8 space-y-4">
          {[
            "Office on Cloud",
            "Tally on AWS",
            "ERP on Cloud",
            "Virtual Cloud Hosting",
            "Annual Support & Training Free",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f2f4f7" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">Mobile Applications</h2>

        <ul className="mt-8 space-y-4">
          {["Biz App", "Credflow App", "ERP App", "CRM App", "Payroll & Attendance App", "Free Training + Annual Support"].map(
            (x, i) => (
              <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
                ✔ {x}
              </li>
            )
          )}
        </ul>
      </div>

    </motion.div>
  </div>
</section>



{/* -------------------------------------------------------- */}
{/* SECTION 6 – CRM Solutions */}
{/* -------------------------------------------------------- */}
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f9fafb" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">CRM Solutions</h2>

        <ul className="mt-8 space-y-4">
          {["ERP with CRM", "CRM Standalone", "CRM Systems", "Follow-ups", "Client Management"].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f8f9fc" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">Accounts & Taxation</h2>

        <ul className="mt-8 space-y-4">
          {[
            "Bookkeeping & Finalization",
            "GST Filings",
            "TDS / PT / IT Filings",
            "ROC / PAN / TAN / EXIM Registrations",
            "Trust / NGO / Partnership / Pvt Ltd Registrations",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#eef1f5" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1556742400-b5c4d8f3e39b?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">Payroll & HRMS</h2>

        <ul className="mt-8 space-y-4">
          {["Payroll Automation", "Attendance App", "Salary Calculation", "PF / ESIC Reports", "Employee Management"].map(
            (x, i) => (
              <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
                ✔ {x}
              </li>
            )
          )}
        </ul>
      </div>

    </motion.div>
  </div>
</section>



{/* -------------------------------------------------------- */}
{/* SECTION 9 – Corporate Training */}
{/* -------------------------------------------------------- */}
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f2f4f7" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">Corporate Training</h2>

        <ul className="mt-8 space-y-4">
          {[
            "ERP Training",
            "Tally Training",
            "Accounting Workshops",
            "HR & Payroll Training",
            "Custom Corporate Programs",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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
<section className="min-h-screen flex items-center py-24" style={{ backgroundColor: "#f9fafb" }}>
  <div className="container mx-auto px-6 lg:px-20">

    <motion.div className="bg-white/90 backdrop-blur-lg border border-[#19197026] rounded-3xl shadow-2xl p-10 flex flex-col lg:flex-row items-center gap-16">

      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600"
        className="lg:w-1/2 rounded-3xl shadow-xl object-cover h-[450px]"
      />

      <div className="lg:w-1/2">
        <h2 className="text-4xl font-extrabold text-center">Software AMC & Support</h2>

        <ul className="mt-8 space-y-4">
          {[
            "Dedicated Support Team",
            "Remote & Onsite Support",
            "Tally AMC",
            "ERP AMC",
            "Cloud AMC",
          ].map((x, i) => (
            <li key={i} className="text-lg font-medium flex items-center gap-3" style={{ color: "#191970" }}>
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