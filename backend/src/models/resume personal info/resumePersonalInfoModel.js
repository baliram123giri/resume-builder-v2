const mongoose = require("mongoose");

//create schemma
const ResumePersonalInfoSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      trim: true,
    },
    mname: {
      type: String,
      trim: true,
    },
    lname: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      trim: true,
    },
    marital: {
      type: String,
      trim: true,
    },
    profession: {
      type: String,
      trim: true,
    },
    birth: {
      type: Date,
    },
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    nationality: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    userid: {
      type: String,
      required: [true, "userid should not be blank!"],
    },
    resumeid: {
      type: String,
      required: [true, "resumeid should not be blank!"],
    },
    passport: {
      type: String,
    },
  },
  { timestamps: true }
);

//create model
const ResumePersonalInfo = new mongoose.model(
  "ResumePersonalInfo",
  ResumePersonalInfoSchema
);

//exporting module
module.exports = { ResumePersonalInfo };
