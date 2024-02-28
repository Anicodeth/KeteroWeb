const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Service
/**
 * @swagger
 * components:
 *   schemas:
 *     Service:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - price
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the service.
 *         name:
 *           type: string
 *           description: The name of the service.
 *         description:
 *           type: string
 *           description: The description of the service.
 *         price:
 *           type: number
 *           description: The price of the service.
 */

/**
 * @swagger
 * /api/v1/service:
 *   get:
 *     summary: Get all services
 *     tags: [Service]
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Service'
 *       '500':
 *         description: Internal server error
 */

router.get('/', serviceController.getServices);

/**
 * @swagger
 * /api/v1/service/{id}:
 *   get:
 *     summary: Get a service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the service to retrieve
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: Internal server error
 */
router.get('/:id', serviceController.getService);

/**
 * @swagger
 * /api/v1/service:
 *   post:
 *     summary: Create a new service
 *     tags: [Service]
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
 *     responses:
 *       '201':
 *         description: Service created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
 router.post('/', upload.single('image'), serviceController.createService);


/**
 * @swagger
 * /api/v1/service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the service to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Service'
 *     responses:
 *       '200':
 *         description: Service updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Service'
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: Internal server error
 */
router.put('/:id', serviceController.updateService);

/**
 * @swagger
 * /api/v1/service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags: [Service]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the service to delete
 *     responses:
 *       '200':
 *         description: Service deleted successfully
 *       '404':
 *         description: Service not found
 *       '500':
 *         description: Internal server error
 */
router.delete('/:id', serviceController.deleteService);

module.exports = router;
