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
  /* ---------------- Contact Form States ---------------- */
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

      setForm({
        name: "",
        email: "",
        contactNumber: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const services = [
    "GST Filing",
    "TDS / PT / IT Filing",
    "Bookkeeping",
    "Audit Support",
    "Company Registrations",
    "Tax Consultancy",
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ---------------- Navbar ---------------- */}
      <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50"></header>

      <main>
        {/* ---------------- Support Hero ---------------- */}
        <section
          id="support"
          className="w-full min-h-screen flex items-center justify-center px-4 py-12 text-center bg-cover bg-center relative"
          style={{ backgroundImage: "url('/bg-experts.jpg')" }}
        >
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

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:support@example.com"
                className="px-6 py-3 rounded-md text-sm font-medium bg-[#87CEEB] text-black shadow-md transition hover:scale-[1.05]"
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

        {/* ---------------- Contact & Sales Section ---------------- */}
<section id="contact" className="w-full py-20 bg-[#f5f7ff] px-4">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[7fr_3fr] gap-0 bg-white shadow-xl rounded-2xl">

    {/* LEFT CARD – CONTACT FORM */}
   <div className="p-4 mx-2 md:p-10 md:mx-10">

      <h2 className="text-3xl md:text-4xl text-center font-extrabold text-[#191970] mb-3">
        Get in Touch With Us
      </h2>
      <p className="text-gray-600 text-center mb-10">
        Fill out the form and our team will reach out to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-200"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            name="contactNumber"
            placeholder="Phone Number"
            value={form.contactNumber}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-200"
          />

          <input
            name="service"
            placeholder="Service Interested In"
            value={form.service}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-200"
          />
        </div>

        <textarea
          name="message"
          placeholder="Message / Query"
          rows={4}
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-200"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-lg bg-[#8B1F2F] text-white font-semibold shadow-md hover:opacity-90 transition disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>

        {error && <p className="text-center text-red-600">{error}</p>}
        {success && <p className="text-center text-green-600">{success}</p>}
      </form>
    </div>

    {/* RIGHT CARD – OFFICE INFO */}
    <div className=" p-10  flex flex-col bg-[#87CEEB] justify-between">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#191970] mb-3">Sales Enquiries</h2>

        {/* Contact Numbers */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            📞 Contact Numbers
          </h4>
          <p className="text-gray-700 mt-2">9821322456</p>
          <p className="text-gray-700">7700005317</p>
          <p className="text-gray-700">7700005319</p>
        </div>

        {/* Email */}
        <div className="mb-6">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            📧 Email
          </h4>
          <p className="text-gray-700 mt-2">sales@experts.net.in</p>
        </div>

        {/* Working Hours */}
        <div className="mb-8">
          <h4 className="font-semibold text-gray-900 flex items-center gap-2">
            🕒 Working Hours
          </h4>
          <p className="text-gray-700 mt-2">Monday to Saturday</p>
          <p className="text-gray-700">10:00 AM – 6:00 PM</p>
        </div>
      </div>

      
    </div>
  </div>
</section>


{/* ---------------- Taxation ---------------- */}
<section id="tax" className="w-full bg-[#87CEEB] py-16 px-4">
  <div className="max-w-7xl mx-auto space-y-12 p-4 md:p-8">

    {/* HEADER ROW */}
    <div className="md:flex md:items-center md:justify-between gap-4 space-y-6 md:space-y-0">
      <div>
        <h2 className="text-2xl md:text-5xl font-extrabold text-center md:text-left">
          Taxation & Accounting Services
        </h2>
        <p className="mt-3 text-slate-700 text-center md:text-left max-w-xl text-sm md:text-base">
          Reliable GST, TDS, bookkeeping, audit support & tax advisory.
        </p>
      </div>

      <div className="flex justify-center md:block">
        <div className="mt-4 md:mt-0 space-y-3 w-full max-w-xs">
          <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl justify-center md:justify-start">
            <Phone size={18} />
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold">Support Desk</div>
              <div className="font-semibold">9821322456</div>
              <div className="font-semibold">9821322456</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* MAIN GRID */}
    <div className="grid md:grid-cols-3 gap-6 mt-6">

      {/* LEFT SIDE CONTENT */}
      <div className="md:col-span-2 space-y-4">

        {/* Premium Services */}
        <div className="rounded-2xl bg-gray-200 p-4 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-700 text-center md:text-left">
            <FileText /> Our Premium Services
          </h3>

          <ul className="grid sm:grid-cols-2 gap-3">
            {services.map((s) => (
              <li key={s} className="flex items-start gap-3 p-3 border rounded-lg bg-gray-200">
                <span className="mt-1 text-green-600">
                  <CheckCircle size={18} />
                </span>
                <div>
                  <div className="font-semibold text-sm">{s}</div>
                  <div className="text-xs text-slate-600">Handled with precision.</div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="rounded-2xl bg-gray-200 p-4 shadow-lg">
          <h4 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-700 text-center md:text-left">
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

      {/* ASIDE FORM */}
      <aside className="space-y-4">

        {/* Enquiry Card */}
        <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
          <h4 className="text-2xl font-bold mb-3 text-center text-red-700">Quick Tax Enquiry</h4>

          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              placeholder="Your full name"
              className="w-full px-3 py-2 border rounded-lg bg-white"
            />
            <input
              placeholder="you@example.com"
              className="w-full px-3 py-2 border rounded-lg bg-white"
            />
                 <input
              placeholder="Phone Number"
              className="w-full px-3 py-2 border rounded-lg bg-white"
            />

            <select className="w-full px-3 py-2 border rounded-lg bg-white">
              {services.slice(0, 4).map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>

            <button className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-700">
              Submit Enquiry
            </button>
          </form>
        </div>

        {/* Why Choose Us */}
        <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
          <h4 className="text-xl font-bold mb-2 text-slate-700 text-center md:text-left">
            Why Choose Us?
          </h4>

          <ul className="text-slate-600 text-lg space-y-1">
            <li>• End-to-end tax filing handled by experts</li>
            <li>• Fast turnaround & transparent pricing</li>
            <li>• Secure document handling & data privacy</li>
          </ul>
        </div>

      </aside>
    </div>
  </div>
</section>


        {/* ---------------- Offices ---------------- */}
        <section id="offices" className="max-w-6xl mx-auto px-4 py-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Mumbai */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-6 shadow-lg border-t-4 border-indigo-700">
                <h4 className="text-lg font-bold mb-2 text-red-700 flex items-center gap-2">
                  <MapPin /> Registered Office (Mumbai)
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm">
                  4/5, Laxmi Sadan Building, Ground Floor,<br />
                  Behind Patil Sainath Plaza, Zaver Road End, Station Road,<br />
                  Mulund (W), Maharashtra – 400080
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
                ></iframe>
              </div>
            </div>

     {/* Punr */}
            <div className="space-y-4">
              <div className="rounded-2xl bg-gray-50 p-6 shadow-lg border-t-4 border-indigo-700">
                <h4 className="text-lg font-bold mb-2 text-red-700 flex items-center gap-2">
                  <MapPin /> Registered Office (Pune)
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm">
                  4/5, Laxmi Sadan Building, Ground Floor,<br />
                  Behind Patil Sainath Plaza, Zaver Road End, Station Road,<br />
                  Mulund (W), Maharashtra – 400080
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
                ></iframe>
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  );
}
