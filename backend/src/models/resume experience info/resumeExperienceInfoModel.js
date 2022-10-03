const mongoose = require("mongoose");

//create schemma
const ResumeExperienceInfoSchema = new mongoose.Schema(
  {
    job_title: {
      type: String,
      trim: true,
    },
    employer: {
      type: String,
      trim: true,
    },
    work_city: {
      type: String,
      trim: true,
    },
    work_state: {
      type: String,
      trim: true,
    },
    start_date: {
      type: String,
      trim: true,
    },
    end_date: {
      type: String,
      trim: true,
    },
    job_duties: {
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
const ResumeExperienceInfo = new mongoose.model(
  "ResumeExperienceInfo",
  ResumeExperienceInfoSchema
);

//exporting module
module.exports = { ResumeExperienceInfo };
