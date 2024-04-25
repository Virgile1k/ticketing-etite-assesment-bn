'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // Define associations here if any
      Booking.belongsTo(models.Event);
      Booking.belongsTo(models.User);
    }
  }
  Booking.init({
    // Add any additional fields as needed
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
