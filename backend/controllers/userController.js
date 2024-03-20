import { User } from "../models/userSchema.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";
export const Register = async (req, res) => {
  try {
    console.log("user controller");
    const { name, username, email, password } = req.body;
    if (!name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 12);

    console.log(name, username, email, hashedPassword);

    const newUser = await User.create({
      name,
      username,
      email,
      password: hashedPassword,
    });

    return res
      .status(201)
      .json({ user: newUser, message: "User created successfully" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const tokendata = { userid: user._id };
    const token = await jwt.sign({ tokendata }, process.env.TOKEN_SECRET, {
      expiresIn: "1h",
    });
    return res
      .status(200)
      .cookie("token", token, { expiresIn: "1h", httpOnly: true })
      .json({ token: token, message: "Login successful" });
  } catch (error) {
    console.log(error.message);
  }
};

export const Logout =(req,res)=>{
  return res.cookie("token","",{expiresIn: new Date(Date.now)}).json({message:"Logged out successfully"})
}
