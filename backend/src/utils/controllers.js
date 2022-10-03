const multer = require("multer");
const fs = require("fs");
const { validationResult } = require("express-validator");

const fileUploadFun = (pathname) => {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `./upload/${pathname}`);
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });

  return multer({ storage: storage });
};

//deleteFile
function deleteFile(pathname, name) {
  fs.unlink(`./upload/${pathname}/${name}`, function (err) {
    if (err) {
      console.error(err);
    }
  });
}

const expressValidatorsErr = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorsData = [];
    errors.array().map((e) => {
      errorsData.push(e.msg);
    });
    return res.status(400).json({ message: String(errorsData) });
  }
  next();
};

module.exports = { fileUploadFun, deleteFile, expressValidatorsErr };
