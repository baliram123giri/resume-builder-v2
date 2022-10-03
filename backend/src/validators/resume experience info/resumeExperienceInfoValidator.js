const { body } = require("express-validator");

const resumeExperienceInfoUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("job_title")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Job title should not be blank!"),
    body("employer")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Employer Name should not be blank!"),
    body("work_city")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Work city should not be blank!"),
    body("work_state")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Work state should not be blank!"),
    body("start_date")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Work start date should not be blank!"),
    body("end_date")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Work end date should not be blank!"),
    body("job_duties")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Job duties should not be blank!"),
  ];
};

module.exports = { resumeExperienceInfoUpdateValidator };
