const express = require('express');
const trainerController = require('../controllers/trainersController');
const upload = require('../middleware/multer');
const validate = require('../validation/validation');

const router = express.Router({ mergeParams: true });
router.get('/training-statics', trainerController.getTrainingStatics);

router.get('/schedules', trainerController.getTrainerBySchedule);

router.get('/:id', trainerController.getTrainer);

router.post(
  '/',
  upload.single('image'),
  validate(),
  trainerController.createTrainer
);

router.delete('/:id', trainerController.deleteTrainer);

router.put('/:id', upload.single('image'), trainerController.updateTrainer);

router.get('/topics/:id', trainerController.getTrainerByTopic);

router.get('/', trainerController.getTrainers);

module.exports = router;
