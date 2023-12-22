'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tree extends Model {

    static associate(models) {
      // define association here
    }
  };
  Tree.init({
    tree: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    location: DataTypes.STRING,
    heightFt: {
      type: DataTypes.FLOAT,
      validate: {
        min: 0
      }
    },
    groundCircumferenceFt: {
      type:DataTypes.FLOAT,
      validate: {
        min: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Tree',
  });
  return Tree;
};
