import { useState } from "react";

function InputArea({ onSend, onClear }) {
  const [text, setText] = useState("");

  const handleSend = () => {
    if (text.trim()) {
      onSend(text);
      setText("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown} // Add keydown handler for Enter key
        placeholder="Ask Something..."
        className="flex-1 p-2 bg-gray-700 text-white rounded-lg"
      />
      <button
        onClick={handleSend}
        className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg"
      >
        Send
      </button>
      <button
        onClick={onClear}
        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
      >
        Delete
      </button>
    </div>
  );
}

export default InputArea;
