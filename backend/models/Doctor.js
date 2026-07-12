const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    qualification: { type: String, trim: true },
    department: { type: String, required: true, trim: true },
    experience: { type: String, trim: true },
    bio: { type: String, trim: true },
    photo: { type: String, trim: true },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Doctor", doctorSchema);
