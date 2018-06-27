//sequelize method to populate table

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'exChiffon1',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/ombre.maroon.teal.navy.png'
      },
      {
        name: 'exChiffon2',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/ombre.mustard.png'
      },
      {
        name: 'exChiffon3',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/ombre.navypng'
      },
      {
        name: 'exChiffon4',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/ombre.teal.png'
      },
      {
        name: 'exViscose1',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/black.viscose.png'
      },
      {
        name: 'exViscose2',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/iman.viscose.png'
      },
      {
        name: 'exViscose3',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/olive.viscose.png'
      },
      {
        name: 'exViscose4',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/more.viscose.png'
      },
      {
        name: 'exViscose5',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 19.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/more1.viscose.png'
      },
      {
        name: 'exViscose6',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 20.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/more2.viscose.png'
      },
      {
        name: 'exViscose7',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 21.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/mustard.viscose.png'
      },
      {
        name: 'exJersey1',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/aqua.jersey.png'
      },
      {
        name: 'exJersey2',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/grey.jersey.png'
      },
      {
        name: 'exJersey3',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/jersey.png'
      },
      {
        name: 'exJersey4',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/pink.jersey.png'
      },
      {
        name: 'exPrinted1',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/embroidered.black.png'
      },
      {
        name: 'exPrinted2',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/embroidered.cream.png'
      },
      {
        name: 'exPrinted3',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/embroidered.green.png'
      },
      {
        name: 'exPrinted4',
        category: "Ombre",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: './public/images/embroidered.png'
      }
    ])
  },

  // down: (queryInterface, Sequelize) => {
  //   /*
  //     Add reverting commands here.
  //     Return a promise to correctly handle asynchronicity.

  //     Example:
  //     return queryInterface.bulkDelete('Person', null, {});
  //   */
  // }
};
