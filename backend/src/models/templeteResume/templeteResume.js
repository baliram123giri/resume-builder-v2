const mongoose = require("mongoose");

//create schemma
const ResumeTepmSchema = new mongoose.Schema(
  {
    resume_tepmtitle: {
      type: String,
      required: [true, "resume_tepmtitle should not be blank!"],
      trim: true,
    },
    resume_img: {
      type: String,
      required: [true, "resume_img should not be blank!"],
    },
  },
  { timestamps: true }
);

//create model
const ResumeTepm = new mongoose.model("ResumeTepm", ResumeTepmSchema);

//exporting module
module.exports = { ResumeTepm };
