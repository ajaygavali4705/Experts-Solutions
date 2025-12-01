"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTag, FaNewspaper, FaArrowRight } from "react-icons/fa";

export default function BlogsPage() {
  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
      <section className="w-full bg-gray-200 py-16 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl font-bold text-gray-900 leading-tight"
              whileHover={{ scale: 1.02 }}
            >
              Insights That Empower.
              <br />
              Knowledge That Drives Growth.
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Stay updated with expert knowledge on taxation, automation, ERP,
              cloud technology, and business growth strategies tailored for MSMEs.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <Image
              src="/tally.jpg"
              alt="Blog Insights"
              width={500}
              height={350}
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* BLOG INTRODUCTION */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-[#A72028]"
            whileHover={{ scale: 1.03 }}
          >
            Insights, Knowledge & Expert Guidance for Growing Businesses
          </motion.h2>

          <p className="text-gray-600 mt-4 text-center ml-50 max-w-3xl">
            At Experts Solutions, we believe in educating and empowering MSMEs with
            the right knowledge to make smarter business decisions.
          </p>

          <p className="text-gray-600 mt-4 text-center ml-50 max-w-3xl">
            From Tally tutorials to GST updates this is your go-to learning
            space to stay informed, compliant, and future-ready.
          </p>
        </div>
      </section>
  {/* ------------------------------------------------------ */}
      {/* CATEGORIES - PILL STYLE */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-gray-100 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-10"
            whileHover={{ scale: 1.03 }}
          >
            Blog Categories
          </motion.h2>

          <div className="flex flex-wrap gap-5">

            {[
              "Technology & Software",
              "Accounting & Finance",
              "GST, TDS & Taxation",
              "Business Growth & Automation",
              "MSME Compliance & Registrations",
              "Productivity & Operational Efficiency",
            ].map((cat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.06 }}
                className="px-6 py-3 bg-white shadow-md rounded-full flex items-center gap-3 border"
              >
                <FaTag className="text-[#A72028]" />
                <span className="font-medium text-gray-800">{cat}</span>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* FEATURED ARTICLES - MODERN DESIGN */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-300 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-8"
            whileHover={{ scale: 1.03 }}
          >
            Featured Articles
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "Why Every MSME Should Move to Cloud-Based Accounting Systems",
              "Latest GST Updates You Must Know Before Filing",
              "How ERP & CRM Integration Can Transform Your Business Workflow",
              "The Complete Guide to Choosing the Right Tally License",
              "Top 10 Accounting Mistakes That Small Businesses Should Avoid",
            ].map((title, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -6 }}
                className="rounded-3xl p-6 bg-white/60 backdrop-blur-xl shadow-lg border border-white/30 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-[#A72028] leading-snug">
                  {title}
                </h3>

                <p className="text-gray-600 text-sm mt-3">
                  A practical article designed to help MSMEs improve compliance,
                  automation and business decisions.
                </p>

                <button className="mt-4 text-[#A72028] font-medium flex items-center gap-2">
                  Read More <FaArrowRight />
                </button>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* LATEST BLOGS – PREMIUM CARD STYLE */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-900 mb-8"
            whileHover={{ scale: 1.03 }}
          >
            Latest Blogs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "Step-by-Step Guide to Tally Prime for New Businesses",
              "Understanding TDS, GST, and PT Filing Deadlines for FY 2024–25",
              "Benefits of Biz App & Credflow App for MSME Automation",
              "Why ERP Customisation Is the Game-Changer for Your Business Workflow",
              "How Cloud Hosting Reduces Operational Costs in MSMEs",
              "Payroll Software vs Manual Payroll: What Should You Choose?",
            ].map((title, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                }}
                className="rounded-3xl overflow-hidden shadow-xl bg-white hover:shadow-2xl transition-all duration-300"
              >
                <Image
                  src="/blog-thumbnail.webp"
                  width={500}
                  height={250}
                  alt="Blog"
                  className="w-full h-48 object-cover"
                />

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-[#A72028]">{title}</h3>

                  <p className="text-gray-600 text-sm mt-3">
                    A short overview to help readers understand what they will learn.
                  </p>

                  <button className="mt-4 text-[#A72028] font-medium flex items-center gap-2">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

    
      {/* ------------------------------------------------------ */}
      {/* NEWS & UPDATES */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center font-bold text-gray-900 mb-8">News & Updates</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "Latest GST notifications",
              "Budget changes",
              "Tally new version updates",
              "Compliance deadlines",
              "Software special offers",
              "Training & webinar announcements",
            ].map((update, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/70 backdrop-blur-xl p-5 rounded-2xl border shadow-sm flex items-center gap-4"
              >
                <FaNewspaper className="text-[#A72028]  text-xl" />
                <p className="text-gray-700 font-medium ">{update}</p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* SUBSCRIBE */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Stay Updated. Stay Compliant. Stay Ahead.
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Subscribe for free GST calendars, compliance reminders, software tips,
            industry news, and expert insights — delivered directly to your inbox.
          </p>

          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border p-3 rounded-l-full w-64 shadow-md"
            />
            <button className="bg-[#A72028] text-white px-6 py-3 rounded-r-full shadow-md">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
