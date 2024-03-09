const Mezgebu = require("../models/Mezgebu");

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
