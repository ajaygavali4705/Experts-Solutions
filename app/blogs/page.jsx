"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTag, FaNewspaper, FaArrowRight } from "react-icons/fa";
import { getAllBlogs } from "../admin/api/blogs"; // ⭐ Import API

export default function BlogsPage() {
  const [articles, setArticles] = useState([]);

  // 👉 Load Blogs from Backend
  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getAllBlogs();

        // Normalize for user UI
        const formatted = data.map((blog) => ({
          title: blog.title,
          desc: blog.description,
          image: `https://expert-solution-website-backend.onrender.com/uploads/blogs/${blog.image.fileName || blog.image}`,
        }));

        setArticles(formatted);
      } catch (error) {
        console.error("Error loading blogs:", error);
      }
    };

    loadBlogs();
  }, []);

  // 👉 Read More / Less State
  const [openIndex, setOpenIndex] = useState([]);
  useEffect(() => {
    setOpenIndex(Array(articles.length).fill(false));
  }, [articles]);

  const toggleText = (index) => {
    const newState = [...openIndex];
    newState[index] = !newState[index];
    setOpenIndex(newState);
  };

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION (UNCHANGED) */}
      {/* ------------------------------------------------------ */}
     <section
        className="w-full py-16 px-6 md:px-10 border-b border-gray-200 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg-experts.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#8b1f2fb0]"></div>
        <div
          className="
            relative max-w-7xl mx-auto 
            grid grid-cols-1 md:grid-cols-2 
            gap-10 items-center
            pt-24 md:pt-0
          "
        >
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left px-2"
          >
            <motion.h1
              className="
                text-2xl sm:text-3xl md:text-5xl 
                font-bold text-gray-100 leading-tight
              "
              whileHover={{ scale: 1.02 }}
            >
              Insights That Empower.
              <br />
              Knowledge That Drives Growth.
            </motion.h1>

            <motion.p
              className="mt-4 text-gray-100 text-base sm:text-lg md:text-lg px-1"
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
              src="/about5.jpg"
              alt="Blog Insights"
              width={400}
              height={300}
              className="
                rounded-2xl shadow-xl object-cover 
                w-64 h-44 
                sm:w-80 sm:h-56 
                md:w-[500px] md:h-[350px]
              "
            />
          </motion.div>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* BLOG INTRODUCTION */}
      {/* ------------------------------------------------------ */}
      <section className="py-10 h-[400] bg-gray-200 px-6 md:px-12">
        <div className="max-w-6xl mt-17 mx-auto">
          <motion.h2
            className="text-2xl md:text-5xl font-bold text-center text-[#A72028]"
            whileHover={{ scale: 1.03 }}
          >
            Insights, Knowledge & Expert Guidance for Growing Businesses
          </motion.h2>

          <p className="text-gray-600 mt-4 text-center font-bold text-sm md:text-lg max-w-4xl mx-auto">
          Our blogs and resources are designed to help businesses stay informed, compliant, and future-ready. We share practical insights on accounting, taxation, ERP systems, cloud technology, and automation to support everyday decision-making. With expert guidance and industry-driven knowledge, we empower MSMEs to grow confidently in a fast-changing digital landscape.
          </p>
        </div>
      </section>


      {/* ------------------------------------------------------ */}
      {/* BLOG LIST SECTION */}
      {/* ------------------------------------------------------ */}
      
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
         <motion.h2
      className="text-2xl md:text-5xl font-bold text-center mb-8 text-gray-900"
      whileHover={{ scale: 1.03 }}
    >
      Latest Blogs
    </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


          {articles.length === 0 && (
            <p className="text-center col-span-full text-gray-500 text-lg">
              Loading blogs...
            </p>
          )}

          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-5 border hover:shadow-xl transition-all"
            >
              <Image
                src={article.image}
                alt={article.title}
                width={400}
                height={250}
                className="rounded-lg w-full h-52 object-cover"
              />

              <h2 className="mt-4 font-bold text-xl text-gray-800">
                {article.title}
              </h2>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {openIndex[index]
                  ? article.desc
                  : article.desc.slice(0, 150) + "..."}
              </p>

              <button
                onClick={() => toggleText(index)}
                className="mt-3 text-blue-600 font-semibold flex items-center gap-2"
              >
                {openIndex[index] ? "Read Less" : "Know More"}
                <FaArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
