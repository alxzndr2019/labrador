const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  passwordHash: { type: String, required: true, minlength: 5 },
  phone_number: { type: Number, minlength: 8 },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin", "superadmin"],
    required: true,
  },
  accountNumber: { type: String },
  bank: { type: String },
});
const User = mongoose.model("User", userSchema, "users");
module.exports = User;
