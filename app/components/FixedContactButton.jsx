"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
} from "react-icons/fa";
import { BiSupport } from "react-icons/bi";


export default function ConnectWithUs() {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(true); // 🔥 Always open initially

  const popupRef = useRef(null);

  // 🔥 Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setOpen(false); // close popup
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const socialLinks = [
    { icon: <FaWhatsapp size={25} />, url: "https://wa.me/917700005314" },
    { icon: <FaInstagram size={25} />, url: "https://www.instagram.com/experts_solutions2011/" },
    { icon: <FaFacebookF size={25} />, url: "https://www.facebook.com/profile.php?id=61552732301698" },
    { icon: <FaLinkedinIn size={25} />, url: "https://www.linkedin.com/feed/" },
    { icon: <FaGoogle size={25} />, url: "https://www.google.com/intl/en_in/business/" },
    { icon: <BiSupport size={25} />, url: "/contact" },
  ];

  return (
    <>
      {/* Floating Button */}
      <div
        className="fixed bottom-5 right-5 z-50 flex items-center"
        ref={popupRef}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {/* Main Button */}
        <button
          onClick={() => setOpen(!open)} // clicking chat icon also closes
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#8B1F2F] 
               hover:bg-[#751925] text-white p-3 sm:p-4 rounded-full 
               shadow-xl z-40 transition-all"
        >
          <IoMdChatbubbles size={24} className="sm:size-[26px]" />
        </button>

        {/* Popup Icons */}
        {open && (
  <div
    className="
      absolute 
      bottom-16 
      right-1/2 
      translate-x-1/2
      
      sm:right-2 sm:translate-x-0
      
      /* Mobile adjustments */
      max-sm:right-[20%] 
      max-sm:translate-x-0

      flex flex-col items-center gap-3
    "
  >           {socialLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                className="w-12 h-12 bg-[#8B1F2F] rounded-full flex items-center justify-center 
                           text-white shadow-md hover:bg-[#751925] transition cursor-pointer
                           animate-icon"
                style={{
                  animationDelay: `${index * 0.12}s`,
                }}
              >
                {item.icon}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Animations */}
      <style>
        {`
          .animate-icon {
            animation: slideUpFade 0.35s ease-out;
          }
          @keyframes slideUpFade {
            from { opacity: 0; transform: translateY(10px) scale(0.8); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </>
  );
}
