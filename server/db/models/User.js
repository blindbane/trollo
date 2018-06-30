const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  givenName: String,
  familyName: String,
  displayName: String,
  avatarUrl: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
