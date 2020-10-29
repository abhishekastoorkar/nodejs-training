const trainingProgramService = require('../services/training.program.service');

async function createTrainingProgram(req, res) {
  console.dir(req.body);
  try {
    const program = await trainingProgramService.createTrainingProgram(
      req.body
    );
    return res.status(201).json({
      program,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getTrainingProgram(req, res) {
  console.dir(req.body);
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
