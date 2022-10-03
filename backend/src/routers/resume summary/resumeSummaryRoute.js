const {
  resumeSummaryGet,
  resumeSummaryUpdate,
} = require("../../controllers/resume summary/resumeSummaryController");
const { expressValidatorsErr } = require("../../utils/controllers");
const { verifyToken } = require("../../utils/verifyToken");
const {
  resumeSummaryUpdateValidator,
} = require("../../validators/resume summary/resumeSummaryValidator");

const router = require("express").Router();

//private routers

//resume list
router.get("/resume/summary/:id", verifyToken, resumeSummaryGet);

//resume update
router.put(
  "/resume/summary/update",
  resumeSummaryUpdateValidator(),
  expressValidatorsErr,
  verifyToken,
  resumeSummaryUpdate
);

//exporting routers
module.exports = router;
