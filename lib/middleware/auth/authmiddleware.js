"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSuperAdmin = exports.isClient = exports.isAdmin = exports.checkPermission = void 0;
var _models = _interopRequireDefault(require("../../database/models"));
var _jwt = _interopRequireDefault(require("../../utils/jwt.util"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const User = _models.default.User;
const isAdmin = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({
      message: "🚫 Token not provided"
    });
  }
  const token = tokenHeader.split(" ")[1];
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    if (decodedToken && decodedToken.id) {
      const user = await User.findOne({
        where: {
          id: decodedToken.id
        }
      });
      if (user && decodedToken.roleId === 2) {
        next();
      } else {
        return res.status(403).json({
          message: "🚫 You are Unauthorized to perform this action"
        });
      }
    } else {
      return res.status(403).json({
        message: "🚫 Invalid token"
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "🚫 Internal server error"
    });
  }
};
exports.isAdmin = isAdmin;
const isClient = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({
      message: "🚫 Token not provided"
    });
  }
  const token = tokenHeader.split(" ")[1];
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    if (decodedToken.roleId === 3) {
      next();
    } else {
      res.status(403).json({
        message: "🚫 You are Unauthorized to perform this action"
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "🚫 You are Unauthorized to perform this action"
    });
  }
};
exports.isClient = isClient;
const isSuperAdmin = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({
      message: "🚫 Token not provided"
    });
  }
  const token = tokenHeader.split(" ")[1];
  const {
    id
  } = req.params;
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await User.findOne({
      where: {
        id: decodedToken.id
      }
    });
    if (user && decodedToken && decodedToken.roleId === 3) {
      next();
    } else {
      res.status(404).json({
        message: "🚫 You are Unauthorized to perform this action"
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "🚫 Internal server error"
    });
  }
};
exports.isSuperAdmin = isSuperAdmin;
const checkPermission = permission => async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const permissions = {
    1: ["", ""],
    2: ["manage users", "see all request", "manage services"],
    3: ["", ""]
  };
  try {
    const decodedToken = _jwt.default.verifyToken(token);
    const user = await User.findOne({
      where: {
        id: decodedToken.id
      }
    });
    const roleId = decodedToken?.roleId;
    if (user && permissions[roleId]?.includes(permission)) {
      next();
    } else {
      res.status(403).json({
        message: "You are Unauthorized to perform this action"
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Internal server error"
    });
  }
};
exports.checkPermission = checkPermission;