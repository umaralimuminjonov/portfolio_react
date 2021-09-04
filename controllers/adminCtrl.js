const Admin = require("../models/adminModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { validationResult, check } = require("express-validator");

const adminCtrl = {
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

      const { email, password } = req.body;

      const admin = await Admin.findOne({ email });
      if (admin) return res.status(400).json({ msg: "Admin already exist." });

      const hashedPassword = await bcrypt.hash(password, 12);

      const newAdmin = new Admin({
        email,
        password: hashedPassword,
      });
      await newAdmin.save();

      // Then create jsonwebtoken to authentication
      const accesstoken = createAccessToken({ id: newAdmin._id });
      const refreshtoken = createRefreshToken({ id: newAdmin._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/auth/refresh_token",
        maxAge: 24 * 60 * 60 * 1000, // 7d
      });

      res.status(201).json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      let admin = await Admin.findOne({ email });
      if (!admin) return res.status(400).json({ msg: "Admin does not exist." });

      const validPassword = await bcrypt.compare(password, admin.password);
      if (!validPassword)
        return res.status(400).json({ msg: "Incorrect password." });

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({ id: admin._id });
      const refreshtoken = createRefreshToken({ id: admin._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/auth/refresh_token",
        maxAge: 24 * 60 * 60 * 1000, // 7d
      });

      res.json({ accesstoken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/auth/refresh_token" });
      res.json({ msg: "Logged out" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  refreshToken: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshtoken;
      if (!refreshToken) return res.status(400).json({ msg: "Please login" });

      await jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, user) => {
          if (err) return res.status(400).json({ msg: "Please login" });

          const accessToken = createAccessToken({ id: user.id });

          res.json({ accessToken });
        }
      );
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  checkRegister: [
    check("email", "Incorrect email").isEmail(),
    check("password", "Password is at least 6 characters long").isLength({
      min: 6,
    }),
  ],
  checkLogin: [
    check("email", "Incorrect email").normalizeEmail().isEmail(),
    check("password", "Incorrect password").exists(),
  ],
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "11m",
  });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "1d",
  });
};

module.exports = adminCtrl;
