import { Router } from "express";
import authRoute from "./auth.routes/auth.routes";

const router = Router();

router.use("/user", authRoute);

export default router;
