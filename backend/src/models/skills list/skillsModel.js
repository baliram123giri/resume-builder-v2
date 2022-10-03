const mongoose = require("mongoose");

//create schemma
const skillsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Skill name should not be blank!"],
      trim: true,
    },
  },
  { timestamps: true }
);

//create model
const Skills = new mongoose.model("Skills", skillsSchema);

//exporting module
module.exports = { Skills };
