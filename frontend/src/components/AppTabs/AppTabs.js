import React, { useState } from "react";
import { Button, Switch } from "antd";
import AppModal from "../AppModal/AppModal";
import { CheckOutlined } from "@ant-design/icons";
export default function AppTabs({ getActive = false, tabs = [] }) {
  const [active, setActive] = useState("Profile");
  const [modalHandlder, setModalHandlder] = useState(false);

  //function area
  //modal content
  const AddSectionArea = () => {
    //extra tabs
    const [reRender, setReRender] = useState(false);

    const extraTabs = [
      "Referees",
      "Software",
      "Languages",
      "Certifications",
      "Awards",
      "Publications",
      "Affiliations",
      "Accomplishments",
      "Additional Information",
      "Others",
    ];

    return (
      <>
        <h6 className="border-bottom pb-2">Add More Section</h6>
        <table className="table table-bordered mt-3">
          <tbody>
            {extraTabs.map((ele, index) => {
              return (
                <tr key={index}>
                  <td>{ele}</td>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        className={`form-check-input text-white border-success ${
                          tabs.includes(ele) ? "bg-success" : ""
                        }`}
                        type="checkbox"
                        name={ele}
                        id="flexSwitchCheckChecked"
                        checked={tabs.includes(ele)}
                        onChange={(value) => {
                          setReRender(value);
                          if (value && !tabs.includes(ele)) {
                            tabs.push(ele);
                          } else if (tabs.includes(ele)) {
                            tabs.pop(ele);
                          }
                        }}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="text-end">
          <Button onClick={() => setModalHandlder(false)} type="primary"  className="rounded-pill" danger>
            <CheckOutlined /> Done
          </Button>
        </div>
      </>
    );
  };

  return (
    <>
      <AppModal
        childern={<AddSectionArea />}
        show={modalHandlder}
        close={setModalHandlder}
      />
      {tabs.map((e) => {
        return (
          <Button
            onClick={() => {
              getActive(e);
              setActive(e);
            }}
            key={e}
            type={`${active === e ? "primary" : "link"}`}
            className={`ms-1 ${
              active === e
                ? "bg-success border-success rounded-pill"
                : "text-dark m-1"
            }`}
          >
            {e}
          </Button>
        );
      })}
      <Button
        onClick={() => setModalHandlder(true)}
        type="primary"
        className="m-1 rounded-pill"
        danger
      >
        + Add Section
      </Button>
      <hr />
    </>
  );
}
