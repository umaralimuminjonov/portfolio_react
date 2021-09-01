const router = require("express").Router();
const workCtrl = require("../controllers/workCtrl");

router.route("/works").get(workCtrl.getWorks).post(workCtrl.createWork);

router.route("/works/:id").put(workCtrl.updateWork).delete(workCtrl.deleteWork);

module.exports = router;
