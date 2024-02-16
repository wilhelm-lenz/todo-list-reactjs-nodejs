const crypto = require("crypto");

exports.hash = (inputStr) => {
  return crypto.createHash("sha512").update(inputStr).digest("hex");
};

exports.generateRandomSalt = () => {
  const BYTES_LENGTH = 64;
  return crypto.randomBytes(BYTES_LENGTH).toString("base64");
};

exports.hashPassword = (password, salt) => {
  if (!password || !salt)
    throw new Error("password and salt must be defined for hashing");
  return exports.hash(`${password}${salt}`);
};
