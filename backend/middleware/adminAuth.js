// Very simple shared-secret protection for admin-only read endpoints
// (list of appointments / contact submissions). Pass header: x-admin-key
const adminAuth = (req, res, next) => {
  const key = req.header("x-admin-key");
  if (!key || key !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  next();
};

module.exports = adminAuth;
