"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _booking = require("../../database/models/booking");
async function getBookingsForEvent(req, res) {
  try {
    const eventId = req.params.id;
    const event = await _booking.Event.findByPk(eventId, {
      include: _booking.Booking
    });
    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      });
    }
    const bookings = event.Bookings;
    res.json(bookings);
  } catch (error) {
    console.error('Error getting bookings for event:', error);
    res.status(500).json({
      error: 'Failed to get bookings for event'
    });
  }
}
var _default = exports.default = getBookingsForEvent;