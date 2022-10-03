const mongoose = require("mongoose");

//create schemma
const ResumeSummarySchema = new mongoose.Schema(
  {
    summary: { type: String },
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
const ResumeSummary = new mongoose.model("ResumeSummary", ResumeSummarySchema);

//exporting module
module.exports = { ResumeSummary };
