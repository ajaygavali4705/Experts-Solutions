"use client";

import React, { useState, useEffect } from "react";
import { getAllBlogs, createBlog, deleteBlog } from "../api/blogs";
import AdminNavbar from "../navbar";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [previewBlog, setPreviewBlog] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Load blogs
  const loadBlogs = async () => {
    const data = await getAllBlogs();
    setBlogs(data.blogs || []);
  };

useEffect(() => {
  const fetchBlogs = async () => {
    try {
      const res = await getAllBlogs();
setBlogs(res.blogs || []);
    } catch (err) {
      console.error("Error loading blogs:", err);
    }
  };

  fetchBlogs();
}, []);



  // Clear form
  const clearForm = () => {
    setTitle("");
    setDescription("");
    setImage(null);
  };

  // Add blog
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!title.trim()) return alert("Enter title");
  if (!description.trim()) return alert("Enter description");
  if (!image) return alert("Select an image");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("image", image);

  try {
    const res = await createBlog(formData);

    if (res.success) {
      alert("Blog created successfully!");
      setShowForm(false);
      setTitle("");
      setDescription("");
      setImage(null);

      // Append the new blog directly to state
      if (res.blog) {
        setBlogs((prev) => [...prev, res.blog]);
      } else {
        // fallback: reload all blogs
        loadBlogs();
      }
    } else {
      alert(res.message || "Failed to add blog");
    }
  } catch (err) {
    console.error(err);
    alert("Server error while adding blog");
  }
};


  // Delete
  const handleDelete = async (id) => {
    if (confirm("Are you sure to delete?")) {
      await deleteBlog(id);
      loadBlogs();
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="w-full p-6">

        {/* HEADER */}
        <div className="flex justify-between items-center border-b pb-3 mb-6">
          <h1 className="text-2xl font-bold">Blog Management</h1>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={() => setShowForm(true)}
          >
            + Add Blog
          </button>
        </div>

        {/* ADD BLOG FORM */}
        {showForm && (
          <div className="w-full bg-white border p-5 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold mb-4">Add New Blog</h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="text"
                placeholder="Blog Title"
                className="w-full border p-2 rounded-md"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />

              <textarea
                placeholder="Blog Description..."
                className="w-full border p-2 rounded-md h-32"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />

              <div>
                <label className="block mb-2 font-medium">Blog Image</label>
                <input
                  type="file"
                  accept="image/*"
                  className="border p-2 rounded-md w-full"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>

              <div className="flex gap-3">
                <button className="bg-green-600 text-white px-4 py-2 rounded-md">
                  Add Blog
                </button>

                <button
                  className="bg-gray-400 text-white px-4 py-2 rounded-md"
                  onClick={() => {
                    setShowForm(false);
                    clearForm();
                  }}
                  type="button"
                >
                  Cancel
                </button>
              </div>

            </form>
          </div>
        )}

        {/* BLOG TABLE */}
        <div className="w-[80%] mx-auto">
          <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border">Image</th>
                <th className="p-3 border">Title</th>
                <th className="p-3 border">Description</th>
                <th className="p-3 border text-center">Actions</th>
              </tr>
            </thead>

<tbody>
  {blogs.map((blog) => (
    <tr key={blog._id} className="hover:bg-gray-50">

      <td className="p-3 border">
        <img
          src={`http://localhost:5000/uploads/blogs/${blog.image.fileName}`}
          className="h-16 w-24 object-cover rounded-md shadow"
        />
      </td>

      <td className="p-3 border font-semibold">
        {blog.title}
      </td>

      <td className="p-3 border text-gray-700">
        {blog.description.slice(0, 60)}...
      </td>

      <td className="p-3 border text-center space-x-3">
        <button
          className="text-blue-600 font-medium"
          onClick={() => setPreviewBlog(blog)}
        >
          View
        </button>

        <button
          className="text-red-600 font-medium"
          onClick={() => handleDelete(blog._id)}
        >
          Delete
        </button>
      </td>

    </tr>
  ))}
</tbody>

          </table>
        </div>

        {/* VIEW MODAL */}
        {previewBlog && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center">
            <div className="bg-white w-[450px] rounded-lg shadow-lg p-5">
              <h2 className="text-xl font-bold mb-3">{previewBlog.title}</h2>

             <img
  src={`http://localhost:5000/uploads/blogs/${previewBlog.image.fileName}`}
  className="w-full h-48 object-cover rounded-md mb-4"
/>


              <p className="text-gray-700 whitespace-pre-line">
                {previewBlog.description}
              </p>

              <button
                className="bg-black text-white px-4 py-2 rounded-md mt-4"
                onClick={() => setPreviewBlog(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
