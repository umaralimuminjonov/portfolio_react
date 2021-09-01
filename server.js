if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");

const app = express();

const URI = process.env.MONGO_URL;
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// Routes
app.use("/api", require("./routes/messageRouter"));
app.use("/api", require("./routes/workRouter"));
app.use("/api", require("./routes/upload"));

const start = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

if (process.env.NODE_ENV !== "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

start();
