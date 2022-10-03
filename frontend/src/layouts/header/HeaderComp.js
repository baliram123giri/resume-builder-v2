import React from "react";
import { Dropdown, Layout, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const { Header } = Layout;
const config = require("../../.confing.json");
export default function HeaderComp() {
  const menu = (
    <Menu
      items={[
        {
          label: <NavLink to="/my-account">My Account</NavLink>,
          key: "/my-account",
          style: { fontSize: 12 },
        },
      ]}
    />
  );

  return (
    <>
      <Header className="border shadow-sm pe-1" style={{ background: "#fff " }}>
        <div className="header-content d-flex justify-content-between">
          <div className="logo">
            <img src={config.logo} width="100" alt="" />
          </div>
          <div className="left">
            <Dropdown overlay={menu} placement={"bottom"} trigger={["click"]}>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  <h5 className="fs-12 fw-bold text-primary">Baliram Giri</h5>
                  <DownOutlined
                    style={{
                      fontSize: 11,
                      lineHeight: 0,
                      marginBottom: 5,
                      display: "block",
                      color: "MenuText",
                    }}
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </Header>
    </>
  );
}
