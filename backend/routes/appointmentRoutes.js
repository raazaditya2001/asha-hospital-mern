const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const {
  createAppointment,
  getAppointments,
  updateAppointmentStatus,
} = require("../controllers/appointmentController");
const adminAuth = require("../middleware/adminAuth");

const validateAppointment = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("phone")
    .trim()
    .matches(/^[0-9+\-\s]{7,15}$/)
    .withMessage("Enter a valid phone number"),
  body("email").optional({ checkFalsy: true }).isEmail().withMessage("Enter a valid email"),
  body("department").notEmpty().withMessage("Please select a department"),
];

router.post("/", validateAppointment, createAppointment);
router.get("/", adminAuth, getAppointments);
router.patch("/:id", adminAuth, updateAppointmentStatus);

module.exports = router;
