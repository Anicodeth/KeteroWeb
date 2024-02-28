const Service = require("../models/Service");

exports.getService = async (id) => {
    try {
        const service = await Service.findById(id);
        if (!service) {
            throw new Error("Invalid service Id");
        }

        // Extract image data
        const image = service.image;

        // Construct the response object
        const responseData = {
            _id: service._id,
            name: service.name,
            description: service.description,
            price: service.price,
            image: image.toString('base64'), // Or you can use image.toString('base64') to convert the Buffer to a base64 string
            contentType: service.image.contentType
        };

        return responseData;
    } catch (error) {
        throw new Error(error.message);
    }
};


exports.getServices = async () => {
    try {
        const services = await Service.find();
        if (!services.length) {
            throw new Error("No services");
        }
        return services;
    } catch (error) {
        console.error('Error fetching services:', error);
        throw new Error(error.message);
    }
};

exports.createService = async (serviceData) => {
    try {
        const service = new Service(serviceData);
        await service.save();
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateService = async (id, updateData) => {
    try {
        const service = await Service.findByIdAndUpdate(id, updateData, { new: true });
        if (!service) {
            throw new Error("Invalid service Id");
        }
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteService = async (id) => {
    try {
        const service = await Service.findByIdAndDelete(id);
        if (!service) {
            throw new Error("Invalid service Id");
        }
        return service;
    } catch (error) {
        throw new Error(error.message);
    }
};
