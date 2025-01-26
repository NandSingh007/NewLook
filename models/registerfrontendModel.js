const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{10}$/ // Exactly 10 digits
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /\S+@\S+\.\S+/ // Basic email validation
  },
  amount: {
    type: Number,
    default: 0
  },
  address: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const FrontRegistrationData = mongoose.model(
  "FrontRegistrationData",
  UserSchema
);

module.exports = FrontRegistrationData;
