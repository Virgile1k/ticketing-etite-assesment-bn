"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _event = require("../../database/models/event");
async function deleteEvent(req, res) {
  try {
    const eventId = req.params.id;
    const event = await _event.Event.findByPk(eventId);
    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      });
    }
    await event.destroy();
    res.json({
      message: 'Event deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({
      error: 'Failed to delete event'
    });
  }
}
var _default = exports.default = deleteEvent;