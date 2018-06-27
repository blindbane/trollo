const Troll = require('../db/models/Troll');

const getAllTrolls = (req, res) => {
  Troll.find()
    .then(trolls => {
      res.send({ trolls });
    })
    .catch(err => {
      console.error('Error fetching all trolls');
      res.status(501).send(err);
      return;
    });
};

const addNewTroll = (req, res) => {
  const { body } = req.body;
  const newTroll = new Troll({ body });
  newTroll
    .save()
    .then(troll => {
      return res.send({ troll });
    })
    .catch(err => {
      console.error(err);
      res.status(501).send(err);
      return;
    });
};

module.exports = {
  addNewTroll,
  getAllTrolls,
};
