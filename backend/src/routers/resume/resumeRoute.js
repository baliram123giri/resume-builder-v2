const { verifyToken } = require("../../utils/verifyToken");
const router = require("express").Router();
const {
  resumeCreate,
  resumeGet,
  resumeUpdate,
  resumeDelete,
} = require("../../controllers/resume/resumeControl");
const { resumeValidator } = require("../../validators/resume/resumeValidator");
const { expressValidatorsErr } = require("../../utils/controllers");
//private routers

//resume create
router.post(
  "/resume/create",
  resumeValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeCreate
);

//resume list
router.get("/resume/list", verifyToken, resumeGet);

//resume delete
router.delete("/resume/:id", verifyToken, resumeDelete);

//resume update
router.put(
  "/resume/update",
  resumeValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeUpdate
);

//exporting routers
module.exports = router;
