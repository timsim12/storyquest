import React, { useState } from 'react';
import Header from "../components/Header";
import { callOpenAIAPI } from '../api';
import { Link } from 'react-router-dom';

function BookView({ title, author, cover, content }) {
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [resultMessage, setResultMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [quizLocked, setQuizLocked] = useState(false); // State to lock the quiz once done

    // Function to generate the quiz based on the book content
    const generateQuiz = async () => {
        setLoading(true);
        setQuizData([]);
        setSelectedAnswer(null);
        setAttempts(0);
        setResultMessage(null);
        setErrorMessage(null);
        setCorrectAnswerIndex(null);
        setQuizLocked(false); // Unlock the quiz if a new quiz is generated

        try {
            const response = await callOpenAIAPI(
                `Please provide three summary options for the following text, labeled A, B, and C. Make sure one of them is the best summary, and label it as "(best summary)". Each summary should be a maximum of 1-2 sentences or 15 words. Make sure each summary is significantly different, highlighting unique aspects or different interpretations of the text. For example, one summary could focus on the actions of a character, another on the moral or outcome, and another on the problem or conflict. The text is: "${content}".`
            );
            const { content: quizContent } = response.choices[0].message;

            // Extract and clean up the quiz choices
            const lines = quizContent.split('\n').filter(line => line.trim() !== "");
            let correctIndex = null;

            // Remove duplicated labels, track correct answer, and clean up the summaries
            const cleanedChoices = lines.map((choice, index) => {
                // Remove any label like "A.", "B.", "C." from the beginning
                const labelRegex = /^[A-C][.)]\s*/i;
                let cleanedChoice = choice.replace(labelRegex, "").trim();

                // Identify if the choice is marked as the best summary
                if (cleanedChoice.toLowerCase().includes("(best summary)")) {
                    correctIndex = index;
                    cleanedChoice = cleanedChoice.replace(/\(best summary\)/i, "").trim();
                }

                // Further clean any non-standard characters like asterisks or other markers
                cleanedChoice = cleanedChoice.replace(/[*]/g, "").trim();

                return cleanedChoice;
            }).slice(0, 3); // Ensure we only use the first three choices

            if (correctIndex === null) {
                throw new Error("Unable to identify the correct answer in the response");
            }

            // Set the state with the cleaned choices and the correct index
            setQuizData(cleanedChoices);
            setCorrectAnswerIndex(correctIndex);
        } catch (error) {
            console.error('Error generating quiz:', error);
            alert('An error occurred while processing the quiz generation.');
        } finally {
            setLoading(false);
        }
    };

    const handleAnswerClick = (index) => {
        if (quizLocked) return; // Prevent selection if quiz is locked
        setSelectedAnswer(index);
        setErrorMessage(null); // Clear error message if the user selects an answer
    };

    const handleSubmit = () => {
        if (selectedAnswer === null) {
            setErrorMessage("Please select an answer before submitting.");
            return;
        }

        if (selectedAnswer === correctAnswerIndex) {
            setResultMessage("Correct! Great job!");
            setQuizLocked(true); // Lock the quiz once the correct answer is selected
        } else {
            setAttempts(prev => prev + 1);
            if (attempts === 1) {
                setResultMessage(`Incorrect! The correct answer is: ${String.fromCharCode(65 + correctAnswerIndex)}. ${quizData[correctAnswerIndex]}`);
                setQuizLocked(true); // Lock the quiz after the second wrong attempt
            } else {
                setResultMessage("Incorrect! Try again.");
            }
        }
    };

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
        <div className="font-fredoka tracking-widest">
            <Header />
            <div className="bg-white mt-[20px] mx-[20%] rounded-[20px] p-[20px] font-fredoka tracking-widest">
                <Link to="/Books" className="bg-red-400 p-[14px] rounded-[14px] mt-[14px] hover:bg-red-300 transition-all duration-200">Back</Link>
                <div className="capitalize ml-[20%]">
                    <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <h1 className="mb-[24px]">{`by: ${author}`}</h1>
                </div>
                <img src={`/covers/${cover}`} alt={title} className="rounded-[20px] w-[60%] max-w-[400px] mx-auto mb-[24px] border-8 border-yellow-500"/>                
                <p className="text-[20px] text-center mb-[30px]" onMouseUp={selectedText}>{addLineBreak(content)}</p>
                <button
                    onClick={generateQuiz}
                    className="bg-blue-500 text-white p-[10px] mt-[6px] rounded-[14px] hover:bg-blue-600"
                >
                    Finished Reading
                </button>
                <h1 className="mt-[40px] mb-[24px] text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg ml-[10%]">Reading Quiz</h1>

                {loading && <p>Loading quiz...</p>}

                {quizData.length === 3 && (
                    <div className="quiz-container bg-gray-100 p-[20px] rounded-[10px] mt-[20px] text-left">
                        <h2 className="text-[24px] font-bold mb-[10px]">Which of these is the best summary?</h2>
                        {quizData.map((choice, index) => (
                            <div
                                key={index}
                                onClick={() => handleAnswerClick(index)}
                                className={`p-[10px] mb-[10px] rounded border cursor-pointer ${
                                    selectedAnswer === index
                                        ? 'bg-blue-200 border-blue-500'
                                        : 'bg-white border-gray-300'
                                } ${quizLocked ? 'cursor-not-allowed opacity-50' : ''}`}
                            >
                                <strong>{String.fromCharCode(65 + index)}. </strong>
                                {choice}
                            </div>
                        ))}
                        <div className="flex items-center mt-[10px]">
                            <button
                                onClick={handleSubmit}
                                className="bg-green-500 text-white p-[10px] rounded hover:bg-green-600"
                                disabled={quizLocked}
                            >
                                Submit Answer
                            </button>
                            {errorMessage && (
                                <span className="ml-4 text-red-500 text-[16px]">{errorMessage}</span>
                            )}
                        </div>
                        {resultMessage && (
                            <div className="mt-[20px] text-[18px] font-bold">
                                {resultMessage}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookView;
