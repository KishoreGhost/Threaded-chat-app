import React, { useState, useEffect } from 'react';

const Notifications = ({ socket }) => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on('newMessage', (message) => {
      setNotifications((prev) => [...prev, message]);
    });

    return () => socket.off('newMessage');
  }, [socket]);

  return (
    <div>
      {notifications.map((notification, index) => (
        <p key={index} className="bg-yellow-100 p-2">
          New message in {notification.room}: {notification.content}
        </p>
      ))}
    </div>
  );
};

export default Notifications;
