import React, { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

import ChatRooms from "./ChatRooms";

const ChatInterface = () => {
  const [currentRoom, setCurrentRoom] = useState("general");
  const [rooms] = useState(["general", "sports", "technology"]);

  useEffect(() => {
    socket.emit("joinRoom", currentRoom);

    socket.on("chatHistory", (history) => setMessages(history));

    return () => socket.emit("leaveRoom", currentRoom);
  }, [currentRoom]);

  return (
    <div>
      <ChatRooms
        rooms={rooms}
        currentRoom={currentRoom}
        setCurrentRoom={setCurrentRoom}
      />
      <div className="bg-gray-100 h-screen flex flex-col items-center">
        <div className="bg-white w-full max-w-3xl p-4 shadow-lg flex flex-col gap-4">
          <div className="flex-grow overflow-y-auto">
            {messages.map((msg, index) => (
              <div key={index} className="p-2 border-b">
                <span className="font-bold">{msg.sender}: </span>
                <span>{msg.content}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              className="flex-grow p-2 border rounded"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button
              className="p-2 bg-blue-500 text-white rounded"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
