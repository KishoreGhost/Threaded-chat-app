const Message = require('../models/Message');

const addReaction = async (messageId, reaction) => {
  const message = await Message.findById(messageId);
  if (!message.reactions) message.reactions = [];
  message.reactions.push(reaction);
  await message.save();
};

const editMessage = async (messageId, newContent) => {
  const message = await Message.findById(messageId);
  message.content = newContent;
  await message.save();
};

const deleteMessage = async (messageId) => {
  await Message.findByIdAndDelete(messageId);
};

module.exports = { addReaction, editMessage, deleteMessage };
