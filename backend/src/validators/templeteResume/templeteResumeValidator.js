const { body } = require("express-validator");

const resumeTempValidator = () => {
  return [
    body("resume_tepmtitle")
      .notEmpty()
      .trim()
      .withMessage("resume_tepmtitle should not blank!"),
    body("resume_img")
      .trim()
      .notEmpty()
      .withMessage("resume_img should not blank!"),
  ];
};

module.exports = { resumeTempValidator};
