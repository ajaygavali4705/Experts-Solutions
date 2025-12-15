// app/about/page.jsx
"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import EmployeeSlider from "../components/EmployeeSlider";
import { FaCheckCircle, FaTools, FaHandshake, FaRocket, FaLock, FaBullseye } from "react-icons/fa";





/* ================= Images ================= */
const images = {
  hero: "about_img.jpg",
  section: "https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a",
  team: "https://images.unsplash.com/photo-1521791055366-0d553872125f",
  partners: "https://images.unsplash.com/photo-1522199710521-72d69614c702",
  office: "https://images.unsplash.com/photo-1580894908361-9671950330eb",
};


/* ================= Motion Variants ================= */
const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.12 } } };
const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const zoom = { hidden: { opacity: 0, scale: 0.98 }, show: { opacity: 1, scale: 1, transition: { duration: 0.45 } } };


/* ================= Exported Page ================= */
export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 120 });
  }, []);

  return (
    <div className="w-full text-slate-900 antialiased bg-gradient-to-b from-[#fff6fb] via-[#fff8fc] to-white">
      <motion.div variants={container} initial="hidden" animate="show">

        {/* ---------------------- HERO SECTION ---------------------- */}
<section
  id="hero"
  className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-12 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/bg-experts.jpg')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#8b1f2f90]"></div>

  <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 gap-10 items-center">
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* MOBILE SMALL → DESKTOP LARGE */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-7xl font-bold text-center pt-20 text-white leading-tight"
        whileHover={{ scale: 1.02 }}
      >
        About Us
      </motion.h1>

      {/* MOBILE SMALLER PARAGRAPH */}
      <motion.p
        className="text-base sm:text-lg md:text-xl text-center mt-5 font-semibold mx-3 text-gray-100"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Experts Solutions is a Technology & Innovation Company established in
        2011, dedicated to helping Micro, Small, and Medium Enterprises (MSMEs)
        simplify their business operations through business automation, ERP
        software solutions, accounting systems, taxation consulting, cloud
        hosting, and customized Software Modules. With a solid foundation in software expertise + taxation knowledge + IT
        infrastructure, we deliver solutions that strengthen business
        performance, reduce operational complexity, and support long-term
        growth. Make technology simple, effective, and accessible to every business.
      </motion.p>
    </motion.div>

<div className="mt-4 w-full flex justify-center">
  <Link href="/gallery">
    <motion.button
      whileHover={{ scale: 1.07 }}
      className="
        bg-[#87CEEB] text-lg text-black font-bold
        px-6 py-3 mb-5
        rounded-md
      "
    >
      Moments
    </motion.button>
  </Link>
</div>

  </div>
</section>


      <EmployeeSlider />


        {/* ---------------------- ABOUT US INFO SECTION ---------------------- */}
      <section
  id="about-info"
  className="py-24 px-6 md:px-12 lg:px-28 bg-gray-50"
>
  <motion.div variants={fadeUp} className="max-w-7xl mx-auto text-center space-y-12">

    {/* Section Title */}
    <h2
      className="text-3xl md:text-5xl font-extrabold mb-6"
      style={{ color: "#8b1f2f" }}
    >
      Why Choose Experts Solutions?
    </h2>

    {/* Section Description */}
    <p className="text-slate-700 max-w-5xl mx-auto mb-12 text-lg">
      At Experts Solutions, we provide MSMEs with the right mix of technology, expertise, and support to grow and scale efficiently. Our solutions are
      tailor-made for business needs, blending innovation, compliance, and automation.
    </p>

    {/* Feature Cards */}


<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
  {[
    { title: "Trusted Expertise", desc: "Over 16 years of experience delivering ERP, accounting, and taxation solutions.", icon: <FaCheckCircle />, gradient: "from-pink-500 to-purple-500" },
    { title: "All-in-One Solutions", desc: "ERP, Tally, Cloud, CRM, and mobile apps — everything your business needs under one roof.", icon: <FaTools />, gradient: "from-purple-500 to-indigo-500" },
    { title: "Client-Focused", desc: "3000+ satisfied clients with tailored solutions and dedicated support.", icon: <FaHandshake />, gradient: "from-indigo-500 to-pink-500" },
    { title: "Innovation Driven", desc: "Continuously improving products & services to stay ahead in technology.", icon: <FaRocket />, gradient: "from-pink-500 to-orange-400" },
    { title: "Transparent & Reliable", desc: "Ethical practices, clear communication, and complete accountability.", icon: <FaLock />, gradient: "from-orange-400 to-yellow-400" },
    { title: "Tailored for MSMEs", desc: "Affordable, scalable, and practical solutions for small and medium businesses.", icon: <FaBullseye />, gradient: "from-yellow-400 to-green-400" },
  ].map(({ title, desc, icon, gradient }, i) => (
    <motion.div
      key={i}
      variants={zoom}
      className="p-8 rounded-3xl shadow-2xl bg-white/80 backdrop-blur-md border border-white/30 hover:scale-[1.05] transition-transform flex flex-col items-center text-center"
    >
      <div className={`w-20 h-20 mb-5 rounded-full flex items-center justify-center text-3xl text-white font-bold bg-[#8b1f2f] shadow-lg transition-all duration-300 group-hover:scale-110`}>
        {icon}
      </div>

      <h4 className="text-xl md:text-2xl font-semibold mb-3 text-slate-900">
        {title}
      </h4>

      <p className="text-slate-700 text-sm md:text-base leading-relaxed max-w-[260px]">
        {desc}
      </p>
    </motion.div>
  ))}
</div>

  </motion.div>
</section>

        {/* ---------------------- SECTION 2 — OUR JOURNEY ---------------------- */}
<section
  id="section2"
  className="min-h-screen py-20 px-6 md:px-12 lg:px-28 bg-[#87CEEB] flex items-center"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-5xl mx-auto space-y-12 w-full"
  >
    {/* SECTION TITLE */}
    <h2
      className="text-center text-3xl md:text-5xl font-extrabold tracking-wide"
      style={{ color: "#191970" }}
    >
      Our Journey & Commitment
    </h2>

    {/* CARD 1 & CARD 2 GRID WRAPPER */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* CARD 1 */}
      <motion.div
        variants={zoom}
        className="bg-white/80 rounded-3xl shadow-xl border border-purple-100 backdrop-blur-md overflow-hidden hover:scale-[1.01] transition duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          className="w-full h-56 object-cover"
          alt="Company Journey"
        />
        <div className="p-8">
          <h3
            className="text-3xl text-center font-bold mb-4"
            style={{ color: "#191970" }}
          >
            How It Started
          </h3>
          <p className="text-slate-700 text-lg text-center leading-relaxed">
            Since 2011, Experts Solutions evolved from a consulting startup into a
            nationwide technology partner empowering MSMEs through automation,
            cloud, accounting, and ERP solutions built with precision and trust.
          </p>
        </div>
      </motion.div>

      {/* CARD 2 */}
      <motion.div
        variants={zoom}
        className="bg-white/90 rounded-3xl shadow-xl border border-purple-100 backdrop-blur-md overflow-hidden hover:scale-[1.01] transition duration-300"
      >
        <img
          src="https://images.unsplash.com/photo-1485217988980-11786ced9454"
          className="w-full h-56 object-cover"
          alt="Promise"
        />
        <div className="p-8">
          <h3 className="text-3xl text-center font-bold" style={{ color: "#191970" }}>
            Our Promise to Clients
          </h3>
          <ul className="mt-4 text-lg text-slate-700 leading-relaxed space-y-1">
            <li>✔ Deliver result-focused solutions</li>
            <li>✔ Prompt professional support</li>
            <li>✔ Transparent communication & ethical practices</li>
            <li>✔ High-value & affordable technology services</li>
            <li>✔ Strong long-term partnerships</li>
          </ul>
        </div>
      </motion.div>
    </div>





  </motion.div>
</section>

<section id="section2"
  className="py-10 px-6 md:px-12 lg:px-28 bg-gray-100 flex items-center">

  {/* CARD 3 – TIMELINE WITHOUT BOX */}
<div className="w-full mt-10 relative">
  <h3
    className="text-6xl font-bold mb-10 text-center"
    style={{ color: "#191970" }}
  >
    Milestones
  </h3>
      <p className="text-slate-700 text-center max-w-5xl mx-auto mb-12 text-lg">
    Over the years, Experts Solutions has consistently evolved, expanded, and strengthened its services to support thousands of MSMEs. Each milestone reflects our commitment to innovation, customer success, and continuous improvement. Our journey showcases how we have grown into a trusted partner for business automation and compliance.
    </p>

  {/* CENTER CONNECTING LINE — ONLY BETWEEN CIRCLES */}
  <div className="hidden md:block absolute top-[270px] left-1/2 transform -translate-x-1/2 w-[80%] h-[4px] bg-[#8B1F2F]/40 z-0"></div>

  <div className="grid grid-cols-1 font-bold md:grid-cols-6 gap-5 place-items-center relative z-10">
    {[
      ["2011", "Established Partnership"],
      ["2017", "Tally 3 Star Partner"],
      ["2018", "Partner of Biz Analyas"],
      ["2021", "Partner of Credflow"],
      ["2022", "Partner of Udyog ERP"],
      ["2025", "continue..."],
    ].map(([year, desc], i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.15 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center space-y-4"
      >
        {/* CIRCLE */}
        <div className="w-24 h-24 rounded-full bg-[#8B1F2F] text-white flex items-center justify-center font-bold shadow-xl text-xl relative">
          {year}
        </div>

        {/* DESCRIPTION */}
        <p className="text-slate-700 max-w-xs">{desc}</p>
      </motion.div>
    ))}
  </div>
</div>
</section>
        {/* ---------------------- SECTION 3 — SERVICES ---------------------- */}
       
{/*        
   <section
  id="section3"
  className="w-full py-16 px-6 md:px-12 lg:px-28 bg-[#87CEEB]"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full"
  >
    <h2
      className="text-2xl md:text-5xl font-bold mb-10 text-center"
      style={{ color: "#191970" }}
    >
      Our Services
    </h2>
    <p className="text-slate-700 text-center font-bold max-w-6xl mx-auto mb-12 text-lg">
Our services are designed to simplify, automate, and strengthen every part of your business operations. From ERP and Tally solutions to cloud hosting, mobile applications, CRM systems, and taxation services, we offer everything under one trusted platform. We help businesses work smarter, stay compliant, and achieve sustainable growth.    </p> */}

    {/* GRID FOR 4 BOXES */}
    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        ["Software AMC", "/AMC.png", "Ensure uninterrupted business performance."],
        ["Corporate Training ", "/Training.png", "Empower your team with expert-led training."],
        ["Implementation", "/Implementation.png", "Seamless deployment tailored to your business."],
        ["Integration", "/Integration.png", "Connect your systems for smarter workflows."],
      ].map(([title, img, desc], i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg border hover:shadow-xl hover:scale-[1.01] transition-transform"
        >
          <img
            src={img}
            alt={title}
            className="w-full h-36 object-cover rounded-xl shadow-md"
          />

          <div className="w-full text-center">
            <h4
              className="font-semibold text-xl mb-2"
              style={{ color: "#191970" }}
            >
              {title}
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">{desc}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section> */}

   {/* ---------------------- SECTION 4 — VISION & MISSION ---------------------- */}
<section
  id="section4"
  className="py-24 px-6 md:px-12 lg:px-32 bg-[#87CEEB]"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-6xl mx-auto space-y-12"
  >
    {/* SECTION TITLE */}
    <h2
      className="text-center text-3xl md:text-5xl font-extrabold tracking-wide"
      style={{ color: "#8b1f2f" }}
    >
      Vision • Mission • Values
    </h2>
 <p className="text-slate-700 text-center font-bold max-w-6xl mx-auto mb-12 text-lg">
At Experts Solutions, our vision, mission, and values work together to empower businesses through simple, scalable, and smart digital transformation. We aim to deliver reliable software, cloud, and compliance solutions backed by integrity, transparency, and continuous innovation. Our commitment is to provide cost-effective services, exceptional support, and long-term value that helps clients grow with confidence.
</p>

    {/* BOXES WRAPPER */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">

      {/* BOX 1 — VISION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 w-full rounded-3xl bg-[#8b1f2f] backdrop-blur-md border border-purple-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <h4 className="text-4xl text-center font-bold" style={{ color: "#ffffffff" }}>
          Our Vision
        </h4>
        <p className="mt-2 text-white font-bold text-center leading-relaxed">
          To help businesses grow by providing simple, powerful, and technology-driven
          solutions that enhance productivity, compliance, and overall performance.
        </p>
      </motion.div>

      {/* BOX 2 — MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 w-full rounded-3xl bg-[#8b1f2f] backdrop-blur-md border border-purple-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <h4 className="text-4xl text-center font-bold" style={{ color: "#ffffffff" }}>
          Our Mission
        </h4>
        <p className="mt-2 text-white font-bold text-center leading-relaxed">
          To deliver high-quality automation software, accounting solutions, and taxation
          services with integrity, transparency, and a strong commitment to client success.
        </p>
      </motion.div>

{/* BOX 3 — VALUES (WIDER & CENTERED) */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="
    md:col-span-2 
    p-10 
    w-full 
    md:w-[70%]        /* Increased width */
    mx-auto 
    rounded-3xl 
    bg-[#8b1f2f] 
    border 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-[1.02] 
    transition-all 
    duration-300 
    text-center
  "
>
  <h4 className="text-4xl font-bold mb-6" style={{ color: "#ffffffff" }}>
    Our Core Values
  </h4>

  {/* 2-COLUMN LIST */}
  <div className="grid grid-cols-1 font-bold sm:grid-cols-1 gap-y-3 gap-x-6 text-left mx-auto w-fit text-white leading-relaxed">
    <p className="mt-2 text-white font-bold text-center leading-relaxed">
         Our core values reflect our commitment to integrity, transparency, and customer-first service. We continuously innovate to deliver reliable, modern solutions that simplify business operations. With a strong focus on quality, accountability, and teamwork, we ensure every client receives consistent support, professional excellence, and long-term value.
        </p>
  </div>
</motion.div>

    </div>
  </motion.div>
</section>





        {/* ---------------------- SECTION 5 — TEAM & DEPARTMENTS ---------------------- */}
 

        </motion.div>
    </div>
  );
}