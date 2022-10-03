const {
  resumeEducationInfoGet,
  resumeEducationInfoUpdate,
} = require("../../controllers/resume education info/resumeEducationInfoController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeEducationInfoUpdateValidator,
} = require("../../validators/resume education info/resumeEducationInfoValidator");
const {
  resumeExperienceInfoUpdateValidator,
} = require("../../validators/resume experience info/resumeExperienceInfoValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/education-info/:id", verifyToken, resumeEducationInfoGet);

//resume update
router.put(
  "/resume/education-info/update",
  resumeEducationInfoUpdateValidator,
  expressValidatorsErr,
  verifyToken,
  resumeEducationInfoUpdate
);

//exporting routers
module.exports = router;
