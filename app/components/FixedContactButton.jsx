"use client";

import { useState, useEffect, useRef } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export default function FixedContactButton() {
  // Popup opens by default → No need for setState in useEffect
  const [open, setOpen] = useState(true);
  const boxRef = useRef(null);

  // Close box when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* FIXED BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-[#8B1F2F] 
               hover:bg-[#751925] text-white p-3 sm:p-4 rounded-full 
               shadow-xl z-40 transition-all"
      >
        <IoMdChatbubbles size={24} className="sm:size-[26px]" />
      </button>

      {open && (
        <div
          ref={boxRef}
          className="fixed bottom-20 right-4 sm:right-6 bg-white shadow-2xl 
                     border border-gray-200 rounded-xl p-5 w-60 z-40"
        >
          <p className="font-bold text-center text-lg text-[#8B1F2F] mb-3">
            Contact Details
          </p>

          {/* Contact Section */}
          <div className="mb-4">
            <p className="font-semibold text-[#8B1F2F]">Contact:</p>
            <p className="text-gray-700">Taxation & Accounts</p>

            <p className="text-gray-700 mt-1">
              <span className="font-medium">Email:</span> ajay@experts.net.in
            </p>

            <p className="text-gray-700 mt-1">
              <span className="font-medium">Contact No:</span> 9821322456
            </p>

            <p className="text-gray-700 mt-1">
              <span className="font-medium">Support:</span> 7700005315 & 9821322456
            </p>
          </div>

          {/* Software & Solutions */}
          <div className="mb-4">
            <p className="font-semibold text-[#8B1F2F]">Software & Solutions:</p>
            <p className="text-gray-700 mt-1">
              <span className="font-medium">Email:</span> sales@experts.net.in
            </p>
          </div>

          {/* WhatsApp (unchanged) */}
          <div className="flex pl-23 items-center gap-3 cursor-pointer">
            <a
              href="https://wa.me/917700005314"
              target="_blank"
              onClick={(e) => e.stopPropagation()}
              className="text-green-600 whatsapp-icon hover:text-green-700"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
