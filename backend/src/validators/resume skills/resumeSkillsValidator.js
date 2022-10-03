const { body, check } = require("express-validator");

const resumeSkillsUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("skills.*.name")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Skill name should not be blank!"),
    body("skills.*.level")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Skill name should not be blank!"),
  ];
};

module.exports = { resumeSkillsUpdateValidator };
