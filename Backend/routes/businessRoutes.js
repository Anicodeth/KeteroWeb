const express = require('express');
const router = express.Router();
const businessController = require('../controllers/businessController');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

/**
 * @swagger
 * components:
 *   schemas:
 *     Business:
 *       type: object
 *       required:
 *         - ownerName
 *         - businessName
 *         - email
 *         - password
 *       properties:
 *         ownerName:
 *           type: string
 *           description: the owner of the company.
 *         businessName:
 *           type: string
 *           description: The name of the business.
 *         email:
 *           type: string
 *           description: email detail.
 *         password:
 *           type: number
 *           description: needed credentials.
 */

/**
 * @swagger
 * /api/v1/business:
 *   get:
 *     summary: Get all businesses
 *     tags: [Business]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Business'
 *       '500':
 *         description: Internal server error
 */
router.get('/', businessController.getBusinesses);

/**
 * @swagger
 * /api/v1/business/{id}:
 *   get:
 *     summary: Get a business by ID
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the business to retrieve
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', businessController.getBusiness);

/**
 * @swagger
 * /api/v1/business/{businessId}/service:
 *   post:
 *     summary: Add a service to a business
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: businessId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the business to add the service to
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               image:
 *                 type: string
 *                 format: binary
 *             required:
 *               - name
 *               - description
 *               - price
 *     responses:
 *       '200':
 *         description: Service added to the business successfully
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
 router.post('/:businessId/service', upload.single('image'), businessController.addServiceToBusiness);

/**
 * @swagger
 * /api/v1/business/{businessId}/services:
 *   get:
 *     summary: Get all services of a business
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: businessId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the business to retrieve services from
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:businessId/services', businessController.getBusinessServices);

/**
 * @swagger
 * /api/v1/business/{id}:
 *   put:
 *     summary: Update a business by ID
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the business to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Business'
 *     responses:
 *       '200':
 *         description: Business updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Business'
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', businessController.updateBusiness);

/**
 * @swagger
 * /api/v1/business/{id}:
 *   delete:
 *     summary: Delete a business by ID
 *     tags: [Business]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the business to delete
 *     responses:
 *       '200':
 *         description: Business deleted successfully
 *       '404':
 *         description: Business not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', businessController.deleteBusiness);

module.exports = router;
