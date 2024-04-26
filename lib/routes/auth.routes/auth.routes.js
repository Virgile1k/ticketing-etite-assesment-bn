"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _Login = _interopRequireDefault(require("../../controllers/auth/Login"));
var _Logout = _interopRequireDefault(require("../../controllers/auth/Logout"));
var _UserProfile = require("../../controllers/User/UserProfile");
var _signup = _interopRequireDefault(require("../../controllers/auth/signup"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const authRoute = (0, _express.Router)();
authRoute.post('/login', _Login.default);
authRoute.post("/signup", _signup.default);
authRoute.post('/logout', _Logout.default);
authRoute.put("/profile", _UserProfile.updateProfile);
authRoute.get("/for/only/profiles", _UserProfile.getProfile);
var _default = exports.default = authRoute;