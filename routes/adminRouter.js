const router = require("express").Router();
const adminCtrl = require("../controllers/adminCtrl");
const admin = require("../middlewares/admin");

router.post("/register", admin, adminCtrl.checkRegister, adminCtrl.register);

router.post("/login", adminCtrl.checkLogin, adminCtrl.login);

router.get("/logout", admin, adminCtrl.logout);

router.get("/refresh_token", adminCtrl.refreshToken);

module.exports = router;
