const { body } = require("express-validator");

const resumeSummaryUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("summary")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Summary should not be blank!"),
  ];
};

module.exports = { resumeSummaryUpdateValidator };
