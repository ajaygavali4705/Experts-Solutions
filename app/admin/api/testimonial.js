// app/admin/api/testimonial.js

const API_URL = "https://expert-solution-website-backend.onrender.com/api";

// Get token from cookies (same as blogs)
const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

// Get all testimonials
export const getAllTestimonials = async () => {
  try {
    const res = await fetch(`${API_URL}/testimonials`);
    const data = await res.json();

    return data.data || [];
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return [];
  }
};

// Create testimonial
export const createTestimonial = async (testimonialData) => {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/testimonials`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(testimonialData),
      credentials: "include",
    });

    return await res.json();
  } catch (error) {
    console.error("Error creating testimonial:", error);
    throw error;
  }
};

// Delete testimonial
export const deleteTestimonial = async (id) => {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/testimonials/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    return await res.json();
  } catch (error) {
    console.error("Error deleting testimonial:", error);
    throw error;
  }
};
