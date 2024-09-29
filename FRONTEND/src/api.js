import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const callOpenAIAPI = async (prompt) => {
    try {
        const response = await axios.post(`${API_URL}/api/openai`, { prompt });
        return response.data;
    } catch (error) {
        // Enhanced error handling
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Backend API Response Error:', error.response.data);
        } else if (error.request) {
            // Request was made but no response received
            console.error('Backend API No Response:', error.request);
        } else {
            // Something else happened during setup
            console.error('Backend API Setup Error:', error.message);
        }
        throw error;
    }
};
