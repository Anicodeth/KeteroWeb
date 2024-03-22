const {
  getMezgebu,
  getMezgebues,
  deleteMezgebu,
  updateMezgebu,
  getMezgebBusinesses,
} = require("../services/mezgebuServices");

exports.getMezgebu = async (req, res) => {
  try {
    const { id } = req.params;
    const mezgebu = await getMezgebu(id);
    res.status(200).json(mezgebu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMezgebus = async (req, res) => {
  try {
    const mezgebues = await getMezgebues();
    res.status(200).json(mezgebues);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMezgebu = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;
    const mezgebu = await updateMezgebu(id, updateData);
    res.status(200).json(mezgebu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMezgebu = async (req, res) => {
  try {
    const { id } = req.params;
    const mezgebu = await deleteMezgebu(id);
    res.status(200).json(mezgebu);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMezgebBusinesses = async (req, res) => {
  try {
    const { id } = req.params;
    const businesses = await getMezgebBusinesses(id);

    res.status(200).json(businesses);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};