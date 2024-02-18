const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

/**
 * @swagger
 * /api/v1/auth/client:
 *   post:
 *     summary: Create a new client
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Client created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/client', authController.createClient);

/**
 * @swagger
 * /api/v1/auth/business:
 *   post:
 *     summary: Create a new business
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               ownerName:
 *                 type: string
 *               businessName:
 *                 type: string
 *             required:
 *               - ownerName
 *               - businessName
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Business created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/business', authController.createBusiness);

/**
 * @swagger
 * /api/v1/auth/mezgebu:
 *   post:
 *     summary: Create a new mezgebu
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Mezgebu created successfully
 *       '500':
 *         description: Internal server error
 */
router.post('/mezgebu', authController.createMezgeb);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Login successful
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Internal server error
 */
router.post('/login', authController.loginUser);

module.exports = router;
