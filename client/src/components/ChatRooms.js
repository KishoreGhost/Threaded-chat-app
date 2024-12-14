import React from 'react';

const ChatRooms = ({ rooms, currentRoom, setCurrentRoom }) => {
  return (
    <select value={currentRoom} onChange={(e) => setCurrentRoom(e.target.value)}>
      {rooms.map((room) => (
        <option key={room} value={room}>
          {room}
        </option>
      ))}
    </select>
  );
};

export default ChatRooms;
