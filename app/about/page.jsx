// app/about/page.jsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
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
  className="min-h-full flex items-center px-6 md:px-16 lg:px-12 bg-[#8b1f2f]"
>
  <motion.div
    variants={fadeUp}
    className="max-w-7xl py-15 mx-auto w-full grid md:grid-cols-2 gap-12 items-center"
  >
    {/* Left: copy */}
    <motion.div variants={zoom} className="space-y-6">
      <h1
        className="text-3xl md:text-5xl text-center font-extrabold leading-tight tracking-tight"
        style={{ color: "#ffffffff" }}
      >
        About Us
      </h1>
      <div className="mt-4 prose text-center max-w-none text-gray-100">
        <p>
          Experts Solutions is a Technology & Innovation Company established in 2011, dedicated to helping Micro, Small, and Medium Enterprises
          (MSMEs) simplify their business operations through business automation, ERP software solutions, accounting systems, taxation consulting,
          cloud hosting, and customized digital platforms.
        </p>
        <p>
          With a solid foundation in software expertise + taxation knowledge + IT infrastructure, we deliver solutions that strengthen business
          performance, reduce operational complexity, and support long-term growth.
        </p>
       
       
        <p>Make technology simple, effective, and accessible to every business.</p>
      </div>
      <div className="flex flex-wrap gap-4 mt-4  justify-center">
        <a
          href="#about-info"
          className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-semibold text-white bg-[#87CEEB] shadow-lg shadow-[#8b1f2f50] 
          transition-all duration-300 hover:scale-[1.06] hover:shadow-xl  active:scale-95"
        >
          Learn More
          <span className="transition-all duration-300 group-hover:translate-x-1 text-xl">→</span>
        </a>
        <a
          href="#section8"
          className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-[#8b1f2f] border border-slate-200 text-white font-medium shadow hover:scale-[1.02] transition"
        >
          Contact Sales
        </a>
      </div>
    </motion.div>

    {/* Right: hero image */}
    <motion.div
      variants={zoom}
      className="relative rounded-3xl overflow-hidden  bg-white/30 "
      data-aos="fade-left"
    >
      <div
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl"
        style={{ background: "linear-gradient(90deg,#fb7185,#7c3aed)" }}
      />
      <img
        src={images.hero}
        alt="ERP"
        className="w-full h-[420px] object-cover"
        loading="lazy"
      />
    </motion.div>
  </motion.div>
</section>


        {/* ---------------------- ABOUT US INFO SECTION ---------------------- */}
      <section
  id="about-info"
  className="py-24 px-6 md:px-12 lg:px-28 bg-gray-50"
>
  <motion.div variants={fadeUp} className="max-w-7xl mx-auto text-center space-y-12">

    {/* Section Title */}
    <h2
      className="text-3xl md:text-4xl font-extrabold mb-6"
      style={{ color: "#191970" }}
    >
      Why Choose Experts Solutions?
    </h2>

    {/* Section Description */}
    <p className="text-slate-700 max-w-3xl mx-auto mb-12 text-lg">
      At Experts Solutions, we provide MSMEs with the right mix of technology, expertise, and support to grow and scale efficiently. Our solutions are
      tailor-made for business needs, blending innovation, compliance, and automation.
    </p>

    {/* Feature Cards */}


<div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
  {[
    { title: "Trusted Expertise", desc: "Over 13 years of experience delivering ERP, accounting, and taxation solutions.", icon: <FaCheckCircle />, gradient: "from-pink-500 to-purple-500" },
    { title: "All-in-One Solutions", desc: "ERP, Tally, Cloud, CRM, and mobile apps — everything your business needs under one roof.", icon: <FaTools />, gradient: "from-purple-500 to-indigo-500" },
    { title: "Client-Focused", desc: "3000+ satisfied clients with tailored solutions and dedicated support.", icon: <FaHandshake />, gradient: "from-indigo-500 to-pink-500" },
    { title: "Innovation Driven", desc: "Continuously improving products & services to stay ahead in technology.", icon: <FaRocket />, gradient: "from-pink-500 to-orange-400" },
    { title: "Transparent & Reliable", desc: "Ethical practices, clear communication, and complete accountability.", icon: <FaLock />, gradient: "from-orange-400 to-yellow-400" },
    { title: "Tailored for MSMEs", desc: "Affordable, scalable, and practical solutions for small and medium businesses.", icon: <FaBullseye />, gradient: "from-yellow-400 to-green-400" },
  ].map(({ title, desc, icon, gradient }, i) => (
    <motion.div
      key={i}
      variants={zoom}
      className="p-8 rounded-3xl shadow-xl bg-white/80 backdrop-blur-md border border-white/30 hover:scale-[1.05] transition-transform flex flex-col items-center text-center"
    >
      <div className={`w-20 h-20 mb-5 rounded-full flex items-center justify-center text-3xl text-white font-bold bg-gradient-to-r ${gradient} shadow-lg transition-all duration-300 group-hover:scale-110`}>
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
  className="min-h-screen py-20 px-6 md:px-12 lg:px-28 bg-gray-100 flex items-center"
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
      className="text-center text-3xl md:text-4xl font-extrabold tracking-wide"
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
            className="text-2xl text-center font-bold mb-4"
            style={{ color: "#191970" }}
          >
            How It Started
          </h3>
          <p className="text-slate-700 leading-relaxed">
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
          <h3 className="text-2xl text-center font-bold" style={{ color: "#191970" }}>
            Our Promise to Clients
          </h3>
          <ul className="mt-4 text-slate-700 leading-relaxed space-y-1">
            <li>✔ Deliver result-focused solutions</li>
            <li>✔ Prompt professional support</li>
            <li>✔ Transparent communication & ethical practices</li>
            <li>✔ High-value & affordable technology services</li>
            <li>✔ Strong long-term partnerships</li>
          </ul>
        </div>
      </motion.div>
    </div>

{/* CARD 3 – TIMELINE WITHOUT BOX */}
<div className="w-full mt-10 relative">
  <h3
    className="text-4xl font-bold mb-10 text-center"
    style={{ color: "#191970" }}
  >
    Milestones
  </h3>

  {/* CENTER CONNECTING LINE — ONLY BETWEEN CIRCLES */}
  <div className="hidden md:block absolute top-[120px] left-1/2 transform -translate-x-1/2 w-[80%] h-[4px] bg-[#8B1F2F]/40 z-0"></div>

  <div className="grid grid-cols-1 md:grid-cols-5 gap-5 place-items-center relative z-10">
    {[
      ["2011", "Company founded & ERP services launched"],
      ["2015", "Expanded to Cloud Hosting & Accounting"],
      ["2018", "Introduced Mobile Apps & CRM solutions"],
      ["2021", "Achieved ISO certification & 500+ clients"],
      ["2023", "Received national recognition for excellence"],
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



  </motion.div>
</section>


        {/* ---------------------- SECTION 3 — SERVICES ---------------------- */}
       
       
   <section
  id="section3"
  className="w-full py-16 px-6 md:px-12 lg:px-28 bg-gray-white"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="w-full"
  >
    <h2
      className="text-2xl md:text-4xl font-bold mb-10 text-center"
      style={{ color: "#191970" }}
    >
      Our Services
    </h2>

    {/* GRID FOR 4 BOXES */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
      {[
        ["ERP & Accounting", "/image4.jpg", "TEZ ERP, Inventory, Billing, MIS & audit-ready reporting."],
        ["Tally Services", "/image2.jpg", "Tally license, customization, data migration, Tally on Cloud."],
        ["Cloud Hosting", "/image1.jpg", "Office on Cloud, Tally on AWS, backups & security."],
        ["CRM & Mobile", "/image3.jpg", "CRM, Biz App, ERP app, live sync & mobile dashboards."],
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
</section>

   {/* ---------------------- SECTION 4 — VISION & MISSION ---------------------- */}
<section
  id="section4"
  className="py-24 px-6 md:px-12 lg:px-32 bg-gray-100"
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
      className="text-center text-3xl md:text-4xl font-extrabold tracking-wide"
      style={{ color: "#191970" }}
    >
      Vision • Mission • Values
    </h2>

    {/* BOXES WRAPPER */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center">

      {/* BOX 1 — VISION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 w-full rounded-3xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <h4 className="text-2xl font-semibold" style={{ color: "#191970" }}>
          Our Vision
        </h4>
        <p className="mt-2 text-slate-700 leading-relaxed">
          To help businesses grow by providing simple, powerful, and technology-driven
          solutions that enhance productivity, compliance, and overall performance.
        </p>
      </motion.div>

      {/* BOX 2 — MISSION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-10 w-full rounded-3xl bg-white/80 backdrop-blur-md border border-purple-100 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
      >
        <h4 className="text-2xl font-semibold" style={{ color: "#191970" }}>
          Our Mission
        </h4>
        <p className="mt-2 text-slate-700 leading-relaxed">
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
    bg-gradient-to-r from-white to-[#f3f3f3] 
    border 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-[1.02] 
    transition-all 
    duration-300 
    text-center
  "
>
  <h4 className="text-2xl font-semibold mb-6" style={{ color: "#191970" }}>
    Our Core Values
  </h4>

  {/* 2-COLUMN LIST */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-left mx-auto w-fit text-slate-700 leading-relaxed">
    <div>✔ Integrity — Honesty & professional ethics.</div>
    <div>✔ Quality — Best tools & services.</div>
    <div>✔ Transparency — Clear communication.</div>
    <div>✔ Innovation — Continuous improvement.</div>
    <div>✔ Customer-first — Your growth is our priority.</div>
  </div>
</motion.div>

    </div>
  </motion.div>
</section>





        {/* ---------------------- SECTION 5 — TEAM & DEPARTMENTS ---------------------- */}
    {/* ---------------------- SECTION 6 — SOFTWARE PARTNERS ---------------------- */}
<section
  id="section6"
  className="py-24 px-6 md:px-12 lg:px-28 bg-gray-200"
>
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="max-w-7xl mx-auto space-y-14"
  >
    
    {/* Section Title */}
    <h2
      className="text-center text-3xl md:text-5xl font-extrabold tracking-wide"
      style={{ color: "#191970" }}
    >
      SOFTWARE PARTNERS
    </h2>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 justify-center place-items-center">
      {[
        ["Tally ERP", "/image10.jpg"],
        ["Busy Accounting", "/image7.jpg"],
        ["Zoho CRM", "/image11.jpg"],
        ["AWS Cloud", "/image1.jpg"],
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


        {/* ---------------------- SECTION 7 — WHAT MAKES US DIFFERENT ---------------------- */}
       <section
  id="section7"
  className="py-24 px-6 md:px-12 lg:px-28 bg-gray-50"
>
  <motion.div variants={fadeUp} className="max-w-7xl mx-auto space-y-14">

    {/* 🔹 Section Title */}
    <h2
      className="text-center text-3xl md:text-5xl font-extrabold tracking-wide"
      style={{ color: "#191970" }}
    >
      WHAT MAKES US DIFFERENT
    </h2>

    {/* 🔹 Centered Feature Cards */}
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 justify-center">
      {[
        ["Customized Solutions", "Tailored ERP, accounting & cloud solutions for your business."],
        ["Trusted Expertise", "13+ years of experience with 3000+ clients."],
        ["Client-Centric Approach", "Dedicated support & training for every client."],
        ["Affordable & Scalable", "Solutions that grow with your business."],
        ["Innovation & Quality", "High-quality tools & modern technology."],
        ["Ethical & Transparent", "Integrity and accountability in all services."],
      ].map(([title, desc], i) => (
        <motion.div
          key={i}
          variants={zoom}
          className="group p-8 text-center rounded-3xl bg-white/70 backdrop-blur-xl border border-[#e5cfff] shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 flex flex-col items-center justify-center"
        >

          {/* Title */}
          <h4
            className="text-xl font-bold transition-colors duration-300 group-hover:text-purple-700"
            style={{ color: "#191970" }}
          >
            {title}
          </h4>

          {/* Description */}
          <p className="text-slate-600 mt-4 text-sm leading-relaxed max-w-[260px]">
            {desc}
          </p>

          {/* Decorative Line */}
          <div className="mt-5 w-20 h-1 rounded-full bg-gradient-to-r from-[#a56fff] to-[#d783ff] opacity-60 group-hover:opacity-100 transition-all"></div>
        </motion.div>
      ))}
    </div>
  </motion.div>
</section>

        </motion.div>
    </div>
  );
}