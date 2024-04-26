'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    image: DataTypes.STRING,
    gender: DataTypes.STRING,
    roleId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'User'
  });
  return User;
};