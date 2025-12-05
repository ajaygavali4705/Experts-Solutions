"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaTag, FaNewspaper, FaArrowRight } from "react-icons/fa";

export default function BlogsPage() {
  // 👉 Articles Array
  const articles = [
    {
      title: "Why Every MSME Needs to Shift to Cloud-Based Accounting",
      desc: "Cloud-based accounting is no longer a luxury — it has become a necessity for modern MSMEs that want to stay competitive, compliant, and efficient. Traditional offline systems limit accessibility, require manual backups, and depend heavily on local hardware that can fail without warning. Cloud systems offer real-time access from any device, secure automated backups, and seamless collaboration between accountants, managers, and business owners. By moving to cloud-based solutions, businesses reduce operational delays, eliminate dependency on physical location, ensure data security, and gain accurate financial visibility at all times. Cloud accounting ultimately empowers MSMEs to make faster decisions, improve productivity, and run their operations with complete confidence.",
    image: "/blog1.jpg"
    },
    {
      title: "A Complete Guide to Choosing the Right Tally Prime License",
      desc: "Understanding which Tally Prime license suits your business is crucial for smooth operations and long-term scalability. Tally Silver is ideal for single-user setups and small businesses, while Tally Gold supports multiple users simultaneously, making it perfect for growing companies with larger teams. For enterprises dealing with high transaction volumes and requiring advanced speed and stability, Tally Prime Server provides top-tier performance and centralised control. This article explores feature differences, user capacity, pricing options (lifetime, rental, EMI), and compatibility for various industries. It also covers how integrations, customisations, and cloud hosting influence your licensing choice. A correct Tally license ensures seamless workflow, better productivity, and powerful automation for your accounting and inventory needs.",
    image: "/blog2.jpg"
    },
    {
      title: "GST Compliance: Common Mistakes and How to Avoid Them",
      desc: "GST compliance can become a challenge for businesses due to frequent filing deadlines, complex returns, mismatched invoices, and evolving government regulations. Many MSMEs struggle with reconciliation, inaccurate tax classifications, delayed filings, and improper documentation—leading to notices, penalties, and blocked input tax credit. This article highlights the most common GST mistakes and provides actionable steps to fix them, including maintaining accurate books, automating data entry, validating invoices, and using reliable ERP/Tally solutions for reporting. With the right processes and digital tools, businesses can achieve 100% compliance, reduce financial risk, and stay fully aligned with statutory requirements throughout the year.",
    image: "/blog3.jpg"
    },
    {
      title: "ERP vs Traditional Accounting: What Your Business Really Needs",
      desc: "While traditional accounting software helps manage basic financial transactions, it falls short when businesses expand into multi-location operations, inventory-intensive processes, or complex production cycles. ERP systems offer a unified platform that connects accounting, inventory, purchasing, sales, production, HR, CRM, and compliance into one integrated workflow. This article explains how ERPs provide real-time visibility, reduce manual work, eliminate duplication, and support strategic decision-making. It also highlights scenarios where businesses must transition beyond basic accounting tools to a complete ERP system — especially when scaling operations, handling multiple teams, or needing automated reporting and role-based access. Choosing ERP over standalone accounting can transform how a business operates and plans its long-term growth.",
    image: "/blog4.jpg"
    },
    {
      title: "How Mobile Business Apps Improve Productivity",
      desc: "Mobile applications have become essential for business owners and teams who need instant access to operational data. With apps like BizApp, Credflow, CRM, and ERP mobile apps, users can manage collections, monitor sales, track attendance, approve requests, and stay updated on financials without being tied to a computer. This article explores how mobile apps reduce delays, speed up communication, increase sales follow-ups, and give managers complete visibility over day-to-day activities. By syncing with ERP or Tally in real time, mobile apps help businesses respond faster to customer needs, streamline field operations, and improve accountability. For growing companies, mobile business apps are a powerful tool for higher efficiency and smarter decision-making.",
    image: "/blog5.jpg"
    },
    {
      title: "Benefits of Integrating CRM With ERP",
      desc: "Integrating CRM with ERP creates a unified ecosystem where customer data, sales information, stock movement, and service workflows work in harmony. This article explains how ERP + CRM integration reduces manual data entry, prevents miscommunication, and creates a single source of truth for all departments. Sales teams gain accurate product availability, order history, and real-time updates, while management gets complete visibility into performance metrics, customer behaviour, lead conversions, and revenue patterns. Integration also enhances after-sales service, ensures faster follow-ups, and supports better customer experience. By aligning marketing, sales, accounts, and operations, ERP + CRM integration helps businesses streamline processes and achieve sustainable growth.",
    image: "/blog6.jpg"
    }
  ];

  // 👉 Read More / Less State
  const [openIndex, setOpenIndex] = useState(
    Array(articles.length).fill(false)
  );

  const toggleText = (index) => {
    const newState = [...openIndex];
    newState[index] = !newState[index];
    setOpenIndex(newState);
  };

  return (
    <>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION */}
      {/* ------------------------------------------------------ */}
     <section
  className="w-full py-16 px-6 md:px-10 border-b border-gray-200 bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/bg-experts.jpg')",
  }}
>
  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#8b1f2fb0]"></div>

  <div
    className="
      relative max-w-7xl mx-auto 
      grid grid-cols-1 md:grid-cols-2 
      gap-10 items-center
      pt-24 md:pt-0     /* FIX: add space only on mobile */
    "
  >
    {/* TEXT SECTION */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center md:text-left px-2"
    >
      <motion.h1
        className="
          text-2xl sm:text-3xl md:text-5xl 
          font-bold text-gray-100 leading-tight
        "
        whileHover={{ scale: 1.02 }}
      >
        Insights That Empower.
        <br />
        Knowledge That Drives Growth.
      </motion.h1>

      <motion.p
        className="mt-4 text-gray-100 text-base sm:text-lg md:text-lg px-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Stay updated with expert knowledge on taxation, automation, ERP,
        cloud technology, and business growth strategies tailored for MSMEs.
      </motion.p>
    </motion.div>

    {/* IMAGE SECTION */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="flex justify-center"
    >
      <Image
        src="/about5.jpg"
        alt="Blog Insights"
        width={400}
        height={300}
        className="
          rounded-2xl shadow-xl object-cover 
          w-64 h-44 
          sm:w-80 sm:h-56 
          md:w-[500px] md:h-[350px] /* Desktop unchanged */
        "
      />
    </motion.div>
  </div>
</section>


      {/* ------------------------------------------------------ */}
      {/* BLOG INTRODUCTION */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 h-[500] bg-gray-50 px-6 md:px-12">
        <div className="max-w-6xl mt-17 mx-auto">
          <motion.h2
            className="text-2xl md:text-5xl font-bold text-center text-[#A72028]"
            whileHover={{ scale: 1.03 }}
          >
            Insights, Knowledge & Expert Guidance for Growing Businesses
          </motion.h2>

          <p className="text-gray-600 mt-4 text-center font-bold text-sm md:text-lg max-w-3xl mx-auto">
          Our blogs and resources are designed to help businesses stay informed, compliant, and future-ready. We share practical insights on accounting, taxation, ERP systems, cloud technology, and automation to support everyday decision-making. With expert guidance and industry-driven knowledge, we empower MSMEs to grow confidently in a fast-changing digital landscape.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* FEATURED ARTICLES */}
      {/* ------------------------------------------------------ */}
      <section className="py-16 bg-[#87CEEB] px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-5xl font-bold text-center text-[#191970] mb-8"
            whileHover={{ scale: 1.03 }}
          >
            Featured Articles
          </motion.h2>

          <p className="text-gray-600 mt-4 mb-9 text-center font-bold text-sm md:text-lg">
           Our Featured Articles highlight the most valuable insights, expert opinions, and in-depth guides designed to support business owners, accountants, and decision-makers. These articles cover essential topics in automation, ERP, taxation, cloud technology, and business growth. Each piece is crafted to help you understand trends, avoid mistakes, and make smarter choices for your organization.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {articles.map((item, index) => {
              const shortText = item.desc.substring(0, 120) + "...";

              return (
                
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -6 }}
                  className="rounded-3xl p-6 bg-white shadow-lg border border-white/30"
                >
        
         <Image
  src={item.image}
  width={500}
  height={250}
  alt={item.title}
  className="w-full h-40 md:h-48 object-cover rounded-xl"
/>
                  <h3 className="text-xl md:text-2xl font-bold text-[#191970] text-center">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-center mt-3">
                    {openIndex[index] ? item.desc : shortText}
                  </p>

                  <button
                    onClick={() => toggleText(index)}
                    className="text-[#191970] mt-3 font-semibold underline text-sm flex mx-auto items-center "
                  >
                    {openIndex[index] ? "Read Less" : "Read More"}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

   {/* ------------------------------------------------------ */}
{/* LATEST BLOGS */}
{/* ------------------------------------------------------ */}
<section className="py-16 bg-gray-50 px-6 md:px-12">
  <div className="max-w-6xl mx-auto">
    <motion.h2
      className="text-2xl md:text-5xl font-bold text-center mb-8 text-gray-900"
      whileHover={{ scale: 1.03 }}
    >
      Latest Blogs
    </motion.h2>

    {/* NEW ARRAY WITH SEPARATE TITLE, DESC, IMAGE */}
    {/*
      👉 You can add more anytime 
    */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Understanding the Latest GST Updates for MSMEs",
          desc: "GST regulations continue to evolve, and staying updated is essential for avoiding penalties and ensuring smooth compliance. In this article, we break down the newest GST rules, filing requirements, and important changes that directly impact small and medium businesses. From input tax credit updates to return filing clarifications, this blog helps businesses stay ready, organised, and compliant with minimum effort.",
          image: "/latest1.jpg",
        },
        {
          title: "How Automated Accounting Improves Accuracy & Saves Time",
          desc: "Manual accounting processes often lead to errors, delays, and inefficiencies that slow down business operations. This blog explains how automated accounting systems—like Tally Prime and ERP solutions—help businesses speed up bookkeeping, ensure accuracy, simplify reconciliations, and create real-time financial visibility. Learn how automation reduces workloads and supports smarter decision-making.",
          image: "/latest2.jpg",
        },
        {
          title: "The Importance of Data Backup & Security in Modern Businesses",
          desc: "In today’s digital-first world, data is one of the biggest assets for any business. This article highlights why maintaining regular backups, using cloud hosting, and implementing security systems is crucial for ensuring business continuity. We discuss best practices for protecting financial records, client data, and organizational information from loss, corruption, or cyber threats.",
          image: "/latest3.jpg",
        },
        {
          title: "Why CRM Is Essential for Better Client Management and Sales Growth",
          desc: "Customer relationships determine long-term success, and a CRM system helps businesses manage these interactions more effectively. This blog explores how CRM tools automate follow-ups, organize leads, track pipelines, improve customer communication, and boost conversion rates. It also explains how CRM combined with ERP gives complete visibility across sales and operations.",
          image: "/latest4.jpg",
        },
        {
          title: "Top Reasons Businesses Are Moving to Cloud-Based ERP Systems",
          desc: "Cloud ERP solutions are becoming the backbone of modern business operations. In this article, we explain the advantages of cloud-based ERPs, including remote accessibility, reduced hardware costs, automatic updates, and improved team collaboration. Discover why MSMEs prefer cloud platforms and how cloud ERP helps businesses scale faster and work more securely.",
          image: "/latest5.jpg",
        },
        {
          title: "How Payroll Software Eliminates Compliance Stress for Businesses",
          desc: "Payroll management involves handling salaries, attendance, deductions, PF/ESIC, and statutory compliance—making manual processes risky and time-consuming. This blog explains how payroll software automates salary calculations, generates payslips, manages attendance integration, and ensures compliance with labour laws. Learn how digital payroll reduces errors, saves time, and supports streamlined HR functions.",
          image: "/latest6.jpg",
        }
      ].map((blog, i) => (
        <motion.div
          key={i}
          whileHover={{ scale: 1.05, y: -5 }}
          className="rounded-3xl overflow-hidden shadow-xl bg-white"
        >
          <Image
            src={blog.image}
            width={500}
            height={250}
            alt={blog.title}
            className="w-full h-40 md:h-48 object-cover"
          />

          <div className="p-6">
            <h3 className="text-xl md:text-2xl font-bold text-[#191970] text-center">
              {blog.title}
            </h3>

            <p className="text-gray-600 text-center text-sm mt-3">
              {blog.desc}
            </p>

          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
