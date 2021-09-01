const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },
    tel: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Message", messageSchema);
