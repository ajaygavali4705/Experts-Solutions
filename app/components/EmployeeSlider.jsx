
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Slider() {
  const slides = [
    {
      name: "Mr. Ajay Waman Kanerkar",
      title: "Owner",
      speech:
        "We don’t wait for opportunities — we create them. Together, we empower entrepreneurs to rise and lead with integrity.",
      image: "/owner.jpeg",
      hasImage: true,
    },
    {
      name: null,
      title: null,
      speech:
        "To bring together existing and aspiring entrepreneurs from the community around the globe by providing Platform for Networking, Guidance and Support, and also imparting to youths Training/Guidance For Competitive Exams — through SHIVNERI’s VGC & ACEs.",
      image: null,
      hasImage: false, // last slide text only
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const { name, title, speech, hasImage, image } = slides[current];

  return (
    <section className="w-full min-h-[60vh] md:h-[40vh] bg-[#faddca] flex items-center justify-center relative overflow-hidden px-4 md:px-8">
      <div
        className={`flex w-full max-w-7xl gap-3 items-center ${
          hasImage ? "md:flex-row flex-col" : "flex-col text-center"
        }`}
      >
        {/* TEXT */}
        <div
          className={`${
            hasImage
              ? "w-full md:w-1/2 text-center md:text-left"
              : "w-full max-w-5xl text-center mx-auto"
          }`}
        >
          {name && (
            <h2 className="text-2xl md:text-5xl font-bold text-orange-800 mb-1">
              {name}
            </h2>
          )}

          {title && (
            <h4 className="text-sm md:text-lg text-gray-700 italic mb-4">{title}</h4>
          )}

          <p className="text-base md:text-2xl leading-relaxed text-gray-800">
            {speech}
          </p>
        </div>

        {/* IMAGE (only for first two slides) */}
        {hasImage && (
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0">
            <div className="relative w-32 h-32 sm:w-40 sm:h-50 md:w-66 md:h-66 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.35)]">
              <Image src={image} alt={name} fill className="object-cover" />
            </div>
          </div>
        )}
      </div>

     {/* DOTS - Desktop Only */}
<div className="hidden md:flex absolute bottom-6 left-0 right-0 justify-center gap-3">
  {slides.map((_, index) => (
    <div
      key={index}
      className={`h-2.5 w-2.5 rounded-full ${
        current === index ? "bg-orange-700" : "bg-gray-400"
      }`}
    />
  ))}
</div>

    </section>
  );
}
