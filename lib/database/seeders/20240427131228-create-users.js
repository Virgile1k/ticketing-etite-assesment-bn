"use strict";

const {
  v4: uuidv4
} = require("uuid");
const {
  UUIDV4
} = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert("Users", [{
      id: uuidv4(),
      firstName: "John",
      lastName: "Doe",
      email: "virgilendayambaje@gmail.com",
      image: "avatar.jpg",
      gender: "male",
      // the hashed password below is 'Richard@123'
      password: "$2a$12$m8A9MqExqkOUgnKQcUqu1OfHlyPeF34uhB3ztnpdHP4UMLRnvlfuC",
      roleId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};