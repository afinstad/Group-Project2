// Ben's File

//sequelize method to populate table

'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        name: 'exChiffon1',
        category: "Chiffon",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Shinx_Premium_Jersey_1024x1024.jpg?v=1486817232',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exChiffon3',
        category: "Chiffon",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Mocha_Brown_non-slip_Premium_Chiffon_1024x1024.jpg?v=1512665257',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exChiffon4',
        category: "Chiffon",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Deep_Dusty_Rose_Premium_Chiffon_Wrap_1024x1024.jpg?v=1501557799',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exViscose1',
        category: "Viscose",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/files/Charcoal_Grey_Premium_Jersey_1024x1024_6c90f034-2aec-4adb-9e9c-6c1f8e56c7ae_large.jpg?v=1492913833',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exViscose2',
        category: "Viscose",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Black_Premium_Woven_Viscose_PSV10_large.jpg?v=1492005257',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exViscose5',
        category: "Viscose",
        description: 'here is where a description would go',
        cost: 19.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Instant_White_Jersey_Hijab_1024x1024.jpg?v=1520555622',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exViscose6',
        category: "Viscose",
        description: 'here is where a description would go',
        cost: 20.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Turquoise_Premium_Chiffon_Wrap_large.jpg?v=1501557020',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exJersey1',
        category: "Jersey",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Olive_Premium_Jersey_Hijab_large.jpg?v=1512659012',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exJersey2',
        category: "Jersey",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Vanilla_Premium_Jersey_1024x1024.jpg?v=1512664959',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exJersey3',
        category: "Jersey",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Charcoal_Grey_Premium_Jersey_f6764a04-0cf7-47d3-accc-46e6ef0abbcd_1024x1024.jpg?v=1512665764',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exPrinted1',
        category: "Printed",
        description: 'here is where a description would go',
        cost: 15.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Casablanca_Chrome_Chiffon_Wrap_1024x1024.jpg?v=1501556193',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exPrinted2',
        category: "Printed",
        description: 'here is where a description would go',
        cost: 16.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Casablanca_Cotton_Modal_Wrap_1024x1024.jpg?v=1501555532',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exPrinted3',
        category: "Printed",
        description: 'here is where a description would go',
        cost: 17.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/articles/Feminist_Muslim_d6aafae5-2714-41d0-b74b-5c0256719506_400x400_crop_center.jpg?v=1523645424',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'exPrinted4',
        category: "Printed",
        description: 'here is where a description would go',
        cost: 18.99,
        quantity: 8000,
        purchase: false,
        photo: 'https://cdn.shopify.com/s/files/1/0872/1324/products/Black_Lace_Luxury_Chiffon_large.jpg?v=1528658930',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('products', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
