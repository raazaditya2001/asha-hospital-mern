const Service = require("../models/Service");

// @desc    Get all services (optionally filter by category)
// @route   GET /api/services?category=Skin Care
// @access  Public
const getServices = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    const services = await Service.find(filter).sort({ category: 1, order: 1 });
    res.json({ success: true, count: services.length, data: services });
  } catch (error) {
    next(error);
  }
};

module.exports = { getServices };
