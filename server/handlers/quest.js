const asyncHandler = require('express-async-handler');
const db = require('../models');

exports.createQuest = asyncHandler(async (req, res) => {
  const { body } = req;
  const { title, points, desc, image, takenPhoto, subTitle } = body;

  try {
    const t = await db.sequelize.transaction();
    await db.quests.create(
      { title, points, desc, image, takenPhoto, subTitle },
      { transaction: t },
    );
    await t.commit();
    res.send({
      message: 'A quest created successfully.',
    });
  } catch (error) {
    await t.rollback();
    throw err;
  }
});

exports.getQuests = asyncHandler(async (req, res) => {
  const quests = await db.quests.findAll({
    order: [['createdAt', 'ASC']], // Sort by 'createdAt' in ascending order
  });
  res.status(200).json(quests);
});
