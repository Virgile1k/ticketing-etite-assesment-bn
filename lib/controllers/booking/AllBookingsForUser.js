"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _booking = require("../../database/models/booking");
async function getBookingsForUser(req, res) {
  try {
    const userId = req.params.userId;
    const bookings = await _booking.Booking.findAll({
      where: {
        userId
      }
    });
    res.json(bookings);
  } catch (error) {
    console.error('Error getting bookings for user:', error);
    res.status(500).json({
      error: 'Failed to get bookings for user'
    });
  }
}
var _default = exports.default = getBookingsForUser;