"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Addticket = _interopRequireDefault(require("../../controllers/ticketing/Addticket"));
var _Alltickets = _interopRequireDefault(require("../../controllers/ticketing/Alltickets"));
var _deleteticket = _interopRequireDefault(require("../../controllers/ticketing/deleteticket"));
var _Singleticket = _interopRequireDefault(require("../../controllers/ticketing/Singleticket"));
var _Updateticket = _interopRequireDefault(require("../../controllers/ticketing/Updateticket"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ticketingRoute = (0, _express.Router)();
ticketingRoute.post("/add/ticket", _Addticket.default);
ticketingRoute.get("/tickets/event/:eventId", _Alltickets.default);
ticketingRoute.delete("/ticket/:id", _deleteticket.default);
ticketingRoute.get("/getticket/:id", _Singleticket.default);
ticketingRoute.patch("/ticket/update/:id", _Updateticket.default);
var _default = exports.default = ticketingRoute;