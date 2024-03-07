const { users } = require('../models');
const useJWT = require('../auth/useJWT');

const login = async (username, password) => {
  const loggedUser = await users.findOne({ where: { username } });
  if (!loggedUser) return { message: 'User not found'};
  return useJWT.createToken(loggedUser);
};

const postNewUser = async (username, password, email=null, name=null) => {
  const newUser = await users.create({ username, password, email, name});
  if (!newUser) return {message: 'Error creating user'};
  const token = useJWT.createToken(newUser);
  return {message: token};
};

module.exports = {
  login,
  postNewUser,
};
