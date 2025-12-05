

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  CheckCircle,
  FileText,
  Building2,
  MapPin,
} from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <SupportHero />
        
        <ContactAndSales />
        <TaxationServices />
        <Offices />
        {/* <BusinessHours /> */}
      </main>
    </div>
  );
}

/* ---------------- Navbar ---------------- */
function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">

    </header>
  );
}

/* ---------------- Support Hero ---------------- */
function SupportHero() {
  return (
   <section
  id="support"
  className="w-full min-h-screen flex items-center justify-center px-4 py-12 text-center bg-cover bg-center relative"
  style={{
    backgroundImage: "url('/bg-experts.jpg')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#8b1f2fb0] backdrop-blur-[1px]"></div>

  <div className="relative max-w-5xl mx-auto">
    <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-100 mb-4">
      Were Here to Assist You Connect With Expert Solutions
    </h1>

    <p className="text-gray-100 text-base sm:text-lg leading-relaxed mb-10">
      Whether you are exploring our ERP systems, taxation services, cloud hosting
      solutions, or need business consultation, our team is ready to guide you
      with professional support.
    </p>

    <div className="flex flex-wrap justify-center  gap-4">
      <a
        href="mailto:support@example.com"
        className="px-6 py-3 rounded-md  text-sm font-medium bg-[#87CEEB] text-black shadow-md transition hover:scale-[1.05]"
      >
        Contact Support
      </a>

      <a
        href="#tax"
        className="px-6 py-3 rounded-md text-sm font-medium bg-white text-pink-700 border border-pink-300 shadow-md transition hover:scale-[1.05]"
      >
        View Services
      </a>
    </div>
  </div>
</section>

  );
}

/* ---------------- Contact & Sales ---------------- */
function ContactAndSales() {
  return (
    <section id="contact" className="w-full py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50  ">
            <ContactForm />
          </div>

          <div className="bg-gray-50 rounded-2xl ">
            <SalesEnquiry />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Form ---------------- */
function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contactNumber: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "Failed to submit");
      setSuccess(json?.message || "Thank you — your enquiry has been submitted.");
      setForm({ name: "", email: "", contactNumber: "", service: "", message: "" });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h3 className="text-2xl font-bold text-center mb-6">Get in Touch With Us</h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <input
          name="contactNumber"
          placeholder="Contact Number"
          value={form.contactNumber}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <input
          name="service"
          placeholder="Service Interested In"
          value={form.service}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-lg bg-red-600 text-white font-medium disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {error && <p className="text-center text-red-600">{error}</p>}
        {success && <p className="text-center text-green-600">{success}</p>}
      </form>
    </>
  );
}

/* ---------------- Sales Enquiry ---------------- */
function SalesEnquiry() {
  return (
    <div className="">
    <div className="text-center"></div>
      <center><h3 className="text-xl font-extrabold  tracking-wide mb-4">SALES ENQUIRIES</h3></center>

       {/*contact number*/}
        <div className="mb-4">
        <h4 className="flex justify-center items-center gap-2 font-semibold text-red-800 mb-2">
          <Phone className="w-4 h-4" /> Contact Numbers
        </h4>
        <center>
          <div className=" text-gray-700 space-y-1">
          <p>9821322456</p>
          <p>7700005317</p>
          <p>7700005319</p>
        </div>
        </center>
      </div>
      
      {/* email*/}
      <div className="mb-4">
        <h4 className="flex justify-center items-center gap-2 font-semibold text-red-800 mb-2">
          <Mail className="w-5 h-5" /> Email
        </h4>
        <center><p className="text-gray-700">sales@experts.net.in</p></center>
      </div>
      

      <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Business Hours
          </h2>

          <div className="p-6 rounded-2xl bg-white shadow-md border border-gray-200 inline-block">
            <p className="text-xl font-semibold text-gray-800">
              Monday to Saturday
            </p>
            <p className="text-gray-600 mt-1">10:00 AM – 6:00 PM</p>
          </div>
        </motion.div>

    </div>
  );
}

/* ---------------- Taxation & Quick Enquiry ---------------- */
function TaxationServices() {
  const services = [
    "GST Filing",
    "TDS / PT / IT Filing",
    "Bookkeeping",
    "Audit Support",
    "Company Registrations",
    "Tax Consultancy",
  ];

  return (
    <section id="tax" className="w-full  min-h bg-gray-200  py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-12  ">
        <div className=" p-8  space-y-8">
          <div className="md:flex md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">Taxation & Accounting Services</h2>
              <p className="mt-5 text-slate-700 max-w-xl text-sm md:text-base">
                Reliable GST, TDS, bookkeeping, audit support & tax advisory.
              </p>
            </div>

            <div className="mt-4 md:mt-0 space-y-3">
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl">
                <Phone size={18} />
                <div><div className="text-xs">Primary</div><div className="font-semibold">9821322456</div></div>
              </div>
              <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl">
                <Phone size={18} />
                <div><div className="text-xs">Support</div><div className="font-semibold">7700005315</div></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2 space-y-4">
              <div className="rounded-2xl bg-gray-200 p-4 shadow-lg">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-red-700">
                  <FileText /> Our Premium Services
                </h3>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {services.map((s) => (
                    <li key={s} className="flex items-start gap-3 p-3 border rounded-lg bg-gray-200">
                      <span className="mt-1 text-green-600"><CheckCircle size={18} /></span>
                      <div>
                        <div className="font-semibold text-sm">{s}</div>
                        <div className="text-xs text-slate-600">Handled with precision.</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-gray-200 p-4 shadow-lg">
                <h4 className="text-lg font-bold mb-3 flex items-center gap-2 text-red-700">
                  <Building2 /> Contact Details
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="p-3 border rounded-lg bg-gray-200">
                    <div className="text-xs text-slate-600">Phone (Primary)</div>
                    <div className="mt-1 font-semibold">9821322456</div>
                  </div>
                  <div className="p-3 border rounded-lg bg-gray-200">
                    <div className="text-xs text-slate-600">Phone (Support)</div>
                    <div className="mt-1 font-semibold">7700005315</div>
                  </div>
                  <div className="p-3 border rounded-lg bg-gray-200 col-span-full">
                    <div className="text-xs text-slate-600">Email</div>
                    <div className="mt-1 font-semibold">sales@experts.net.in</div>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-4">
              <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
                <h4 className="text-lg font-bold mb-3 text-red-700">Quick Tax Enquiry</h4>
                <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                  <input placeholder="Your full name" className="w-full px-3 py-2 border rounded-lg bg-white" />
                  <input placeholder="you@example.com" className="w-full px-3 py-2 border rounded-lg bg-white" />
                  <select className="w-full px-3 py-2 border rounded-lg bg-white">
                    {services.slice(0, 4).map((s) => (<option key={s}>{s}</option>))}
                  </select>
                  <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-700">Submit Enquiry</button>
                </form>
              </div>

              <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
                <h4 className="text-sm font-semibold mb-2 text-slate-700">Why Choose Us?</h4>
                <ul className="text-slate-600 space-y-2 text-xs">
                  <li>• End-to-end tax filing handled by experts</li>
                  <li>• Fast turnaround & transparent pricing</li>
                  <li>• Secure document handling & data privacy</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Offices ---------------- */
function Offices() {
  return (
    <section id="offices" className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Mumbai (Left) */}
        <div className="space-y-4">
          <div className="rounded-2xl bg-gray-50 p-6 shadow-lg border-t-4 border-indigo-700">
            <h4 className="text-lg font-bold mb-2 text-red-700 flex items-center gap-2"><MapPin /> Registered Office (Mumbai)</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              4/5, Laxmi Sadan Building, Ground Floor,<br/>Behind Patil Sainath Plaza, Zaver Road End, Station Road,<br/>Mulund (W), Maharashtra – 400080
            </p>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl shadow-sm border">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">📍 Mumbai Office Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.487199564445!2d72.951!3d19.172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b90fd764b0c7%3A0xe1df6ebadc177a64!2sMulund%20West!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-xl border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mumbai Office Map"
            />
          </div>
        </div>

        {/* Pune (Right) */}
        <div className="space-y-5">
          <div className="rounded-2xl bg-gray-50 p-6 shadow-lg border-t-4 border-indigo-700">
            <h4 className="text-lg font-bold mb-7 text-red-700 flex items-center gap-2"><MapPin /> Branch Office (Pune)</h4>
            <p className="text-slate-600 leading-relaxed text-sm">
              E/1009, Oro Avenue, Life Republic,<br/>Marunji, Pune – 411057
            </p>
          </div>

          <div className="bg-gray-200 p-4 rounded-xl shadow-sm border">
            <h4 className="text-xl font-semibold text-gray-700 mb-3">📍 Pune Office Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.123!2d73.740!3d18.593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb!2sLife%20Republic%20Township!5e0!3m2!1sen!2sin!4v1700000000001!5m2!1sen!2sin"
              width="100%"
              height="300"
              className="rounded-x1 border"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Pune Office Map"
            />
          </div>
        </div>
      </div>
    </section>

   );
}


    
