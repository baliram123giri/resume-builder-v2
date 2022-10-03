const { body } = require("express-validator");

const resumeSocialUpdateValidator = () => {
  return [
    body("id").trim().notEmpty().withMessage("Id should not be blank!"),
    body("facebook")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Facebook username should not be blank!"),
    body("twitter")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Twitter username should not be blank!"),
    body("linkedin")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Linkedin username should not be blank!"),
    body("website")
      .optional()
      .trim()
      .notEmpty()
      .withMessage("Website username should not be blank!")
      .matches(
        /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_-]+(\.[a-zA-Z]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)?$/gm
      )
      .withMessage("Please enter valid website url!"),
  ];
};

module.exports = { resumeSocialUpdateValidator };
