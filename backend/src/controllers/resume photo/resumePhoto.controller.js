const { ResumePhoto } = require("../../models/resume photo/resumePhotomodel");
const { deleteFile } = require("../../utils/controllers");
const { catchError } = require("../../utils/errorHanlder");

//resume photo
const resumePhotoGet = async (req, res, next) => {
  try {
    const resumePhoto = await ResumePhoto.findOne({
      _id: req.params.id,
    });

    if (!resumePhoto) return next(catchError(404, "No records found!"));
    const data = resumePhoto.map(({ resume_photo, ...rest }) => {
      return {
        ...rest,
        resume_img: `${process.env.BASE_URL}${process.env.PORT}/resume/photos/${resume_photo}`,
      };
    });

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

//userupdate
const resumePhotoUpdate = async (req, res, next) => {
  try {
    const resumePhoto = await ResumePhoto.findOne({ _id: req.body.id });
    if (resumePhoto && req.body?.resume_photo) {
      await ResumePhoto.updateOne(
        { _id: req.body.id },
        { $set: { ...req.body, resume_photo: req?.file?.filename || "" } }
      );
      //deleting existing file
      deleteFile("photos", user.resume_photo);
      res
        .status(200)
        .json({ message: "Resume photo details updated successfully" });
    } else {
      next(catchError(404, "pealse upload resume photo!"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  resumePhotoGet,
  resumePhotoUpdate,
};
