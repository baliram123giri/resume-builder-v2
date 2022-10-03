const {
  resumeHobbiesGet,
  resumeHobbiesUpdate,
} = require("../../controllers/resume hobbies/resumeHbbiesController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeHobbiesUpdateValidator,
} = require("../../validators/resume hobbies/resumeHobbiesValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/hobbies/:id", verifyToken, resumeHobbiesGet);

//resume update
router.put(
  "/resume/hobbies/update",
  resumeHobbiesUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeHobbiesUpdate
);

//exporting routers
module.exports = router;
