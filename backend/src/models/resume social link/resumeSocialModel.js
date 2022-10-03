const mongoose = require("mongoose");

//create schemma
const ResumeSocialSchema = new mongoose.Schema(
  {
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
    website: { type: String },
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
const ResumeSocial = new mongoose.model("ResumeSocial", ResumeSocialSchema);

//exporting module
module.exports = { ResumeSocial };
