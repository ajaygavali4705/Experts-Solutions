"use client";

import { useState, useEffect, useRef } from "react";
import { Headphones, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";


export default function FixedContactButton() {
  const [open, setOpen] = useState(false);
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
  <Headphones size={24} className="sm:size-[26px]" />
</button>

{open && (
  <div
    ref={boxRef}
    className="fixed bottom-20 right-4 sm:right-6 bg-white shadow-2xl 
               border border-gray-200 rounded-xl p-5 w-60 z-40"
  >

          <p className="font-bold text-center text-lg text-[#8B1F2F] mb-3">Contact Us</p>

          {/* Phone */}
          <div className="flex text-center items-center gap-3 mb-3">
            <Phone size={20} className="text-[#8B1F2F]" />
            <a href="tel:+919503054207" className="text-gray-700 hover:underline">
              +91 9503054207
            </a>
          </div>

          {/* Email */}
          <div className="flex text-center items-center gap-3 mb-3">
            <Mail size={20} className="text-[#8B1F2F]" />
            <a
              href="mailto:info@yourcompany.com"
              className="text-gray-700 hover:underline"
            >
              info@yourcompany.com
            </a>
          </div>

          {/* WhatsApp */}
          <div className="flex pl-23 items-center gap-3 cursor-pointer">
            <a
            href="https://wa.me/919503054207"
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
