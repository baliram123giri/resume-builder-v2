import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { openNotification } from "../../components/notification/AppNotifcation";
import { useResumeCreateMutation } from "../../redux/services/resume";
import "./resumeTemp.css";
export default function ResumeTemp({addResumeData}) {
  //state area
  const [modalHandlder, setModalHandlder] = useState(false);
  //hooks area
  const { user } = useSelector((state) => state.userinfo);
  //create resume
  const [resumeCreate, resultResumeCreate] = useResumeCreateMutation();

  //use Effect for create
  useEffect(() => {
    if (resultResumeCreate.isSuccess) {
      openNotification(resultResumeCreate.data.message, "success");
      setModalHandlder(false);
    } else if (resultResumeCreate.isError) {
      openNotification(resultResumeCreate.error.data.message, "error");
    }
  }, [resultResumeCreate.isLoading]);

  //variables area

  //functions area

  return (
    <>
      <div className="text-center border-bottom pb-2">
        <h4>Choose a Resume Template</h4>
        <p>This name will be use to save your resume.</p>
      </div>
      <div className="templates row my-3">
        <div className="col-12 col-md-4">
          <div className="resume-img ">
            <div className="select-button border border-success rounded">
              <Button
                type="primary"
                className="bg-success text-white border-success px-4"
              >
                Select
              </Button>
            </div>
            <img
              className="h-100 border w-100 rounded"
              src="https://www.mycvcreator.com/administrator/cvtempimages/611d6e2548a727.08456713.jpg"
              alt=""
            />
          </div>
          <div className="text-center mt-3">
            <h6 className="fw-bold fst-italic border py-2">BASIC</h6>
          </div>
        </div>
      </div>
    </>
  );
}
