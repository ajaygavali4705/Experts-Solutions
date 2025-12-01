"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "./components/slider";
import {
  FaFileInvoiceDollar,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaBuffer,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-white py-16 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl font-bold text-[#0A1A2F] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Technology Made Simple.
              <br />
              Growth Made Smarter
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions empower MSMEs with powerful MIS, accounting,
              taxation, and end-to-end digital solutions designed to simplify
              operations and accelerate business growth.
            </motion.p>

            <div className="mt-6 flex gap-4">
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="bg-[#A72028] text-white px-5 py-2.5 rounded-md "
              >
                Explore Our Solutions
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.07 }}
                className="border border-[#A72028] text-[#A72028] px-5 py-2.5 rounded-md"
              >
                Talk to an Expert
              </motion.button>
            </div>

            <motion.p
              className="mt-3 text-sm text-gray-500"
              whileHover={{ scale: 1.03, color: "#A72028" }}
            >
              Delivering seamless, end-to-end client experience since 2011
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/technology-image.webp"
              alt="Technology Illustration"
              width={500}
              height={350}
              className=""
            />
          </motion.div>
        </div>
      </section>


      
<Slider />
     
      {/* ------------------------------------------------------ */}
      {/* SECTION 3 - CORE SOLUTIONS */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold text-[#0A1A2F]"
            whileHover={{ scale: 1.03 }}
          >
            Our Core Solutions for Business Automation
          </motion.h2>

          <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: (
                  <FaFileInvoiceDollar className="text-[#A72028] text-4xl" />
                ),
                title: "ERP & Accounting",
                desc: "We provide best-in-class accounting and ERP systems that help businesses manage billing, inventory, taxation, MIS reporting, and business operations with accuracy and ease.",
                items: [
                  "Tally Prime (Silver, Gold, Server)",
                  "TEZ ERP",
                  "Inventory Management Systems",
                  "GST & Tax Compliance Modules",
                  "Industry-specific ERPs",
                ],
              },
              {
                icon: <FaCogs className="text-[#A72028] text-4xl" />,
                title: "Tally Services",
                desc: "As a Tally 3-Star Partner, we deliver complete Tally lifecycle services",
                items: [
                  "Tally License Sales",
                  "TSS Renewal",
                  "Tally Customisation",
                  "Tally Integration (ERP ↔ Tally)",
                  "Excel-to-Tally Import",
                ],
              },
              {
                icon: <FaCloud className="text-[#A72028] text-4xl" />,
                title: "Cloud Solutions",
                desc: "Flexible and secure cloud environments for anytime-anywhere access.",
                items: [
                  "Office on Cloud",
                  "Tally on AWS",
                  "ERP on Cloud",
                  "Virtual Cloud Hosting",
                  "Annual Support & Training Free",
                ],
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "Mobile Applications",
                desc: "Business mobility made easy with integrated mobile apps",
                items: [
                  "Biz App",
                  "Credflow App",
                  "ERP App",
                  "CRM App",
                  "Payroll & Attendance App",
                  "Free Training + Annual Support",
                ],
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "CRM Solutions",
                desc: "CRM systems that help businesses streamline leads, follow-ups, sales pipelines, tasks, and client management.",
                items: [
                  "ERP with CRM",
                  "CRM Standalone",
                  "CRM systems",
                  "follow-ups",
                  "client management",
                ],
              },
              {
                icon: <FaBuffer className="text-[#A72028] text-4xl" />,
                title: "Accounts & Taxation Services",
                desc: "Complete end-to-end compliance and accounting services for businesses",
                items: [
                  "Bookkeeping & Finalization",
                  "GST Filings",
                  "TDS / PT / IT Filings",
                  "ROC / PAN / TAN / EXIM Registrations",
                  "Trust / NGO / Partnership / Pvt Ltd Registrations",
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.07,
                  y: -5,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                  bg: "#f9f9f9",
                }}
                className="bg-white p-6 border  rounded-2xl shadow-sm flex flex-col items-center text-center transition-all duration-300"
              >
                {/* ICON CENTERED */}
                <div className="flex justify-center mb-3">{card.icon}</div>

                {/* TITLE CENTERED */}
                <h3 className="text-2xl font-semibold text-[#A72028]">
                  {card.title}
                </h3>

                {/* DESC */}
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>

                {/* LIST */}
                <ul className="mt-4 space-y-2 text-gray-700 text-sm">
                  {card.items.map((x, idx) => (
                    <li key={idx}>• {x}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.07 }}
            className="mt-10 bg-[#A72028] text-white px-6 py-3 rounded-md shadow-sm hover:bg-[#8f1c23]"
          >
            See All Services
          </motion.button>
        </div>
      </section>

 {/* ------------------------------------------------------ */}
      {/* SECTION 2 - COMPANY SNAPSHOT */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl font-bold text-center text-[#0A1A2F] mb-4"
            whileHover={{ scale: 1.03 }}
          >
            Company Snapshot
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center pl-50 max-w-5xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Experts Solutions is a Technology & Innovation Company offering
            complete business automation, ERP software, taxation consulting,
            cloud hosting, and mobile app solutions for Micro, Small, and Medium
            Enterprises (MSMEs).
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10">
            {[
              {
                num: "13+ Years",
                text: "in Technology & Taxation",
                bg: "bg-blue-900 text-white",
              },
              { num: "3000+", text: "Served", bg: "bg-gray-50 border" },
              {
                num: "Trusted",
                text: "Tally 3 Star Partner",
                bg: "bg-gray-50 border",
              },
              {
                num: "MSME",
                text: "Automation Specialists",
                bg: "bg-gray-50 border",
              },
              {
                num: "Team",
                text: "Strong Multi-Department Team",
                bg: "bg-gray-50 border",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                }}
                className={`${item.bg} p-6 rounded-xl text-center transition`}
              >
                <p className="text-2xl font-bold">{item.num}</p>
                <p className="text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ------------------------------------------------------ */}
      {/* SECTION 4 */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <Image
              src="/about-us.avif"
              alt="Business Growth"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Helping businesses grow through smart digital transformation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We build long-lasting partnerships with our clients and help them
              unlock their full potential with world-class digital solutions.
              Our approach ensures scalability, automation, and long-term
              success.
            </p>

            <button className="relative overflow-hidden bg-[#A72028] text-white px-6 py-3 rounded-md shadow-sm hover:bg-[#8f1c23]">
              <span className="absolute inset-0 bg-white opacity-10 translate-x-[-100%] hover:translate-x-[100%] transition-transform duration-500"></span>
              Discover More
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
