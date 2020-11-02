const express = require('express');
const trainerController = require('../controllers/trainers.controller');
const upload = require('../middleware/multer');
const validate = require('../validation/validation');

const router = express.Router();
router.get('/training-statics', trainerController.getTrainingStatics);
// router.get('/schedules', trainerController.getTrainerBySchedule);

// router.get('/', trainerController.getTrainers);

// router.get('/:id', trainerController.getTrainer);

// router.post(
//   '/',
//   upload.single('image'),
//   validate(),
//   trainerController.createTrainer
// );

// router.delete('/:id', trainerController.deleteTrainer);

// router.put('/:id', upload.single('image'), trainerController.updateTrainer);

// router.get('/topics/:id', trainerController.getTrainerByTopic);

module.exports = router;
