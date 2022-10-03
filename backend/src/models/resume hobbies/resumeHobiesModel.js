const mongoose = require("mongoose");

//create schemma
const ResumeHobbiesSchema = new mongoose.Schema(
  {
    hobbies: {
      type: Array,
      default: [],
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
const ResumeHobbies = new mongoose.model("ResumeHobbies", ResumeHobbiesSchema);

//exporting module
module.exports = { ResumeHobbies };
