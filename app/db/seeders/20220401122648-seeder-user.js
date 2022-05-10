"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = bcrypt.hashSync("rahasia", 10);
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          id: 1,
          name: "John Doe",
          email: "admin@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          name: "willy",
          email: "willy@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
