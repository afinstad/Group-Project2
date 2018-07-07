'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('products', {
            name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1]
                }
            },
            category: {
                type: Sequelize.TEXT,
                allowNull: false,
                len: [1]
            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false,
                len: [1]
            },
            cost: {
                type: Sequelize.INTEGER,
                allowNull: false,
                len: [1]
            },
            quantity: {
                type: Sequelize.INTEGER,
                allowNull: false,
                len: [1]
            },
            purchase: {
                type: Sequelize.BOOLEAN,
                default: false,
                len: [1]
            },
            photo: {
                type: Sequelize.TEXT,
                allowNull: true
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('products').then(() => queryInterface.dropSchema('shop'));
    }
};