const {
  ResumeExperienceInfo,
} = require("../../models/resume experience info/resumeExperienceInfoModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp list
const resumeExperienceInfoGet = async (req, res, next) => {
  try {
    const resumeExperienceInfo = await ResumeExperienceInfo.findOne({
      _id: req.params.id,
    });
    if (!resumeExperienceInfo)
      return next(catchError(404, "No records found!"));
    res.status(200).json(resumeExperienceInfo);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumeExperienceInfoUpdate = async (req, res, next) => {
  try {
    const resumeExperienceInfo = await ResumeExperienceInfo.findOne({
      _id: req.body.id,
    });
    if (!resumeExperienceInfo)
      return next(catchError(404, "No records found!"));
    await ResumeExperienceInfo.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Resume experience info details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeExperienceInfoGet,
  resumeExperienceInfoUpdate,
};
