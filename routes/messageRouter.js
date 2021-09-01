const router = require("express").Router();
const messageCtrl = require("../controllers/messageCtrl");

router
  .route("/message")
  .get(messageCtrl.getMessages)
  .post(messageCtrl.newMessage);

router
  .route("/message/:id")
  .get(messageCtrl.getMessage)
  .put(messageCtrl.updateMessage)
  .delete(messageCtrl.deleteMessage);

module.exports = router;
