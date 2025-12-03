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
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
      <section className="w-full h-[650] bg-[#8b1f2f] py-40 px-4 sm:px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl  md:text-5xl text-center font-bold text-white leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Technology Made Simple.
              <br />
              Growth Made Smarter
            </motion.h1>

            <motion.p
              className="mt-6 text-gray-50 text-center mb-6 text-lg sm:text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Experts Solutions empower MSMEs with powerful MIS, accounting,
              taxation, and end-to-end digital solutions designed to simplify
              operations and accelerate business growth.
            </motion.p>

            <div className="mt-6 flex h-[60] flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="bg-[#87CEEB] text-lg text-black ml-50  font-bold px-5 py-2.5 rounded-md w-full sm:w-auto"
              >
                Explore Our Solutions
              </motion.button>

              
            </div>

            
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

<section className="pb-20 pt-10 px-4 bg-[#faddca]">
  <h2 className="text-xl sm:text-5xl mt-10 text-center font-bold mx-10 text-[#8b1f2f] mb-4">
    Helping businesses grow through smart digital transformation
  </h2>

  <p className="max-w-6xl ml-35 text-gray-700 text-center leading-relaxed mb-6 text-lg sm:text-lg">
    We empower businesses to modernize their operations with automation, cloud technology, and smart digital tools. Our solutions streamline processes, improve efficiency, and reduce manual dependency. With real-time insights and integrated systems, companies can scale faster, stay compliant, and make data-driven decisions with confidence.
  </p>

  <div className="max-w-6xl mt-16 mx-auto flex flex-col items-center relative">

    {/* CENTER CIRCLE */}
    <div className="relative flex items-center justify-center">
      <div className="w-44 h-44 sm:w-56 sm:h-56 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-200">
        <img
          src="/images/Expert_logo.jpg"
          alt="Logo"
          className="w-24 sm:w-40 h-25 sm:h-30"
        />
      </div>
    </div>

    {/* LEFT SIDE TEXT */}
<div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
  <div className="space-y-6">

    {/* 1 */}
    <div className="flex items-center">
      <div className="text-right font-bold text-gray-700 w-78 pr-4">
        Automating core business operations for faster, error-free workflows
      </div>

      {/* LINE + ARROW */}
      <div className="flex items-center">
        <div className="h-1 w-40 bg-gray-600"></div>
        <FaArrowRight className="text-gray-600 text-xl -ml-1" />
      </div>
    </div>

    {/* 2 */}
    <div className="flex items-center">
      <div className="text-right font-bold text-gray-700 w-72 pr-4">
        Enabling remote access with secure cloud platforms
      </div>

      <div className="flex items-center">
        <div className="h-1 w-40 bg-gray-600"></div>
        <FaArrowRight className="text-gray-600 text-xl -ml-1" />
      </div>
    </div>

    {/* 3 */}
    <div className="flex items-center">
      <div className="text-right font-bold text-gray-700 w-78 pr-4">
        Integrating ERP, Tally, CRM, and mobile apps for seamless performance
      </div>

      <div className="flex items-center">
        <div className="h-1 w-40 bg-gray-600"></div>
        <FaArrowRight className="text-gray-600 text-xl -ml-1" />
      </div>
    </div>

  </div>
</div>
{/* RIGHT SIDE TEXT */}
<div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
  <div className="space-y-6">

    {/* 4 */}
    <div className="flex items-center">
      {/* LONG LINE + ARROW TOUCHING CIRCLE */}
      <div className="flex ml-4  items-center">
        <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
        <div className="h-1 w-40 bg-gray-600"></div>
      </div>

      <div className="text-left font-bold text-gray-700 w-72 pl-4">
        Improving decision-making with real-time data and analytics
      </div>
    </div>

    {/* 5 */}
    <div className="flex items-center">
      <div className="flex ml-9 items-center">
        <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
        <div className="h-1 w-40 bg-gray-600"></div>
      </div>

      <div className="text-left font-bold text-gray-700 w-72 pl-4">
        Reducing manual work and boosting operational efficiency
      </div>
    </div>

    {/* 6 */}
    <div className="flex items-center">
      <div className="flex ml-4  items-center">
        <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
        <div className="h-1 w-40 bg-gray-600"></div>
      </div>

      <div className="text-left font-bold text-gray-700 w-64 pl-4">
        Preparing MSMEs for long-term, scalable digital growth
      </div>
    </div>

  </div>
</div>

  

    {/* MOBILE VIEW */}
    <div className="mt-10 md:hidden space-y-4 text-center text-gray-700">
      <p>Automating core business operations for faster, error-free workflows</p>
      <p>Enabling remote access with secure cloud platforms</p>
      <p>Integrating ERP, Tally, CRM, and mobile apps for seamless performance</p>
      <p>Improving decision-making with real-time data and analytics</p>
      <p>Reducing manual work and boosting operational efficiency</p>
      <p>Preparing MSMEs for long-term, scalable digital growth</p>
    </div>

  </div>
</section>

         

      {/* ------------------------------------------------------ */}
      {/* CORE SOLUTIONS */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-[#87CEEB] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-[#8b1f2f]"
            whileHover={{ scale: 1.03 }}
          >
            Our Core Solutions for Business Automation
          </motion.h2>
          <p className="text-gray-600 mt-6 leading-relaxed mb-6 text-lg sm:text-xl font-bold">
     We deliver smart, integrated solutions that simplify accounting, taxation, operations, and reporting. Our automation systems help MSMEs work faster, reduce manual effort, and make data-driven business decisions.
    </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {[
              {
                icon: (
                  <FaFileInvoiceDollar className="text-[#A72028] text-4xl" />
                ),
                title: "ERP & Accounting",
                desc: "Our ERP and accounting systems automate billing, inventory, finance, and reporting to reduce manual work and improve business accuracy. With real-time insights, MSMEs can manage operations smarter and make informed financial decisions.",
            
              },
              {
                icon: <FaCogs className="text-[#A72028] text-4xl" />,
                title: "Tally Services",
                desc: "As a Tally 3-Star Partner, we offer licensing, customisation, integration, TSS renewal, and expert support. Our team ensures smooth Tally operations with quick issue resolution and business-friendly configurations.",
              
              },
              {
                icon: <FaCloud className="text-[#A72028] text-4xl" />,
                title: "Cloud Solutions",
                desc: "Access your software and data anytime, anywhere with our secure cloud hosting services. From Tally on AWS to ERP on Cloud, we deliver fast, reliable, and maintenance-free cloud infrastructure for modern businesses.",
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "Mobile Applications",
                desc: "Our mobile apps bring your business to your fingertips with real-time access to accounts, sales, attendance, and operations. Seamlessly integrated with ERP or Tally, they help teams stay productive on the go.",
              },
              {
                icon: <FaChartLine className="text-[#A72028] text-4xl" />,
                title: "CRM Solutions",
                desc: "Our CRM platforms simplify lead management, follow-ups, client tracking, and sales pipelines. With automation and reminders, your team stays organised and improves customer conversions effortlessly.",
              },
              {
                icon: <FaBuffer className="text-[#A72028] text-4xl" />,
                title: "Accounts & Taxation Services",
                desc: "We handle end-to-end accounting, GST/TDS/PT/IT filings, audits, and registrations to keep your business compliant and stress-free. Our experts ensure accurate financial management with timely support.",
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
                <h3 className="text-xl sm:text-3xl font-bold text-[#A72028]">
                  {card.title}
                </h3>
                <p className="text-gray-500 p-6 text-lg font-semibold mt-2">{card.desc}</p>

               
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
      <section className="w-full bg-[#fffff] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-center text-[#8b1f2f] mb-4"
            whileHover={{ scale: 1.03 }}
          >
            Company Snapshot
          </motion.h2>

          <motion.p
            className="text-gray-600 text-center max-w-4xl mx-auto text-lg font-semibold sm:text-base"
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
      bg: "bg-[#8b1f2f] text-white",
    },
    { num: "3000+", text: "Served", bg: "bg-[#8b1f2f] text-white" },
    { num: "Trusted", text: "Tally 3 Star Partner", bg: "bg-[#8b1f2f] text-white" },
    { num: "MSME", text: "Automation Specialists", bg: "bg-[#8b1f2f] text-white" },
    { num: "Team", text: "Strong Expert Team", bg: "bg-[#8b1f2f] text-white" },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      }}
      className={`${item.bg} p-6 rounded-xl text-center hover:bg-white hover:text-black`}
    >
      <p className="text-lg sm:text-2xl font-bold">{item.num}</p>
      <p className="text-xs sm:text-sm">{item.text}</p>
    </motion.div>
  ))}
</div>

        </div>
      </section>


    </>
  );
}
