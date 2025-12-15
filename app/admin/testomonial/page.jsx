"use client";

import React, { useEffect, useState } from "react";
import {
  getAllTestimonials,
  createTestimonial,
  deleteTestimonial,
} from "../api/testimonial";
import AdminNavbar from "../navbar";
import { Trash2 } from "lucide-react";

export default function AdminTestimonialPage() {
  const [testimonials, setTestimonials] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // ✅ SAME PATTERN AS BLOGS PAGE
  const loadTestimonials = async () => {
    const data = await getAllTestimonials();
    setTestimonials(data || []);
  };

  useEffect(() => {
  const fetchTestimonials = async () => {
    try {
      const data = await getAllTestimonials();
      setTestimonials(data || []);
    } catch (error) {
      console.error("Error loading testimonials:", error);
    }
  };

  fetchTestimonials();
}, []);

  const clearForm = () => {
    setName("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Enter name");
    if (!message.trim()) return alert("Enter message");

    try {
      const res = await createTestimonial({ name, message });

      if (res.success) {
        alert("Testimonial added successfully");
        setShowForm(false);
        clearForm();
        loadTestimonials(); // ✅ reload list
      } else {
        alert(res.message || "Failed to add testimonial");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete this testimonial?")) {
      await deleteTestimonial(id);
      loadTestimonials(); // ✅ reload list
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />

      <div className="w-full flex justify-center p-4 mt-5">
        <div className="w-full md:w-[70%]">

          {/* HEADER */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Testimonial Management</h1>

            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={() => setShowForm(true)}
            >
              + Add Testimonial
            </button>
          </div>

          {/* ADD FORM */}
          {showForm && (
            <div className="bg-white border p-5 rounded-lg shadow-md mb-6">
              <h2 className="text-xl font-semibold mb-4">Add Testimonial</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Customer Name"
                  className="w-full border p-2 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <textarea
                  placeholder="Testimonial Message..."
                  className="w-full border p-2 rounded-md h-28"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />

                <div className="flex gap-3">
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                    Add
                  </button>

                  <button
                    type="button"
                    className="bg-gray-400 text-white px-4 py-2 rounded-md"
                    onClick={() => {
                      setShowForm(false);
                      clearForm();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TABLE */}
          <div className="overflow-x-auto border rounded-xl shadow">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3">Name</th>
                  <th className="p-3">Message</th>
                  <th className="p-3 text-center">Action</th>
                </tr>
              </thead>

              <tbody>
                {testimonials.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="p-3 text-center font-semibold">
                      {item.name}
                    </td>

                    <td className="p-3 text-center text-gray-700">
                      {item.message.slice(0, 80)}...
                    </td>

                    <td className="p-3 text-center">
                      <button
                        className="text-red-600"
                        onClick={() => handleDelete(item._id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
