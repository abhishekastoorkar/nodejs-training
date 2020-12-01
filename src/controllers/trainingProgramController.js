const trainingProgramService = require('../services/trainingProgramService');

async function createTrainingProgram(req, res) {
  console.dir(req.body);
  try {
    await trainingProgramService.createTrainingProgram(req.body);
    return res.status(201).json('training program created');
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTrainingProgram(req, res) {
  try {
    const programs = await trainingProgramService.getTrainigs();
    return res.status(200).json({
      programs,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createTrainingProgram: createTrainingProgram,
  getTrainingProgram: getTrainingProgram,
};
