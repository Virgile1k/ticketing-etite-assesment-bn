"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _booking = require("../../database/models/booking");
// Import the necessary models

async function createBooking(req, res) {
  try {
    // Extract booking data from request body
    const {
      userId,
      eventId /* Add any additional booking data */
    } = req.body;

    // Check if userId and eventId are provided
    if (!userId || !eventId) {
      return res.status(400).json({
        error: 'userId and eventId are required'
      });
    }

    // Validate userId and eventId if needed

    // Create the booking in the database
    const booking = await _booking.Booking.create({
      userId,
      eventId
      // Add any additional booking data here
    });
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({
      error: 'Failed to create booking'
    });
  }
}
var _default = exports.default = createBooking;