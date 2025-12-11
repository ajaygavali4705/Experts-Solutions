"use client";

import React, { useState, useEffect } from "react";
import AdminNavbar from "../navbar";
import { getAllGallery, addGalleryItem, deleteGalleryItem } from "../api/gallery";
import { Eye, Trash2, X, Loader2 } from "lucide-react";

export default function AdminGalleryPage() {
  const [gallery, setGallery] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState("photo");
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  const loadGallery = async () => {
    try {
      const data = await getAllGallery();
      setGallery(Array.isArray(data) ? data : data.data || []);
    } catch (err) {
      console.error("Error loading gallery:", err);
    }
  };

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const data = await getAllGallery();

        if (Array.isArray(data)) {
          setGallery(data);
        } else if (Array.isArray(data.data)) {
          setGallery(data.data);
        } else if (Array.isArray(data.gallery)) {
          setGallery(data.gallery);
        } else {
          console.error("Invalid gallery response:", data);
          setGallery([]);
        }
      } catch (err) {
        console.error("Error loading gallery:", err);
      }
    };

    fetchGallery();
  }, []);

  const clearForm = () => {
    setName("");
    setFile(null);
    setType("photo");
  };

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
        setGallery((prev) => [...prev, res.data]);
      } else {
        alert(res.message || "Upload failed");
      }
    } catch (err) {
      console.error(err);
      alert("Server error while uploading");
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete?")) {
      await deleteGalleryItem(id);
      setGallery((prev) => prev.filter((item) => item._id !== id));
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="w-full p-6 flex justify-center">
        <div className="w-[70%]">

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

          {/* Table */}
          <div className="w-full mx-auto">
            <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 border-b">Preview</th>
                  <th className="p-3 border-b">Name</th>
                  <th className="p-3 border-b">Type</th>
                  <th className="p-3 border-b text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {gallery.length > 0 ? (
                  gallery.map((item) => (
                    <tr key={item._id} className="hover:bg-gray-50">
                      <td className="p-3 border-b">
                        {item.type === "photo" ? (
                          <img
                            src={`http://localhost:5000/uploads/gallery/${item.fileName}`}
                            className="h-16 w-24 object-cover rounded-md"
                          />
                        ) : (
                          <video
                            src={`http://localhost:5000/uploads/gallery/${item.fileName}`}
                            className="h-16 w-24 object-cover rounded-md"
                            controls
                          />
                        )}
                      </td>

                      <td className="p-3 border-b font-semibold">{item.name}</td>
                      <td className="p-3 border-b">{item.type}</td>

                      <td className="p-3 border-b text-center space-x-4">
                        <button
                          className="text-blue-600"
                          onClick={() => alert("Preview Coming Soon")}
                        >
                          <Eye size={20} />
                        </button>

                        <button
                          className="text-red-600"
                          onClick={() => handleDelete(item._id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center p-3 border-b">
                      No items found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

        </div>
      </div>
    </>
  );
}
