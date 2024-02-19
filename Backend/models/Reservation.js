const mongoose = require("mongoose");

const ReservationSchema = mongoose.Schema({
    serviceId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Service'
    },
    businessId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Business'
    },
    clientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Client'
    },
    dateAndTime: {
        type: Date, 
        required: true
    },
    confirmed: {
        type: Boolean,
        default: false 
    },

});


module.exports = mongoose.model('Reservation', ReservationSchema);
