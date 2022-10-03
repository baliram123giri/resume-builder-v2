const {
  ResumeSummary,
} = require("../../models/resume summary/resumeSummaryModel");
const { catchError } = require("../../utils/errorHanlder");

//resumetemp list
const resumeSummaryGet = async (req, res, next) => {
  try {
    const resumeSummary = await ResumeSummary.findOne({
      _id: req.params.id,
    });
    if (!resumeSummary) return next(catchError(404, "No records found!"));
    res.status(200).json(resumeSummary);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumeSummaryUpdate = async (req, res, next) => {
  console.log(req.body);
  try {
    const resumeSummary = await ResumeSummary.findOne({
      _id: req.body.id,
    });
    if (!resumeSummary) return next(catchError(404, "No records found!"));
    await ResumeSummary.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Resume summary details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeSummaryGet,
  resumeSummaryUpdate,
};
