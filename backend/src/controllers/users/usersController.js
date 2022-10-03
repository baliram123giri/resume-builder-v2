const { User } = require("../../models/users/userModal");
var bcrypt = require("bcryptjs");
const { catchError } = require("../../utils/errorHanlder");
var jwt = require("jsonwebtoken");
const { deleteFile } = require("../../utils/controllers");
var salt = bcrypt.genSaltSync(10);

//create user
const usersCreate = async (req, res, next) => {
  try {
    const user = new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password, salt),
    });

    await user.save();
    res.status(200).json({ message: "User creaed successfully..." });
  } catch (error) {
    next(error);
    deleteFile("userpic", req?.file?.filename || "");
  }
};

//Login user
const userLogin = async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  try {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const { password, ...others } = user._doc;
        const token = await jwt.sign({ id: others._id }, process.env.JWT, {
          expiresIn: "24h",
        });
        res
          .cookie("access_token", token, {
            httpOnly: true,
          })
          .status(200)
          .json(others);
      } else {
        next(catchError(404, "User email or password incorrect!"));
      }
    } else {
      next(catchError(404, "User details not found!"));
    }
  } catch (error) {
    next(error);
  }
};

//userlist
const usersGet = async (req, res, next) => {
  try {
    const users = await User.aggregate([{ $skip: 1 }]);
    if (users.length == 0) return next(catchError(400, "No records found!"));
    const others = users.map(({ password, ...rest }) => {
      return rest;
    });

    res.status(200).json(others);
  } catch (error) {
    next(error);
  }
};
//userinfo
const userInfoGet = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.user.id });
    if (!user) return next(catchError(400, "No records found!"));
    const { password, ...rest } = user._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

//userupdate
const userUpdate = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    if (user) {
      await User.updateOne({ _id: user._id }, { $set: req.body });
      res.status(200).json({ message: "User details updated successfully" });
    }
  } catch (error) {
    next(error);
  }
};

//password change
const userPasswordUpdate = async (req, res, next) => {
  try {
    const user = await User.findOne({ _id: req.body.id });
    const checkOldPass = bcrypt.compareSync(
      req.body.current_password,
      user.password
    );
    if (checkOldPass) {
      await User.updateOne(
        { _id: user._id },
        { $set: { password: bcrypt.hashSync(req.body.password, salt) } }
      );
      res.status(200).json({ message: "Password changed successfully..." });
    } else {
      next(catchError(404, "User current password is incorrect!"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  usersGet,
  usersCreate,
  userLogin,
  userUpdate,
  userPasswordUpdate,
  userInfoGet,
};
