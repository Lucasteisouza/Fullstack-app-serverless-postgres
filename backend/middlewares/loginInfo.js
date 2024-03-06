const bcryptjs = require('bcryptjs');
const useJWT = require('../auth/useJWT');
const users = require('../models/users');

const INVALID_FIELDS = 'Invalid username or password';
const INVALID_LENGTH = 'must be at least 5 characters long';


const verifyAuthFields = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(401).json({ message: INVALID_FIELDS });
  if (username.length < 5) return res.status(401).json({ message: `username ${INVALID_LENGTH}` });
  if (password.length < 5) return res.status(401).json({ message: `password ${INVALID_LENGTH} `});
  next();
};

const verifyExistance = async (req, res, next) => {
  const { username, password } = req.body;
  const userFound = await users.findOne({ where: { username } });

  if (!userFound) return res.status(401).json({ message: INVALID_FIELDS });

  const passwordMatch = bcryptjs.compareSync(password, userFound.password);
  if (!passwordMatch) return res.status(401).json({ message: INVALID_FIELDS });
  next();
};

const hasValidToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ message: 'Token not found' });

  const isValid = useJWT.verifyToken(token);
  if (!isValid) return res.status(401).json({ message: 'Expired or invalid token' });
  req.body.user = isValid;
  next();
};

module.exports = {
  verifyAuthFields,
  verifyExistance,
  hasValidToken,
};