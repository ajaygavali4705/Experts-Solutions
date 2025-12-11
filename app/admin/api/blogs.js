// app/admin/api/blogs.js

const API_URL = "http://localhost:5000/api";

// Get token from cookies
const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

// Get all blogs
export const getAllBlogs = async () => {
  try {
    const res = await fetch(`${API_URL}/blogs`);
    const data = await res.json();

    return data.blogs || data.data || data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
};


// Create Blog
export const createBlog = async (formData) => {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/blogs/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
      credentials: "include",
    });

    const data = await res.json();
    return data; // IMPORTANT FIX
  } catch (error) {
    console.error("Error creating blog:", error);
    throw error;
  }
};

// Delete Blog
export const deleteBlog = async (id) => {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/blogs/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await res.json();
    return data; // IMPORTANT FIX
  } catch (error) {
    console.error("Error deleting blog:", error);
    throw error;
  }
};
