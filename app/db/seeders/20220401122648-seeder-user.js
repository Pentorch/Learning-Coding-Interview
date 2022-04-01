"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const password = bcrypt.hashSync("admin123", 10);
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
          name: "Willy",
          email: "willyagustino@gmail.com",
          password: password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
