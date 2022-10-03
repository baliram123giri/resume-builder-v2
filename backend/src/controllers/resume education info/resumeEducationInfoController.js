const {
  ResumeEducationInfo,
} = require("../../models/resume education info/resumeEducationInfoModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp list
const resumeEducationInfoGet = async (req, res, next) => {
  try {
    const resumeEductaionInfo = await ResumeEducationInfo.findOne({
      _id: req.params.id,
    });
    if (!resumeEductaionInfo) return next(catchError(404, "No records found!"));
    res.status(200).json(resumeEductaionInfo);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumeEducationInfoUpdate = async (req, res, next) => {
  try {
    const resumeEductaionInfo = await ResumeEducationInfo.findOne({
      _id: req.body.id,
    });
    if (!resumeEductaionInfo) return next(catchError(404, "No records found!"));
    await resumeEductaionInfo.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Resume education info details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeEducationInfoGet,
  resumeEducationInfoUpdate,
};
