const userModel = require('../models/users');
const useJWT = require('../auth/useJWT');

const login = async (username, password) => {
  const loggedUser = await userModel.findOne({ where: { username } });
  if (!loggedUser) return { message: 'User not found'};
  return useJWT.createToken(loggedUser);
};

const postNewUser = async (username, password, email=null, name=null) => {
  const newUser = await userModel.create({ username, password });
  return newUser;
};

module.exports = {
  login,
  postNewUser,
};
