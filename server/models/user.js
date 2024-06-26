const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
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
    'users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
