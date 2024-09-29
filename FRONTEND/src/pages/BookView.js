import React, { useState, useRef, useEffect } from 'react';
import Header from "../components/Header";
import { callOpenAIAPI } from '../api';
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import StarImage from '../components/StarImage';

function BookView({ title, author, cover, content, stars }) {
    const [quizData, setQuizData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [attempts, setAttempts] = useState(0);
    const [resultMessage, setResultMessage] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
    const [quizLocked, setQuizLocked] = useState(false); // State to lock the quiz once done
    const [selectedWord, setSelectedWord] = useState(null);
    const [wordDefinition, setWordDefinition] = useState(null);
    const [definitionPosition, setDefinitionPosition] = useState({ x: 0, y: 0 }); // Position for floating definition box
    const [finishedReadingClicked, setFinishedReadingClicked] = useState(false); // Track if the button has been clicked

    const containerRef = useRef(null);

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
        setFinishedReadingClicked(true); // Disable the "Finished Reading" button after clicking it

        try {
            const response = await callOpenAIAPI(
                `Please provide three summary options for the following text, labeled A, B, and C. Make sure one of them is the correct summary, and clearly label it as "(best summary)". The other two summaries should be incorrect and introduce elements or characters that were not part of the story. Each summary should be a maximum of 1-2 sentences or 15 words. 
                Important: Only one summary should be true and clearly marked as "(best summary)". The other two must be inaccurate.
                The summaries should be easy to understand and suitable for preschool to 1st-grade children. The text is: "${content}".`
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

            // Perform validation to ensure the correct answer is marked accurately
            if (correctIndex === null || correctIndex < 0 || correctIndex >= cleanedChoices.length) {
                throw new Error("Unable to identify the correct answer in the response. Please check the summaries.");
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

    // Function to handle clicking on a word to display definition
    const handleWordClick = async (e) => {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const selectedText = range.toString().trim();

            if (selectedText) {
                // Extract the full word around the selection if only a part is selected
                const fullWord = getFullWordAtSelection(range);
                setSelectedWord(fullWord);
                await fetchWordDefinition(fullWord);
                // Set position for the definition box
                setDefinitionPosition({
                    x: e.pageX + 20, // Move the definition box 20 pixels to the right
                    y: e.pageY - 50,
                });
            } else {
                // If user clicked between words, clear selection and definition
                setSelectedWord(null);
                setWordDefinition(null);
            }
        }
    };

    // Helper function to get the full word at a selection
    const getFullWordAtSelection = (range) => {
        const node = range.startContainer;
        if (node.nodeType === Node.TEXT_NODE) {
            const text = node.textContent;
            const startOffset = range.startOffset;
            const endOffset = range.endOffset;

            // Find the start and end of the word
            let wordStart = startOffset;
            while (wordStart > 0 && /\w/.test(text[wordStart - 1])) {
                wordStart--;
            }

            let wordEnd = endOffset;
            while (wordEnd < text.length && /\w/.test(text[wordEnd])) {
                wordEnd++;
            }

            return text.slice(wordStart, wordEnd);
        }
        return '';
    };

    // Function to fetch the definition of a selected word using OpenAI
    const fetchWordDefinition = async (word) => {
        // If the word is likely a name, skip definition lookup
        if (/^[A-Z][a-z]*$/.test(word)) {
            setWordDefinition("No definition found.");
            return;
        }

        try {
            const response = await callOpenAIAPI(
                `Provide a simple and child-friendly definition for the word "${word}". The definition should be easy for a preschool to 1st-grade child to understand.`
            );
            const definition = response.choices[0].message.content.trim();
            setWordDefinition(definition);
        } catch (error) {
            console.error('Error fetching word definition:', error);
            setWordDefinition("An error occurred while fetching the definition.");
        }
    };

    const addLineBreak = (string) =>
        string.split('\n').map((subStr, index) => {
            return (
                <React.Fragment key={index}>
                    {subStr}
                    <br />
                </React.Fragment>
            );
        });

        const auth = getAuth();
        const user = auth.currentUser;
        const db = getFirestore();
        
        const [quiz, setQuiz] = useState(null);
    
        useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                if (user) {
                    setQuiz(<>
                            <div className="flex justify-center mt-[20px]">
                                <button
                                    onClick={generateQuiz}
                                    className="bg-blue-500 text-white p-[10px] rounded-[14px] hover:bg-blue-600"
                                    disabled={finishedReadingClicked} // Disable after clicking once
                                >
                                    Finished Reading
                                </button>
                            </div>

                            <h1 className="mt-[40px] mb-[24px] text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">Reading Quiz</h1>
                        </>
                    );
                } else {
                    setQuiz(null);
                }
            });
    
            return () => unsubscribe();
        }, [auth]);
    

    return (
        <div className="font-fredoka tracking-widest" ref={containerRef} onMouseUp={handleWordClick}>
            <Header />
            <div className="bg-white mt-[20px] mx-[20%] rounded-[20px] p-[20px] font-fredoka tracking-widest mb-[20px]">
                <Link to="/Books" className="bg-red-400 p-[14px] rounded-[14px] mt-[14px] hover:bg-red-300 transition-all duration-200">Back</Link>
                <div className="capitalize ml-[20%]">
                    <h1 className="text-[40px] font-bold text-left text-[#5087D0] drop-shadow-lg">{title}</h1>
                    <h1 className="mb-[12px]">{`by: ${author}`}</h1>
                    <div className="flex mb-[24px]">
                        {Array.from({ length: stars}, (_, index) => (
                            <StarImage className="w-[8px]" />
                        ))}
                    </div>
                </div>
                <img src={`/covers/${cover}`} alt={title} className="rounded-[20px] w-[60%] max-w-[400px] mx-auto mb-[24px] border-8 border-yellow-500"/>                
                <p className="text-[20px] text-center mb-[30px]">{addLineBreak(content)}</p>

                {selectedWord && wordDefinition && (
                    <div
                        className="floating-definition-box p-[10px] bg-yellow-100 rounded shadow-lg"
                        style={{
                            position: "absolute",
                            left: definitionPosition.x,
                            top: definitionPosition.y,
                            maxWidth: "300px",
                            zIndex: 1000,
                        }}
                    >
                        <strong>Word: </strong>{selectedWord} <br />
                        <strong>Definition: </strong>{wordDefinition}
                    </div>
                )}

                {quiz}

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
                        {quizLocked && (
                            <div className="flex justify-center mt-[20px]">
                                <Link to="/Books" className="bg-red-400 p-[10px] rounded-[14px] hover:bg-red-300 transition-all duration-200">
                                    Return to Menu
                                </Link>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default BookView;
