
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
  const [open, setOpen] = useState(true); // ✅ OPEN on load
  const [showSupportBox, setShowSupportBox] = useState(false);

  const popupRef = useRef(null);
  const supportRef = useRef(null);

  // ✅ Close ALL buttons on first touch/click anywhere
  useEffect(() => {
    const handleFirstInteraction = () => {
      setOpen(false);
      setShowSupportBox(false);

      document.removeEventListener("mousedown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };

    document.addEventListener("mousedown", handleFirstInteraction);
    document.addEventListener("touchstart", handleFirstInteraction);

    return () => {
      document.removeEventListener("mousedown", handleFirstInteraction);
      document.removeEventListener("touchstart", handleFirstInteraction);
    };
  }, []);

  const socialLinks = [
    { icon: <FaWhatsapp size={25} />, url: "https://wa.me/917700005314" },
    { icon: <FaInstagram size={25} />, url: "https://www.instagram.com/experts_solutions2011/" },
    { icon: <FaFacebookF size={25} />, url: "https://www.facebook.com/profile.php?id=61552732301698" },
    { icon: <FaLinkedinIn size={25} />, url: "https://www.linkedin.com/feed/" },
    { icon: <FaGoogle size={25} />, url: "https://www.google.com/intl/en_in/business/" },
  ];

  return (
    <>
      <div
        className="fixed bottom-5 right-5 z-50 flex items-center"
        ref={popupRef}
      >
        {/* Main Chat Button */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-[#8B1F2F] hover:bg-[#751925] text-white p-4 rounded-full shadow-xl transition"
        >
          <IoMdChatbubbles size={26} />
        </button>

        {/* Social Icons */}
        {open && (
          <div className="absolute bottom-16 right-0 flex flex-col items-center gap-3">
            {socialLinks.map((item, index) => (
              <div
                key={index}
                onClick={() => window.open(item.url, "_blank")}
                className="w-12 h-12 bg-[#8B1F2F] rounded-full flex items-center justify-center 
                           text-white shadow-md hover:bg-[#751925] transition cursor-pointer"
              >
                {item.icon}
              </div>
            ))}

            {/* SUPPORT ICON */}
            <div className="relative" ref={supportRef}>
              <div
                onClick={(e) => {
                  e.stopPropagation(); // ✅ prevent auto close
                  setShowSupportBox(!showSupportBox);
                }}
                className="w-12 h-12 bg-[#8B1F2F] rounded-full flex items-center justify-center 
                           text-white shadow-md hover:bg-[#751925] transition cursor-pointer"
              >
                <BiSupport size={25} />
              </div>

              {/* SUPPORT INFO BOX */}
              {showSupportBox && (
                <div
                  className="
                    absolute right-14 top-2 -translate-y-1/2
                    w-80 bg-white rounded-xl shadow-xl p-4
                    border border-gray-200 text-sm text-gray-700 
                  "
                >

                  <h4 className="font-bold text-[#8B1F2F] mb-2">
                    Software & Solutions
                  </h4>
                  <p>Email: <b>sales@experts.net.in</b></p>
                  <p>Contact: <b>9821322456</b></p>
                  <p>Support: <b>9892575903, 9987575903</b></p>

                  <hr className="my-3" />

                  <h4 className="font-bold text-[#8B1F2F] mb-2">
                    Taxation & Accounts
                  </h4>
                  <p>Email: <b>ajay@experts.net.in</b></p>
                  <p>Contact: <b>7700005315</b></p>
                  <p>Support: <b>9821322456, 7700005315</b></p>


                  
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
