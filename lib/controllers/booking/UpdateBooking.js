"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _booking = require("../../database/models/booking");
async function updateBooking(req, res) {
  try {
    const bookingId = req.params.id;
    const {
      cancelled /* Add any other data needed for updating */
    } = req.body;
    const booking = await _booking.Booking.findByPk(bookingId);
    if (!booking) {
      return res.status(404).json({
        error: 'Booking not found'
      });
    }
    if (cancelled) {
      booking.status = 'cancelled';
    } else {
      console.log("no need for update");
    }
    await booking.save();
    res.json(booking);
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({
      error: 'Failed to update booking'
    });
  }
}
var _default = exports.default = updateBooking;