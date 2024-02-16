const { User } = require("../../models/index.js");
const { generateRandomSalt, hashPassword } = require("../../helpers/hash.js");

exports.registerUser = async ({ username, email, password, bio }) => {
  const passwordSalt = generateRandomSalt();
  const passwordHash = hashPassword(password, passwordSalt);
  const user = new User({
    username,
    email,
    passwordHash,
    passwordSalt,
    bio,
    profilePhoto,
  });
  await user.save();
  return userToProfileInfo(user);
};

function userToProfileInfo({ username, email, bio, profilePhoto }) {
  return { username, email, bio, profilePhoto };
}
