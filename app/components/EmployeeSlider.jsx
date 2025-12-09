
"use client";
import React, { useState, useEffect } from "react";

export default function EmployeeSlider() {
  const employees = [
  
  { name: "Shri. Rajendra Sawant", position: "EXECUTIVE PRESIDENT", img: "/Emp1.png" },
  { name: "Shri. Rajendra Ghag", position: "VICE PRESIDENT", img: "/Emp2.png" },
  { name: "Shri. Pankaj Ghag", position: "GENERAL SECRETARY", img: "/Emp3.png" },
  { name: "Adv. Madhuri Gaikwad", position: "JOINT SECRETARY", img: "/Emp4.png" },
  { name: "Shri. Abhishek Sawant", position: "Treasurer", img: "/Emp5.png" },
  { name: "Shri. Prasad Kadam", position: "Joint - Treasurer", img: "/Emp11.jpg" },
  { name: "Shri. Virendra Pawar", position: "MC MEMBER", img: "/Emp6.png" },
  { name: "Shri. Ajay Dhumal", position: "MC MEMBER", img: "/Emp7.png" },
  { name: "Shri. Dilip Deshmukh", position: "MC MEMBER", img: "/Emp8.png" },
  { name: "Shri. Rajendra Tawade", position: "MC MEMBER", img: "/Emp10.png" }


  ];

  const highlightEmployees = [
    { name: "Late. Adv. Shashikant (Appa) Pawar", position: "MBF Founder", img: "/Shashikantji.png" },
    { name: "Shri. Arun P. Pawar", position: "Honorable President", img: "/arunji.png" }
  ];

  const desktopVisibleCount = 5;
  const desktopSlides = Math.ceil(employees.length / desktopVisibleCount);

  const mobileVisibleCount = 1;
  const mobileSlides = employees.length; // 1 per slide

  const [currentDesktop, setCurrentDesktop] = useState(0);
  const [currentMobile, setCurrentMobile] = useState(0);

  const nextDesktop = () => setCurrentDesktop((prev) => (prev + 1) % desktopSlides);
  const prevDesktop = () => setCurrentDesktop((prev) => (prev - 1 + desktopSlides) % desktopSlides);

  const nextMobile = () => setCurrentMobile((prev) => (prev + 1) % mobileSlides);
  const prevMobile = () => setCurrentMobile((prev) => (prev - 1 + mobileSlides) % mobileSlides);

  // Auto slide for both
  useEffect(() => {
    const interval = setInterval(() => nextDesktop(), 9000);
    return () => clearInterval(interval);
  }, [currentDesktop]);

  useEffect(() => {
    const interval = setInterval(() => nextMobile(), 9000);
    return () => clearInterval(interval);
  }, [currentMobile]);

  const startDesktop = currentDesktop * desktopVisibleCount;
  const visibleDesktopEmployees = employees.slice(startDesktop, startDesktop + desktopVisibleCount);

  return (
    <div className="w-full bg-orange-50 py-16 relative">
      <h2 className="text-5xl mb-5 font-extrabold text-center text-orange-800">Our Team</h2>
<p className="text-center font-semibold text-xl text-black max-w-4xl mx-auto px-6 md:px-0">
        Our team is lead by committed leaders and dedicated professionals who work with a shared vision of empowering the Maratha business community. Each member brings experience, integrity, and passion to drive meaningful initiatives, strengthen connections, and support the growth of entrepreneurs across all chapters.
      </p>

      {/* Highlight Employees */}
      <div className="max-w-2xl mx-auto mt-10 mb-9 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlightEmployees.map((emp, i) => (
          <div
            key={i}
            className="bg-[#edb06f] rounded-2xl shadow-10xl p-6 flex flex-col items-center border border-orange-200 w-72 mx-auto shadow-[0_0_25px_rgba(0,0,0,0.25)] sm:w-64 sm:p-4 md:w-72 md:p-6"
          >
            <img
              src={emp.img}
              className="w-32 h-32 rounded-2xl object-cover mb-4 shadow-md sm:w-24 sm:h-24 md:w-32 md:h-32"
            />
            <h3 className="text-xl text-center font-bold text-gray-900">{emp.name}</h3>
            <p className="text-sm text-orange-700 font-semibold">{emp.position}</p>
          </div>
        ))}
      </div>

      {/* ---------------- DESKTOP SLIDER ---------------- */}
      <div className="hidden md:flex items-center justify-center gap-3">
        <button onClick={prevDesktop} className="px-4 py-1 bg-orange-300 rounded-full shadow hover:bg-orange-400">←</button>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 max-w-7xl">
          {visibleDesktopEmployees.slice(0, 5).map((emp, i) => (
            <div
              key={i}
              className="bg-[#edb06f] w-60 rounded-2xl shadow-10xl p-2 flex flex-col items-center border border-orange-200 shadow-[0_0_25px_rgba(0,0,0,0.25)]"
            >
              <img src={emp.img} className="w-28 h-28 rounded-xl object-cover mb-3" />
              <h3 className="font-bold text-gray-900">{emp.name}</h3>
              <p className="text-sm text-gray-600">{emp.position}</p>
            </div>
          ))}
        </div>
        <button onClick={nextDesktop} className="px-4 py-1 bg-orange-300 rounded-full shadow hover:bg-orange-400">→</button>
      </div>

      {/* ---------------- MOBILE SLIDER ---------------- */}
      <div className="flex md:hidden items-center justify-center gap-3 mt-6">
        <button onClick={prevMobile} className="px-4 py-1 bg-orange-300 rounded-full shadow hover:bg-orange-400">←</button>
        <div className="w-64 flex-shrink-0">
          <div className="bg-[#edb06f] rounded-2xl shadow-10xl p-4 flex flex-col items-center border border-orange-200 shadow-[0_0_15px_rgba(0,0,0,0.25)]">
            <img
              src={employees[currentMobile].img}
              className="w-24 h-24 rounded-xl object-cover mb-3"
            />
            <h3 className="font-bold text-gray-900 text-center">{employees[currentMobile].name}</h3>
            <p className="text-sm text-gray-600 text-center">{employees[currentMobile].position}</p>
          </div>
        </div>
        <button onClick={nextMobile} className="px-4 py-1 bg-orange-300 rounded-full shadow hover:bg-orange-400">→</button>
      </div>

      {/* DOTS */}
    {/* DESKTOP DOTS - visible only on md+ */}
<div className="hidden md:flex justify-center mt-6 gap-2">
  {Array.from({ length: desktopSlides }).map((_, i) => (
    <div
      key={`desktop-dot-${i}`}
      className={`w-3 h-3 rounded-full cursor-pointer ${currentDesktop === i ? "bg-orange-600" : "bg-orange-300"}`}
      onClick={() => setCurrentDesktop(i)}
    />
  ))}
</div>

{/* MOBILE DOTS - visible only on mobile */}
<div className="flex md:hidden justify-center mt-2 gap-2">
  {Array.from({ length: mobileSlides }).map((_, i) => (
    <div
      key={`mobile-dot-${i}`}
      className={`w-2 h-2 rounded-full cursor-pointer ${currentMobile === i ? "bg-orange-600" : "bg-orange-300"}`}
      onClick={() => setCurrentMobile(i)}
    />
  ))}
</div>

    </div>
  );
}
