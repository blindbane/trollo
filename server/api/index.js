const router = require('express').Router()

router.get('/trolls', (req, res) =>
  res.send({
    trolls: [
      {
        id: 1,
        description: 'the best troll',
      },
      {
        id: 2,
        description: 'the second best troll',
      },
    ],
  }),
);

module.exports = router