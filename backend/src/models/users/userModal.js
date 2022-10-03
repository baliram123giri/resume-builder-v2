const mongoose = require("mongoose");

//create schemma
const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: [true, "Fullname should not be blank!"],
      trim: true,
    },
    profile_pic: {
      type: String,
    },
    about_me: {
      type: String,
    },
    mobile: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      unique: [true, "Email should be unique!"],
      required: [true, "Email should not be blank!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password should not be blank!"],
    },
    user_type: {
      type: String,
      default: "normal",
    },
  },
  { timestamps: true }
);

//create model
const User = new mongoose.model("User", userSchema);

//exporting module
module.exports = { User };
