import express from "express";

const router = express.Router()

// 后端接口
router.get("/test", (req, res) => {
    res.send("it works")
})

export default router