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
      <section className="w-full bg-white py-12 px-4 sm:px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0A1A2F] leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Technology Made Simple.
              <br />
              Growth Made Smarter
            </motion.h1>

            <motion.p
              className="mt-3 text-gray-600 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions empower MSMEs with powerful MIS, accounting,
              taxation, and end-to-end digital solutions designed to simplify
              operations and accelerate business growth.
            </motion.p>

            <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="bg-[#A72028] text-white px-5 py-2.5 rounded-md w-full sm:w-auto"
              >
                Explore Our Solutions
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.07 }}
                className="border border-[#A72028] text-[#A72028] px-5 py-2.5 rounded-md w-full sm:w-auto"
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
              className="w-full max-w-sm sm:max-w-md md:max-w-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* SLIDER */}
      <div className="w-full overflow-hidden">
        <Slider />
      </div>

      {/* ------------------------------------------------------ */}
      {/* CORE SOLUTIONS */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-white py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-[#0A1A2F]"
            whileHover={{ scale: 1.03 }}
          >
            Our Core Solutions for Business Automation
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: (
                  <FaFileInvoiceDollar className="text-[#A72028] text-4xl" />
                ),
                title: "ERP & Accounting",
                desc: "We provide best-in-class accounting and ERP systems...",
                items: [
                  "Tally Prime (Silver, Gold, Server)",
                  "TEZ ERP",
                  "Inventory Management",
                  "GST & Tax Compliance",
                  "Industry-specific ERPs",
                ],
              },
              {
                icon: <FaCogs className="text-[#A72028] text-4xl" />,
                title: "Tally Services",
                desc: "As a Tally 3-Star Partner, we deliver complete Tally lifecycle services.",
                items: [
                  "Tally License Sales",
                  "TSS Renewal",
                  "Customisation",
                  "Integration",
                  "Excel-to-Tally Import",
                ],
              },
              {
                icon: <FaCloud className="text-[#A72028] text-4xl" />,
                title: "Cloud Solutions",
                desc: "Flexible and secure cloud environments.",
                items: ["Office on Cloud", "Tally on AWS", "ERP on Cloud", "Cloud Hosting"],
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "Mobile Applications",
                desc: "Business mobility made easy.",
                items: ["Biz App", "CRM App", "ERP App", "HR App"],
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "CRM Solutions",
                desc: "CRM systems that help automate follow-ups and pipelines.",
                items: ["ERP with CRM", "Standalone CRM", "Lead Management"],
              },
              {
                icon: <FaBuffer className="text-[#A72028] text-4xl" />,
                title: "Accounts & Taxation Services",
                desc: "Complete end-to-end compliance.",
                items: ["Bookkeeping", "GST", "TDS / PT", "ROC Filings"],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.07,
                  y: -5,
                  boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
                }}
                className="bg-white p-5 sm:p-6 border rounded-2xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="flex justify-center mb-3">{card.icon}</div>
                <h3 className="text-xl sm:text-2xl font-semibold text-[#A72028]">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{card.desc}</p>

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
      {/* COMPANY SNAPSHOT */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-gray-50 py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center text-[#0A1A2F] mb-4"
            whileHover={{ scale: 1.03 }}
          >
            Company Snapshot
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-4xl mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Experts Solutions is a Technology & Innovation Company offering
            complete business automation, ERP software, taxation consulting,
            cloud hosting, and mobile app solutions.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mt-10">
            {[
              {
                num: "13+ Years",
                text: "in Technology & Taxation",
                bg: "bg-blue-900 text-white",
              },
              { num: "3000+", text: "Served", bg: "bg-gray-50 border" },
              { num: "Trusted", text: "Tally 3 Star Partner", bg: "bg-gray-50 border" },
              { num: "MSME", text: "Automation Specialists", bg: "bg-gray-50 border" },
              { num: "Team", text: "Strong Expert Team", bg: "bg-gray-50 border" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
                }}
                className={`${item.bg} p-6 rounded-xl text-center`}
              >
                <p className="text-lg sm:text-2xl font-bold">{item.num}</p>
                <p className="text-xs sm:text-sm">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* SECTION 4 */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 sm:py-20 bg-gray-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
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
              className="rounded-xl shadow-lg w-full max-w-sm sm:max-w-md md:max-w-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Helping businesses grow through smart digital transformation
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
              We build long-lasting partnerships with our clients and help them
              unlock their full potential with world-class digital solutions.
            </p>

            <button className="relative overflow-hidden bg-[#A72028] text-white px-6 py-3 rounded-md shadow-sm hover:bg-[#8f1c23]">
              Discover More
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
