const { DataTypes } = require('sequelize');

/**
 * This function defines a User model with Sequelize.
 *
 * @param {import('sequelize').Sequelize} sequelize - An instance of Sequelize.
 * @returns {
 *      import('sequelize').ModelCtor<import('sequelize').Model>
 * } The User model defined by Sequelize.
 */
const user = (sequelize) => {
  const user = sequelize.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'email',
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );
  return user;
};

module.exports = user;
