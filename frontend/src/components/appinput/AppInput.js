import { Form, Input } from "antd";
import React from "react";
import "./appinput.css";
const AppInput = ({ label, name, type, rules = [], placeholder = false }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <Input
        placeholder={placeholder || ""}
        className="appinput rounded-2"
        type={type}
      />
    </Form.Item>
  );
};

export default AppInput;
