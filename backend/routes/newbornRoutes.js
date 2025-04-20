const express = require('express');
const router = express.Router();
const { registerNewborn, getAllNewborns,getTodayNewborns,getNewbornByParent } = require('../controllers/newbornController');

router.post('/register', registerNewborn);
router.get('/all', getAllNewborns);
router.get('/today', getTodayNewborns);
router.post('/parent', getNewbornByParent);


module.exports = router;
