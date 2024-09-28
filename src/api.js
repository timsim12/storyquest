// src/api.js
import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const callOpenAIAPI = async (prompt) => {
  try {
    const response = await axios.post(`${API_URL}/api/openai`, { prompt });
    return response.data;
  } catch (error) {
    console.error('Backend API Error:', error);
    throw error;
  }
};
