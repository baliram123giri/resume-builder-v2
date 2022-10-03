const {
  resumeSkillsGet,
  resumeSkillsUpdate,
} = require("../../controllers/resume skills/resumeSkillsController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeSkillsUpdateValidator,
} = require("../../validators/resume skills/resumeSkillsValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/skills/:id", verifyToken, resumeSkillsGet);

//resume update
router.put(
  "/resume/skills/update",
  resumeSkillsUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeSkillsUpdate
);

//exporting routers
module.exports = router;
