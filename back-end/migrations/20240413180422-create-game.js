'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('games', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      goodOne: {
        allowNull: false,
        type: Sequelize.STRING
      },
      goodTwo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      goodThree: {
        allowNull: false,
        type: Sequelize.STRING
      },
      goodFour: {
        allowNull: false,
        type: Sequelize.STRING
      },
      goodFive: {
        allowNull: false,
        type: Sequelize.STRING
      },
      badOne: {
        allowNull: false,
        type: Sequelize.STRING
      },
      badTwo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      badThree: {
        allowNull: false,
        type: Sequelize.STRING
      },
      badFour: {
        allowNull: false,
        type: Sequelize.STRING
      },
      badFive: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('games');
  }
};