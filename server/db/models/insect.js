'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Insect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Insect.init({
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
        isTitleCased(nameVal) {
          const words = nameVal.split(" "); //"Hello Word" => ["Hello","World"]
          words.forEach(word => {
            if(word[0] !== word[0].toUpperCase()) {
              throw new Error("Name must be Title Case")
            }
          })
        }
      },
    },
    description: DataTypes.STRING,
    territory: DataTypes.STRING,
    fact: {
      type:DataTypes.STRING(240),
      validate: {
        len: [0, 240]
      }
    },
    millimeters: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: true,
        min:0
      }
    }
  }, {
    sequelize,
    modelName: 'Insect',
  });
  return Insect;
};
