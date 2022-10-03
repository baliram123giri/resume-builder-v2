const { ResumeTepm } = require("../../models/templeteResume/templeteResume");
const { catchError } = require("../../utils/errorHanlder");

//create resume
const resumeTempreate = async (req, res, next) => {
  try {
    const resumeTepm = new ResumeTepm(req.body);
    await resumeTepm.save();
    res
      .status(200)
      .json({ message: "Resume templete created successfully..." });
  } catch (error) {
    next(error);
  }
};

//resumetemp list
const resumeTempGet = async (req, res, next) => {
  try {
    const resume = await ResumeTepm.aggregate([{ $skip: 0 }]);
    if (resume.length == 0) return next(catchError(400, "No records found!"));
    const newData = resume.map(({ resume_img, ...rest }) => {
      return { ...rest, resume_img: atob(resume_img) };
    });
    res.status(200).json(newData);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumeTempreate,
  resumeTempGet,
};
