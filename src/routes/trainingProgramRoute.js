const express = require('express');
const trainingProgramController = require('../controllers/trainingProgramController');

const router = express.Router();

router.post('/', trainingProgramController.createTrainingProgram);

router.get('/', trainingProgramController.getTrainingProgram);

module.exports = router;
