"use strict";

var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _models = _interopRequireDefault(require("../models"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.users;
const userData = [{
  firstName: "John",
  lastName: "Doe",
  email: "john.doe@example.com",
  password: "password123",
  image: "avatar.jpg",
  gender: "male",
  roleId: 1,
  createdAt: new Date(),
  updatedAt: new Date()
}];
const hashPasswords = async () => {
  for (const user of userData) {
    const hashedPassword = await _bcrypt.default.hash(user.password, 10);
    user.password = hashedPassword;
  }
};
const seedUsers = async () => {
  await hashPasswords();
  try {
    await User.bulkCreate(userData);
    console.log("Users seeded successfully.");
  } catch (error) {
    console.error("Error seeding users:", error);
  }
};
seedUsers();