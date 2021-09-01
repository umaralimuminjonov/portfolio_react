const Message = require("../models/messageModel");

const messageCtrl = {
  newMessage: async (req, res) => {
    try {
      const { fname, tel, text } = req.body;

      const newMessage = new Message({
        fname,
        tel,
        text,
      });
      await newMessage.save();

      res.status(201).json({ newMessage });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getMessages: async (req, res) => {
    try {
      const messages = await Message.find({}).sort("-date");

      res.json({ messages });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  getMessage: async (req, res) => {
    try {
      const message = await Message.findById(req.params.id);
      if (!message) return res.status(400).json({ msg: "Message not exist" });

      res.json({ message });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateMessage: async (req, res) => {
    try {
      const message = await Message.findByIdAndUpdate(req.params.id, req.body);
      if (!message) return res.status(400).json({ msg: "Message not exist" });

      res.json({ msg: "Message updated" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  deleteMessage: async (req, res) => {
    try {
      const message = await Message.findByIdAndDelete(req.params.id);
      if (!message) return res.status(400).json({ msg: "Message not exist" });

      res.json({ msg: "Message deleted" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = messageCtrl;
