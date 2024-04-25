"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _bycrypt = _interopRequireDefault(require("../../utils/bycrypt.utils"));
var _jwt = _interopRequireDefault(require("../../utils/jwt.util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.User;
const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const validatePassword = password => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;
  return passwordRegex.test(password);
};
const login = async (req, res) => {
  try {
    const {
      email,
      password
    } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        message: 'Please provide both email and password'
      });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({
        message: 'Invalid email format. Please provide a valid email address'
      });
    }
    if (!validatePassword(password)) {
      return res.status(400).json({
        message: 'Invalid password. Please provide a password that is at least 8 characters long and includes at least one uppercase letter, one lowercase letter, one digit, and one special character.'
      });
    }
    const user = await User.findOne({
      where: {
        email
      }
    });
    if (!user) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
    const passwordMatch = await _bycrypt.default.verifyPassword(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: 'Invalid email or password'
      });
    }
    const token = _jwt.default.generateToken({
      id: user.id,
      fullname: `${user.firstName} ${user.lastName}`,
      email: user.email,
      roleId: user.roleId
    }, '1y');
    res.cookie('token', token, {
      httpOnly: true,
      secure: true
    });
    return res.status(200).json({
      message: 'Login successful',
      token
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
var _default = exports.default = login;