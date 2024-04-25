"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = exports.getProfile = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _jwt = _interopRequireDefault(require("../../utils/jwt.util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.User;
const updateProfile = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    password,
    image,
    gender,
    birthdate,
    roleId
  } = req.body;
  try {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) {
      return res.status(401).json({
        error: "Missing authorization header"
      });
    }
    const token = tokenHeader.split(" ")[1];
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await User.findByPk(decodedToken.id);
    if (!user) {
      return res.status(401).json({
        error: "Invalid user"
      });
    }
    user.image = image;
    user.gender = gender;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    user.email = email;
    user.roleId = roleId;
    user.birthdate = birthdate;
    await user.save();
    return res.status(200).json({
      message: "Profile updated successfully",
      user
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
};
exports.updateProfile = updateProfile;
const getProfile = async (req, res) => {
  try {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) {
      return res.status(401).json({
        error: "Missing authorization header"
      });
    }
    const token = tokenHeader.split(" ")[1];
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await User.findByPk(decodedToken.id);
    if (!user) {
      return res.status(401).json({
        error: "Invalid user"
      });
    }
    return res.status(200).json({
      message: "Success",
      user
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error"
    });
  }
};
exports.getProfile = getProfile;