const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  members: [{ userId: String, role: { type: String, enum: ['admin', 'user'], default: 'user' } }],
});

module.exports = mongoose.model('Room', roomSchema);
