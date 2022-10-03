const { body } = require("express-validator");

const resumeEducationInfoUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("edu_school")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("School name should not be blank!"),
    body("edu_city")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("City should not be blank!"),
    body("edu_state")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("State should not be blank!"),
    body("edu_degree")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Degree should not be blank!"),
    body("edu_field")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Field should not be blank!"),
    body("edu_start")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Start date should not be blank!"),
    body("edu_end")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("End date should not be blank!"),
  ];
};

module.exports = { resumeEducationInfoUpdateValidator };
