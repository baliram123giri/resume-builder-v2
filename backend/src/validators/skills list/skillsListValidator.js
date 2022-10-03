const { body } = require("express-validator");
const { Skills } = require("../../models/skills list/skillsModel");

const skillsCreateValidator = () => {
  return [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Skill name should not be blank!")
      .custom((value) => {
        return Skills.findOne({ name: value }).then((name) => {
          if (name) {
            return Promise.reject("Skill name already in use!");
          }
        });
      }),
  ];
};
const skillsListUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("name")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Skill name should not be blank!"),
  ];
};

module.exports = { skillsListUpdateValidator, skillsCreateValidator };
