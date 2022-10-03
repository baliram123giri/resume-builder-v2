const { verifyToken } = require("../../utils/verifyToken");
const {
  usersGet,
  usersCreate,
  userLogin,
  userUpdate,

  userPasswordUpdate,
  userInfoGet,
} = require("../../controllers/users/usersController");
const { fileUploadFun } = require("../../utils/controllers");

const router = require("express").Router();

const file = fileUploadFun("userpic");

//public routers

//user login
router.post("/user/login", userLogin);

//user register
router.post("/user/register", usersCreate);

//private routers

//user profile update
router.put("/user/update", verifyToken, userUpdate);

//user profile info get
router.get("/user", verifyToken, userInfoGet);

//user password change
router.put("/users/change-password", verifyToken, userPasswordUpdate);

//user list
router.get("/users", verifyToken, usersGet);

//exporting routers
module.exports = router;
