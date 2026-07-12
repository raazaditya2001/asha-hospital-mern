const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "Skin Care",
        "Hair Treatment",
        "Laser Treatment",
        "Ayurveda",
        "General Medicine",
        "Preventive Healthcare",
        "Pharmacy",
      ],
    },
    title: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    icon: { type: String, default: "stethoscope" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Service", serviceSchema);
