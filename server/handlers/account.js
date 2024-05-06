const asyncHandler = require('express-async-handler');
const db = require('../models');
const { ValidationError, BadRequestError } = require('../exceptions/errors');
const { hashPassword, checkPassword } = require('../utils/password');

exports.createUser = asyncHandler(async (req, res) => {
  const { body } = req;
  const { username } = body;

  const user = await db.users.findOne({
    where: { username },
  });

  if (user) throw new ValidationError('An account already exists');
  body.password = await hashPassword(body.password);
  try {
    const t = await db.sequelize.transaction();
    await db.users.create(body, { transaction: t });
    await t.commit();
    res.send({
      message: 'Account created successfully.',
    });
  } catch (error) {
    await t.rollback();
    throw err;
  }
});

exports.signIn = asyncHandler(async (req, res) => {
  const { body } = req;
  const { username, password } = body;
  const user = await db.users.findOne({
    where: { username },
  });
  if (!user || !(await checkPassword(password, user.password))) {
    throw new ValidationError('Invalid username or password');
  }
  res.send({
    message: 'Login successful.',
    data: user,
  });
});
