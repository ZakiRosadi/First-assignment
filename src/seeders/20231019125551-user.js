'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blogs', [
      {
      projectname: 'John Doe',
       startdate: "2023-10-19",
       enddate: "2023-12-25",
       description: 'anything',
       technologies: 'nodejs',
       picture: 'string',
       createdAt:"2023-10-19",
       updatedAt:"2023-10-19"
      },{
      projectname: 'John Doe',
       startdate: "2023-10-19",
       enddate: "2023-10-29",
       description: 'anything',
       technologies: 'nodejs',
       picture: 'string',
       createdAt: "2023-10-19",
       updatedAt: "2023-10-19"
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blogs', null, {});
  }
};
