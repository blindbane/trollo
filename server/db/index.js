const mongoose = require('mongoose');
const Troll = require('./models/Troll');
mongoose.connect(process.env.MONGO_URI);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to db');
});

var trollBill = new Troll({ body: 'What a troll' });

trollBill.save((err, troll) => {
  if (err) return console.error(err);
  return;
});

Troll.find((err, trollBill) => {
  if (err) return console.error(err);
  console.log(trollBill);
});

Troll.find({ body: /^What/ }, (err, troll) => {
  if (err) return console.error(err);
  console.log('found a troll  ', troll);
});
