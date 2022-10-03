import { DatePicker, Form } from "antd";
import React from "react";

export default function AppDatePicker({
  rules = [],
  label,
  initalDateVal = false,
  name,
  onDateVal = false,
}) {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      <DatePicker
        value={initalDateVal || ""}
        onChange={(value) => {
          onDateVal && onDateVal(value);
        }}
        placeholder="MM/DD/YYYY"
        format={"MM/DD/YYYY"}

        className="form-control border-success rounded-2"
        style={{ padding: "6px 9px" }}
      />
    </Form.Item>
  );
}
