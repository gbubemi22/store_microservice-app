import express from 'express';
import AuthController from '../controllers/authController.js';

const router = express.Router();



router.post('/register', AuthController.registerUser);

router.post('/login', AuthController.login);
router.post('/refresh-token', AuthController.updateRefreshToken);

// Add the prefix to all routes
const prefix = '/api/v1/auth';
router.use(prefix, router);

export default router;