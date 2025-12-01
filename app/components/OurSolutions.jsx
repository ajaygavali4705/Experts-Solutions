"use client";

import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaHandshake,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

export default function SolutionsSection() {
  const solutions = [
    {
      title: "ERP & Accounting Software Solutions",
      icon: <FaLightbulb className="text-white text-3xl" />,
      points: [
        "Tally Prime (Silver, Gold, Server)",
        "TEZ ERP",
        "Inventory Management Systems",
        "GST & Tax Compliance Modules",
        "Industry-specific ERPs",
      ],
    },
    {
      title: "Tally Services & Automation",
      icon: <FaCogs className="text-white text-3xl" />,
      points: [
        "Tally License Sales",
        "TSS Renewal",
        "Tally Customisation",
        "Tally Integration",
        "Implementation",
        "Data Migration",
        "Excel-to-Tally Import",
        "Tally on Cloud",
      ],
    },
    {
      title: "Cloud Hosting Solutions",
      icon: <FaChartLine className="text-white text-3xl" />,
      points: [
        "Office on Cloud",
        "Tally on AWS",
        "ERP on Cloud",
        "Virtual Hosting (Monthly / Quarterly / Yearly)",
        "Annual Support & Training Included",
      ],
    },
    {
      title: "Mobile Applications",
      icon: <FaLaptopCode className="text-white text-3xl" />,
      points: [
        "Biz App",
        "Credflow App",
        "ERP App",
        "CRM App",
        "Payroll & Attendance App",
      ],
    },
    {
      title: "CRM Solutions",
      icon: <FaHandshake className="text-white text-3xl" />,
      points: ["ERP with CRM", "CRM Standalone"],
    },
    {
      title: "Accounts & Taxation Services",
      icon: <FaTools className="text-white text-3xl" />,
      points: [
        "Bookkeeping & Finalization",
        "GST Filings",
        "TDS / PT / IT Filings",
        "Company Registrations",
        "Audit Support",
        "Tax Planning & Consulting",
      ],
    },
  ];

  return (
    <section id="solutions" className="py-20 px-6 bg-white">
      <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center text-[#8B1E2D]">
        Our Core Solutions
      </h2>

      <div className="mt-20 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-11 px-40 lg:px-24">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative bg-white rounded-2xl shadow-lg px-6 py-10 border border-gray-200 hover:shadow-2xl transition-all hover:bg-orange-100"
          >
            {/* Circle Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full 
                bg-gradient-to-br from-[#8B1E2D] to-[#6A0F1F] flex items-center justify-center shadow-xl">
              {item.icon}
            </div>

            {/* Content */}
            <div className="mt-10 text-center">
              <h3 className="text-xl font-semibold text-[#8B1E2D]">
                {item.title}
              </h3>

              <ul className="mt-4 text-gray-700 space-y-1 text-sm">
                {item.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>

            {/* Decorative Line */}
            <div className="absolute bottom-5 left-0 w-full flex justify-center">
              <div className="w-28 h-2 bg-gradient-to-r from-[#8B1E2D] to-[#B33A49] rounded-full"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
