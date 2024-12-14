const users = {};

const handleWebRTCSignaling = (socket) => {
  socket.on('joinRoom', (roomId) => {
    if (!users[roomId]) users[roomId] = [];
    users[roomId].push(socket.id);
    socket.join(roomId);

    socket.emit('usersInRoom', users[roomId].filter((id) => id !== socket.id));
  });

  socket.on('sendOffer', (data) => {
    socket.to(data.target).emit('receiveOffer', data.offer);
  });

  socket.on('sendAnswer', (data) => {
    socket.to(data.target).emit('receiveAnswer', data.answer);
  });

  socket.on('disconnect', () => {
    for (const room in users) {
      users[room] = users[room].filter((id) => id !== socket.id);
    }
  });
};

module.exports = handleWebRTCSignaling;
