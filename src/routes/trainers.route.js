const express = require('express');
const trainerController = require('../controllers/trainers.controller');
const upload = require('../middleware/multer');
const validate = require('../validation/validation');

const router = express.Router();

router.get('/trainers', trainerController.getTrainers);

router.get('/trainers/:id', trainerController.getTrainer);

router.post(
  '/trainers',
  upload.single('image'),
  validate(),
  trainerController.createTrainer
);

router.delete('/trainers/:id', trainerController.deleteTrainer);

router.put(
  '/trainers/:id',
  upload.single('image'),
  trainerController.updateTrainer
);
module.exports = router;
