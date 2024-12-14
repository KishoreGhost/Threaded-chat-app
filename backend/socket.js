const { Server } = require("socket.io");

const handleWebRTCSignaling = require("./controllers/webrtcController");

io.on("connection", (socket) => {
  handleWebRTCSignaling(socket);
});
const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (isValidToken(token)) {
    return next();
  }
  return next(new Error('Authentication error'));
});

function isValidToken(token) {
  // Mock validation for JWT tokens
  return token === process.env.VALID_SOCKET_TOKEN;
}


const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  const {
    saveMessage,
    getChatHistory,
  } = require("./controllers/chatController");

  socket.on("sendMessage", async (data) => {
    await saveMessage(data.room, data.sender, data.content);
    io.to(data.room).emit("receiveMessage", data);
  });

  socket.on("joinRoom", async (room) => {
    const history = await getChatHistory(room);
    socket.emit("chatHistory", history);
  });

  io.on("connection", (socket) => {
    console.log(`User connected: ${socket.id}`);

    socket.on("sendMessage", (data) => {
      io.emit("receiveMessage", data);
    });

    socket.on("disconnect", () => {
      console.log(`User disconnected: ${socket.id}`);
    });
  });
};

module.exports = initializeSocket;
