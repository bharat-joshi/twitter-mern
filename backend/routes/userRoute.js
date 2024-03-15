import  express  from "express";
const router = express.Router();
import { Register } from "../controllers/userController.js";

router.route("/register").post(Register);

export default router;