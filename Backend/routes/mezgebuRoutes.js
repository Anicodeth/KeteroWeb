

const express = require("express");
const router = express.Router();
const mezgebuController = require("../controllers/mezgebuController");

/**
 * @swagger
 * /api/v1/Mezgebu/{mezgebuId}:
 *   get:
 *     summary: Get a client by ID
 *     tags: [Mezgebu]
 *     parameters:
 *       - in: path
 *         name: clientId
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the client
 *     responses:
 *       '200':
 *         description: Client found successfully
 *       '404':
 *         description: Client not found
 *       '500':
 *         description: Internal server error
 */
router.get("/:clientId", clientController.getClient);

module.exports = router;