"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
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
        "Smart products to improve creditworthiness, fast approvals, multiple trusted partners, 100% secure & transparent financing."
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
        "Set follow-up reminders and receive notifications for tasks"
      ],
      image: "/TallyOn_Mobile.png",
    },
    {
      title: "CredFlow",
      description: "Impact of Credflow’s Powerful Busy and Tally ERP Automation & Analytics Suite",
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
        "Supercharge your Team Productivity with field tracking and attendance management"
      ],
      image: "/CredFlow.png",
    },

{
      title: "Tally Prime Add-Ons",
      description: "Functional Add-ons, Management & Reporting Add-ons and Printing & Customization Add-ons",
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
        "Supercharge your Team Productivity with field tracking and attendance management"
      ],
      image: "/CredFlow.png",
    },


{
      title: "Tally On Cloud",
      description: "Tally Cloud Hosting Services to access Tally prime license and data virtually",
      points: [
        "Access your Tally Prime anytime, anywhere",
        "24*7 Secure Access",
        "Unlimited Usage",
        "Flexibility & Scalability",
        "Auto Backup on Cloud",
        "Platform Agnostic (Windows, Mac and Linux)",
        
      ],
      image: "/CredFlow.png",
    },


    {
      title: "Office On Cloud",
      description: "Work smarter with an office that lives in the cloud — no hardware, no maintenance, just simple and secure access anytime",
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
      image: "/CredFlow.png",
    },


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
      image: "/CredFlow.png",
    },


        {
      title: "HRMS & Payroll Software",
      description: "A complete HR & Payroll automation solution designed to simplify employee management, speed up payroll processing, and ensure 100% statutory compliance—all in one powerful platform.",
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
      image: "/CredFlow.png",
    },



        {
      title: "OTTO -Conversational Al Business Bot",
      description: "Automate your entire business on WhatsApp. A single AI-powered WhatsApp hub that manages sales, support, operations, and workflows—24/7, fully automated.",
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
      image: "/CredFlow.png",
    },


            {
      title: "Accounts & Taxation",
      description: "Automate your entire business on WhatsApp. A single AI-powered WhatsApp hub that manages sales, support, operations, and workflows—24/7, fully automated.",
      points: [
        "Book Keeping & Accountancy",
        "Finalization of Books",
        "Tax Audit",
        "GST, TDS, PT, IT, PAN, Exim, Udyam Registrations",
        "Proprietor \ Partnership, Pvt Ltd., LLP, Trust, NGO Registrations",
        "Business Process Automation",
        "GST, TDS, PT, IT Return Filings",

      ],
      image: "/CredFlow.png",
    },


  ];

  const imageWidth = 450; // fixed width
  const imageHeight = 300; // fixed height

  return (
    <>
      {/* ---------------------- HERO SECTION ---------------------- */}
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
        </div>
      </section>

      {/* ---------------------- PRODUCTS ---------------------- */}
      {products.map((product, index) => {
        const isBlueBg = index % 2 !== 0;
        const textColor = isBlueBg ? "text-[#191970]" : "text-gray-700";
        const titleColor = isBlueBg ? "text-[#191970]" : "text-[#8b1f2f]";

        return (
          <section
            key={index}
            className={`py-20 px-4 md:px-16 lg:px-24 space-y-12 ${
              isBlueBg ? "bg-[#87CEEB]" : "bg-white"
            }`}
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* IMAGE */}
              <div className="md:w-1/2 flex justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={imageWidth}
                  height={imageHeight}
                  className="rounded-2xl shadow-lg object-cover"
                />
              </div>

              {/* CONTENT */}
              <div className="md:w-1/2">
                <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${titleColor}`}>
                  {product.title}
                </h2>
                <p className={`text-lg md:text-xl font-semibold mb-4 ${textColor}`}>
                  {product.description}
                </p>
                <ul className={`list-disc list-inside space-y-2 text-lg md:text-xl ${textColor}`}>
                  {product.points.slice(0, 7).map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                {product.points.length > 7 && (
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className={`mt-4 font-bold underline ${textColor} hover:text-red-700`}
                  >
                    Read More
                  </button>
                )}
              </div>
            </div>
          </section>
        );
      })}

      {/* ---------------------- MODAL ---------------------- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto py-20 bg-black/50">
          <div className="bg-white rounded-2xl p-6 md:p-12 max-w-4xl w-full relative shadow-lg overflow-y-auto max-h-[80vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 font-bold text-2xl"
            >
              &times;
            </button>

            {/* IMAGE */}
            <div className="flex justify-center mb-6">
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                width={imageWidth}
                height={imageHeight}
                className="rounded-xl shadow-md object-cover"
              />
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#8b1f2f] mb-6">
              {selectedProduct.title}
            </h2>
            <p className="text-lg md:text-xl font-semibold mb-4 text-gray-700">
              {selectedProduct.description}
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg md:text-xl">
              {selectedProduct.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
