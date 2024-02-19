const Reservation = require('../models/Reservation');

exports.createReservation = async (data) => {
    try {
        const reservation = new Reservation(data);
        await reservation.save();
        return reservation;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.confirmReservation = async (id) => {
    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) {
            throw new Error('Reservation not found');
        }
        reservation.confirmed = true;
        await reservation.save();
        return reservation;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getReservation = async (id) => {
    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) {
            throw new Error('Reservation not found');
        }
        return reservation;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getReservations = async () => {
    try {
        const reservations = await Reservation.find();
        return reservations;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteReservation = async (id) => {
    try {
        const reservation = await Reservation.findByIdAndDelete(id);
        if (!reservation) {
            throw new Error('Reservation not found');
        }
        return reservation;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateReservation = async (id, data) => {
    try {
        const reservation = await Reservation.findById(id);
        if (!reservation) {
            throw new Error('Reservation not found');
        }
        for (let key in data) {
            reservation[key] = data[key];
        }
        await reservation.save();
        return reservation;
    } catch (error) {
        throw new Error(error.message);
    }
};
