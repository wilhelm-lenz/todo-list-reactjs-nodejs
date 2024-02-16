const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please tell us your username"],
    },
    email: {
      type: String,
      required: [true, "Please provide your email"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email"],
    },
    passwordHash: {
      type: String,
      required: [true, "Please provide a password"],
      // Die längsten Passwörter sind die Sichersten, nicht die mit Sonderzeichen, Zahlen oder Groß- u. Kleinschreibung, deswegen findet hier keine Validierung statt
      minlength: 8,
      lowercase: true,
    },
    passwordSalt: {
      type: String,
      required: [true, "Please confirm your password"],
      lowercase: true,
    },
    // passwordHash: { type: String, required: true },
    // passwordSalt: { type: String, required: true },
    profilePhoto: { type: String },
    bio: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { collection: "users", timestamps: true }
);

// Hier wird das Model "User" groß geschrieben, nur um der Konvention zu folgen.
const User = mongoose.model("User", userSchema);

module.exports = User;
