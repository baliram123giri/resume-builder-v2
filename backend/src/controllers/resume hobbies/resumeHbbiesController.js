const {
  ResumeHobbies,
} = require("../../models/resume hobbies/resumeHobiesModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp list
const resumeHobbiesGet = async (req, res, next) => {
  try {
    const resumeHobbies = await ResumeHobbies.findOne({
      _id: req.params.id,
    });
    if (!resumeHobbies) return next(catchError(404, "No records found!"));
    res.status(200).json(resumeHobbies);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume hobbies update
const resumeHobbiesUpdate = async (req, res, next) => {
  try {
    const resumeHobbies = await ResumeHobbies.findOne({
      _id: req.body.id,
    });
    if (!resumeHobbies) return next(catchError(404, "No records found!"));
    await ResumeHobbies.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Resume hobbies details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeHobbiesGet,
  resumeHobbiesUpdate,
};
