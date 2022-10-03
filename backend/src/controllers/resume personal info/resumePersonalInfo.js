const {
  ResumePersonalInfo,
} = require("../../models/resume personal info/resumePersonalInfoModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp get
const resumePersonalInfoGet = async (req, res, next) => {
  try {
    const resumePersonalInfo = await ResumePersonalInfo.findOne({
      _id: req.params.id,
    });
    if (!resumePersonalInfo) return next(catchError(404, "No records found!"));

    res.status(200).json(resumePersonalInfo);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumePersonalInfoUpdate = async (req, res, next) => {
  try {
    const resumePersonalInfo = await ResumePersonalInfo.findOne({
      _id: req.body.id,
    });
    if (!resumePersonalInfo) return next(catchError(404, "No records found!"));
    await ResumePersonalInfo.findByIdAndUpdate(req.body.id, { $set: req.body });
    res
      .status(200)
      .json({ message: "Resume personal info details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumePersonalInfoGet,
  resumePersonalInfoUpdate,
};
