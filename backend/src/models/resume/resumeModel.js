const mongoose = require("mongoose");

//create schemma
const ResumeSchema = new mongoose.Schema(
  {
    resumetitle: {
      type: String,
      required: [true, "Title should not be blank!"],
      trim: true,
    },
    resumeuserid: {
      type: String,
      required: [true, "Resume_userid should not be blank!"],
      trim: true,
    },
    resume_temp_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ResumeTepm",
    },
    color: {
      type: String,
      default: "#000",
    },
    font: {
      type: String,
      default: "nunito",
    },
    fontsize: {
      type: String,
      default: "medium",
    },
  },
  { timestamps: true }
);

//create model
const Resume = new mongoose.model("Resume", ResumeSchema);

//exporting module
module.exports = { Resume };
