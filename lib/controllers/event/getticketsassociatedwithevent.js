"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _event = require("../../database/models/event");
async function getTicketsForEvent(req, res) {
  try {
    const eventId = req.params.id;
    const event = await _event.Event.findByPk(eventId, {
      include: Ticket
    });
    if (!event) {
      return res.status(404).json({
        error: 'Event not found'
      });
    }
    const tickets = event.Tickets;
    res.json(tickets);
  } catch (error) {
    console.error('Error getting tickets for event:', error);
    res.status(500).json({
      error: 'Failed to get tickets for event'
    });
  }
}
var _default = exports.default = getTicketsForEvent;