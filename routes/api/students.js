const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

router.get('/', studentsCtrl.index);
router.get('/', studentsCtrl.create);

module.exports = router;