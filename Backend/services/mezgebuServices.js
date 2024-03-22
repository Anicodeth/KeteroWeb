const Mezgebu = require("../models/Mezgebu");
const Business = require("../models/Business");
exports.getMezgebu = async (id) => {
  try {
    const mezgebu = await Mezgebu.findById(id);

    if (!mezgebu) {
      throw new Error("Invalid Mezgebu Id");
    }
    return mezgebu;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getMezgebues = async () => {
  try {
    const mezgebues = await Mezgebu.find();
    if (!mezgebues.length) {
      throw new Error("No mezgebues found");
    }
    return mezgebues;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.updateMezgebu = async (id, updateData) => {
  try {
    const mezgebu = await Mezgebu.findByIdAndUpdate(id, updateData, {
      new: true,
    });
    if (!mezgebu) {
      throw new Error("Invalid Mezgebu Id");
    }
    return mezgebu;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.deleteMezgebu = async (id) => {
  try {
    const mezgebu = await Mezgebu.findByIdAndDelete(id);
    if (!mezgebu) {
      throw new Error("Invalid Mezgebu Id");
    }
    return mezgebu;
  } catch (error) {
    throw new Error(error.message);
  }
};

exports.getMezgebBusinesses = async (id) => {
  try {
    const mezgebu = await Mezgebu.findById(id);
    if (!mezgebu) {
      throw new Error("Invalid Mezgebu Id");
    }
    const businessesList = [];

    mezgebu.businesses.forEach(async (businessId) => {
      const business = await Business.findById(businessId);
      if (business) {
        businessesList.push(business);
      }
    });
  } catch {}
};
