const userServices = require('../services/usersServices');

const login = async (req, res) => {
  const { username } = req.body;
  const token = await userServices.login(username);
  return res.status(200).json({ token });
};

const postNewUser = async (req, res) => {
  const { username, password, email, name } = req.body;
  const newUser = await userServices.postNewUser(username, password, email, name);
  return res.status(201).json(newUser);
};

module.exports = {
  login,
  postNewUser,
}