const {
  ResumeEducationInfo,
} = require("../../models/resume education info/resumeEducationInfoModel");
const {
  ResumeExperienceInfo,
} = require("../../models/resume experience info/resumeExperienceInfoModel");
const {
  ResumeHobbies,
} = require("../../models/resume hobbies/resumeHobiesModel");
const {
  ResumePersonalInfo,
} = require("../../models/resume personal info/resumePersonalInfoModel");
const {
  ResumeSkills,
} = require("../../models/resume skills/resumeSkillsModel");
const {
  ResumeSocial,
} = require("../../models/resume social link/resumeSocialModel");
const {
  ResumeSummary,
} = require("../../models/resume summary/resumeSummaryModel");
const { Resume } = require("../../models/resume/resumeModel");
const { catchError } = require("../../utils/errorHanlder");

//function for delete record

//create resume
const resumeCreate = async (req, res, next) => {
  try {
    const resume = new Resume({ ...req.body, resumeuserid: req.user.id });
    const resumeResult = await resume.save();

    //creating personal info
    const resumePersonalInfo = new ResumePersonalInfo({
      userid: req.user.id,
      resumeid: resumeResult._id,
    });
    resumePersonalInfo
      .save()
      .then(async () => {
        //creating experience info
        const resumeExperienceInfo = new ResumeExperienceInfo({
          userid: req.user.id,
          resumeid: resumeResult._id,
        });
        resumeExperienceInfo
          .save()
          .then(() => {
            //creating education info
            const resumeEducationInfo = new ResumeEducationInfo({
              userid: req.user.id,
              resumeid: resumeResult._id,
            });
            resumeEducationInfo
              .save()
              .then(() => {
                //creating skills info
                const resumeSkillsInfo = new ResumeSkills({
                  userid: req.user.id,
                  resumeid: resumeResult._id,
                });
                resumeSkillsInfo
                  .save()
                  .then(() => {
                    //creating summary info
                    const resumeSummaryInfo = new ResumeSummary({
                      userid: req.user.id,
                      resumeid: resumeResult._id,
                    });
                    resumeSummaryInfo
                      .save()
                      .then(() => {
                        //creating hobbies info
                        const resumeHobbiesInfo = new ResumeHobbies({
                          userid: req.user.id,
                          resumeid: resumeResult._id,
                        });
                        resumeHobbiesInfo
                          .save()
                          .then(() => {
                            //creating social links info
                            const resumeSocialLinksInfo = new ResumeSocial({
                              userid: req.user.id,
                              resumeid: resumeResult._id,
                            });
                            resumeSocialLinksInfo
                              .save()
                              .then(() => {
                                res.status(200).json({
                                  message: "Resume created successfully...",
                                });
                              })
                              .catch(async (e) => {
                                res.status(400).json(e);
                                await Resume.findByIdAndDelete(resume._id);
                                await ResumePersonalInfo.findByIdAndDelete(
                                  resumePersonalInfo._id
                                );
                                await ResumeExperienceInfo.findByIdAndDelete(
                                  resumeExperienceInfo._id
                                );
                                await ResumeEducationInfo.findByIdAndDelete(
                                  resumeEducationInfo._id
                                );
                                await ResumeSkills.findByIdAndDelete(
                                  resumeSkillsInfo._id
                                );
                                await ResumeSummary.findByIdAndDelete(
                                  resumeSkillsInfo._id
                                );
                                await ResumeHobbies.findByIdAndDelete(
                                  resumeHobbiesInfo._id
                                );
                              });
                          })
                          .catch(async (e) => {
                            res.status(400).json(e);
                            await Resume.findByIdAndDelete(resume._id);
                            await ResumePersonalInfo.findByIdAndDelete(
                              resumePersonalInfo._id
                            );
                            await ResumeExperienceInfo.findByIdAndDelete(
                              resumeExperienceInfo._id
                            );
                            await ResumeEducationInfo.findByIdAndDelete(
                              resumeEducationInfo._id
                            );
                            await ResumeSkills.findByIdAndDelete(
                              resumeSkillsInfo._id
                            );
                            await ResumeSummary.findByIdAndDelete(
                              resumeSkillsInfo._id
                            );
                          });
                      })
                      .catch(async (e) => {
                        res.status(400).json(e);
                        await Resume.findByIdAndDelete(resume._id);
                        await ResumePersonalInfo.findByIdAndDelete(
                          resumePersonalInfo._id
                        );
                        await ResumeExperienceInfo.findByIdAndDelete(
                          resumeExperienceInfo._id
                        );
                        await ResumeEducationInfo.findByIdAndDelete(
                          resumeEducationInfo._id
                        );
                        await ResumeSkills.findByIdAndDelete(
                          resumeSummaryInfo._id
                        );
                      });
                  })
                  .catch(async (e) => {
                    res.status(400).json(e);
                    await Resume.findByIdAndDelete(resume._id);
                    await ResumePersonalInfo.findByIdAndDelete(
                      resumePersonalInfo._id
                    );
                    await ResumeExperienceInfo.findByIdAndDelete(
                      resumeExperienceInfo._id
                    );
                    await ResumeEducationInfo.findByIdAndDelete(
                      resumeEducationInfo._id
                    );
                  });
              })
              .catch(async (e) => {
                res.status(400).json(e);
                await Resume.findByIdAndDelete(resume._id);
                await ResumePersonalInfo.findByIdAndDelete(
                  resumePersonalInfo._id
                );
                await ResumeExperienceInfo.findByIdAndDelete(
                  resumeExperienceInfo._id
                );
              });
          })
          .catch(async (e) => {
            res.status(400).json(e);
            await Resume.findByIdAndDelete(resume._id);
            await ResumePersonalInfo.findByIdAndDelete(resumePersonalInfo._id);
          });
      })
      .catch(async (e) => {
        res.status(400).json(e);
        await Resume.findByIdAndDelete(resume._id);
      });
  } catch (error) {
    next(error);
  }
};

//resume list
const resumeGet = async (req, res, next) => {
  try {
    const resume = await Resume.find().populate("resume_temp_id", "resume_img");
    if (resume.length == 0) return next(catchError(400, "No records found!"));
    
    res.status(200).json(resume);
  } catch (error) {
    next(error);
  }
};

//resume update
const resumeUpdate = async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ _id: req.body.id });
    if (!resume) return next(catchError(404, "No records found!"));
    await Resume.findByIdAndUpdate(req.body.id, { $set: req.body });
    res.status(200).json({ message: "Resume details updated successfully" });
  } catch (error) {
    next(error);
  }
};

//resume delete
const resumeDelete = async (req, res, next) => {
  try {
    const resume = await Resume.findOne({ _id: req.params.id });
    if (!resume) return next(catchError(404, "No records found!"));
    await Resume.findByIdAndDelete(req.params.id);
    await ResumeSummary.findOneAndDelete({ resumeid: resume._id });
    await ResumeSocial.findOneAndDelete({ resumeid: resume._id });
    await ResumeSkills.findOneAndDelete({ resumeid: resume._id });
    await ResumePersonalInfo.findOneAndDelete({ resumeid: resume._id });
    await ResumeHobbies.findOneAndDelete({ resumeid: resume._id });
    await ResumeExperienceInfo.findOneAndDelete({ resumeid: resume._id });
    await ResumeEducationInfo.findOneAndDelete({ resumeid: resume._id });
    res.status(200).json({ message: "Resume details deleted successfully" });
  } catch (error) {
    next(error);
  }
};

//modules export
module.exports = {
  resumeCreate,
  resumeGet,
  resumeUpdate,
  resumeDelete,
};
