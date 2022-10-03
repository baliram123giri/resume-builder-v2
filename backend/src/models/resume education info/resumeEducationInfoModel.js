const mongoose = require("mongoose");

//create schemma
const ResumeEducationInfoSchema = new mongoose.Schema(
  {
    edu_school: {
      type: String,
      trim: true,
    },
    edu_city: {
      type: String,
      trim: true,
    },
    edu_state: {
      type: String,
      trim: true,
    },
    edu_degree: {
      type: String,
      trim: true,
    },
    edu_field: {
      type: String,
      trim: true,
    },
    edu_start: {
      type: String,
      trim: true,
    },
    edu_end: {
      type: String,
      trim: true,
    },
    userid: {
      type: String,
      required: [true, "userid should not be blank!"],
    },
    resumeid: {
      type: String,
      required: [true, "resumeid should not be blank!"],
    },
  },
  { timestamps: true }
);

//create model
const ResumeEducationInfo = new mongoose.model(
  "ResumeEducationInfo",
  ResumeEducationInfoSchema
);

//exporting module
module.exports = { ResumeEducationInfo };
