import { Alert, Button, Form } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {
  useUserLoginMutation,
  useUserRegisterMutation,
} from "../../redux/services/login";
import "./login.css";
import AppInput from "../../components/appinput/AppInput";
import { userLoginAction } from "../../redux/reducers/userreducer";
const config = require("../../.confing.json");
export const Login = () => {
  const [reqErr, setReqErr] = useState(false);
  const [reqSuccess, setReqSuccess] = useState(false);
  const [signUp, setSignUp] = useState(true);

  //objects area
  const [form] = Form.useForm();
  const inputs = [
    {
      id: "fullname",
      name: "fullname",
      lable: "Full Name",
      type: "text",
      dispaly: signUp,
      col: 12,
      rules: [
        {
          required: true,
          message: "Please input your fullname!",
        },
      ],
    },
    {
      id: 1,
      name: "email",
      lable: "Email",
      type: "email",
      class_style: "",
      col: 12,
      rules: [
        {
          required: true,
          type: "email",
          message: "The input is not valid E-mail!",
        },
      ],
    },
    {
      id: 2,
      name: "password",
      lable: "Password",
      type: "password",
      class_style: "",
      col: 12,
      rules: [
        {
          required: true,
          message: "Please input your password!",
        },
      ],
    },
    {
      id: "cpassword",
      name: "cpassword",
      lable: "Confirm password",
      type: "password",
      col: 12,
      require: "true",
      dispaly: signUp,
      dependencies: ["password"],
      rules: [
        {
          required: true,
          message: "Please confirm your password!",
        },
        ({ getFieldValue }) => ({
          validator(_, value) {
            if (!value || getFieldValue("password") === value) {
              return Promise.resolve();
            }

            return Promise.reject(
              new Error("The two passwords that you entered do not match!")
            );
          },
        }),
      ],
    },
  ];

  //hooks
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  //api requests
  //login
  const loginApi = useUserLoginMutation();
  const [userLogin] = loginApi;
  //login
  const rgisterApi = useUserRegisterMutation();
  const [userRegister] = rgisterApi;

  //variables
  const isLoading = rgisterApi[1].isLoading || loginApi[1].isLoading;
  //useEffcts

  //login
  useEffect(() => {
    if (loginApi[1].isSuccess) {
      Navigate("/my-account");
      dispatch(userLoginAction(loginApi[1].data));
    }
    if (loginApi[1].isError) {
      setReqErr(loginApi[1].error.data.message || loginApi[1].error.error);
    }
  }, [loginApi[1].isLoading]);

  //register
  useEffect(() => {
    if (rgisterApi[1].isSuccess) {
      setReqSuccess(rgisterApi[1].data.message);
      setSignUp(true);
    }
    if (rgisterApi[1].isError) {
      setReqErr(rgisterApi[1].error.data.message || rgisterApi[1].error.error);
    }
  }, [rgisterApi[1].isLoading]);

  //functions

  //clear
  function clear() {
    setReqErr(false);
    setReqSuccess(false);
    form.resetFields();
  }
  //submit form
  const onFinish = (values) => {
    if (signUp) {
      userLogin(values);
    } else {
      userRegister(values);
    }
  };

  return (
    <div className="login d-flex justify-content-center align-items-center ">
      <div
        className="login-form"
        style={{ background: "url(../imges/login-bg.png)" }}
      >
        <div className="row position-absolute align-items-center m-4">
          {/* //form  */}
          <div className="col-12 col-lg-6 ">
            <div className="bg-white p-4">
              <div className="my-2">
                {reqErr && (
                  <Alert
                    message={reqErr}
                    className="py-1"
                    showIcon
                    type="error"
                  />
                )}

                {reqSuccess && (
                  <Alert
                    message={reqSuccess}
                    className="py-1"
                    showIcon
                    type="success"
                  />
                )}
              </div>
              <Form
                autocomplete="off"
                name="basic"
                form={form}
                layout="vertical"
                onFinish={onFinish}
                autoComplete="off"
              >
                {inputs.map((input) => (
                  <>
                    {!input.dispaly && (
                      <AppInput
                        key={input.id}
                        label={input.lable}
                        name={input.name}
                        rules={input.rules}
                        col={input.col}
                        type={input.type}
                        dispaly={input.dispaly}
                        class_style={input.class_style}
                      />
                    )}
                  </>
                ))}
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  className="w-100 text-white btn btn-primary"
                >
                  Submit
                </Button>
                <div className="my-2">
                  <h6>
                    {signUp ? "Don't have account?" : "Already have account?"}
                    <span
                      onClick={() => {
                        setSignUp(!signUp);
                        clear();
                      }}
                      className="text-primary cursor-pointer fs-12 text-decoration-underline"
                    >
                      {signUp ? "Sign Up" : "Sign In"}
                    </span>
                  </h6>
                </div>
              </Form>
            </div>
          </div>

          {/* //desc  */}
          <div className="col-12 col-lg-6">
            <div className="d-flex flex-column align-items-center ">
              <div className="logo bg-white rounded-3 px-3 py-1 shadow mb-1 border">
                <img
                  src={config.logo}
                  alt=""
                  className="rounded-3"
                  height={60}
                  width={150}
                />
              </div>
              <div className="desc ">
                <p className="text-center text-white fst-italic fw-bold">
                  Make a CV to define yourself The right away. Meet thousands of
                  job announcements and employers by the help of your profile
                  with a private extension, which you can share at all social
                  media environments.
                </p>

                <div className="col-12 mt-3 text-center">
                  <button
                    onClick={() => {
                      setSignUp(!signUp);
                      clear();
                    }}
                    type="submit"
                    className="btn btn-primary w-50 "
                  >
                    {signUp ? "Register" : "Login"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
