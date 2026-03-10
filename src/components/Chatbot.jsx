import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm CureRoute AI. How can I help you with your medical journey today?", isBot: true }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { text: input, isBot: false };
        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = { 
                text: "I'm processing your request regarding treatment and hospital options. Our AI consultant recommends checking out Aster Medcity for heart-related queries!", 
                isBot: true 
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-6 z-[9999]">
            {/* Chat Window */}
            {isOpen && (
                <div className="bg-white rounded-2xl shadow-2xl border border-border-color w-[350px] overflow-hidden mb-4 flex flex-col transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
                    <div className="bg-primary p-4 text-white flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Sparkles size={20} />
                            <span className="font-bold">CureRoute AI</span>
                        </div>
                        <button onClick={toggleChat} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gray-50/50">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                    msg.isBot 
                                    ? 'bg-white text-text-main border border-border-color shadow-sm' 
                                    : 'bg-primary text-white'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSend} className="p-4 border-t border-border-color flex gap-2 bg-white">
                        <input 
                            type="text" 
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Ask about treatments..." 
                            className="flex-grow p-2 border border-border-color rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                        <button type="submit" className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            )}

            {/* Floating Button */}
            <button 
                onClick={toggleChat}
                className="bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-all duration-300 flex items-center gap-2 group hover:scale-105 active:scale-95"
            >
                <MessageSquare className="group-hover:rotate-12 transition-transform" />
                <span className="font-bold pr-2">Ask CureRoute AI</span>
            </button>
        </div>
    );
};

export default Chatbot;
