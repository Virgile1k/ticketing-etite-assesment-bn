"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Addevent = _interopRequireDefault(require("../../controllers/event/Addevent"));
var _Deleteevent = _interopRequireDefault(require("../../controllers/event/Deleteevent"));
var _Getallevents = _interopRequireDefault(require("../../controllers/event/Getallevents"));
var _Getbookingsassociatedwithevent = _interopRequireDefault(require("../../controllers/event/Getbookingsassociatedwithevent"));
var _Geteventbyid = _interopRequireDefault(require("../../controllers/event/Geteventbyid"));
var _getticketsassociatedwithevent = _interopRequireDefault(require("../../controllers/event/getticketsassociatedwithevent"));
var _UpdatedEvent = _interopRequireDefault(require("../../controllers/event/UpdatedEvent"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const eventRouter = (0, _express.Router)();
eventRouter.post("event/add", _Addevent.default);
eventRouter.delete("/event/:id", _Deleteevent.default);
eventRouter.get("/event/all", _Getallevents.default);
eventRouter.get("eventbookings/:id", _Getbookingsassociatedwithevent.default);
eventRouter.get("event/:id", _Geteventbyid.default);
eventRouter.get("eventtickets/:id", _getticketsassociatedwithevent.default);
eventRouter.put("event/:id", _UpdatedEvent.default);
var _default = exports.default = eventRouter;