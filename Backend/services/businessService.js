const Business = require('../models/Business');
const Service = require('../models/Service');

exports.getBusinessServices = async (businessId) => {
    try {
        const business = await Business.findOne(businessId);
        if (!business) {
            throw new Error("Invalid Business Id");
        }
        return business.services;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.addServiceToBusiness = async (data) => {
    const { businessId, name, description, price,imageUrl } = data;
    try {
        const business = await Business.findById(businessId);
        const service = new Service({ name, description, price, imageUrl, businessId });
        if (!business || !service) {
            throw new Error("Invalid data entry");
        }

        business.services.push(service);
        await business.save();
        await service.save();
        return service;

    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getBusiness = async (id) => {
    try {
        const business = await Business.findById(id);
        if (!business) {
            throw new Error("Invalid Business Id");
        }
        return business;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.getBusinesses = async () => {
    try {
        const businesses = await Business.find();
        if (!businesses.length) {
            throw new Error("No businesses found");
        }
        return businesses;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.updateBusiness = async (id, updateData) => {
    try {
        const business = await Business.findByIdAndUpdate(id, updateData, { new: true });
        if (!business) {
            throw new Error("Invalid Business Id");
        }
        return business;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.deleteBusiness = async (id) => {
    try {
        const business = await Business.findByIdAndDelete(id);
        if (!business) {
            throw new Error("Invalid Business Id");
        }
        return business;
    } catch (error) {
        throw new Error(error.message);
    }
};

exports.addMezgebuToBusiness = async (businessId, mezgebuId) => {
    try {
        const business = await Business.findById(businessId);
        const mezgebu = await Mezgebu.findById(mezgebuId);
        if (!business || !mezgebu) {
            throw new Error("Invalid data entry");
        }
        business.mezgebs.push(mezgebu);
        await business.save();
        return business;
    }