import express from "express";
import { getUser } from "../controllers/user.js";

const router = express.Router()

// 后端接口
router.get("/find/:userId", getUser)

export default router