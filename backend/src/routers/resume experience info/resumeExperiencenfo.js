const {
  resumeExperienceInfoGet,
  resumeExperienceInfoUpdate,
} = require("../../controllers/resume experience info/resumeExperienceInfoController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeExperienceInfoUpdateValidator,
} = require("../../validators/resume experience info/resumeExperienceInfoValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/experience-info/:id", verifyToken, resumeExperienceInfoGet);

//resume update
router.put(
  "/resume/personal-info/update",
  resumeExperienceInfoUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeExperienceInfoUpdate
);

//exporting routers
module.exports = router;

