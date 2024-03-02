
const { getClient } = require('../services/clientService');

exports.getClient = async (req, res) => {
    try {
        const { clientId } = req.params;
        const client = await getClient(clientId);
        res.status(200).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
