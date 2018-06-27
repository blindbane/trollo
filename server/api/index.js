const router = require('express').Router();
const trolls = require('./trolls');
const auth = require('./auth');

router.use('/trolls', trolls);
router.use('/auth', auth);

module.exports = router;
