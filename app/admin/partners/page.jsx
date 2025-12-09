"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, Trash2, X } from "lucide-react"; // Eye icon added
import AdminNavbar from "../navbar";

export default function AdminHome() {
  const router = useRouter();

  useEffect(() => {
    const isCookie = document.cookie.includes("adminLoggedIn=true");
    if (!isCookie) {
      router.replace("/admin");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    document.cookie =
      "adminLoggedIn=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    router.replace("/admin");
  };

  const [sliderImages, setSliderImages] = useState([
    { id: 1, image: "/slider1.png", name: "Banner Image 1" },
    { id: 2, image: "/slider2.png", name: "Banner Image 2" },
  ]);

  const [showUploader, setShowUploader] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageName, setImageName] = useState("");

  const [viewImage, setViewImage] = useState(null); // VIEW POPUP IMAGE

  const handleAddImage = () => {
    if (!selectedFile) return alert("Please choose a file");

    const newImage = {
      id: sliderImages.length + 1,
      image: URL.createObjectURL(selectedFile),
      name: imageName || selectedFile.name,
    };

    setSliderImages([...sliderImages, newImage]);
    setSelectedFile(null);
    setImageName("");
    setShowUploader(false);
  };

  const handleDelete = (id) => {
    setSliderImages(sliderImages.filter((img) => img.id !== id));
  };

  return (
    <>
      <AdminNavbar onLogout={handleLogout} />

      <div className="p-6">
        {/* Title + Add Button */}
        <div className="flex justify-between items-center mb-6 w-[70%] mx-auto">
          <div>
            <h1 className="text-3xl font-bold">Slider Image Management</h1>
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
            <h3 className="text-xl font-semibold mb-3">Upload Image</h3>

            <div className="space-y-4">
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="border p-2 rounded w-full"
              />

              <input
                type="text"
                placeholder="Enter image name or description"
                value={imageName}
                onChange={(e) => setImageName(e.target.value)}
                className="border p-2 rounded w-full"
              />

              <button
                onClick={handleAddImage}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Add to Table
              </button>
            </div>
          </div>
        )}

        {/* Slider Table */}
        <div className="overflow-x-auto bg-white rounded-xl shadow-xl border w-[70%] mx-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Preview</th>
                <th className="px-4 py-3 text-left">Image Name</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody>
              {sliderImages.map((img) => (
                <tr
                  key={img.id}
                  className="border-b hover:bg-blue-50 transition"
                >
                  <td className="px-4 py-3 font-medium">{img.id}</td>

                  <td className="px-4 py-3">
                    <img
                      src={img.image}
                      className="h-20 w-36 object-cover rounded-lg shadow border"
                    />
                  </td>

                  <td className="px-4 py-3">{img.name}</td>

                  <td className="px-4 py-3 flex items-center gap-3">
                    {/* VIEW BUTTON */}
                    <button
                      onClick={() => setViewImage(img.image)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Eye size={22} />
                    </button>

                    {/* DELETE BUTTON */}
                    <button
                      onClick={() => handleDelete(img.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={22} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* IMAGE VIEW MODAL */}
      {viewImage && (
        <div className="fixed inset-0 bg-blur-sm bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-xl relative max-w-[80%] max-h-[80%]">
            <button
              onClick={() => setViewImage(null)}
              className="absolute top-2 right-2 bg-red-600 text-white rounded-full p-1"
            >
              <X size={18} />
            </button>

            <img
              src={viewImage}
              className="max-w-full max-h-[75vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
}
