const { verifyToken } = require("../../utils/verifyToken");

const { fileUploadFun } = require("../../utils/controllers");
const {
  resumePhotoGet,
  resumePhotoUpdate,
} = require("../../controllers/resume photo/resumePhoto.controller");

const router = require("express").Router();

const file = fileUploadFun("userpic");

//private routers

//user profile update
router.put(
  "/resume/photo/update",
  verifyToken,
  file.single("resume_photo"),
  resumePhotoUpdate
);

//user list
router.get("/resume/photo/:id", verifyToken, resumePhotoGet);

//exporting routers
module.exports = router;
