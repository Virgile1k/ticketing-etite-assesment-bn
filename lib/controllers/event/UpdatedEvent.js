"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _event = require("../../database/models/event");
async function updateEvent(req, res) {
  try {
    const eventId = req.params.id;
    const eventData = req.body;
    const event = await _event.Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      });
    }
    await event.update(eventData);
    res.json(event);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({
      error: 'Failed to update event'
    });
  }
}
var _default = exports.default = updateEvent;