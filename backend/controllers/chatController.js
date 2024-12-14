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
  const encryptedMessages = [
    { sender: 'User1', message: 'b1f2c3d4...' }, // Example encrypted messages
  ];

  const decryptedMessages = encryptedMessages.map((msg) => ({
    ...msg,
    message: decrypt(msg.message),
  }));

  res.status(200).json({ messages: decryptedMessages });
};

module.exports = { saveMessage, getMessages };
