import express from 'express';
import productRepository from '../repository/productRepository.js';

const router = express.Router();
const prefix = 'api/v1';

// Define routes with different endpoints
router.route('/all').get(productRepository.getAllProduct);
router.route('/:id').get(productRepository.getOneProduct);

// Use the prefix for all routes
router.use(`/${prefix}`, router);

export default router;
