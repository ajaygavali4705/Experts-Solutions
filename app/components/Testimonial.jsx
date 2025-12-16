"use client";

import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [index, setIndex] = useState(0);

  // -------------------------------
  // LOAD TESTIMONIALS FROM BACKEND
  // -------------------------------
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/testimonials");
        const data = await res.json();

        let items = [];
        if (Array.isArray(data)) items = data;
        else if (Array.isArray(data.data)) items = data.data;
        else if (Array.isArray(data.testimonials)) items = data.testimonials;

        setTestimonials(items);
      } catch (error) {
        console.error("Testimonials fetch error:", error);
      }
    };

    fetchTestimonials();
  }, []);

  // -------------------------------
  // AUTO SLIDE (after data loads)
  // -------------------------------
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials]);

  if (testimonials.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No testimonials available
      </div>
    );
  }

  const { name, message, rating } = testimonials[index];

  return (
  <section className="w-full bg-white py-20">
    {/* HEADING */}
    <div className="max-w-6xl mx-auto text-center mb-12">
      <h2 className="text-5xl font-bold text-gray-800">
        What Our Clients Say
      </h2>
      <p className="text-gray-600 mt-2">
        Our clients value our commitment to quality, timely delivery, and
        transparent communication.
      </p>
    </div>

    {/* MAIN LAYOUT */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">

      {/* LEFT – 30% IMAGE */}
      <div className="w-full md:w-[20%] flex justify-center">
        <a
          href="https://g.page/r/CSSlQDth5QXOEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <img
            src="/solution1.png"   // 🔁 change image path if needed
            alt="Google Review"
            className="rounded-xl shadow-lg hover:scale-105 transition duration-300"
          />
        </a>
      </div>

      {/* RIGHT – 70% SLIDER */}
      <div className="relative w-full md:w-[80%] flex items-center justify-center">

        {/* PREV */}
        <button
          onClick={() =>
            setIndex(index === 0 ? testimonials.length - 1 : index - 1)
          }
          className="absolute left-0 text-gray-400 hover:text-gray-600 z-10"
        >
          <FaChevronLeft size={22} />
        </button>

        {/* CARD */}
        <div className="w-[90%] bg-[#faddca] border border-blue-200 rounded-xl px-12 py-10 text-center relative">

          {/* STARS */}
          <div className="flex justify-center mb-4 text-yellow-400">
            {Array.from({ length: rating || 5 }).map((_, i) => (
              <FaStar key={i} size={16} />
            ))}
          </div>

          {/* QUOTES */}
          <span className="absolute left-6 top-6 text-5xl text-blue-500 font-serif">“</span>

          <p className="text-gray-700 text-xl font-bold leading-relaxed px-6">
            {message}
          </p>

          <span className="absolute right-6 bottom-6 text-5xl text-blue-500 font-serif">”</span>

          <p className="mt-6 text-lg font-semibold text-gray-800">
            — {name}
          </p>
        </div>

        {/* NEXT */}
        <button
          onClick={() => setIndex((index + 1) % testimonials.length)}
          className="absolute right-0 text-gray-400 hover:text-gray-600 z-10"
        >
          <FaChevronRight size={22} />
        </button>
      </div>
    </div>

    {/* DOTS */}
    <div className="flex justify-center gap-2 mt-8">
      {testimonials.map((_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i === index ? "bg-blue-500" : "bg-gray-300"
          }`}
        ></span>
      ))}
    </div>
  </section>
);
}