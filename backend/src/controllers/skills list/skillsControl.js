const { Skills } = require("../../models/skills list/skillsModel");
const { catchError } = require("../../utils/errorHanlder");

//function for delete record

//create resume
const skillsCreate = async (req, res, next) => {
  try {
    const skills = new Skills(req.body);
    await skills.save();
    res.status(200).json({ message: "Skills created successfully..." });
  } catch (error) {
    next(error);
  }
};

//skills list
const skillsGet = async (req, res, next) => {
  try {
    const skills = await Skills.find();
    if (skills.length == 0) return next(catchError(400, "No records found!"));
    res.status(200).json(skills);
  } catch (error) {
    next(error);
  }
};

//skills update
const skillsUpdate = async (req, res, next) => {
  try {
    const skills = await Skills.findOne({ _id: req.body.id });
    if (!skills) return next(catchError(404, "No records found!"));
    await Skills.findByIdAndUpdate(req.body.id, { $set: req.body });
    res.status(200).json({ message: "skills details updated successfully" });
  } catch (error) {
    next(error);
  }
};

//modules export
module.exports = {
  skillsCreate,
  skillsGet,
  skillsUpdate,
};
