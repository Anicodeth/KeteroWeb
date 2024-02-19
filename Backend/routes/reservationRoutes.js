const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

/**
 * @swagger
 * /api/v1/reservations:
 *   post:
 *     summary: Create a new reservation
 *     tags: [Reservations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               serviceId:
 *                 type: string
 *               businessId:
 *                 type: string
 *               clientId:
 *                 type: string
 *               dateAndTime:
 *                 type: string
 *                 format: date-time
 *             required:
 *               - serviceId
 *               - businessId
 *               - clientId
 *               - dateAndTime
 *     responses:
 *       '200':
 *         description: Reservation created successfully
 *       '500':
 *         description: Internal server error
 */

router.post('/', reservationController.createReservation);

/**
 * @swagger
 * /api/v1/reservations/{id}:
 *   get:
 *     summary: Get a reservation by ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the reservation to get
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Reservation not found
 *       '500':
 *         description: Internal server error
 */

router.get('/:id', reservationController.getReservation);

/**
 * @swagger
 * /api/v1/reservations:
 *   get:
 *     summary: Get all reservations
 *     tags: [Reservations]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Internal server error
 */

router.get('/', reservationController.getReservations);

/**
 * @swagger
 * /api/v1/reservations/{id}:
 *   delete:
 *     summary: Delete a reservation by ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the reservation to delete
 *     responses:
 *       '200':
 *         description: Reservation deleted successfully
 *       '404':
 *         description: Reservation not found
 *       '500':
 *         description: Internal server error
 */

router.delete('/:id', reservationController.deleteReservation);

/**
 * @swagger
 * /api/v1/reservations/{id}:
 *   put:
 *     summary: Update a reservation by ID
 *     tags: [Reservations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the reservation to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               dateAndTime:
 *                 type: string
 *                 format: date-time
 *             required:
 *               - dateAndTime
 *     responses:
 *       '200':
 *         description: Reservation updated successfully
 *       '404':
 *         description: Reservation not found
 *       '500':
 *         description: Internal server error
 */

router.put('/:id', reservationController.updateReservation);

module.exports = router;
