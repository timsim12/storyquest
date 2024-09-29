import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Header from "../components/Header";
import { callOpenAIAPI } from '../api';

function BookView({ title, author, cover, content }) {
    const [quizData, setQuizData] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to generate the quiz based on the book content
    const generateQuiz = async () => {
        setLoading(true);
        setQuizData(null); // Clear any previous quiz data

        try {
            const response = await callOpenAIAPI(
                `Summarize the following text for a child between preschool to 1st grade: "${content}". Provide three possible summary choices, and specify which one is the best summary.`
            );
            const { content: quizContent } = response.choices[0].message;
            setQuizData(quizContent);
        } catch (error) {
            console.error('Error generating quiz:', error);
            alert('An error occurred while processing the quiz generation.');
        } finally {
            setLoading(false);
        }
    }

    const selectedText = () => {
        let selection = window.getSelection().toString();
        if (selection != "") {
            console.log(selection);
        }
    }

    const addLineBreak = (string) =>
        string.split('\n').map((subStr) => {
          return (
            <>
              {subStr}
              <br />
            </>
          );
        });
    
    return (
        <>
            <Header />
            <div className="bg-white mt-[20px] mx-[20%] rounded-[20px] p-[20px] font-fredoka tracking-widest">
                <Link to="/Books" className="bg-red-400 p-[14px] rounded-[8px] mt-[14px] hover:bg-red-300 transition-all duration-200">Back</Link>
                <div className="capitalize ml-[20%]">
                    <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <h1 className="mb-[24px]">{`by: ${author}`}</h1>
                </div>
                <img src={`/covers/${cover}`} alt={title} className="rounded-[20px] w-[60%] max-w-[400px] mx-auto mb-[24px]"/>
                <p className="text-[20px] mx-[10%]" onMouseUp={selectedText}>{addLineBreak(content)}</p>
                <button
                    onClick={generateQuiz}
                    className="bg-blue-500 text-white p-[10px] mt-[10px] rounded hover:bg-blue-600"
                >
                    Finished Reading
                </button>
                <h1 className="mt-[48px] mb-[24px] text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">Reading Quiz</h1>

                {loading && <p>Loading quiz...</p>}

                {quizData && (
                    <div className="quiz-container bg-gray-100 p-[20px] rounded-[10px] mt-[20px] text-left">
                        <h2 className="text-[24px] font-bold mb-[10px]">Which of these is the best summary?</h2>
                        <div className="text-[18px]">
                            {quizData.split('\n').map((line, index) => (
                                <p key={index} className="mb-2">{line}</p>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default BookView;
