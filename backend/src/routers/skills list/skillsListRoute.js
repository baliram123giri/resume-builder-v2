const {
  skillsGet,
  skillsUpdate,
  skillsCreate,
} = require("../../controllers/skills list/skillsControl");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  skillsListUpdateValidator,
  skillsCreateValidator,
} = require("../../validators/skills list/skillsListValidator");

const router = require("express").Router();

//private routers
//skills create
router.post(
  "/skills",
  skillsCreateValidator(),
  expressValidatorsErr,
  verifyToken,
  skillsCreate
);

//skills list
router.get("/skills-list", verifyToken, skillsGet);

//sikll update
router.put(
  "/siklls/update",
  skillsListUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  skillsUpdate
);

//exporting routers
module.exports = router;
