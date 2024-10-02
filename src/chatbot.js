import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css';

const LLMComponent = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [copySuccess, setCopySuccess] = useState("");

    async function generateAnswer() {
        setAnswer("Loading...");
        setCopySuccess("");  
        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=AIzaSyBkMUrn_-_XuUabT6EYOvHROPc4LNqWEpI",
                method: "post",
                data: {
                    contents: [
                        { parts: [{ text: question }] },
                    ],
                },
            });
            setAnswer(response.data.candidates[0].content.parts[0].text);
        } catch (error) {
            setAnswer("Error generating answer.");
        }
    }

    function copyToClipboard() {
        if (answer) {
            navigator.clipboard.writeText(answer)
                .then(() => setCopySuccess("Answer copied!"))
                .catch(() => setCopySuccess("Failed to copy."));
        }
    }

    return (
        <div className="LLMComponent-container">
            <div className="LLMComponent">
                <h1>CHATBOT</h1>
                <pre className="LLMComponent-answer">{answer || "Your answer will appear here."}</pre>
                <textarea
                    className="LLMComponent-textarea"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    cols="30"
                    rows="10"
                    placeholder="Ask something"
                ></textarea>
                <button className="LLMComponent-button" onClick={generateAnswer}>Generate Answer</button>
                <button className="LLMComponent-copyButton" onClick={copyToClipboard} disabled={!answer}>
                    Copy Answer
                </button>
                {copySuccess && <p className="LLMComponent-copyStatus">{copySuccess}</p>}
            </div>
        </div>
    );
}

export default LLMComponent;
