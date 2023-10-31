import { Router } from "express";

//Import  Routes

import ProductRoute from "./productRouter.js";

const router = Router();

//Use router

router.use("/api/v1/products", ProductRoute);

export default router;
