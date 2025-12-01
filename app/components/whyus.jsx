"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function WhyChooseUs() {
  const points = [
    {
      title: "Complete 360° Business Automation",
      desc: "From accounting to inventory to taxation — we cover all business needs with integrated tools.",
    },
    {
      title: "Certified & Trusted Software Partners",
      desc: "Tally | SourcePro | Sensys | Saral | BizApp | Credflow | Other ERP Solutions",
    },
    {
      title: "Experienced Multi-Department Team",
      desc: "Sales, Accounts, Support, Customisation, Implementation, IT, and Networking teams work together to deliver seamless service.",
    },
    {
      title: "Fast Implementation & Quality Support",
      desc: "Our support team ensures quick issue resolution, timely updates, and professional service across all departments.",
    },
    {
      title: "MSME-Focused Approach",
      desc: "We understand the challenges of MSMEs and deliver cost-effective, scalable, and result-oriented solutions.",
    },
    {
      title: "Honest Pricing & Transparent Service",
      desc: "Every product, service, and plan is offered with clarity, professionalism, and complete transparency.",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % points.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % points.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + points.length) % points.length);

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-[#8B1E2D] mb-12">
        WHY CHOOSE US
      </h2>

      <div className="max-w-4xl mx-auto relative px-4">

        {/* Slider Container */}
        <div className="overflow-hidden h-48 flex items-center justify-center">

          <AnimatePresence>
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 120 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -120 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-white shadow-xl rounded-2xl p-8 text-center border border-[#8B1E2D]/20"
            >
              <h3 className="text-2xl font-semibold text-[#8B1E2D]">
                {points[current].title}
              </h3>
              <p className="text-gray-700 mt-3">{points[current].desc}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#8B1E2D] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaArrowLeft />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#8B1E2D] text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
