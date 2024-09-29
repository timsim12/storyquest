// backindex.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Initialize OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
});

// Define a route to handle API requests from the frontend
app.post('/api/openai', async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are an assistant designed to help young children from preschool to 1st grade learn and understand new information. Use simple language, short sentences, and a friendly, encouraging tone. Summarize text in a way that is easy for young children to understand, and create multiple choice questions that are fun, clear, and appropriate for their learning level. Always be supportive and enthusiastic, as if you are their teacher or learning buddy.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 200,
    });

    // Send the API response back to the frontend
    res.json(response);
  } catch (error) {
    console.error(
      'OpenAI API Error:',
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ error: 'An error occurred while processing your request.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});