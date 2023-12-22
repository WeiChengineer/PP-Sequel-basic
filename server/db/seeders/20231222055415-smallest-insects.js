'use strict';

const { Insect } = require('../models');
const { Op } = require('sequelize')


const insects = [
  {
    name: "Western Pygmy Blue Butterfly",
    description:
    "The smallest member of the butterfly family is thought",
    "to be the pygmy blue butterfly (Brephidium exilis).It can be recognized by the copper brown and dull blue pattern at the bases of both wings.",
    territory:"North America, Hawaii and the middle east",
    fact:"The smallest member of the butterfly family",
    millimeters:12,
  }
]
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Insect.bulkCreate(insects, { validate: true })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Insects', {
      name: {
        [Op.in]: insects.map(insect => insect.name)
      }
    })
    // DELETE FROM Insects
    // WHERE name IN (?)
  }

};
