require("dotenv").config();
const connectDB = require("../config/db");
const Service = require("../models/Service");
const Doctor = require("../models/Doctor");

const services = [
  // Skin Care
  { category: "Skin Care", title: "Acne & Acne Scar Treatment", description: "Personalized treatment plans to clear active acne and reduce scarring.", icon: "sparkles", order: 1 },
  { category: "Skin Care", title: "Pigmentation Correction", description: "Targeted therapy to even out skin tone and reduce dark patches.", icon: "sun", order: 2 },
  { category: "Skin Care", title: "Melasma Management", description: "Evidence-based care to control and lighten melasma.", icon: "sun", order: 3 },
  { category: "Skin Care", title: "Eczema & Psoriasis Care", description: "Long-term management plans for chronic skin conditions.", icon: "shield", order: 4 },
  { category: "Skin Care", title: "Vitiligo Treatment", description: "Comprehensive evaluation and treatment for vitiligo.", icon: "shield", order: 5 },
  { category: "Skin Care", title: "Mole, Wart & Corn Removal", description: "Safe, minor-procedure removal of moles, warts and corns.", icon: "scissors", order: 6 },
  { category: "Skin Care", title: "Anti-Aging & Skin Brightening", description: "Modern techniques to restore glow and reduce signs of aging.", icon: "sparkles", order: 7 },

  // Hair Treatment
  { category: "Hair Treatment", title: "Hair Fall Treatment", description: "Root-cause diagnosis and customized hair fall control plans.", icon: "wind", order: 1 },
  { category: "Hair Treatment", title: "PRP Therapy", description: "Platelet-rich plasma therapy to stimulate natural hair regrowth.", icon: "droplet", order: 2 },
  { category: "Hair Treatment", title: "Alopecia Treatment", description: "Specialized care for patchy and pattern hair loss.", icon: "wind", order: 3 },
  { category: "Hair Treatment", title: "Dandruff & Scalp Infection Care", description: "Effective treatment for scalp health and dandruff control.", icon: "droplet", order: 4 },
  { category: "Hair Treatment", title: "Male & Female Hair Loss Solutions", description: "Gender-specific regrowth programs backed by clinical evaluation.", icon: "users", order: 5 },

  // Laser Treatment
  { category: "Laser Treatment", title: "Laser Hair Reduction", description: "Long-lasting hair reduction using advanced laser technology.", icon: "zap", order: 1 },
  { category: "Laser Treatment", title: "Tattoo Removal", description: "Safe and progressive laser-based tattoo removal.", icon: "zap", order: 2 },
  { category: "Laser Treatment", title: "Acne Scar & Pigmentation Reduction", description: "Laser resurfacing to visibly reduce scars and pigmentation.", icon: "zap", order: 3 },
  { category: "Laser Treatment", title: "Carbon Laser Facial", description: "Deep-cleansing laser facial for brighter, smoother skin.", icon: "sparkles", order: 4 },
  { category: "Laser Treatment", title: "Skin Tightening & Rejuvenation", description: "Non-invasive laser treatments for firmer, youthful skin.", icon: "sparkles", order: 5 },

  // Ayurveda
  { category: "Ayurveda", title: "Panchakarma Guidance", description: "Traditional detoxification therapy under expert supervision.", icon: "leaf", order: 1 },
  { category: "Ayurveda", title: "Joint Pain & Digestive Care", description: "Ayurvedic protocols for chronic joint and digestive disorders.", icon: "leaf", order: 2 },
  { category: "Ayurveda", title: "Stress Management & Immunity", description: "Lifestyle-based therapies to build resilience and immunity.", icon: "leaf", order: 3 },
  { category: "Ayurveda", title: "Weight Management", description: "Individualized Ayurvedic plans for sustainable weight goals.", icon: "leaf", order: 4 },
  { category: "Ayurveda", title: "Skin & Hair Ayurvedic Therapies", description: "Natural, holistic approaches to skin and hair wellness.", icon: "leaf", order: 5 },

  // General Medicine
  { category: "General Medicine", title: "Fever & Infection Management", description: "Prompt diagnosis and treatment of common infections.", icon: "stethoscope", order: 1 },
  { category: "General Medicine", title: "Diabetes & Thyroid Care", description: "Ongoing management of chronic metabolic conditions.", icon: "activity", order: 2 },
  { category: "General Medicine", title: "Blood Pressure Monitoring", description: "Regular monitoring and lifestyle guidance for hypertension.", icon: "activity", order: 3 },
  { category: "General Medicine", title: "Routine Health Checkups", description: "Comprehensive checkups for early detection of health issues.", icon: "clipboard", order: 4 },

  // Preventive Healthcare
  { category: "Preventive Healthcare", title: "Annual Health Checkups", description: "Full-body screening to catch issues before they become serious.", icon: "clipboard", order: 1 },
  { category: "Preventive Healthcare", title: "Diabetes & Cholesterol Screening", description: "Routine screening for early risk detection.", icon: "activity", order: 2 },
  { category: "Preventive Healthcare", title: "Lifestyle & Nutrition Counseling", description: "Personalized guidance to support long-term wellness.", icon: "leaf", order: 3 },

  // Pharmacy
  { category: "Pharmacy", title: "In-House Pharmacy", description: "Genuine branded and generic medicines available on-site right after consultation.", icon: "pill", order: 1 },
];

const doctors = [
  {
    name: "Dr. Aarav Sharma",
    qualification: "MBBS, MD (Dermatology)",
    department: "Skin Care & Laser",
    experience: "12+ years experience",
    bio: "Specializes in acne, pigmentation and advanced laser dermatology procedures.",
    order: 1,
  },
  {
    name: "Dr. Priya Nair",
    qualification: "MD, Diploma in Trichology",
    department: "Hair Treatment",
    experience: "9+ years experience",
    bio: "Focuses on hair restoration, PRP therapy and scalp health.",
    order: 2,
  },
  {
    name: "Vaidya Rajeshwar Mishra",
    qualification: "BAMS, Panchakarma Specialist",
    department: "Ayurveda",
    experience: "15+ years experience",
    bio: "Expert in Panchakarma and holistic Ayurvedic wellness programs.",
    order: 3,
  },
  {
    name: "Dr. Neha Kulkarni",
    qualification: "MBBS, MD (General Medicine)",
    department: "General Medicine",
    experience: "10+ years experience",
    bio: "Provides comprehensive primary care for individuals and families.",
    order: 4,
  },
];

const importData = async () => {
  try {
    await connectDB();
    await Service.deleteMany();
    await Doctor.deleteMany();
    await Service.insertMany(services);
    await Doctor.insertMany(doctors);
    console.log("Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = importData;

// const destroyData = async () => {
//   try {
//     await connectDB();
//     await Service.deleteMany();
//     await Doctor.deleteMany();
//     console.log("Data Destroyed!");
//     process.exit();
//   } catch (error) {
//     console.error(`Error: ${error.message}`);
//     process.exit(1);
//   }
// };

// if (process.argv[2] === "-d") {
//   destroyData();
// } else {
//   importData();
// }
