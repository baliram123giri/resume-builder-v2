import "./App.css";
import "antd/dist/antd.css";
import "./style/common.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./view/login/Login";
import { MyAccount } from "./view/myAccount/MyAccount";
import Main from "./layouts/main/Main";
import Resume from "./view/resume/Resume";
import ResumeInfo from "./view/resumeInfo/ResumeInfo";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />}>
          <Route path="my-account" element={<MyAccount />} />
          <Route path="resume" element={<Resume />} />
          <Route path="resume-info/:id" element={<ResumeInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
