"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ticket = require("../../database/models/ticket");
async function updateTicket(req, res) {
  try {
    const ticketId = req.params.id;
    const ticketData = req.body;
    const ticket = await _ticket.Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({
        error: 'Ticket not found'
      });
    }
    if (ticketData.status) {
      if (ticketData.status === 'available' || ticketData.status === 'sold') {
        ticket.status = ticketData.status;
      } else {
        return res.status(400).json({
          error: 'Invalid status'
        });
      }
    }
    await ticket.update(ticketData);
    res.json(ticket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    res.status(500).json({
      error: 'Failed to update ticket'
    });
  }
}
var _default = exports.default = updateTicket;