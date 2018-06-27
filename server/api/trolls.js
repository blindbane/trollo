const router = require('express').Router();
const trollCtrl = require('../controllers/trollCtrl');

router.get('/', trollCtrl.getAllTrolls);

module.exports = router;
