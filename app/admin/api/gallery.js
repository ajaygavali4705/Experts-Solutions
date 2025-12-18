const API_URL = "https://expert-solution-website-backend.onrender.com/api";

// Get token from cookies
const getToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1];
};

// Get all gallery items
export const getAllGallery = async () => {
  try {
    const token = getToken();

    const res = await fetch(`${API_URL}/gallery`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await res.json();
     console.log("Gallery data fetched:", data);
    if (Array.isArray(data.data)) {
      return data.data;
    } else if (Array.isArray(data.gallery)) {
      return data.gallery;
    } else if (Array.isArray(data)) {
      return data;
    } else {
      console.error("Invalid gallery response format:", data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching gallery:", error);
    return [];
  }
};



// Add gallery item (image or video)
export const addGalleryItem = async (formData) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/gallery/add`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // content-type will be set automatically
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding gallery item:", error);
    throw error;
  }
};

// Delete gallery item
export const deleteGalleryItem = async (id) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/gallery/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error deleting gallery item:", error);
    throw error;
  }
};
