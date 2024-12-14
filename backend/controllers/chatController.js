const Message = require('../models/Message');

const saveMessage = async (room, sender, content) => {
  const message = new Message({ room, sender, content });
  await message.save();
};

const getChatHistory = async (room) => {
  return await Message.find({ room }).sort({ timestamp: 1 });
};

module.exports = { saveMessage, getChatHistory };
