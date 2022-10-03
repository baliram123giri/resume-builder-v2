import { Form, Select } from "antd";
import React from "react";
const { Option } = Select;
export default function AppSelect({
  placeholder = false,
  options = [],
  rules = [],
  name,
  label,
  onSelectVal = false,
}) {
  return (
    <Form.Item name={name} label={label} rules={rules}>
      <Select
        placeholder={placeholder || ""}
        // onChange={this.onGenderChange}
        allowClear
        bordered={false}
        className="border-success form-control"
        style={{ padding: "2px" }}
        onSelect={(value) => {
          onSelectVal && onSelectVal(value);
        }}
        dropdownStyle={{ border: "1px solid green" }}
      >
        {options.map((ele) => {
          return (
            <Option key={ele.value} value={ele.value}>
              {ele.name}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );
}
