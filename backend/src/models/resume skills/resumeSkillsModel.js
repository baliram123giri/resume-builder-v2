const mongoose = require("mongoose");

//create schemma
const ResumeSkillsSchema = new mongoose.Schema(
  {
    skills: [
      {
        name: {
          type: String,
          default: "",
        },
        level: {
          type: String,
          default: "",
        },
      },
    ],

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
const ResumeSkills = new mongoose.model("ResumeSkills", ResumeSkillsSchema);

//exporting module
module.exports = { ResumeSkills };
