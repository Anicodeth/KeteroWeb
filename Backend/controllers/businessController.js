const {
  getBusiness,
  getBusinessServices,
  getBusinesses,
  addServiceToBusiness,
  updateBusiness,
  deleteBusiness,
  addMezgebuToBusiness,
} = require("../services/businessService");

const admin = require("../data/firebase");

const { v4: uuidv4 } = require("uuid");

// Get a Storage instance
const storage = admin.storage().bucket();

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
  const { name, description, price } = req.body;
  const image = req.file;

  const filename = `${uuidv4()}_${image.originalname}`;

  const fileUpload = storage.file(filename);
  await fileUpload.save(image.buffer, {
    metadata: {
      contentType: image.mimetype,
    },
  });

  const imageUrl = await fileUpload.getSignedUrl({
    action: "read",
    expires: "01-01-2200",
  });

  try {
    const service = await addServiceToBusiness({
      businessId,
      name,
      description,
      price,
      imageUrl: imageUrl[0],
    });
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

exports.addMezgebuToBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const { mezgebuEmail } = req.body;

    const mezgebu = await addMezgebuToBusiness(id, mezgebuEmail);
    res.status(201).json(mezgebu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
