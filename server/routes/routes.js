const express = require("express");

const Router = express.Router();
const {
  signupController,
  loginController,
} = require("../controllers/controllers");

Router.post("/login", loginController);
Router.post("/signup", signupController);

module.exports = Router;
