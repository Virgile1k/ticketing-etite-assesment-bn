"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _event = require("../../database/models/event");
async function getAllEvents(req, res) {
  try {
    const events = await _event.Event.findAll();
    res.json(events);
  } catch (error) {
    console.error('Error getting all events:', error);
    res.status(500).json({
      error: 'Failed to get events'
    });
  }
}
var _default = exports.default = getAllEvents;