const user = require("../userModel/userModel");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const createToken = (id) => {
  return jwt.sign({ _id: id }, secret, { expiresIn: "1d" });
};

const loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const loggedUser = await user.login(email, password);
    const token = createToken(loggedUser._id);
    res.json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const signupController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const registeredUser = await user.signup(email, password);
    const token = createToken(registeredUser._id);
    res.json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { loginController, signupController };
