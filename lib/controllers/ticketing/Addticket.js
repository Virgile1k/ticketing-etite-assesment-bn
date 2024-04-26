"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ticket = require("../../database/models/ticket");
async function addTicket(req, res) {
  try {
    const {
      type,
      price,
      quantity,
      description,
      image,
      eventId
    } = req.body;
    const ticket = await _ticket.Ticket.create({
      type,
      price,
      status: "available",
      quantity,
      description,
      image,
      eventId
    });
    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error adding ticket:", error);
    res.status(500).json({
      error: "Failed to add ticket"
    });
  }
}
var _default = exports.default = addTicket;