import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { ClipboardCopy } from "lucide-react"; // Icon for the copy button

const ChatBox = ({ messages }) => {
  const defaultMessage = "Welcome! Let’s Chat";

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 overflow-y-auto h-[calc(100vh-150px)] scrollbar-hide">
      {/* Default message when chat is empty */}
      {messages.length === 0 && (
        <div className="flex items-center justify-center h-full text-white text-2xl text-center">
          {defaultMessage}
        </div>
      )}

      {/* Chat messages */}
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`my-4 p-2 ${
            msg.role === "user"
              ? "self-end max-w-[80%] bg-gray-700 text-white"
              : "self-start w-full bg-transparent text-white space-y-2"
          } rounded-lg`}
        >
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                const codeString = String(children).replace(/\n$/, "");

                return !inline && match ? (
                  <div className="relative">
                    <button
                      onClick={() => handleCopy(codeString)}
                      className="absolute right-2 top-2 bg-gray-800 text-white p-1 rounded-md shadow-md flex items-center space-x-1 hover:bg-gray-700"
                    >
                      <ClipboardCopy size={16} />
                      <span className="text-sm">Copy</span>
                    </button>
                    <SyntaxHighlighter
                      style={dracula}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {msg.text || ""}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};

export default ChatBox;
