import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000');

const TypingIndicator = () => {
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    socket.on('userTyping', () => setIsTyping(true));
    socket.on('userStoppedTyping', () => setIsTyping(false));

    return () => {
      socket.off('userTyping');
      socket.off('userStoppedTyping');
    };
  }, []);

  return <div>{isTyping && <p>Someone is typing...</p>}</div>;
};

export default TypingIndicator;
