const model = require('../models');
const trainerModel = model.tbl_trainers;
const topicModel = model.tbl_topics;
const trainTopicModel = model.tbl_trainers_topics;

async function getTrainerByTopic(id) {
  const result = await trainTopicModel.findAll({
    include: {
      model: topicModel,
      required: false,
    },
  });
  console.log(result);
  return result;
}
