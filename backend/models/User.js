const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  displayName: { type: String },
  profilePicture: { type: String }, // URL to the profile picture
});

module.exports = mongoose.model('User', userSchema);
