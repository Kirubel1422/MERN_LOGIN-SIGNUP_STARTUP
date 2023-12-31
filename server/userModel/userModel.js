const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.statics.signup = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields need to be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Consider a stronger password");
  }
  const exists = await this.findOne({ email: email });
  if (exists) {
    throw Error("Email is already in use");
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    return await this.create({ email: email, password: hash });
  } catch (error) {
    console.error(error);
  }
};

UserSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields need to be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Invalid email");
  }
  const user = await this.findOne({ email: email });
  if (!user) {
    throw Error("Incorrect credentials");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Incorrect credentials");
  }
  return user;
};

const model = mongoose.model("users", UserSchema);
module.exports = model;
