"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Marianjali Community",
    feedback:
      "The Tally prime service are provided immediately whenever is needed. We are greatful for the good experience and the help given.",
  },
  {
    name: "G M DALVI & ASSOCAITES",
    feedback:
      "Experts Solutions is providing an excellent service, good support & prompt replies makes it very user friendly, you have good team to work with.",
  },
  {
    name: "Seema Vyas",
    feedback:
      "The staff was very cooperative and had a quick response in solving my query.",
  },
  {
    name: "Amish Dharia - Amison Enterprise",
    feedback:
      "Very prompt and professional, Expert solutions have all solutions to your accounting queries and I recommend to all.",
  },
  {
    name: "Southern India Traders",
    feedback:
      "I attended the webinar on RCM in Tally Prime — it was very well presented by Team. The new features in Tally Prime are excellent and will be very useful for our firm. Thanks and best wishes to the team.",
  },
];

export default function ClientStories() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);

  const next = () => setIndex((index + 1) % testimonials.length);

  // ✅ AUTO SLIDE EVERY 10 SECONDS
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const current = testimonials[index];

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto text-center mb-10">

        <h2 className="text-5xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2">
Our clients value our commitment to quality, timely delivery, and transparent communication.
Their feedback reflects the trust we build through consistent and reliable project execution.        </p>
      </div>

      <div className="relative flex  items-center justify-center">
        <button
          onClick={prev}
          className="absolute left-10 text-gray-400 hover:text-gray-600"
        >
          <FaChevronLeft size={24} />
        </button>

        <div className="w-[80%] max-w-4xl bg-[#faddca] border border-blue-200 rounded-xl px-12 py-10 text-center relative">
        

          <div className="flex justify-center mb-4 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={16} />
            ))}
          </div>
         <span className="absolute left-10 top-8 text-5xl text-blue-500 font-serif">
            “
          </span>
          <p className="text-gray-700 text-xl font-bold leading-relaxed px-6">
            {current.feedback}
          </p>
            <span className="absolute right-6 bottom-6 text-5xl text-blue-500 font-serif">
            ”
          </span>

          <p className="mt-6 text-lg font-semibold text-gray-800">
            — {current.name}
          </p>

        
        </div>

        <button
          onClick={next}
          className="absolute right-10 text-gray-400 hover:text-gray-600"
        >
          <FaChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-6">
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
