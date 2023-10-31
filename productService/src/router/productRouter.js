import express from 'express';
const router = express.Router();

import ProductController from '../controller/productController.js';


router.route('/').post(ProductController.addProduct)



export default router;