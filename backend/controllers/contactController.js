const { validationResult } = require("express-validator");
const Contact = require("../models/Contact");

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const createContact = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const contact = await Contact.create(req.body);
    res.status(201).json({
      success: true,
      message: "Thank you for reaching out. We will get back to you soon.",
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all contact messages (admin only)
// @route   GET /api/contact
// @access  Private (admin key)
const getContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: contacts.length, data: contacts });
  } catch (error) {
    next(error);
  }
};

module.exports = { createContact, getContacts };
