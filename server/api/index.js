const router = require('express').Router();
const trolls = require('./trolls');

router.use('/trolls', trolls);

module.exports = router;
