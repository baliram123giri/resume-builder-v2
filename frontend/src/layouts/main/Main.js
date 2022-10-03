import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import HeaderComp from "../header/HeaderComp";
import { Layout, Menu } from "antd";
import { MenuFoldOutlined } from "@ant-design/icons";
import "./main.css";
const { Sider, Content } = Layout;
export default function Main() {
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }

  const items = [
    getItem(
      <Link to={"/"}>Dashboard</Link>,
      "/dashboard",
      <MenuFoldOutlined />
    ),
    getItem(
      <Link to={"/resume"}>Resume</Link>,
      "/resume",
      <MenuFoldOutlined />
    ),
  ];

  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <HeaderComp />
        <Layout>
          <Sider
            className="border-end"
            theme="light"
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
          >
            <div className="logo" />
            <Menu
              theme="light"
              defaultSelectedKeys={["/dashboard"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Content className="p-2">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}
