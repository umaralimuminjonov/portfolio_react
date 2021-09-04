const router = require("express").Router();
const workCtrl = require("../controllers/workCtrl");
const admin = require("../middlewares/admin");

router
  .route("/works")
  .get(admin, workCtrl.getWorks)
  .post(admin, workCtrl.createWork);

router
  .route("/works/:id")
  .put(admin, workCtrl.updateWork)
  .delete(admin, workCtrl.deleteWork);

module.exports = router;
