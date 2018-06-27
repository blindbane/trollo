const router = require('express').Router();
const trollCtrl = require('../controllers/trollCtrl');

router.get('/trolls', trollCtrl.getAllTrolls);

module.exports = router;
