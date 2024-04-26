import db from "../../database/models";
import bcrypt from "bcrypt";

const User = db.User;

const hashPassword = async (password) => {
  const saltRounds = 10; // You can adjust the salt rounds as needed
  return await bcrypt.hash(password, saltRounds);
};

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Check if email already exists
    const emailAlreadyExists = await User.findOne({
      where: { email },
    });

    if (emailAlreadyExists) {
      return res.status(401).json({ message: "Email already exists" });
    }

    // Validate inputs
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      return res.status(401).json({ message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res.status(401).json({ message: "Passwords do not match" });
    }

    if (password.length < 8) {
      return res.status(401).json({
        message: "Your password must be at least 8 characters long.",
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
      roleId: 1, // Set roleId to 1 by default
    });

    // Return response
    const { password: _, ...userData } = newUser.toJSON();
    return res.status(201).json({
      message: "User created successfully",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default signup;
