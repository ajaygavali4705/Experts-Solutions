"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "../navbar";
import { getAllGallery, addGalleryItem, deleteGalleryItem } from "../api/gallery";

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("photo"); // "photo" or "video"
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  // Load gallery items
  const loadGallery = async () => {
    try {
      const data = await getAllGallery();
      setGallery(Array.isArray(data) ? data : data.data || []);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
  };

 useEffect(() => {
  // define an async function inside the effect
  const fetchGallery = async () => {
    try {
      const data = await getAllGallery();
      setGallery(Array.isArray(data) ? data : data.data || []);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
  };

  fetchGallery(); // call it
}, []);

  // Clear form
  const clearForm = () => {
    setName("");
    setFile(null);
    setType("photo");
  };

  // Add gallery item
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) return alert("Enter name");
    if (!file) return alert("Select file");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("type", type);
    formData.append("file", file);

    try {
      const res = await addGalleryItem(formData);
      if (res.success && res.data) {
        alert(res.message || "Uploaded successfully");
        setShowForm(false);
        clearForm();
        setGallery((prev) => [...prev, res.data]); // show new item immediately
      } else {
        alert(res.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while uploading");
    }
  };

  // Delete gallery item
  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete?")) {
      await deleteGalleryItem(id);
      setGallery((prev) => prev.filter((item) => item._id !== id));
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="w-full p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h1 className="text-2xl font-bold">Gallery Management</h1>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowForm(true)}
          >
            + Add Item
          </button>
        </div>

        {/* Add Form */}
        {showForm && (
          <div className="w-full bg-white border p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Add Gallery Item</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded-md"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full border p-2 rounded-md"
              >
                <option value="photo">Photo</option>
                <option value="video">Video</option>
              </select>
              <input
                type="file"
                accept={type === "photo" ? "image/*" : "video/*"}
                className="w-full border p-2 rounded-md"
                onChange={(e) => setFile(e.target.files[0])}
                required
              />
              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                  Upload
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

        {/* Gallery Table */}
        <div className="w-[90%] mx-auto">
          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Preview</th>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Type</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {gallery.length > 0 ? (
                gallery.map((item) => (
                  <tr key={item._id} className="hover:bg-gray-50">
                    <td className="p-3 border">
                      {item.type === "photo" ? (
                        <img
                          src={`http://localhost:5000/uploads/gallery/${item.fileName}`}
                          className="h-16 w-24 object-cover rounded-md shadow"
                        />
                      ) : (
                        <video
                          src={`http://localhost:5000/uploads/gallery/${item.fileName}`}
                          className="h-16 w-24 object-cover rounded-md shadow"
                          controls
                        />
                      )}
                    </td>
                    <td className="p-3 border font-semibold">{item.name}</td>
                    <td className="p-3 border">{item.type}</td>
                    <td className="p-3 border text-center">
                      <button
                        className="text-red-600 font-medium"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center p-3">
                    No items found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
