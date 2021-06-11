const express = require('express');
const router = express.Router();
const studentsCtrl = require('../../controllers/api/students');

router.get('/', studentsCtrl.index);
router.post('/', studentsCtrl.create);
router.get("/:id", studentsCtrl.show);
router.get('/:id', studentsCtrl.update);
router.delete('/:id', studentsCtrl.delete);

module.exports = router;