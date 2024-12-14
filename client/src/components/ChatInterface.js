import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

import ChatRooms from './ChatRooms';

const ChatInterface = () => {
  const [currentRoom, setCurrentRoom] = useState('general');
  const [rooms] = useState(['general', 'sports', 'technology']);

  useEffect(() => {
    socket.emit('joinRoom', currentRoom);

    socket.on('chatHistory', (history) => setMessages(history));

    return () => socket.emit('leaveRoom', currentRoom);
  }, [currentRoom]);

  return (
    <div>
      <ChatRooms rooms={rooms} currentRoom={currentRoom} setCurrentRoom={setCurrentRoom} />
      {/* Rest of the component */}
    </div>
  );
};


export default ChatInterface;
