"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _AddBooking = _interopRequireDefault(require("../../controllers/booking/AddBooking"));
var _AllBookingsforEvent = _interopRequireDefault(require("../../controllers/booking/AllBookingsforEvent"));
var _AllBookingsForUser = _interopRequireDefault(require("../../controllers/booking/AllBookingsForUser"));
var _DeleteBooking = _interopRequireDefault(require("../../controllers/booking/DeleteBooking"));
var _SingleBooking = _interopRequireDefault(require("../../controllers/booking/SingleBooking"));
var _UpdateBooking = _interopRequireDefault(require("../../controllers/booking/UpdateBooking"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const bookingRoute = (0, _express.Router)();
bookingRoute.post("/booking/add", _AddBooking.default);
bookingRoute.get("/booking/all", _AllBookingsforEvent.default);
bookingRoute.get("/booking/user/:userId", _AllBookingsForUser.default);
bookingRoute.delete("/booking/delete/:id", _DeleteBooking.default);
bookingRoute.get("/booking/:id", _SingleBooking.default);
bookingRoute.patch("/booking/update/:id", _UpdateBooking.default);
var _default = exports.default = bookingRoute;