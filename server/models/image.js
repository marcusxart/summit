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
const quest = (sequelize) => {
  const quest = sequelize.define(
    'images',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: () => uuidv4(),
        primaryKey: true,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true,
    },
  );
  return quest;
};

module.exports = quest;
