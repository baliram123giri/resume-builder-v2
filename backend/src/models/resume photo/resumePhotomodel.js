const mongoose = require("mongoose");

//create schemma
const ResumePhotoSchema = new mongoose.Schema(
  {
    resume_photo: {
      type: String,
      default: "",
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
const ResumePhoto = new mongoose.model("ResumePhoto", ResumePhotoSchema);

//exporting module
module.exports = { ResumePhoto };
