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
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const zoom = { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.45 } } };



export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
<section className="w-full bg-[#8b1f2f] py-40 px-4 sm:px-6 border-b border-gray-200 
  h-auto md:h-[650px]       /* mobile auto-height, desktop original height */
">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-white leading-tight"
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
        Experts Solutions empower SMEs and MSMEs with powerful MIS, accounting, taxation,
        and Business Software solutions designed to simplify operations and accelerate growth.
      </motion.p>

      {/* BUTTON FIX MOBILE ONLY */}
      
<div
  className="
    mt-6 
    flex flex-col sm:flex-row 
    gap-4 
    w-full sm:w-auto
    justify-center sm:justify-start   /* mobile center, desktop left */
  "
>
  <motion.button
    whileHover={{ scale: 1.07 }}
    className="
      bg-[#87CEEB] text-lg text-black font-bold px-5 py-2.5 rounded-md
      w-auto
      mx-auto sm:mx-0      /* center on mobile, normal on desktop */
      md:ml-50             /* apply margin only on desktop */
    "
  >
    Explore Our Solutions
  </motion.button>
</div>


    </motion.div>

    {/* RIGHT IMAGE FIXED MOBILE */}
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
        className="
          w-64 mx-auto           /* perfect mobile size */
          sm:w-full sm:max-w-md 
          md:max-w-lg 
        "
      />
    </motion.div>

  </div>
</section>



      {/* SLIDER */}
      <div className="w-full overflow-hidden">
        <Slider />
      </div>

<section className="pb-20 pt-10 px-4 bg-[#faddca]">
  <h2 className="text-2xl sm:text-5xl mt-10 text-center font-bold mx-4 sm:mx-10 text-[#8b1f2f] mb-4 leading-snug">
    Helping businesses grow through smart Automation transformation
  </h2>

  <p className="max-w-6xl mx-auto text-gray-700 text-center leading-relaxed mb-6 text-base sm:text-lg px-2">
    We empower businesses to modernize their operations with automation, cloud technology, 
    and smart Software tools. Our solutions streamline processes, improve efficiency, and 
    reduce manual dependency. With real-time insights and integrated systems, companies 
    can scale faster, stay compliant, and make data-driven decisions with confidence.
  </p>

  <div className="max-w-6xl mt-16 mx-auto flex flex-col items-center relative">

    {/* CENTER CIRCLE */}
    <div className="relative flex items-center justify-center">
      <div className="w-36 h-36 sm:w-56 sm:h-56 bg-white rounded-full shadow-xl flex items-center justify-center border-4 border-gray-200">
        <img
          src="/images/Expert_logo.jpg"
          alt="Logo"
          className="w-20 sm:w-40"
        />
      </div>
    </div>

    {/* DESKTOP LEFT TEXT */}
    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
      <div className="space-y-6">
        <div className="flex items-center">
          <div className="text-right font-bold text-gray-700 w-72 pr-4">
            Automating core business operations for faster, error-free workflows
          </div>
          <div className="flex items-center">
            <div className="h-1 w-40 bg-gray-600"></div>
            <FaArrowRight className="text-gray-600 text-xl -ml-1" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-right font-bold text-gray-700 w-72 pr-4">
            Enabling remote access with secure cloud platforms
          </div>
          <div className="flex items-center">
            <div className="h-1 w-40 bg-gray-600"></div>
            <FaArrowRight className="text-gray-600 text-xl -ml-1" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="text-right font-bold text-gray-700 w-72 pr-4">
            Integrating ERP, Tally, CRM, HRMS and mobile apps for seamless performance
          </div>
          <div className="flex items-center">
            <div className="h-1 w-40 bg-gray-600"></div>
            <FaArrowRight className="text-gray-600 text-xl -ml-1" />
          </div>
        </div>
      </div>
    </div>

    {/* DESKTOP RIGHT TEXT */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
      <div className="space-y-6">

        <div className="flex items-center">
          <div className="flex ml-4 items-center">
            <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
            <div className="h-1 w-40 bg-gray-600"></div>
          </div>
          <div className="text-left font-bold text-gray-700 w-72 pl-4">
            Improving decision-making with real-time data and analytics
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex ml-9 items-center">
            <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
            <div className="h-1 w-40 bg-gray-600"></div>
          </div>
          <div className="text-left font-bold text-gray-700 w-72 pl-4">
            Reducing manual work and boosting operational efficiency
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex ml-5 items-center">
            <FaArrowLeft className="text-gray-600 text-xl -mr-1" />
            <div className="h-1 w-40 bg-gray-600"></div>
          </div>
          <div className="text-left font-bold text-gray-700 w-64 pl-4">
            Preparing SMEs and MSMEs for long-term, scalable digital growth
          </div>
        </div>

      </div>
    </div>

    {/* ✅ MOBILE VIEW FIXED */}
    <div className="mt-10 md:hidden space-y-4 text-center text-gray-700 px-3">
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Automating core business operations for faster, error-free workflows
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Enabling remote access with secure cloud platforms
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Integrating ERP, Tally, CRM, HRMS and mobile apps for seamless performance
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Improving decision-making with real-time data and analytics
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Reducing manual work and boosting operational efficiency
      </div>
      <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
        Preparing MSMEs for long-term, scalable digital growth
      </div>
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
Exports solution is a technology and innovation company offering complete business automation ERP software taxation consulting cloud hosting and mobile app solutions    </p>
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

        
        </div>
      </section>


{/* ------------------------------------------------------ */}
      {/* COMPANY SNAPSHOT */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-[#fffff] py-14 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
        

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 mt-10">
  {[
    {
      num: "13+ Years",
      text: "in Technology & Taxation",
      bg: "bg-[#8b1f2f] text-white",
    },
    { num: "3000+", text: "Served", bg: "bg-[#8b1f2f] text-white" },
    { num: "Trusted", text: "Tally 3 Star Partner, ERP Partner", bg: "bg-[#8b1f2f] text-white" },
    { num: "SMEs & MSME", text: "Automation Specialists", bg: "bg-[#8b1f2f] text-white" },
  ].map((item, i) => (
    <motion.div
      key={i}
      whileHover={{
        scale: 1.08,
        boxShadow: "0px 10px 25px rgba(0,0,0,0.15)",
      }}
      className={`${item.bg} p-6 rounded-xl text-center hover:bg-white hover:text-black`}
    >
      <p className="text-lg sm:text-3xl font-bold">{item.num}</p>
      <p className="text-xs sm:text-lg">{item.text}</p>
    </motion.div>
  ))}
</div>

        </div>
      </section>



   {/* ---------------------- SECTION 6 — SOFTWARE PARTNERS ---------------------- */}
<section
  id="section6"
  className="py-24 px-6 md:px-12 lg:px-28 bg-[#87CEEB]"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto space-y-6"
  >
    
    {/* Section Title */}
    <h2
      className="text-center text-3xl md:text-5xl font-extrabold"
      style={{ color: "#191970" }}
    >
      Certified Partners
    </h2>
      <p className="text-gray-900 mb-10 font-bold text-lg text-center leading-relaxed">
         We collaborate with leading software providers to offer trusted, high-performance solutions for accounting, ERP, payroll, CRM, and business automation. Our partnerships with top brands ensure reliability, accuracy, and long-term value for every client. Through these alliances, we deliver certified tools backed by expert implementation and support.
        </p>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center place-items-center">
      {[
        ["Tally Prime 3 star", "/image10.png"],
        ["tresatech", "/image7.jpg"],
        ["Biz Analyst", "/image11.png"],
        ["Cred Flow", "/image1.jpeg"],
      ].map(([name, img], i) => (
        <motion.div
          key={i}
          variants={zoom}
          className="group w-[260px] h-[320px] p-8 rounded-3xl bg-white/80 backdrop-blur-xl border border-purple-200 shadow-lg hover:shadow-xl hover:shadow-purple-300/40 hover:-translate-y-4 hover:scale-[1.04] transition-all duration-300 flex flex-col items-center justify-center text-center"
        >
          
          {/* Logo */}
          <div className="w-36 h-36 flex items-center justify-center rounded-2xl bg-white shadow-inner overflow-hidden">
            <img
              src={img}
              alt={name}
              className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110"
            />
          </div>

          {/* Title */}
          <span
            className="mt-6 text-lg md:text-xl font-semibold tracking-wide"
            style={{ color: "#191970" }}
          >
            {name}
          </span>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>



      

    </>
  );
}
