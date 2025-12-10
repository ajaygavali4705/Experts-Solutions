"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Trash2, X, Loader2 } from "lucide-react";
import AdminNavbar from "../navbar";

export default function AdminHome() {
  const router = useRouter();
  const [sliderImages, setSliderImages] = useState([]);
  const [showUploader, setShowUploader] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState("");
  const [order, setOrder] = useState(0);
  const [viewImage, setViewImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_BASE = "http://localhost:5000/api";

  useEffect(() => {
    const isCookie = document.cookie.includes("adminLoggedIn=true");
    if (!isCookie) {
      router.replace("/admin");
    } else {
      fetchSliders();
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    document.cookie =
      "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    router.replace("/admin");
  };

  // Fetch all sliders from backend
  const fetchSliders = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API_BASE}/sliders`);
      const data = await res.json();
      
      if (data.success) {
        setSliderImages(data.data);
      }
    } catch (err) {
      setError("Failed to fetch sliders");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Add new slider image
  const handleAddImage = async () => {
    if (!selectedFile) {
      alert("Please choose a file");
      return;
    }
    if (!imageName.trim()) {
      alert("Please enter an image name");
      return;
    }

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", selectedFile);
      formData.append("name", imageName);
      formData.append("order", order);

      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const res = await fetch(`${API_BASE}/sliders`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        alert("Slider added successfully!");
        setSelectedFile(null);
        setImageName("");
        setOrder(0);
        setShowUploader(false);
        fetchSliders(); // Refresh list
      } else {
        alert(data.message || "Failed to add slider");
      }
    } catch (err) {
      alert("Error uploading image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Delete slider
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this slider?")) return;

    try {
      setLoading(true);
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const res = await fetch(`${API_BASE}/sliders/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        alert("Slider deleted successfully!");
        fetchSliders();
      } else {
        alert(data.message || "Failed to delete slider");
      }
    } catch (err) {
      alert("Error deleting slider");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Toggle active status
  const handleToggleStatus = async (id) => {
    try {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token="))
        ?.split("=")[1];

      const res = await fetch(`${API_BASE}/sliders/${id}/toggle`, {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data.success) {
        fetchSliders();
      }
    } catch (err) {
      console.error("Error toggling status:", err);
    }
  };

  return (
    <>
    <AdminNavbar />
      {/* Navbar */}
   
      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Error Display */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 w-[70%] mx-auto">
            {error}
          </div>
        )}

        {/* Title + Add Button */}
        <div className="flex justify-between items-center mb-6 w-[70%] mx-auto">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Slider Image Management</h1>
            <p className="text-gray-600 mt-1">
              Add or remove slider images for the homepage.
            </p>
          </div>

          <button
            onClick={() => setShowUploader(!showUploader)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            + Add Image
          </button>
        </div>

        {/* Upload Section */}
        {showUploader && (
          <div className="bg-white p-5 rounded-lg shadow mb-6 border w-[70%] mx-auto border-blue-300">
            <h3 className="text-xl font-semibold mb-3">Upload New Slider Image</h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Select Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Image Name *</label>
                <input
                  type="text"
                  placeholder="Enter image name or description"
                  value={imageName}
                  onChange={(e) => setImageName(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Display Order</label>
                <input
                  type="number"
                  placeholder="0"
                  value={order}
                  onChange={(e) => setOrder(e.target.value)}
                  className="border p-2 rounded w-full"
                />
              </div>

              <button
                onClick={handleAddImage}
                disabled={loading}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:bg-gray-400 flex items-center gap-2"
              >
                {loading && <Loader2 className="animate-spin" size={18} />}
                Add to Slider
              </button>
            </div>
          </div>
        )}

        {/* Slider Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-xl border w-[70%] mx-auto">
          {loading && sliderImages.length === 0 ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-blue-600" size={40} />
            </div>
          ) : (
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                  <th className="px-4 py-3 text-left">ID</th>
                  <th className="px-4 py-3 text-left">Preview</th>
                  <th className="px-4 py-3 text-left">Image Name</th>
                  <th className="px-4 py-3 text-left">Order</th>
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {sliderImages.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="text-center py-10 text-gray-500">
                      No sliders found. Add your first slider image!
                    </td>
                  </tr>
                ) : (
                  sliderImages.map((img, index) => (
                    <tr
                      key={img._id}
                      className="border-b hover:bg-blue-50 transition"
                    >
                      <td className="px-4 py-3 font-medium">{index + 1}</td>

                      <td className="px-4 py-3">
                        <img
                          src={`http://localhost:5000${img.image}`}
                          alt={img.name}
                          className="h-20 w-36 object-cover rounded-lg shadow border"
                        />
                      </td>

                      <td className="px-4 py-3">{img.name}</td>
                      <td className="px-4 py-3">{img.order}</td>
                      
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleToggleStatus(img._id)}
                          className={`px-3 py-1 rounded text-sm font-semibold ${
                            img.isActive
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {img.isActive ? "Active" : "Inactive"}
                        </button>
                      </td>

                      <td className="px-4 py-3 flex items-center gap-3">
                        {/* VIEW BUTTON */}
                        <button
                          onClick={() =>
                            setViewImage(`http://localhost:5000${img.image}`)
                          }
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Eye size={22} />
                        </button>

                        {/* DELETE BUTTON */}
                        <button
                          onClick={() => handleDelete(img._id)}
                          disabled={loading}
                          className="text-red-600 hover:text-red-800 disabled:opacity-50"
                        >
                          <Trash2 size={22} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* IMAGE VIEW MODAL */}
      {viewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl relative max-w-[80%] max-h-[80%]">
            <button
              onClick={() => setViewImage(null)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1 hover:bg-red-700"
            >
              <X size={18} />
            </button>

            <img
              src={viewImage}
              alt="Preview"
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}