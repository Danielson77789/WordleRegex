'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class score extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  score.init({
    userId: DataTypes.INTEGER,
    guessCount: DataTypes.INTEGER,
    bestScore: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'score',
  });

  score.associate = function(models) {
    // associations can be defined here
    score.belongsTo(models.user, {
      foreignKey: 'userId',
      as: 'user'
    });
  };

  return score;
};