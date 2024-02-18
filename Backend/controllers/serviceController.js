const { getService, getServices, updateService, deleteService, createService } = require('../services/serviceService');

exports.getService = async (req, res) => {
    try {
        const { id } = req.params;
        const service = await getService(id);
        res.status(200).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getServices = async (req, res) => {
    try {
        const services = await getServices();
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.createService = async (req, res) => {
    try {
        const serviceData = req.body;
        const service = await createService(serviceData);
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateService = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const updatedService = await updateService(id, updateData);
        res.status(200).json(updatedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteService = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedService = await deleteService(id);
        res.status(200).json(deletedService);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
