const {
  ResumeSocial,
} = require("../../models/resume social link/resumeSocialModel");
const { catchError } = require("../../utils/errorHanlder");

//resume social list
const resumeSocialGet = async (req, res, next) => {
  try {
    const resumeSocial = await ResumeSocial.findOne({
      _id: req.params.id,
    });
    if (!resumeSocial) return next(catchError(404, "No records found!"));
    res.status(200).json(resumeSocial);
  } catch (error) {
    next(catchError(404, "No records found!"));
  }
};

//resume update
const resumeSocialUpdate = async (req, res, next) => {
  try {
    const resumeSocial = await ResumeSocial.findOne({
      _id: req.body.id,
    });
    if (!resumeSocial) return next(catchError(404, "No records found!"));
    await ResumeSocial.findByIdAndUpdate(req.body.id, {
      $set: req.body,
    });
    res
      .status(200)
      .json({ message: "Social info details updated successfully" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeSocialGet,
  resumeSocialUpdate,
};
