const { Server } = require('socket.io');

const handleWebRTCSignaling = require('./controllers/webrtcController');

io.on('connection', (socket) => {
  handleWebRTCSignaling(socket);
});


const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  });
  

  io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on('sendMessage', (data) => {
      io.emit('receiveMessage', data);
    });

    socket.on('disconnect', () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

module.exports = initializeSocket;
