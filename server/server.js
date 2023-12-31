require("dotenv").config();
const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");
const app = express();
const connect = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
  } catch (error) {
    console.error(error);
  }
};

connect();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
const router = require("./routes/routes");
app.use("/account", router);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server is listening on ${port}...`));
