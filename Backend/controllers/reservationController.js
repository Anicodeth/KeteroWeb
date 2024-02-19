const { createReservation, confirmReservation, getReservation, getReservations, deleteReservation, updateReservation } = require('../services/reservationService');

exports.createReservation = async (req, res) => {
    try {
        const reservation = await createReservation(req.body);
        res.status(201).json({ success: true, data: reservation });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};

exports.confirmReservation = async (req, res) => {
    try {
        const reservation = await confirmReservation(req.params.id);
        res.status(200).json({ success: true, data: reservation });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};

exports.getReservation = async (req, res) => {
    try {
        const reservation = await getReservation(req.params.id);
        res.status(200).json({ success: true, data: reservation });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};

exports.getReservations = async (req, res) => {
    try {
        const reservations = await getReservations();
        res.status(200).json({ success: true, data: reservations });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};

exports.deleteReservation = async (req, res) => {
    try {
        const reservation = await deleteReservation(req.params.id);
        res.status(200).json({ success: true, data: reservation });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};

exports.updateReservation = async (req, res) => {
    try {
        const reservation = await updateReservation(req.params.id, req.body);
        res.status(200).json({ success: true, data: reservation });
    } catch (error) {
        res.status(404).json({ success: false, error: error.message });
    }
};
