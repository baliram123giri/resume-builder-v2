import { Button, Form } from "antd";
import React, { useRef } from "react";
import AppDatePicker from "../../components/AppDatePicker/AppDatePicker";
import AppInput from "../../components/appinput/AppInput";
import AppSelect from "../../components/AppSelect/AppSelect";
import { SaveOutlined } from "@ant-design/icons";
export default function ProfileInfo() {
  const formRef = useRef(null)
  const [form] = Form.useForm();
  const inputs = [
    {
      id: "fname",
      name: "fname",
      lable: "First Name",
      type: "text",
      col: 4,
      rules: [
        {
          required: true,
          message: "Please enter your first name!",
        },
      ],
    },
    {
      id: 1,
      name: "mname",
      lable: "Middel Name (Optional)",
      type: "text",
      col: 4,
      rules: [
        {
          required: true,
          message: "please enter your middle name!",
        },
      ],
    },
    {
      id: 1545,
      name: "lname",
      lable: "Last Name",
      type: "text",
      col: 4,
      rules: [
        {
          required: true,
          message: "please enter your last name!",
        },
      ],
    },
    {
      id: 554545,
      name: "gender",
      lable: "Gender (Optional)",
      type: "select",
      placeholder: "Select Gender",
      col: 4,
      options: [
        { value: "male", name: "Male" },
        { value: "female", name: "Female" },
        { value: "other", name: "Other" },
      ],
      rules: [
        {
          required: true,
          message: "Please select gender!",
        },
      ],
    },
    {
      id: 565654,
      name: "birth",
      lable: "Date of Birth (Optional)",
      type: "date",
      col: 4,
      rules: [
        {
          required: true,
          message: "Please choose birth date!",
        },
      ],
    },
    {
      id: 741545454,
      name: "marital",
      placeholder: "Select Marital Status",
      lable: "Marital Status (Optional)",
      type: "select",
      col: 4,
      options: [
        { value: "single", name: "Single" },
        { value: "married", name: "Married" },
        { value: "devorced", name: "Devorced" },
        { value: "widowed", name: "Widowed" },
        { value: "empty", name: "Empty" },
      ],
      rules: [
        {
          required: true,
          message: "Please select marital status!",
        },
      ],
    },
    {
      id: 1544875,
      name: "profession",
      lable: "Profession",
      placeholder: "eg.Sr.Accoutant",
      type: "text",
      col: 6,
      rules: [
        {
          required: true,
          message: "please enter your profession!",
        },
      ],
    },
    {
      id: 454541,
      name: "address",
      lable: "Street Address",
      type: "text",
      col: 6,
    },
    {
      id: 4557454541,
      name: "city",
      lable: "City",
      type: "text",
      col: 4,
    },
    {
      id: 7645,
      name: "state",
      lable: "State/Province",
      type: "text",
      col: 4,
    },
    {
      id: 7448954544,
      name: "nationality",
      placeholder: "Select Country",
      lable: "Nationality (Optional)",
      type: "select",
      col: 4,
      options: [
        { value: "afghanistan", name: "Afghanistan" },
        { value: "india", name: "India" },
        { value: "us", name: "Us America" },
      ],
      rules: [
        {
          required: true,
          message: "Please select marital status!",
        },
      ],
    },
    {
      id: 7644545,
      name: "passport",
      lable: "Passport number (Optional)",
      type: "text",
      col: 4,
    },

    {
      id: 1261,
      name: "phone",
      lable: "Phone",
      type: "number",
      col: 4,
      rules: [
        {
          required: true,
          message: "Please select marital status!",
        },
        { max: 10, message: "Phone number max 10 char long!" },
        { min: 10, message: "Phone number must be in 10 char long!" },
      ],
    },
    {
      id: 1481545,
      name: "email",
      lable: "Email",
      type: "email",
      class_style: "",
      col: 4,
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
  ];

  //functions area
  //submit form
  const onFinish = (newVal) => {};

  return (
    <>
      <Form
        name="basic"
        layout="vertical"
        form={form}
        onFinish={onFinish}
        autoComplete="off"
        ref={formRef}
      >
        <div className="row">
          {inputs.map((input) => (
            <div className={`col-12 col-lg-${input.col}`} key={input.id}>
              {(input.type === "text" ||
                input.type === "number" ||
                input.type === "email") && (
                <AppInput
                  label={input.lable}
                  name={input.name}
                  rules={input.rules}
                  placeholder={input.placeholder}
                  type={input.type}
                  dispaly={input.dispaly}
                  class_style={input.class_style}
                />
              )}

              {input.type === "select" && (
                <AppSelect
                  onSelectVal={(value) => console.log(value)}
                  label={input.lable}
                  name={input.name}
                  rules={input.rules}
                  placeholder={input.placeholder}
                  options={input.options}
                />
              )}

              {input.type === "date" && (
                <AppDatePicker
                  onDateVal={(value) => console.log(value)}
                  label={input.lable}
                  name={input.name}
                  rules={input.rules}
                />
              )}
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-end my-2">
          <Button type="primary" size="large" htmlType="submit" className="d-flex align-items-center bg-success border-success rounded">
            <SaveOutlined />Save
          </Button>
        </div>
      </Form>
    </>
  );
}
