import { UploadOutlined } from "@ant-design/icons";
import { Avatar, Button, Image, message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import React, { useEffect, useState } from "react";
import "./fileupload.css";
const FileUpload = ({ label, fileData = false, loadFile = false }) => {
  const [priviewImg, setPriviewImg] = useState(false);
  const props = {
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    listType: "picture",
    beforeUpload(file, fileList) {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setPriviewImg(reader.result);
          fileData && fileData(reader.result);
        };
      });
    },
  };

  return (
    <>
      <div className="d-flex align-items-center flex-column">
        <div className=" my-3">
          <div className="file_pic border rounded-pill d-flex justify-content-center align-items-center rounded-pill">
            <Avatar
              size={110}
              src={
                <Image
                  className="img-fluid"
                  src={loadFile || priviewImg || "./imges/profile.png"}
                />
              }
            />
          </div>
        </div>
        <ImgCrop rotate>
          <Upload showUploadList={false} {...props} maxCount={1}>
            <Button
              className="btn-primary text-white w-100"
              icon={<UploadOutlined style={{ fontSize: 18 }} />}
            >
              {label || "Click to Upload"}
            </Button>
          </Upload>
        </ImgCrop>
      </div>
    </>
  );
};

export default FileUpload;
