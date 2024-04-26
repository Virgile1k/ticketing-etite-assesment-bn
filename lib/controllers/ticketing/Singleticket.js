"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ticket = require("../../database/models/ticket");
async function getTicketById(req, res) {
  try {
    const ticketId = req.params.id;
    const ticket = await _ticket.Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({
        error: 'Ticket not found'
      });
    }
    res.json(ticket);
  } catch (error) {
    console.error('Error getting ticket by ID:', error);
    res.status(500).json({
      error: 'Failed to get ticket'
    });
  }
}
var _default = exports.default = getTicketById;