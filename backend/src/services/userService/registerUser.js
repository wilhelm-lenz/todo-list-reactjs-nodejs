const { User } = require("../../models/index");
const { generateRandomSalt, hashPassword } = require("../../helpers/hash");

// userInfo := { name*, email*, password*, bio, profilePictureUrl }
exports.registerUser = async ({
  name,
  email,
  password,
  bio,
  profilePictureUrl,
}) => {
  const passwordSalt = generateRandomSalt();
  const passwordHash = hashPassword(password, passwordSalt);
  const user = new User({
    name,
    email,
    passwordHash,
    passwordSalt,
    bio,
    profilePictureUrl,
  });
  await user.save();
  return userToProfileInfo(user);
};

function userToProfileInfo({ name, email, bio, profilePictureUrl }) {
  return { name, email, bio, profilePictureUrl };
}
