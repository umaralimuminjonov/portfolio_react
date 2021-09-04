const router = require("express").Router();
const messageCtrl = require("../controllers/messageCtrl");
const admin = require("../middlewares/admin")

router
  .route("/message")
  .get(admin, messageCtrl.getMessages)
  .post(messageCtrl.newMessage);

router
  .route("/message/:id")
  .get(messageCtrl.getMessage)
  .put(messageCtrl.updateMessage)
  .delete(messageCtrl.deleteMessage);

module.exports = router;
