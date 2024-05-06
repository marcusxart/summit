const bcrypt = require('bcrypt');

// Hashes a password using bcrypt
const hashPassword = async (password) => {
  const saltRounds = Number(process.env.PASSWORD_SALT) || 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Checks if a password matches the hashed password using bcrypt
const checkPassword = async (password, hashedPassword) => {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
};

module.exports = { hashPassword, checkPassword };
