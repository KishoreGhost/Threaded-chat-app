import React from "react";

const ChatRoomList = ({ rooms, onJoinRoom }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Available Chat Rooms</h1>
      <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
        {rooms.length > 0 ? (
          rooms.map((room) => (
            <div
              key={room.id}
              className="flex justify-between items-center bg-gray-200 rounded p-2 mb-2"
            >
              <span className="text-lg">{room.name}</span>
              <button
                onClick={() => onJoinRoom(room.id)}
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Join
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No chat rooms available</p>
        )}
      </div>
    </div>
  );
};

export default ChatRoomList;
