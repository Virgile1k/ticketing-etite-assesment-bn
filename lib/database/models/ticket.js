"use strict";

const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    static associate(models) {
      Ticket.belongsTo(models.Event);
    }
  }
  Ticket.init({
    type: DataTypes.STRING,
    price: DataTypes.FLOAT,
    status: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: "Ticket"
  });
  return Ticket;
};