const {
  resumeSocialGet,
  resumeSocialUpdate,
} = require("../../controllers/resume social link/resumeSocialController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeSocialUpdateValidator,
} = require("../../validators/resume social link/resumeSocialLinkValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/social-links/:id", verifyToken, resumeSocialGet);

//resume update
router.put(
  "/resume/social-links/update",
  resumeSocialUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeSocialUpdate
);

//exporting routers
module.exports = router;
