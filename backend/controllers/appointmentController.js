const { validationResult } = require("express-validator");
const Appointment = require("../models/Appointment");

// @desc    Create new appointment request
// @route   POST /api/appointments
// @access  Public
const createAppointment = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const appointment = await Appointment.create(req.body);
    res.status(201).json({
      success: true,
      message: "Appointment request received. Our team will contact you shortly to confirm.",
      data: appointment,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get all appointments (admin only)
// @route   GET /api/appointments
// @access  Private (admin key)
const getAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });
    res.json({ success: true, count: appointments.length, data: appointments });
  } catch (error) {
    next(error);
  }
};

// @desc    Update appointment status (admin only)
// @route   PATCH /api/appointments/:id
// @access  Private (admin key)
const updateAppointmentStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const appointment = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );
    if (!appointment) {
      return res.status(404).json({ success: false, message: "Appointment not found" });
    }
    res.json({ success: true, data: appointment });
  } catch (error) {
    next(error);
  }
};

module.exports = { createAppointment, getAppointments, updateAppointmentStatus };
