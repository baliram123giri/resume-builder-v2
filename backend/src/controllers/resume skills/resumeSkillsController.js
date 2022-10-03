const {
  ResumeSkills,
} = require("../../models/resume skills/resumeSkillsModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp list
const resumeSkillsGet = async (req, res, next) => {
  try {
    const resumeSkills = await ResumeSkills.findOne({
      _id: req.params.id,
    });
    if (!resumeSkills) return next(catchError(404, "No records found!"));
    res.status(200).json(resumeSkills);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumeSkillsUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    const resumeSkills = await ResumeSkills.findOne({
      _id: req.body.id,
    });
    if (!resumeSkills) return next(catchError(404, "No records found!"));
    await ResumeSkills.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Resume skills details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeSkillsGet,
  resumeSkillsUpdate,
};
