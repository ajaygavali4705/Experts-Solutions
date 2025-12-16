"use client";

import React, { useState, useRef, useEffect  } from "react";
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
const [productForm, setProductForm] = useState({
  name: "",
  email: "",
  contactNumber: "",
  companyname: "",
  location: "",
  service: [],
  message: "",
});


const [serviceOpen, setServiceOpen] = useState(false);

const toggleService = (value) => {
  setProductForm((prev) => {
    const exists = prev.service.includes(value);
    return {
      ...prev,
      service: exists
        ? prev.service.filter((s) => s !== value)
        : [...prev.service, value],
    };
  });
};


const [productLoading, setProductLoading] = useState(false);
const [productSuccess, setProductSuccess] = useState("");
const [productError, setProductError] = useState("");
const serviceDropdownRef = useRef(null);



const handleProductChange = (e) => {
  const { name, value } = e.target;
  setProductForm((prev) => ({ ...prev, [name]: value }));
};


useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      serviceDropdownRef.current &&
      !serviceDropdownRef.current.contains(event.target)
    ) {
      setServiceOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



  const handleProductSubmit = async (e) => {
  e.preventDefault();

  setProductLoading(true);
  setProductError("");
  setProductSuccess("");

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productForm),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Failed to submit");

    setProductSuccess(
      json?.message || "Thank you — your product enquiry has been submitted."
    );

    setProductForm({
      name: "",
      email: "",
      contactNumber: "",
      companyname: "",
      location: "",
      service: "",
      message: "",
    });
  } catch (err) {
    setProductError(err.message || "Something went wrong. Please try again.");
  } finally {
    setProductLoading(false);
  }


  };

  const [taxServiceOpen, setTaxServiceOpen] = useState(false);
const taxServiceRef = useRef(null);
useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      taxServiceRef.current &&
      !taxServiceRef.current.contains(e.target)
    ) {
      setTaxServiceOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () =>
    document.removeEventListener("mousedown", handleClickOutside);
}, []);
const toggleTaxService = (service) => {
  setTaxForm((prev) => ({
    ...prev,
    service: prev.service.includes(service)
      ? prev.service.filter((s) => s !== service)
      : [...prev.service, service],
  }));
};



  const services = [
    "GST Filing",
    "TDS / PT / IT Filing",
    "Bookkeeping",
    "Audit Support",
    "Company Registrations",
    "Tax Consultancy",
  ];

  const taxServiceOptions = [
  "GST Filing",
  "TDS / PT / IT Filing",
  "Bookkeeping",
  "Audit Support",
  "Company Registrations",
  "Tax Consultancy",
  "Other",
];

  const productServices = [
  "Tally Prime",
  "Software AMC",
  "ERP Software",
  "Implementation",
  "Cloud Solution",
  "Customization",
];

const productServiceOptions = [
  "Software AMC",
  "Corporate Training",
  "Implementation",
  "Integration",
  "Customization",
  "Accounts & Taxation",
  "Tally Prime",
  "ERP Software",
  "Cloud Solution",
  "HRMS & Payroll Software",
  "OTTO - Conversational AI Business Bot",
  "Other",
];



const [taxForm, setTaxForm] = useState({
  name: "",
  email: "",
  contactNumber: "",
  companyname: "",
  location: "",
  service: [],
  message: "",
});


const [taxSuccess, setTaxSuccess] = useState("");
const [taxError, setTaxError] = useState("");
const [taxLoading, setTaxLoading] = useState(false);

const handleTaxChange = (e) => {
  const { name, value } = e.target;
  setTaxForm((prev) => ({ ...prev, [name]: value }));
};

const handleTaxSubmit = async (e) => {
  e.preventDefault();
  setTaxLoading(true);
  setTaxError("");
  setTaxSuccess("");

  try {
    const res = await fetch("/api/tax-enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(taxForm),
    });

    const json = await res.json();
    if (!res.ok) throw new Error(json?.error || "Failed to submit.");

    setTaxSuccess("Your tax enquiry has been submitted successfully!");

  setTaxForm({
  name: "",
  email: "",
  contactNumber: "",
  companyname: "",
  location: "",
  service: [],
  message: "",
});

  } catch (err) {
    setTaxError(err.message || "Something went wrong. Try again.");
  } finally {
    setTaxLoading(false);
  }
};




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

          
          </div>
        </section>




<section id="products" className="w-full bg-white py-16 px-4">
  <div className="max-w-7xl mx-auto space-y-12 p-4 md:p-8">

    {/* HEADER ROW */}
    <div className="md:flex md:items-center md:justify-between gap-4 space-y-6 md:space-y-0">
      <div>
        <h2 className="text-2xl md:text-5xl font-extrabold text-center md:text-left">
        Software & Product Enquiries
        </h2>

      </div>

      <div className="flex justify-center md:block">
        <div className="mt-4 md:mt-0 space-y-3 w-full max-w-xs">
          <div className="flex items-center gap-3 bg-gray-200 px-4 py-2 rounded-2xl justify-center md:justify-start">
            <Phone size={18} />
            <div className="text-center md:text-left">
              <div className="text-lg font-semibold">Support Desk</div>
              <div className="font-semibold">8104918476</div>
               <div className="font-semibold">9892575903</div>
               <div className="font-semibold">9987575903</div>
              <div className="font-semibold"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* MAIN GRID */}
{/* MAIN GRID */}
<div className="grid md:grid-cols-3 gap-6 mt-6">

  {/* LEFT SIDE – FORM */}
  <aside className="space-y-4 md:col-span-1">

    {/* Enquiry Card */}
    <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
      <h4 className="text-2xl font-bold mb-3 text-center text-red-700">
        Sales Enquiries
      </h4>

<form className="space-y-3" onSubmit={handleProductSubmit}>
  <input
    name="name"
    placeholder="Your full name"
    value={productForm.name}
    onChange={handleProductChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="email"
    placeholder="you@example.com"
    value={productForm.email}
    onChange={handleProductChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="contactNumber"
    placeholder="Phone Number"
    value={productForm.contactNumber}
    onChange={handleProductChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="companyname"
    placeholder="Company Name"
    value={productForm.companyname}
    onChange={handleProductChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="location"
    placeholder="Location"
    value={productForm.location}
    onChange={handleProductChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

<div className="relative" ref={serviceDropdownRef}>
  <button
    type="button"
    onClick={() => setServiceOpen(!serviceOpen)}
    className="w-full px-3 py-2 border  text-gray-700 rounded-lg bg-white text-left"
  >
    {productForm.service.length > 0
      ? productForm.service.join(", ")
      : "Service Interested In"}
  </button>

  {serviceOpen && (
    <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {productServiceOptions.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={productForm.service.includes(option)}
            onChange={() => toggleService(option)}
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  )}
</div>



  <textarea
    name="message"
    placeholder="Message / Query"
    value={productForm.message}
    onChange={handleProductChange}
    className="w-full p-3 border rounded-lg bg-white"
  />

  <button
    type="submit"
    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-700"
    disabled={productLoading}
  >
    {productLoading ? "Submitting..." : "Submit Enquiry"}
  </button>

  {productError && <p className="text-red-600 text-center">{productError}</p>}
  {productSuccess && <p className="text-green-600 text-center">{productSuccess}</p>}
</form>

    </div>
  </aside>

  {/* RIGHT SIDE – PRODUCTS + CONTACT DETAILS */}
  <div className="md:col-span-2 space-y-4">

    {/* Our Products */}
    <div className="rounded-2xl bg-gray-200 p-4 shadow-lg">
      <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 text-red-700 text-center md:text-left">
        <FileText /> Our Products
      </h3>

<ul className="grid sm:grid-cols-2 gap-3">
  {productServices.map((s) => (
    <li
      key={s}
      className="flex items-start gap-3 p-3 border rounded-lg bg-gray-200"
    >
      <span className="mt-1 text-green-600">
        <CheckCircle size={18} />
      </span>
      <div>
        <div className="font-semibold text-sm">{s}</div>
        <div className="text-xs text-slate-600">
          Handled with precision.
        </div>
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
          <div className="text-xs text-slate-600">Phone (Sales)</div>
          <div className="mt-1 font-semibold">9821322456 | 7700005317 | 7700006257</div>
        </div>

        <div className="p-3 border rounded-lg bg-gray-200">
          <div className="text-xs text-slate-600">Phone (Support)</div>
          <div className="mt-1 font-semibold">7700005316 | 7700006256 |7700006281 </div>
        </div>

        <div className="p-3 border rounded-lg bg-gray-200 col-span-full">
          <div className="text-xs text-slate-600">Email</div>
          <div className="mt-1 font-semibold">sales@experts.net.in</div>
        </div>
      </div>
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
              <div className="font-semibold">7700005315</div>
              <div className="font-semibold"></div>
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
              <div className="text-xs text-slate-600">Phone (Sales)</div>
              <div className="mt-1 font-semibold">9821322456 | 7700005315</div>
            </div>

            <div className="p-3 border rounded-lg bg-gray-200">
              <div className="text-xs text-slate-600">Phone (Support)</div>
              <div className="mt-1 font-semibold">7700005315</div>
            </div>

            <div className="p-3 border rounded-lg bg-gray-200 col-span-full">
              <div className="text-xs text-slate-600">Email</div>
              <div className="mt-1 font-semibold">ajay@experts.net.in</div>
            </div>

          </div>
        </div>
      </div>

      {/* ASIDE FORM */}
      <aside className="space-y-4">

        {/* Enquiry Card */}
        <div className="rounded-2xl bg-gray-200 p-4 shadow-xl">
          <h4 className="text-2xl font-bold mb-3 text-center text-red-700">Quick Tax Enquiry</h4>

<form className="space-y-3" onSubmit={handleTaxSubmit}>
  <input
    name="name"
    placeholder="Your full name"
    value={taxForm.name}
    onChange={handleTaxChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="email"
    placeholder="Email ID"
    value={taxForm.email}
    onChange={handleTaxChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />

  <input
    name="contactNumber"
    placeholder="Phone Number"
    value={taxForm.contactNumber}
    onChange={handleTaxChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />
  <input
    name="companyname"
    placeholder="Company Name"
    value={taxForm.companyname}
    onChange={handleTaxChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />
    <input
    name="location"
    placeholder="Location"
    value={taxForm.location}
    onChange={handleTaxChange}
    className="w-full px-3 py-2 border rounded-lg bg-white"
  />
<div className="relative" ref={taxServiceRef}>
  <button
    type="button"
    onClick={() => setTaxServiceOpen(!taxServiceOpen)}
    className="w-full px-3 py-2 border text-gray-700 rounded-lg bg-white text-left"
  >
    {taxForm.service.length > 0
      ? taxForm.service.join(", ")
      : "Select Services"}
  </button>

  {taxServiceOpen && (
    <div className="absolute z-10 mt-1 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
      {taxServiceOptions.map((option) => (
        <label
          key={option}
          className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={taxForm.service.includes(option)}
            onChange={() => toggleTaxService(option)}
          />
          <span className="text-sm">{option}</span>
        </label>
      ))}
    </div>
  )}
</div>


  <textarea
    name="message"
    placeholder="Message / Query"
    value={taxForm.message}
    onChange={handleTaxChange}
    className="w-full p-3 border rounded-lg bg-white"
  />

  <button
    type="submit"
    className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold text-sm hover:bg-red-700"
    disabled={taxLoading}
  >
    {taxLoading ? "Submitting..." : "Submit Enquiry"}
  </button>

  {taxError && <p className="text-red-600 text-center">{taxError}</p>}
  {taxSuccess && <p className="text-green-600 text-center">{taxSuccess}</p>}
</form>

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
              <div className="rounded-2xl bg-gray-50 p-6 h-[153] shadow-lg border-t-4 border-indigo-700">
                <h4 className="text-lg font-bold mb-2 text-red-700 flex items-center gap-2">
                  <MapPin /> Branch Office (Pune)
                </h4>

                <p className="text-slate-600 leading-relaxed text-sm">
                  E/1009, Oro Avenue, Life Republic,
Marunji, Pune – 411057
                </p>
              </div>

              <div className="bg-gray-200 p-4 rounded-xl shadow-sm border">
                <h4 className="text-xl font-semibold text-gray-700 mb-3">📍 Pune Office Location</h4>

                <iframe
      src="https://www.google.com/maps?q=Oro+Avenue+Life+Republic+Marunji+Pune+411057&output=embed"
                  width="100%"
                  height="300"
                  className="rounded-xl border"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pune Office Map"
                ></iframe>
              </div>
            </div>


          </div>
        </section>
      </main>
    </div>
  );
}
