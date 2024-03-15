import {User} from "../models/userSchema.js";
import bcryptjs from "bcryptjs";

export const Register = async (req, res) => {
  try {
    console.log("user controller")
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);


    console.log(name, username, email, hashedPassword)

    const newUser = await User.create({
      name,
      username,
      email,
      hashedPassword,
    });

    return res
      .status(201)
      .json({ user: newUser, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
