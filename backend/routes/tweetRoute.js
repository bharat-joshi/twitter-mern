import express from "express";
const router = express.Router()

import { createTweet } from "../controllers/tweetController.js";
import {IsAuthenticated} from "../config/auth.js"

router.route("/create").get(IsAuthenticated,createTweet)

export default router
