import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { jsPDF } from "jspdf";
import { create } from 'ipfs-http-client';
import Markdown from 'react-markdown';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import Navbar from "../components/Navbar"


interface Message {
    user: string;
    message: string;
}

const genAI = new GoogleGenerativeAI("AIzaSyCDbeb_RBDr1SWJPbgdI0FHSkRlD1KF3Rg");

const Chat = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        // Load messages from local storage on component mount
        const storedMessages = localStorage.getItem('chatMessages');
        if (storedMessages) {
            setMessages(JSON.parse(storedMessages));
        }
    }, []);

    useEffect(() => {
        // Save messages to local storage whenever messages state changes
        localStorage.setItem('chatMessages', JSON.stringify(messages));
    }, [messages]);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleSend = async () => {
        const newUserMessage = { user: 'User', message: input };
        setMessages(prevMessages => [...prevMessages, newUserMessage]);
        setInput('');

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });

            const result = await model.generateContent(input);
            const response = await result.response;
            const aiMessage = response.text();

            const newAiMessage = { user: "AI", message: aiMessage };
            setMessages(prevMessages => [...prevMessages, newAiMessage]);
        } catch (error) {
            console.error("Error processing message with BARD API:", error);
        }
    };


    const exportChatToPDF = async () => {
        const doc = new jsPDF();
        messages.forEach((msg, index) => {
            doc.text(`${msg.user}: ${msg.message}`, 10, 10 + (index * 10));
        });
        const pdfBytes = doc.output('arraybuffer');

        const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' });
        const { path } = await ipfs.add(pdfBytes);
        console.log(`https://ipfs.infura.io/ipfs/${path}`);
    };


    return (<div>
                    <Navbar />
        <div className="h-screen flex flex-col justify-between bg-gray-900 text-white">
            <div className="p-4 ml-12 overflow-y-auto">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className="ml-12 mb-5" // Apply left margin for user messages and right margin for AI messages
                    >
                        <strong className="ml-12">{msg.user}</strong>:
                        <Markdown className="ml-12" children={msg.message} />
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            <div className="p-6 border-t border-gray-700">
                <input
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={e => {
                        if (e.key === 'Enter') {
                            handleSend();
                        }
                    }}
                    type="text"
                    className="border border-gray-300 rounded-md py-3 px-5 mr-5 ml-15 w-3/4 bg-gray-700 text-white"
                    placeholder="Type your message..."
                />
                <button onClick={handleSend} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send
                </button>
                <button onClick={exportChatToPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-2 rounded">
                    Export to PDF
                </button>
            </div>
        </div>
    </div>
    );
};

export default Chat;
