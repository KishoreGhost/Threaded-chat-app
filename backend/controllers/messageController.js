const { encrypt, decrypt } = require('../middlewares/encryption');

const sendMessage = async (req, res) => {
  const { message } = req.body;
  const encryptedMessage = encrypt(message);
  // Save to DB (mock)
  res.status(200).json({ encryptedMessage });
};

const receiveMessage = async (req, res) => {
  const { encryptedMessage } = req.body;
  const decryptedMessage = decrypt(encryptedMessage);
  res.status(200).json({ decryptedMessage });
};

module.exports = { sendMessage, receiveMessage };
