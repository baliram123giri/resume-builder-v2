const Jwt = require("jsonwebtoken");
const { catchError } = require("./errorHanlder");

const verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies.access_token;
    if (!token) return next(catchError(404, "You are not authonticated!..."));

    Jwt.verify(token, process.env.JWT, (err, user) => {
      if (err) return next(403, "Token is not valid!...");
      req.user = user;
      next();
    });
  } catch (error) {
    next(catchError(400, error));
  }
};

module.exports = { verifyToken };
