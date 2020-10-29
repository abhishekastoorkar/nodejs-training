const express = require('express');
const trainerController = require('../controllers/trainers.controller');
const upload = require('../middleware/multer');
const validate = require('../validation/validation');
const trainingProgramController = require('../controllers/training.program.controller');

const router = express.Router();

router.post('/', trainingProgramController.createTrainingProgram);

router.get('/', trainingProgramController.getTrainingProgram);

module.exports = router;
