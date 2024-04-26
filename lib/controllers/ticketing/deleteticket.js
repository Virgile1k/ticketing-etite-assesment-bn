"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ticket = require("../../database/models/ticket");
async function deleteTicket(req, res) {
  try {
    const ticketId = req.params.id;
    const ticket = await _ticket.Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({
        error: 'Ticket not found'
      });
    }
    await ticket.destroy();
    res.json({
      message: 'Ticket deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting ticket:', error);
    res.status(500).json({
      error: 'Failed to delete ticket'
    });
  }
}
var _default = exports.default = deleteTicket;