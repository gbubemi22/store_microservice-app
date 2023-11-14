import express from "express";
const router = express.Router();

import ProductController from "../controller/productController.js";

router.route("/").post(ProductController.addProduct);
router.route("/").get(ProductController.getAllProducts);
router.route("/:id").get(ProductController.getOneProduct);

export default router;
