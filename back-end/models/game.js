'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  game.init({
    goodOne: DataTypes.STRING,
    goodTwo: DataTypes.STRING,
    goodThree: DataTypes.STRING,
    goodFour: DataTypes.STRING,
    goodFive: DataTypes.STRING,
    badOne: DataTypes.STRING,
    badTwo: DataTypes.STRING,
    badThree: DataTypes.STRING,
    badFour: DataTypes.STRING,
    badFive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'game',
  });
  return game;
};