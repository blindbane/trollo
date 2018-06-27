const Troll = require('../db/models/Troll');

const getAllTrolls = (req, res) => {
  Troll.find()
    .then(trolls => {
      res.send({ trolls });
    })
    .catch(err => {
      console.error('Error fetching all trolls');
      res.status(501).send(err);
    });
};

module.exports = {
  getAllTrolls,
};
