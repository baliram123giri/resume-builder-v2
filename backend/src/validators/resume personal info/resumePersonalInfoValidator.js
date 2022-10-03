const { body } = require("express-validator");

const resumePersInfoValidator = () => {
  return [
    body("fname")
      .trim()
      .notEmpty()
      .withMessage("First Name should not be blank!"),
    body("lname")
      .trim()
      .notEmpty()
      .withMessage("Last Name should not be blank!"),
    body("mname")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("passport should not be blank!"),
    body("passport")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Pasport should not be blank!"),
    body("gender").trim().notEmpty().withMessage("Gender should not be blank!"),
    body("birth").trim().notEmpty().withMessage("Birth should not be blank!"),
    body("marital")
      .trim()
      .notEmpty()
      .withMessage("Marital status should not be blank!"),
    body("profession")
      .trim()
      .notEmpty()
      .withMessage("Profession should not be blank!"),
    body("address")
      .trim()
      .notEmpty()
      .withMessage("Address should not be blank!"),
    body("city").trim().notEmpty().withMessage("City should not be blank!"),
    body("state").trim().notEmpty().withMessage("State should not be blank!"),
    body("nationality")
      .trim()
      .notEmpty()
      .withMessage("Nationality should not be blank!"),
    body("phone")
      .trim()
      .notEmpty()
      .withMessage("Phone should not be blank!")
      .isNumeric()
      .withMessage("Phone number should be numeric only!"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email should not be blank!")
      .isEmail()
      .withMessage("Email is not vaild!"),
    body("userid")
      .trim()
      .notEmpty()
      .withMessage("User Id should not be blank!"),
    body("resumeid")
      .trim()
      .notEmpty()
      .withMessage("Resume Id should not be blank!"),
  ];
};
const resumePersInfoUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("fname")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("First Name should not be blank!"),
    body("lname")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Last Name should not be blank!"),
    body("mname")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("passport should not be blank!"),
    body("passport")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Pasport should not be blank!"),
    body("gender")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Gender should not be blank!"),
    body("birth")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Birth should not be blank!"),
    body("marital")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Marital status should not be blank!"),
    body("profession")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Profession should not be blank!"),
    body("address")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Address should not be blank!"),
    body("city")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("City should not be blank!"),
    body("state")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("State should not be blank!"),
    body("nationality")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Nationality should not be blank!"),
    body("phone")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Phone should not be blank!")
      .isNumeric()
      .withMessage("Phone number should be numeric only!"),
    body("email")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Email should not be blank!")
      .isEmail()
      .withMessage("Email is not vaild!"),
    body("userid")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("User Id should not be blank!"),
    body("resumeid")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Resume Id should not be blank!"),
  ];
};

module.exports = { resumePersInfoValidator, resumePersInfoUpdateValidator };
