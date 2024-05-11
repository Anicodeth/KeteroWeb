const {
  createClient,
  createBusiness,
  createMezgeb,
  loginUser,
} = require("../services/authService");

// Controller for creating a client
exports.createClient = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const client = await createClient({ name, email, password, phone });
    res.status(201).json(client);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for creating a business
exports.createBusiness = async (req, res) => {
  try {
    const { ownerName, phone, businessName, email, password, location, workHours } = req.body;
    const business = await createBusiness({
      ownerName,
      businessName,
      phone,
      email,
      password,
      location,
      workHours,
    });
    res.status(201).json(business);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Business = require("../models/Business");
const Service = require("../models/Service");

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
  const { businessId, serviceName, serviceDescription, price } = data;
  try {
    const business = await Business.findById(businessId);
    const service = new Service({ serviceName, serviceDescription, price });
    if (!business || !service) {
      throw new Error("Invalid data entry");
    }

    business.services.push(service);
    await business.save();
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
    const business = await Business.findByIdAndUpdate(id, updateData, {
      new: true,
    });
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

// Controller for creating a mezgeb
exports.createMezgeb = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const mezgeb = await createMezgeb({ name, email, password, phone });
    res.status(201).json(mezgeb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller for user login
exports.loginUser = async (req, res) => {
  try {
    const data = await loginUser(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};
