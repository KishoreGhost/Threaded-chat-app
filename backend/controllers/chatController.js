const { encrypt, decrypt } = require('../middlewares/encryption');

// Encrypt message before saving
const saveMessage = async (req, res) => {
  const { message, sender, receiver } = req.body;
  const encryptedMessage = encrypt(message);

  // Mock saving to DB
  const savedMessage = { sender, receiver, message: encryptedMessage };
  console.log('Message saved:', savedMessage);

  res.status(201).json({ message: 'Message saved securely', data: savedMessage });
};

// Decrypt message when retrieving
const getMessages = async (req, res) => {
    const { chatRoomId, limit = 50 } = req.query;
  
    // Mock optimized database query
    const messages = await Message.find({ chatRoomId })
      .sort({ createdAt: -1 })
      .limit(parseInt(limit))
      .exec();
  
    res.status(200).json({ messages });
  };
  
module.exports = { saveMessage, getMessages };
