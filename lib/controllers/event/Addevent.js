"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _event = require("../../database/models/event");
async function createEvent(req, res) {
  try {
    const {
      title,
      date,
      location,
      ticketAvailability
    } = req.body;
    const event = await _event.Event.create({
      title,
      date,
      location,
      ticketAvailability
    });
    res.status(201).json(event);
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({
      error: 'Failed to create event'
    });
  }
}
var _default = exports.default = createEvent;