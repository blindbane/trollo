const router = require('express').Router();
const trollCtrl = require('../controllers/trollCtrl');

router.get('/', trollCtrl.getAllTrolls).post('/', trollCtrl.addNewTroll);

module.exports = router;
