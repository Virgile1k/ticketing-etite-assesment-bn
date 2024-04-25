'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Define associations here if any
      Event.hasMany(models.Ticket);
      Event.hasMany(models.Booking);
    }
  }
  Event.init({
    title: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    ticketAvailability: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
