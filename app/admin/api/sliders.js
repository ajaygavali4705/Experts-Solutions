const API_URL = 'https://expert-solution-website-backend.onrender.com/api';

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem('adminToken');
};

// Get all sliders
export const getAllSliders = async () => {
  try {
    const res = await fetch(`${API_URL}/sliders`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching sliders:', error);
    throw error;
  }
};

// Create slider
export const createSlider = async (formData) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/sliders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData // Don't set Content-Type, browser will set it with boundary
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error creating slider:', error);
    throw error;
  }
};

// Delete slider
export const deleteSlider = async (id) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/sliders/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error deleting slider:', error);
    throw error;
  }
};

// Update slider
export const updateSlider = async (id, formData) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/sliders/${id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error updating slider:', error);
    throw error;
  }
};

// Toggle slider status
export const toggleSliderStatus = async (id) => {
  try {
    const token = getToken();
    const res = await fetch(`${API_URL}/sliders/${id}/toggle`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error toggling slider:', error);
    throw error;
  }
};