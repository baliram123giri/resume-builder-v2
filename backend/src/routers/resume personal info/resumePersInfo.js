const {
  resumePersonalInfoGet,
  resumePersonalInfoUpdate,
} = require("../../controllers/resume personal info/resumePersonalInfo");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumePersInfoUpdateValidator,
} = require("../../validators/resume personal info/resumePersonalInfoValidator");
const router = require("express").Router();

//private routers

//resume list
router.get("/resume/personal-info/:id", verifyToken, resumePersonalInfoGet);

//resume update
router.put(
  "/resume/personal-info/update",
  resumePersInfoUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumePersonalInfoUpdate
);

//exporting routers
module.exports = router;
