import { useState } from "react";
import ChatBox from "./components/ChatBox";
import InputArea from "./components/InputArea";

function App() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async (userMessage) => {
    const newMessage = { role: "user", text: userMessage };
    setMessages((prev) => [...prev, newMessage]);

    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userMessage }),
        }
      );
      const data = await response.json();
      const botMessage = { role: "bot", text: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Error: Unable to fetch response." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => setMessages([]);

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <header className="py-4 text-center text-2xl font-bold bg-gray-800 shadow-md">
        AI-Chatbot
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-hidden w-full max-w-2xl mx-auto p-4">
        <ChatBox messages={messages} isLoading={isLoading} />
      </main>

      {/* Input Area */}
      <footer className="w-full max-w-2xl mx-auto p-4 bg-transparent">
        <InputArea onSend={handleSend} onClear={handleClear} />
      </footer>
    </div>
  );
}

export default App;
