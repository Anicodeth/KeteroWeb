
const Client = require('../models/Client');

exports.getclient = async (id) => {
    try {
        const client = await Client.findById(id);
        if (!client) {
            throw new Error('Client not found');
        }
        return client;
    } catch (error) {
        throw new Error(error.message);
    }
}

