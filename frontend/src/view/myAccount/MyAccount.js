import { Button, Form, message } from "antd";
import React, { useEffect, useState } from "react";
import AppInput from "../../components/appinput/AppInput";
import FileUpload from "../../components/fileUpload/FileUpload";
import { SaveOutlined } from "@ant-design/icons";
import "./myaccount.css";
import {
  useUserInfoQuery,
  useUserInfoUpdateMutation,
} from "../../redux/services/user";
import { openNotification } from "../../components/notification/AppNotifcation";
export const MyAccount = () => {
  //objects area
  const [file, setFile] = useState(false);
  const [form] = Form.useForm();
  const inputs = [
    {
      id: "fullname",
      name: "fullname",
      lable: "Name",
      type: "text",
      col: 12,
      rules: [
        {
          required: true,
          message: "Please enter your fullname!",
        },
      ],
    },
    {
      id: 1,
      name: "email",
      lable: "Email",
      type: "email",
      col: 12,
      rules: [
        {
          required: true,
          message: "please enter your email",
        },
        {
          type: "email",
          message: "Please enter valid e-mail!",
        },
      ],
    },
    {
      id: 1545,
      name: "mobile",
      lable: "Mobile Number",
      type: "number",
      col: 12,
      rules: [
        {
          required: false,
        },
        {
          max: 10,
          message: "Mobile number max 10 char long!",
        },
        {
          min: 10,
          message: "Mobile number min 10 char long!",
        },
      ],
    },
    {
      id: 545,
      name: "about_me",
      lable: "About Me",
      type: "text",
      col: 12,
      rules: [
        {
          required: false,
        },
        {
          max: 100,
          message: "About me info max 100 char long!",
        },
      ],
    },
  ];

  //hooks area
  //user info fetching
  const userInfoApi = useUserInfoQuery();

  //user info fetching
  const [userInfoUpdate, userInfoupdateResult] = useUserInfoUpdateMutation();

  //useEffect for userInfo
  useEffect(() => {
    if (userInfoApi.isSuccess) {
      form.setFieldsValue(userInfoApi.data);
      setFile(atob(userInfoApi.data.profile_pic));
    }
  }, [userInfoApi.isFetching]);

  //useEffect for updated info
  useEffect(() => {
    if (userInfoupdateResult.isSuccess) {
      openNotification(userInfoupdateResult.data.message, "success", false);
    }
    if (userInfoupdateResult.isError) {
      openNotification(userInfoupdateResult.error.data.message, "error", false);
    }
  }, [userInfoupdateResult.isLoading]);

  useEffect(() => {
    userInfoApi.refetch();
  }, []);

  //functions area
  //submit form
  const onFinish = (newVal) => {
    userInfoUpdate({
      ...newVal,
      id: userInfoApi.data._id,
      profile_pic: btoa(file),
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-5">
          <div className="profile_pic bg-white p-4 shadow-sm d-flex -justify-content-center rounded-3 border">
            <div className="upload">
              <FileUpload
                loadFile={file}
                fileData={(e) => setFile(e)}
                label="Edit Photo"
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <div className="bg-white p-4 shadow-sm  rounded-3 border">
            <div className="border-bottom w-100 border-2">
              <h5>Edit Account Details</h5>
            </div>
            {
              <Form
                name="basic"
                form={form}
                onFinish={onFinish}
                autoComplete="off"
              >
                {inputs.map((input) => (
                  <div key={input.id}>
                    {!input.dispaly && (
                      <div className="row my-3 align-items-center ">
                        <div className="col-12 col-lg-4">
                          <label htmlFor="" className="text-dark">
                            {input.lable}{" "}
                            {input.rules[0].required && (
                              <span className="text-danger">*</span>
                            )}
                          </label>
                        </div>
                        <div className="col-12 col-lg-8">
                          <AppInput
                            name={input.name}
                            rules={input.rules}
                            col={input.col}
                            type={input.type}
                            dispaly={input.dispaly}
                            class_style={input.class_style}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="row">
                  <div className="col-12 col-lg-8 ms-auto">
                    <Button
                      loading={userInfoupdateResult.isLoading}
                      htmlType="submit"
                      className=" text-white btn btn-primary"
                    >
                      <div className="d-flex align-items-center gap-1">
                        <SaveOutlined /> Update
                      </div>
                    </Button>
                  </div>
                </div>
              </Form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
