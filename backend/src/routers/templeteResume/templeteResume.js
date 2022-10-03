const {
  resumeTempreate,
  resumeTempGet,
} = require("../../controllers/templeteResume/templeteResume");
const {
  fileUploadFun,
  expressValidatorsErr,
} = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeTempValidator,
} = require("../../validators/templeteResume/templeteResumeValidator");
const router = require("express").Router();
const file = fileUploadFun("resume/templetes");
//private routers
const { body } = require("express-validator");
//resume temp create
router.post(
  "/resume/templete/create",
  [
    body("resume_tepmtitle")
      .notEmpty()
      .trim()
      .withMessage("resume_tepmtitle should not blank!"),
    body("resume_img")
      .trim()
      .notEmpty()
      .withMessage("resume_img should not blank!"),
  ],
  expressValidatorsErr,
  verifyToken,
  resumeTempreate
);
//resume list
router.get("/resume/templete/list", verifyToken, resumeTempGet);
//exporting routers
module.exports = router;
