const { body } = require("express-validator");

const resumeHobbiesUpdateValidator = () => {
  return [body("id").trim().notEmpty().withMessage("Id should not be blank!")];
};

module.exports = { resumeHobbiesUpdateValidator };
