"use client";

import React, { useState, useEffect } from "react";
import { getAllBlogs, createBlog, deleteBlog } from "../api/blogs";
import AdminNavbar from "../navbar";
import { Eye, Trash2 } from "lucide-react";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [previewBlog, setPreviewBlog] = useState(null);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  // Load blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogs = await getAllBlogs();
        setBlogs(blogs);
      } catch (err) {
        console.error("Error loading blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  const loadBlogs = async () => {
    const data = await getAllBlogs();
    setBlogs(data || []);
  };

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
        clearForm();

        if (res.blog) {
          setBlogs((prev) => [...prev, res.blog]);
        } else {
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

      <div className="w-full flex justify-center p-6">
        <div className="w-[70%]">

          {/* HEADER */}
          <div className="flex justify-between items-center pb-3 mb-6">
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
          <div className="w-full">
            <table className="w-full border-collapse shadow-md rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="p-3 border-b">Image</th>
                  <th className="p-3 border-b">Title</th>
                  <th className="p-3 border-b">Description</th>
                  <th className="p-3 border-b text-center">Actions</th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50">

                    <td className="p-3 border-b">
                      <img
                        src={`http://localhost:5000/uploads/blogs/${blog.image?.fileName || blog.image}`}
                        className="h-16 w-24 object-cover rounded-md shadow"
                      />
                    </td>

                    <td className="p-3 border-b font-semibold">
                      {blog.title}
                    </td>

                    <td className="p-3 border-b text-gray-700">
                      {blog.description.slice(0, 60)}...
                    </td>

                    <td className="p-3 border-b text-center space-x-4">
                      <button
                        className="text-blue-600"
                        onClick={() => setPreviewBlog(blog)}
                      >
                        <Eye size={20} />
                      </button>

                      <button
                        className="text-red-600"
                        onClick={() => handleDelete(blog._id)}
                      >
                        <Trash2 size={20} />
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
      </div>
    </>
  );
}
