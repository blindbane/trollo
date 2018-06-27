const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  googleId: String,
  givenName: String,
  familyName: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
