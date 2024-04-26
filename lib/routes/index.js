"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _auth = _interopRequireDefault(require("./auth.routes/auth.routes"));
var _ticketing = _interopRequireDefault(require("./ticketing.routes /ticketing.routes"));
var _event = _interopRequireDefault(require("./event.routes/event.routes"));
var _booking = _interopRequireDefault(require("./booking.routes/booking.routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
router.use("/user", _auth.default);
router.use("/ticketing", _ticketing.default);
router.use("/eventing", _event.default);
router.use("/bookings", _booking.default);
var _default = exports.default = router;