const Reservation = require('../models/Reservation');
const Client = require('../models/Client');
const Business = require('../models/Business');
const Service = require('../models/Service');

exports.createReservation = async (data) => {
    try {
        const { businessId, clientId } = data;
        const reservation = new Reservation(data);

        const business = await Business.findById(businessId);
        const client = await Client.findById(clientId);

        await reservation.save();

        business.pending.push(reservation);
        client.pending.push(reservation);

        business.save();
        client.save();
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

exports.getPendingData = async (id) => {
    try {
        const reservation = await Reservation.findById(id);

        if (!reservation) {
            throw new Error('Reservation not found');
        }

        const business = await Business.findById(reservation.businessId);

        const client = await Client.findById(reservation.clientId);

        // Assuming you have a Service model
        const service = await Service.findById(reservation.serviceId);

        const pendingData = {
            businessName: business.businessName,
            businessEmail: business.email,
            clientPhone: client.phone,
            clientName: client.name,
            dateAndTime: reservation.date,
            serviceId: reservation.serviceId,
            serviceName: service.name,
            serviceDescription: service.description,
            servicePrice: service.price,
            reservationId: reservation._id,
            businessId: business._id,
            clientId: client._id,
            confirmed: reservation.confirmed,
            ownerName: business.ownerName,
        };

        console.log('Pending Data:', pendingData);

        return pendingData;
    } catch (error) {
        console.error('Error:', error.message);
        throw new Error(error.message);
    }
};
