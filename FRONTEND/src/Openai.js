// src/Openai.js
import React, { useState } from 'react';
import { callOpenAIAPI } from './api';

function Openai() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!prompt.trim()) {
      alert('Please enter a prompt.');
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const data = await callOpenAIAPI(prompt);
      // Access the response content correctly
      setResult(data.choices[0].message.content);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
      alert('An error occurred while processing your request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h1>OpenAI API with React</h1>
      <textarea
        style={styles.textarea}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
        rows={10}
        cols={50}
      />
      <br />
      <button style={styles.button} onClick={handleSubmit} disabled={loading}>
        {loading ? 'Loading...' : 'Submit'}
      </button>
      {result && (
        <div style={styles.resultContainer}>
          <h2>Response:</h2>
          <pre style={styles.resultText}>{result}</pre>
        </div>
      )}
    </div>
  );
}

export default Openai;

// Inline styles (optional)
const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  textarea: {
    width: '80%',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    marginTop: '10px',
    padding: '10px 20px',
    fontSize: '16px',
  },
  resultContainer: {
    marginTop: '30px',
    textAlign: 'left',
    width: '80%',
    margin: '30px auto 0 auto',
  },
  resultText: {
    backgroundColor: '#f4f4f4',
    padding: '10px',
    whiteSpace: 'pre-wrap',
  },
};