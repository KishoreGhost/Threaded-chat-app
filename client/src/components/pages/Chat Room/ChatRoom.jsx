import React, { useState } from "react";

const ChatRoom = ({ roomName, messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-500 text-white p-4 text-center font-bold">
        {roomName}
      </header>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.length > 0 ? (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded mb-2 ${
                msg.isUser
                  ? "bg-blue-100 self-end text-right"
                  : "bg-gray-200 self-start"
              }`}
            >
              <p>{msg.text}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No messages yet</p>
        )}
      </div>
      <footer className="p-4 flex items-center bg-gray-200">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </footer>
    </div>
  );
};

export default ChatRoom;

