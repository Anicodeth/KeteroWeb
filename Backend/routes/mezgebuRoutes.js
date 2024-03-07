const express = require("express");
const router = express.Router();
const mezgebuController = require("../controllers/mezgebuController");

/**
 * @swagger
 * /api/v1/Mezgebu:
 *   get:
 *     summary: Get all mezgebus
 *     tags: [Mezgebu]
 *     responses:
 *       '200':
 *         description: A list of mezgebus
 *       '500':
 *         description: Internal server error
 */
router.get("/", mezgebuController.getMezgebus);

/**
 * @swagger
 * /api/v1/Mezgebu/{mezgebuId}:
 *   get:
 *     summary: Get a mezgebu by ID
 *     tags: [Mezgebu]
 *     parameters:
 *       - in: path
 *         name: mezgebuId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the mezgebu
 *     responses:
 *       '200':
 *         description: mezgebu found successfully
 *       '404':
 *         description: mezgebu not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:mezgebuId", mezgebuController.getMezgebu);

/**
 * @swagger
 * /api/v1/mezgebu:
 *   post:
 *     summary: Create a new mezgebu
 *     tags: [Mezgebu]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *             required:
 *               - name
 *               - age
 *     responses:
 *       '201':
 *         description: mezgebu created successfully
 *       '400':
 *         description: Invalid request body
 *       '500':
 *         description: Internal server error
 */
router.post("/", mezgebuController.createMezgebu);

/**
 * @swagger
 * /api/v1/mezgebu/{mezgebuId}:
 *   put:
 *     summary: Update a mezgebu by ID
 *     tags: [Mezgebu]
 *     parameters:
 *       - in: path
 *         name: mezgebuId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the mezgebu
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: number
 *             required:
 *               - name
 *               - age
 *     responses:
 *       '200':
 *         description: mezgebu updated successfully
 *       '400':
 *         description: Invalid request body
 *       '404':
 *         description: mezgebu not found
 *       '500':
 *         description: Internal server error
 */
router.put("/:mezgebuId", mezgebuController.updateMezgebu);

/**
 * @swagger
 * /api/v1/mezgebu/{mezgebuId}:
 *   delete:
 *     summary: Delete a mezgebu by ID
 *     tags: [Mezgebu]
 *     parameters:
 *       - in: path
 *         name: mezgebuId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the mezgebu
 *     responses:
 *       '200':
 *         description: mezgebu deleted successfully
 *       '404':
 *         description: mezgebu not found
 *       '500':
 *         description: Internal server error
 */
router.delete("/:mezgebuId", mezgebuController.deleteMezgebu);

module.exports = router;
