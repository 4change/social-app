import Express from "express";
const app = Express()
import userRoutes from "./routes/users.js"

// 后端接口分发
app.use("/api/users", userRoutes)

app.listen(8800, () => { 
    console.log("API working");
})