const Business = require("../models/Business");
const Service = require("../models/Service");
const Mezgebu = require("../models/Mezgebu");

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
  const { businessId, name, description, price, imageUrl } = data;
  try {
    const business = await Business.findById(businessId);
    const service = new Service({
      name,
      description,
      price,
      imageUrl,
      businessId,
    });
    if (!business || !service) {
      throw new Error("Invalid data entry");
    }

    business.services.push(service);
    business.mezgebs.forEach(async (mezgebuId) => {
      const mezgebu = await Mezgebu.findById(mezgebuId);
      mezgebu.services.push(service);
      await mezgebu.save();
    });

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

exports.addMezgebuToBusiness = async (businessId, mezgebuEmail) => {
  try {
    const business = await Business.findById(businessId);
    const mezgebu = await Mezgebu.findOne({ email: mezgebuEmail });
    //find the mezgeby by emaul

    if (!business || !mezgebu) {
      throw new Error("Invalid data entry");
    }

    const mezgebuExists = business.mezgebs.find(
      (m) => m.toString() === mezgebu._id.toString()
    );
    if (mezgebuExists) {
      throw new Error("Mezgebu already added to business");
    }

    business.mezgebs.push(mezgebu);
    await business.save();

    //add all business services to mezgebu
    const services = business.services;
    services.forEach(async (service) => {
      mezgebu.services.push(service);
    });

    //add all reservations to mezgebu
    const reservationsConfirmed = business.confirmed;
    reservationsConfirmed.forEach(async (reservation) => {
      mezgebu.reservations.push(reservation);
    });

    const reservationsPending = business.pending;
    reservationsPending.forEach(async (reservation) => {
      mezgebu.reservations.push(reservation);
    });

    await mezgebu.save();

    return business;
  } catch (error) {
    throw new Error(error.message);
  }
};
