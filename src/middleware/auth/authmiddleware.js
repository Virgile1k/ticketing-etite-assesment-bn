import db from "../../database/models";
import JwtUtility from "../../utils/jwt.util";
const User = db.User;

const isAdmin = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({ message: "🚫 Token not provided" });
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const decodedToken = JwtUtility.verifyToken(token);

    if (decodedToken && decodedToken.id) {
      const user = await User.findOne({ where: { id: decodedToken.id } });

      if (user && decodedToken.roleId === 2) {
        next();
      } else {
        return res
          .status(403)
          .json({ message: "🚫 You are Unauthorized to perform this action" });
      }
    } else {
      return res.status(403).json({ message: "🚫 Invalid token" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "🚫 Internal server error" });
  }
};

const isClient = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ message: "🚫 Token not provided" });
  }

  const token = tokenHeader.split(" ")[1];

  try {
    const decodedToken = JwtUtility.verifyToken(token);
    if (decodedToken.roleId === 3) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "🚫 You are Unauthorized to perform this action" });
    }
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "🚫 You are Unauthorized to perform this action" });
  }
};

const isSuperAdmin = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;
  if (!tokenHeader) {
    return res.status(401).json({ message: "🚫 Token not provided" });
  }
  const token = tokenHeader.split(" ")[1];
  const { id } = req.params;
  try {
    const decodedToken = JwtUtility.verifyToken(token);
    const user = await User.findOne({ where: { id: decodedToken.id } });
    if (user && decodedToken && decodedToken.roleId === 3) {
      next();
    } else {
      res
        .status(404)
        .json({ message: "🚫 You are Unauthorized to perform this action" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "🚫 Internal server error" });
  }
};

const checkPermission = (permission) => async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const permissions = {
    1: ["", ""],
    2: ["manage users", "see all request", "manage services"],
    3: ["", ""],
  };

  try {
    const decodedToken = JwtUtility.verifyToken(token);
    const user = await User.findOne({ where: { id: decodedToken.id } });
    const roleId = decodedToken?.roleId;
    if (user && permissions[roleId]?.includes(permission)) {
      next();
    } else {
      res
        .status(403)
        .json({ message: "You are Unauthorized to perform this action" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { isAdmin, isSuperAdmin, isClient, checkPermission };