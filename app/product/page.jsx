"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  /* ================= PRODUCTS (ORDER = NAVBAR) ================= */
  const products = [
    /* ---------- TALLY PRIME ---------- */
    {
      title: "Tally Prime – New License",
      description:
        "India’s leading business management software for accounting, compliance, and growth.",
      points: [
        "Complete business accounting",
        "GST, TDS, TCS compliance",
        "Inventory & payroll management",
        "Banking & reconciliation",
        "Multi-user & multi-location support",
        "Scalable for all business sizes",
      ],
      image: "/about8.jpg",
    },
    {
      title: "Tally Software Services (TSS)",
      description:
        "Annual subscription to keep your Tally software updated and compliant.",
      points: [
        "Statutory & compliance updates",
        "Product enhancements",
        "Connected services",
        "Data synchronization",
        "Security & performance improvements",
      ],
      image: "/about7.jpg",
    },
    {
      title: "Tally Prime Add-Ons",
      description:
        "Functional Add-ons, Management & Reporting Add-ons and Printing & Customization Add-ons",
      points: [
        "Boost Revenue, with Faster Collection Period",
        "Reduce Payment Collection Cycle",
        "Recover payments faster via automated reminders (SMS, Email, IVR)",
        "Seamlessly share your invoice on WhatsApp",
        "Easy access to Busy / Tally Mobile App",
        "View receivables, ledgers, invoices anytime anywhere",
        "Business Analytics with Tally Automation",
        "Automatically get performance reports of your business on WhatsApp",
        "Grow your business by getting insights on Top and Inactive customers",
        "Supercharge your Team Productivity with field tracking and attendance management",
      ],
      image: "/latest2.jpg",
    },
    {
      title: "Tally Capital",
      description: "Simple, Smart & Superior Financing for Your Business",
      points: [
        "Check Credit Score with Insights",
        "Get Free Loan Consultations",
        "Access Business Loans at Best Interest Rates",
        "Access TallyCapital directly from your trusted TallyPrime platform",
        "Quick Loan Eligibility Check − Check your loan eligibility instantly and get your pre-qualified offer in under a minute.",
        "Free Credit Report with Insights− Access a free, detailed credit report with expert insights to monitor and improve your credit score.",
        "Online Loan Applications− Apply online for business loans up to Rs 15 Cr with a fast and hassle-free process.",
        "Tailored EMI Repayments− Plan your loan repayments with flexible tenures ranging from 12 to 84 months.",
        "An exclusive lending solution, powered by TallyCapital, seamlessly integrated with TallyPrime.",
        "Smart products to improve creditworthiness, fast approvals, multiple trusted partners, 100% secure & transparent financing.",
      ],
      image: "/TallyCapital.png",
    },
    {
      title: "Tally On Mobile",
      description: "Stay connected to your business anytime with Biz Analyst",
      points: [
        "No dependency on accountant",
        "Track your business anytime, anywhere",
        "Send Outstanding Reminders and Get Paid faster",
        "Multiple reminders at one click via email, WhatsApp, SMS",
        "Analyse & Grow your Sales by location, stock item, month",
        "Data Entry from App, syncs automatically with TallyPrime",
        "Increase sales team productivity with geo-tagged visits & follow-ups",
        "Create invoices, receipts, sales orders and quotations in just a few clicks",
        "Share instantly via WhatsApp, Email, SMS and more",
        "Set follow-up reminders and receive notifications for tasks",
      ],
      image: "/TallyOn_Mobile.png",
    },

    /* ---------- ERP ---------- */
    {
      title: "ERP Software",
      description: "New Age Business Management Software for various Industries",
      points: [
        "Finance",
        "Procurement",
        "Manufacturing",
        "Inventory Management",
        "Order Management",
        "Warehouse Management",
        "Supply Chain Management",
        "E-commerce",
        "Workflow Management",
        "Human Resource Management",
        "Marketing Automation",
        "Customer Relationship Management (CRM)",
        "Project Resource Management (Project Management)",
      ],
      image: "/about2.jpg",
    },

    /* ---------- CLOUD ---------- */
    {
      title: "Tally On Cloud",
      description:
        "Tally Cloud Hosting Services to access Tally prime license and data virtually",
      points: [
        "Access your Tally Prime anytime, anywhere",
        "24*7 Secure Access",
        "Unlimited Usage",
        "Flexibility & Scalability",
        "Auto Backup on Cloud",
        "Platform Agnostic (Windows, Mac and Linux)",
      ],
      image: "/latest3.jpg",
    },
    {
      title: "Office On Cloud",
      description:
        "Work smarter with an office that lives in the cloud — no hardware, no maintenance, just simple and secure access anytime",
      points: [
        "Purpose-Built for Business Applications",
        "Dedicated High-Performance RAM",
        "Super-Fast SSD Storage",
        "Secure & Stable Windows Server 2016",
        "MS Office 2021 Included",
        "24×7 Access with Unlimited Usage",
        "Zero Hardware Maintenance",
        "Secure Remote Access for All Users",
        "High Reliability & Consistent Performance",
        "Scalable for Future Growth",
      ],
      image: "/about1.jpg",
    },

    /* ---------- HRMS ---------- */
    {
      title: "HRMS & Payroll Software",
      description:
        "A complete HR & Payroll automation solution designed to simplify employee management, speed up payroll processing, and ensure 100% statutory compliance—all in one powerful platform.",
      points: [
        "Employee Database",
        "Time & Attendance Module",
        "Claim & Reimbursement Module",
        "TDS Module",
        "Travel Management Module",
        "Time Sheet Software Module",
        "Performance Module",
        "Leave Management Module",
        "Loans & Advance Module",
        "Exit Management Module",
        "Training Module",
        "Employee Self-Service (ESS) Module",
        "Mobile App Module",
        "Recruitment Software Module",
      ],
      image: "/about3.jpg",
    },

    /* ---------- OTTO ---------- */
    {
      title: "OTTO - Conversational AI Business Bot",
      description:
        "Automate your entire business on WhatsApp. A single AI-powered WhatsApp hub that manages sales, support, operations, and workflows—24/7, fully automated.",
      points: [
        "AI Based E-Commerce",
        "AI Support Bot",
        "AI SEO BOT",
        "Order Management",
        "Project Management",
        "Business Process Automation",
        "Lead Management",
        "Reminders and Schedulers",
        "HR Functions",
        "Payments",
        "Events",
      ],
      image: "/about4.jpg",
    },

    /* ---------- EXTRA (EXISTING) ---------- */
    {
      title: "CredFlow",
      description:
        "Impact of Credflow’s Powerful Busy and Tally ERP Automation & Analytics Suite",
      points: [
        "Boost Revenue, with Faster Collection Period",
        "Reduce Payment Collection Cycle",
        "Recover payments faster via automated reminders (SMS, Email, IVR)",
        "Seamlessly share your invoice on WhatsApp",
        "Easy access to Busy / Tally Mobile App",
        "View receivables, ledgers, invoices anytime anywhere",
        "Business Analytics with Tally Automation",
        "Automatically get performance reports of your business on WhatsApp",
        "Grow your business by getting insights on Top and Inactive customers",
        "Supercharge your Team Productivity with field tracking and attendance management",
      ],
      image: "/CredFlow.png",
    },
  
  ];

const tallyPrimePlans = [
  {
    name: "Tally Prime Silver",
    users: "Single User",
    price: "₹ 22,500",
    gst: "+18% GST",
    tag: "Best ROI Plan",
    features: [
      "Free expert assistance",
      "Includes 1-year TSS",
      "Lifetime license",
      "Fully loaded with all features",
      "Invoicing & accounting",
      "Inventory management",
      "GST and compliance",
      "Banking and cashflow",
      "e-Invoicing and e-way bills",
      "Connected services",
      "Business operation",
      "Zero cost EMI available",
      "Suitable for businesses that need TallyPrime on a single PC",
    ],
  },
  {
    name: "Tally Prime Gold",
    users: "Multi User",
    price: "₹ 67,500",
    gst: "+18% GST",
    tag: "Best ROI Plan",
    features: [
      "Free expert assistance",
      "Includes 1-year TSS",
      "Lifetime license",
      "Fully loaded with all Silver features",
      "Multiple concurrent users",
      "Invoicing & accounting",
      "Inventory management",
      "GST and compliance",
      "Banking and cashflow",
      "e-Invoicing and e-way bills",
      "Connected services",
      "Business operation",
      "Zero cost EMI available",
      "Perfect for businesses needing multi-user access on multiple PCs",
    ],
  },
  {
    name: "Tally Prime Server",
    users: "Enterprise",
    price: "₹ 2,70,000",
    gst: "+18% GST",
    tag: "Enterprise Grade",
    features: [
      "Lifetime License",
      "High stability & high reliability",
      "Zero downtime environment",
      "Power & capacity for large teams",
      "Advanced security & control",
      "Monitoring & optimization",
      "Business process optimization",
      "High speed with concurrent data access",
      "Centralized data management",
      "Supports large user base",
      "Zero cost EMI available",
      "Get 10 days free trial",
    ],
  },
];

const tssPlans = [
  {
    name: "Silver",
    price: "₹ 4,500",
    gst: "₹ 18% GST (₹ 810)",
    badge: "1 month FREE",
    features: [
      "Free upgrades to all major release",
      "Connected Services for GST, Banking and WhatsApp Business",
      "Anytime, Anywhere Access to reports and TallyPrime",
      "Online Data Sync and consolidation",
      "EMI Available",
    ],
  },
  {
    name: "Gold",
    price: "₹ 13,500",
    gst: "₹ 18% GST (₹ 2,430)",
    badge: "1 month FREE",
    features: [
      "Free upgrades to all major release",
      "Connected Services for GST, Banking and WhatsApp Business",
      "Anytime, Anywhere Access to reports and TallyPrime",
      "Online Data Sync and consolidation",
      "EMI Available",
    ],
  },
  {
    name: "Auditor",
    price: "₹ 6,750",
    gst: "₹ 18% GST (₹ 1,215)",
    badge: "1 month FREE",
    features: [
      "Free upgrades to all major release",
      "Connected Services for GST, Banking and WhatsApp Business",
      "Anytime, Anywhere Access to reports and TallyPrime",
      "Online Data Sync and consolidation",
      "EMI Available",
    ],
  },
];



  const imageWidth = 450;
  const imageHeight = 300;

  const isDemoProduct = (title) =>
  title === "Tally Prime – New License" ||
  title === "Tally Software Services (TSS)";

  return (
    <>
      {/* HERO SECTION (UNCHANGED) */}
      <section
        className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-12 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/bg-experts.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#8b1f2f90]"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight">
            Product Innovation Simplified.
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-5 font-semibold text-gray-100">
            Explore our product solutions designed to empower businesses with smarter automation, cloud integration, and scalable digital growth.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.07 }}
                className="bg-[#87CEEB] text-lg text-black font-bold px-6 py-3 rounded-md mx-auto inline-flex items-center justify-center"
              >
                Services
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTIONS */}
      {products.map((product, index) => {
        const isBlueBg = index % 2 !== 0;
        const textColor = isBlueBg ? "text-[#191970]" : "text-gray-700";
        const titleColor = isBlueBg ? "text-[#191970]" : "text-[#8b1f2f]";

        return (
          <section
            key={index}
           id={
  product.title === "Tally Prime – New License" ? "tally-new" :
  product.title === "Tally Software Services (TSS)" ? "tss" :
  product.title === "Tally Capital" ? "capital" :
  product.title === "Tally On Mobile" ? "mobile" :
  product.title === "CredFlow" ? "credflow" :
  product.title === "Tally Prime Add-Ons" ? "addons" :
  product.title === "Tally On Cloud" ? "cloud" :
  product.title === "Office On Cloud" ? "office" :
  product.title === "ERP Software" ? "erp" :
  product.title === "HRMS & Payroll Software" ? "hrms" :
  product.title.startsWith("OTTO") ? "otto" :
  product.title === "Accounts & Taxation" ? "account" : undefined
}

            className={`py-20 px-4 md:px-16 lg:px-24 space-y-12 ${isBlueBg ? "bg-[#87CEEB]" : "bg-white"}`}
          >
            <div className={`flex flex-col md:flex-row items-center gap-10 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
              <div className="md:w-1/2 flex justify-center">
                <Image src={product.image} alt={product.title} width={imageWidth} height={imageHeight} className="rounded-2xl shadow-lg object-cover" />
              </div>
              <div className="md:w-1/2">
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${titleColor}`}>{product.title}</h2>
                <p className={`text-lg md:text-xl font-semibold mb-4 ${textColor}`}>{product.description}</p>
                <ul className={`list-disc list-inside space-y-2 text-lg md:text-xl ${textColor}`}>
                  {product.points.slice(0, 6).map((point, i) => (<li key={i}>{point}</li>))}
                </ul>
{(product.points.length > 6 ||
  product.title === "Tally Prime – New License" ||
  product.title === "Tally Software Services (TSS)") && (
                  <button onClick={() => setSelectedProduct(product)} className={`mt-4 font-bold underline ${textColor} hover:text-red-700`}>
                    Know More
                  </button>
                )}
                {/* ACTION BUTTON */}
<div className="flex justify-left mt-5">
  <Link href="/contact#tax">
    <motion.button
      whileHover={{ scale: 1.08 }}
      className={`px-8 py-3 text-lg font-bold rounded-md shadow-md
        ${isDemoProduct(product.title)
          ? "bg-[#191970] text-white"
          : "bg-[#191970] text-white"
        }`}
    >
      {isDemoProduct(product.title)
        ? "Request For Demo"
        : "Get a Quote"}
    </motion.button>
  </Link>
</div>

              </div>
              
            </div>
          </section>
        );
      })}

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-20 bg-black/50"
        onClick={() => setSelectedProduct(null)}   >
          <div className="bg-white rounded-2xl p-6 md:p-12 max-w-4xl w-full relative shadow-lg overflow-y-auto max-h-[80vh]"
          onClick={(e) => e.stopPropagation()} >
            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-2xl">&times;</button>
            <div className="flex justify-center mb-6">
              <Image src={selectedProduct.image} alt={selectedProduct.title} width={imageWidth} height={imageHeight} className="rounded-xl shadow-md object-cover" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#8b1f2f] mb-6">{selectedProduct.title}</h2>
            <p className="text-lg md:text-xl font-semibold mb-4 text-gray-700">{selectedProduct.description}</p>
            
          {/* SPECIAL CASE: TALLY PRIME PLANS */}
{selectedProduct.title === "Tally Prime – New License" ? (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {tallyPrimePlans.map((plan, i) => (
      <div
        key={i}
        className="border rounded-xl p-6 shadow-md hover:shadow-lg transition text-center"
      >
        <h3 className="text-xl font-bold text-[#8b1f2f]">{plan.name}</h3>
        <p className="text-2xl font-extrabold text-black mt-2">{plan.price}</p>
        <p className="text-sm font-semibold text-gray-500">{plan.gst}</p>

        {plan.tag && (
          <p className="text-sm font-bold text-green-700 my-2">{plan.tag}</p>
        )}

        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left mt-3">
          {plan.features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>

) : selectedProduct.title === "Tally Software Services (TSS)" ? (
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  {tssPlans.map((plan, i) => (
    <div
      key={i}
      className="border rounded-xl p-6 shadow-md hover:shadow-lg transition bg-white"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-blue-600">{plan.name}</h3>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
          {plan.badge}
        </span>
      </div>

      {/* PRICE */}
      <p className="text-2xl font-extrabold text-black">{plan.price}</p>
      <p className="text-sm text-gray-600 mb-4">{plan.gst}</p>

      {/* FEATURES */}
      <p className="font-semibold mb-2">What you get :</p>
      <ul className="space-y-2 text-sm text-gray-700">
        {plan.features.map((f, idx) => (
          <li key={idx} className="flex gap-2">
            <span className="text-green-600 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>



) : (
  <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl">
    {selectedProduct.points.map((point, i) => (
      <li key={i}>{point}</li>
    ))}
  </ul>
)}


          </div>
        </div>
      )}
    </>
  );
}
