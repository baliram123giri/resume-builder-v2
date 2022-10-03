const { body } = require("express-validator");
const { Resume } = require("../../models/resume/resumeModel");

const resumeValidator = () => {
  return [
    body("resumetitle")
      .optional()
      .notEmpty()
      .trim()
      .withMessage("resumetitle should not blank!")
      .custom((value) => {
        return Resume.findOne({ resumetitle: value }).then((user) => {
          if (user) {
            return Promise.reject("Resume title already in use!");
          }
        });
      }),
  ];
};

module.exports = { resumeValidator };
