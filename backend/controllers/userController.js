const loginUser = (req, res) => {
  res.json({ message: "login User" });
};

const registerUser = (req, res) => {
  res.json({ message: "Register User" });
};

const getMe = (req, res) => {
  res.json({ message: "User data Display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
