'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [
        {
        name: 'John Doe',
        email: 'zaki@gmail.com',
        password: 'passwword',
        createdAt:"2023-10-19",
        updatedAt:"2023-10-19"  
       },{
        name: 'John Doe',
        email: 'zaki@gmail.com',
        password: 'passwword',
        createdAt:"2023-10-19",
        updatedAt:"2023-10-19"
     }
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('users', null, {});
     
  }
};
