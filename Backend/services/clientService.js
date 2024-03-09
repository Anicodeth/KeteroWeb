const Client = require("../models/Client");

exports.getClient = async (id) => {
  try {
    const client = await Client.findById(id);
    if (!client) {
      throw new Error("Client not found");
    }
    return client;
  } catch (error) {
    throw new Error(error.message);
  }
};
