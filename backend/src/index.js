const express = require("express");
const app = express();
const cors = require("cors");

var cookieParser = require("cookie-parser");
require("dotenv").config();

//app use for acceing
app.use(express.json({ limit: "50mb" }));
app.use(
  cors({
    origin: "*",
  })
);
app.use(cookieParser());
app.use(express.static("upload"));
app.use("/userpic", express.static("userpic"));
// app.use(
//   bodyParser.urlencoded({
//     limit: "50mb",
//     parameterLimit: 100000,
//     extended: true,
//   })
// );

//testing

//db connection
require("./db");

//variables
const port = process.env.PORT || 8000;

//routers
//users
app.use("/api", require("./routers/users/userRoute"));

//resume
app.use("/api", require("./routers/resume/resumeRoute"));

//resume personal info
app.use("/api", require("./routers/resume personal info/resumePersInfo"));

//resume experience info
app.use(
  "/api",
  require("./routers/resume experience info/resumeExperiencenfo")
);

//resume education info
app.use(
  "/api",
  require("./routers/resume education info/resumeEducationInfoRoute")
);

//resume skills info
app.use("/api", require("./routers/resume skills/resumeSkillsRoute"));

//skills list
app.use("/api", require("./routers/skills list/skillsListRoute"));

//resume summary info
app.use("/api", require("./routers/resume summary/resumeSummaryRoute"));

//resume hobbies info
app.use("/api", require("./routers/resume hobbies/resumeHobbiesRoute"));

//resume social links info
app.use("/api", require("./routers/resume social link/resumeSocialLinkRoute"));

//resume photo
app.use("/api", require("./routers/resume photo/resumePhotoRoute"));

//resume temp
app.use("/api", require("./routers/templeteResume/templeteResume"));

app.use("", (req, res) => {
  res.status(404).json({ message: "Url not found!" });
});

//errors handler
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error!..";
  return res.status(status).json({ message });
});
//server
app.listen(port, () => console.log(`Server is running at ${port}`));
