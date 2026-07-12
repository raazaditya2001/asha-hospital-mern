const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { createContact, getContacts } = require("../controllers/contactController");
const adminAuth = require("../middleware/adminAuth");

const validateContact = [
  body("name").trim().notEmpty().withMessage("Name is required"),
  body("email").trim().isEmail().withMessage("Enter a valid email"),
  body("message").trim().notEmpty().withMessage("Message cannot be empty"),
];

router.post("/", validateContact, createContact);
router.get("/", adminAuth, getContacts);

module.exports = router;
