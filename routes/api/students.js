const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

router.get('/', studentsCtrl.index);

module.exports = router;