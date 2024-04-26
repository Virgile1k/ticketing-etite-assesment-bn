"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ticket = require("../../database/models/ticket");
async function getTicketsForEvent(req, res) {
  try {
    const eventId = req.params.eventId;
    const tickets = await _ticket.Ticket.findAll({
      where: {
        eventId
      }
    });
    res.json(tickets);
  } catch (error) {
    console.error("Error getting tickets for event:", error);
    res.status(500).json({
      error: "Failed to get tickets for event"
    });
  }
}
var _default = exports.default = getTicketsForEvent;