const mongoose = require('mongoose');

const trollSchema = mongoose.Schema({
  body: {
    type: String,
    require: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Troll = mongoose.model('Troll', trollSchema);

module.exports = Troll;
