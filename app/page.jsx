"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Slider from "./components/slider";
import Link from "next/link";

import {
  FaFileInvoiceDollar,
  FaCloud,
  FaCogs,
  FaChartLine,
  FaBuffer,
} from "react-icons/fa";
import TestimonialsSection from "./components/Testimonial";

import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const zoom = {
  hidden: { opacity: 0, scale: 0.98 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.45 } },
};

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
<section
  className="w-full bg-[#8b1f2f] py-40 px-4 sm:px-6 border-b border-gray-200 
  h-auto md:h-[650px]"
>
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
        className="mt-6 text-gray-50 text-center mb-6 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Experts Solutions empower SMEs and MSMEs with powerful MIS,
        accounting, taxation, and Business Software solutions designed
        to simplify operations and accelerate growth.
      </motion.p>

      {/* ✅ TWO BUTTONS */}
{/* BUTTONS */}
<div
  className="
    mt-6
    flex flex-col sm:flex-row
    gap-4
    w-full
    justify-center
    items-center
  "
>
  {/* EXPLORE SOLUTIONS */}
  <Link href="/services">
    <motion.button
      whileHover={{ scale: 1.07 }}
      className="
        bg-[#87CEEB] text-lg text-black font-bold
        px-6 py-3
        rounded-md
        inline-flex items-center justify-center
      "
    >
      Explore Our Services
    </motion.button>
  </Link>

  {/* PRODUCT (NO BACKGROUND) */}
  <Link href="/product">
    <motion.button
      whileHover={{ scale: 1.07 }}
      className="
         bg-[#87CEEB] text-lg text-black font-bold
        px-6 py-3
        rounded-md
        inline-flex items-center justify-center
      "
    >
       Explore Our Product
    </motion.button>
  </Link>
</div>

    </motion.div>

    {/* RIGHT IMAGE */}
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
        className="w-64 mx-auto sm:w-full sm:max-w-md md:max-w-lg"
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
          We empower businesses to modernize their operations with automation,
          cloud technology, and smart Software tools. Our solutions streamline
          processes, improve efficiency, and reduce manual dependency. With
          real-time insights and integrated systems, companies can scale faster,
          stay compliant, and make data-driven decisions with confidence.
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
                  Automating core business operations for faster, error-free
                  workflows
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
                  Integrating ERP, Tally, CRM, HRMS and mobile apps for seamless
                  performance
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
                  Preparing SMEs and MSMEs for long-term, scalable digital
                  growth
                </div>
              </div>
            </div>
          </div>

          {/* ✅ MOBILE VIEW FIXED */}
          <div className="mt-10 md:hidden space-y-4 text-center text-gray-700 px-3">
            <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
              Automating core business operations for faster, error-free
              workflows
            </div>
            <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
              Enabling remote access with secure cloud platforms
            </div>
            <div className="bg-white p-3 rounded-xl shadow-md font-semibold">
              Integrating ERP, Tally, CRM, HRMS and mobile apps for seamless
              performance
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
      Exports solution is a technology and innovation company offering
      complete business automation ERP software taxation consulting cloud
      hosting and mobile app solutions
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {[
        {
          img: "/solution1.png",
          title: "Tally Services",
          desc: "We deliver complete Tally lifecycle services.",
          points: [
            "Tally Prime New License",
            "TSS Renewal",
            "Migration",
            "Upgradation",
            "Customization",
            "Tally Prime with What’s app",
            "Tally on Mobile App",
            "Tally Prime Add-Ons",
          ],
        },
        {
          img: "/solution2.png",
          title: "ERP Software",
          desc: "Transforming Businesses Through Intelligent ERP.",
          points: [
            "Unified Business Platform",
            "Real-Time Data Visibility",
            "Streamlined Processes & Automation",
            "Customizable & Scalable",
            "Better Control & Governance",
            "Enhanced Productivity",
            "Powerful Reporting & Analytics",
            "Inventory & Supply Chain Optimization",
            "Seamless Integration",
          
          ],
        },
        {
          img: "/solution3.png",
          title: "Cloud Solutions",
          desc: "Flexible and secure cloud environments.",
          points: [
            "Access your Tally Prime anytime, anywhere",
            "24*7 Secure Access",
            "Unlimited Usage",
            "Flexibility & Scalability",
            "Auto Backup on Cloud",
            "Platform Agnostic (Windows, Mac and Linux)",
          ],
        },
        {
          img: "/solution4.png",
          title: "HRMS & Payroll Software",
          desc: "Empower Your People, Effortlessly.",
          points: [
            "Centralized HR Management",
            "Automated Payroll",
            "Leave & Attendance Tracking",
            "Employee Self-Service",
            "Performance & Appraisal",
            "Compliance-Ready",
            "Real-Time Analytics",
            "Cloud & Mobile Access",
          ],
        },
        {
          img: "/solution5.png",
          title: "CRM Solutions",
          desc: "Your WhatsApp-Powered AI Sales Assistant.",
          points: [
            "WhatsApp Integration",
            "Conversational AI",
            "Automated Lead Management",
            "24/7 Customer Engagement",
            "Seamless CRM Integration",
            "Smart Analytics",
            "Personalized Responses",
            "Time & Cost Efficiency",
            "Scalable Solution",
          ],
        },
        {
          img: "/solution6.png",
          title: "Accounts & Taxation Services",
          desc: "Simplifying Accounts, Maximizing Compliance.",
          points: [
            "Expertise & Accuracy",
            "Compliance Assurance",
            "Time-Saving Automation",
            "Personalized Solutions",
            "Financial Insights",
            "End-to-End Support",
            "Secure & Confidential",
          ],
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
         <div className="flex justify-center mb-3">
  <Image
    src={card.img}
    alt={card.title}
    width={260}
    height={150}
    className="object-contain"
  />
</div>
          <h3 className="text-xl sm:text-3xl font-bold text-[#A72028]">
            {card.title}
          </h3>
          <p className="text-gray-500 p-2 text-lg font-semibold mt-2">{card.desc}</p>
          <ul className="text-gray-600 text-left mt-3 space-y-1 list-disc list-inside text-lg">
            {card.points.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
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
              {
                num: "Trusted",
                text: "Tally 3 Star Partner, ERP Partner",
                bg: "bg-[#8b1f2f] text-white",
              },
              {
                num: "SMEs & MSME",
                text: "Automation Specialists",
                bg: "bg-[#8b1f2f] text-white",
              },
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
                <p className="text-xs pr-1 sm:text-lg">{item.text}</p>
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
            We collaborate with leading software providers to offer trusted,
            high-performance solutions for accounting, ERP, payroll, CRM, and
            business automation. Our partnerships with top brands ensure
            reliability, accuracy, and long-term value for every client. Through
            these alliances, we deliver certified tools backed by expert
            implementation and support.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center place-items-center">
            {[
              ["Tally Prime", "/Tallypartner.png"],
              ["Udyog ERP", "/tracet.png"],
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

      <TestimonialsSection />
    </>
  );
}
