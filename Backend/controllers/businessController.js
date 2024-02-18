const { 
    getBusiness, 
    getBusinessServices, 
    getBusinesses, 
    addServiceToBusiness, 
    updateBusiness, 
    deleteBusiness
} = require('../services/businessService');

exports.getBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const business = await getBusiness(id);
        res.status(200).json(business);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBusinesses = async (req, res) => {
    try {
        const businesses = await getBusinesses();
        res.status(200).json(businesses);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getBusinessServices = async (req, res) => {
    try {
        const { businessId } = req.params;
        const services = await getBusinessServices(businessId);
        res.status(200).json(services);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.addServiceToBusiness = async (req, res) => {
    const { businessId } = req.params;
    const {  name, description, price } = req.body;
    try {
        const service = await addServiceToBusiness({ businessId, name,description, price });
        res.status(201).json(service);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;
        const business = await updateBusiness(id, updateData);
        res.status(200).json(business);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteBusiness = async (req, res) => {
    try {
        const { id } = req.params;
        const business = await deleteBusiness(id);
        res.status(200).json(business);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
