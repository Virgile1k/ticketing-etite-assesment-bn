"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
const _excluded = ["password"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
const User = _models.default.User;
const hashPassword = async password => {
  const saltRounds = 10; // You can adjust the salt rounds as needed
  return await _bcrypt.default.hash(password, saltRounds);
};
const signup = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    } = req.body;

    // Check if email already exists
    const emailAlreadyExists = await User.findOne({
      where: {
        email
      }
    });
    if (emailAlreadyExists) {
      return res.status(401).json({
        message: "Email already exists"
      });
    }

    // Validate inputs
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(401).json({
        message: "All fields are required"
      });
    }
    if (password !== confirmPassword) {
      return res.status(401).json({
        message: "Passwords do not match"
      });
    }
    if (password.length < 8) {
      return res.status(401).json({
        message: "Your password must be at least 8 characters long."
      });
    }

    // Encrypt the Password
    const hashedPassword = await hashPassword(password);

    // Create user
    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      roleId: 1 // Set roleId to 1 by default
    });

    // Return response
    const _newUser$toJSON = newUser.toJSON(),
      {
        password: _
      } = _newUser$toJSON,
      userData = _objectWithoutProperties(_newUser$toJSON, _excluded);
    return res.status(201).json({
      message: "User created successfully",
      data: userData
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};
var _default = exports.default = signup;