const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, required: true, trim: true },
    email: { type: String, trim: true, lowercase: true },
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "Other", ""], default: "" },
    department: {
      type: String,
      required: true,
      enum: [
        "Dermatology (Skin Care)",
        "Hair Treatment",
        "Laser Treatment",
        "Ayurveda",
        "General Medicine",
        "Preventive Healthcare",
      ],
    },
    preferredDate: { type: String },
    preferredTime: { type: String },
    message: { type: String, trim: true },
    status: {
      type: String,
      enum: ["Pending", "Confirmed", "Cancelled", "Completed"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Appointment", appointmentSchema);
