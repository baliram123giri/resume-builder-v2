import {
  Button,
  Dropdown,
  Form,
  Menu,
  Progress,
  Skeleton,
  Tooltip,
} from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../../components/plusIcon/PlusIcon";
import AppCard from "../../styleComp/AppCard";
import {
  EditOutlined,
  CloudDownloadOutlined,
  PrinterOutlined,
  MoreOutlined,
  EyeOutlined,
  MailOutlined,
  DeleteOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import "./resume.scss";
import {
  useResumeCreateMutation,
  useResumeDeleteMutation,
  useResumeListQuery,
  useResumeUpdateMutation,
} from "../../redux/services/resume";
import AppModal from "../../components/AppModal/AppModal";
import AppInput from "../../components/appinput/AppInput";
import { openNotification } from "../../components/notification/AppNotifcation";
import { AppConfirm } from "../../components/AppConfirm/AppConfirm";
import { Link } from "react-router-dom";
import ResumeTemp from "../resumeTemp/ResumeTemp";
import AppSkeleton from "../../components/AppSkeleton/AppSkeleton";

export default function Resume() {
  //state area
  const [resumeList, setResumeList] = useState([]);
  const [modalHandlder, setModalHandlder] = useState(false);
  const [action, setAction] = useState({ type: "add", id: false });
  const [resumeData, setResumeData] = useState(false);
  const [form] = Form.useForm();

  //redux state
  const { user } = useSelector((state) => state.userinfo);
  //hooks area
  const resumeListApi = useResumeListQuery();

  //update resume
  const [resumeUpdate, resumeUpdateResult] = useResumeUpdateMutation();

  //create resume
  const [resumeCreate, resumeCreateResult] = useResumeCreateMutation();

  //update resume
  const [resumeDelete, resumeDeleteResult] = useResumeDeleteMutation();

  //useEffect for listing
  useEffect(() => {
    if (resumeListApi.isSuccess) {
      const { resume_temp_id, ...others } = resumeListApi.data;
      setResumeList(resumeListApi.data);
    }
    if (resumeListApi.isError) {
      setResumeList([]);
      openNotification(resumeListApi.error.data.message, "error");
    }
  }, [resumeListApi.isFetching]);

  //useEffect for listing
  useEffect(() => {
    if (resumeDeleteResult.isSuccess) {
      openNotification(resumeDeleteResult.data.message, "success");
    }
    if (resumeDeleteResult.isError) {
      openNotification(resumeDeleteResult.error.data.message, "error");
    }
  }, [resumeDeleteResult.isLoading]);

  //useEffect for listing
  useEffect(() => {
    if (resumeCreateResult.isSuccess) {
      openNotification(resumeCreateResult.data.message, "success");
      setModalHandlder(false);
    }
    if (resumeCreateResult.isError) {
      openNotification(resumeCreateResult.error.data.message, "error");
    }
  }, [resumeCreateResult.isLoading]);

  //use Effect for update
  useEffect(() => {
    if (resumeUpdateResult.isSuccess) {
      openNotification(resumeUpdateResult.data.message, "success");
      setModalHandlder(false);
    } else if (resumeUpdateResult.isError) {
      openNotification(resumeUpdateResult.error.data.message, "error");
    }
  }, [resumeUpdateResult.isLoading]);

  useEffect(() => {
    resumeListApi.refetch();
  }, []);

  //variable
  const loading = resumeUpdateResult.isLoading;
  const toolTipStyle = {
    overlayInnerStyle: {
      padding: "4px 10px",
      margin: 0,
      height: 0,
    },
    overlayStyle: {
      fontSize: 10,
      padding: 0,
      background: "#000",
      borderRadius: 3,
    },
    placement: "top",
  };

  //menu itesm of more
  const MenuItems = ({ info }) => {
    return (
      <Menu
        items={[
          {
            label: (
              <div
                onClick={() => {
                  setAction({ type: "rename", id: info._id });
                  form.setFieldsValue({ resumetitle: info.resumetitle });
                  setModalHandlder(true);
                }}
                className="d-flex align-items-center gap-2"
              >
                <EditOutlined />
                <h6 className="fw-normal">Rename</h6>
              </div>
            ),
            key: "rename",
          },
          {
            label: (
              <div className="d-flex align-items-center gap-2">
                <EditOutlined />
                <h6 className="fw-normal">Edit</h6>
              </div>
            ),
            key: "edit",
          },
          {
            label: (
              <div className="d-flex align-items-center gap-2">
                <EyeOutlined />
                <h6 className="fw-normal">View</h6>
              </div>
            ),
            key: "view",
          },
          {
            label: (
              <div className="d-flex align-items-center gap-2">
                <CloudDownloadOutlined />
                <h6 className="fw-normal">Download</h6>
              </div>
            ),
            key: "download",
          },
          {
            label: (
              <div className="d-flex align-items-center gap-2">
                <MailOutlined />
                <h6 className="fw-normal">Email</h6>
              </div>
            ),
            key: "email",
          },
          {
            label: (
              <div
                onClick={() =>
                  AppConfirm(function() {
                    resumeDelete(info._id);
                  })
                }
                className="d-flex align-items-center gap-2"
              >
                <DeleteOutlined />
                <h6 className="fw-normal">Delete</h6>
              </div>
            ),
            key: "delete",
          },
        ]}
      />
    );
  };

  //childern for adding new resume
  //submit form
  const onFinish = (newVal) => {
    //add resume
    if (action.type === "add") {
      resumeCreate({ ...newVal, resumeuserid: user._id });
    } else if (action.type === "rename") {
      resumeUpdate({ ...newVal, id: action.id });
    }
  };

  //add resume jsx
  const Addresume = () => {
    return (
      <>
        <div className="text-center">
          <h4>Enter Resume Title</h4>
          <p>This name will be use to save your resume.</p>
        </div>
        <Form form={form} onFinish={onFinish} className="my-3">
          <AppInput
            name={"resumetitle"}
            rules={[
              {
                required: true,
                message: "Resume title should not be blank",
              },
            ]}
            placeholder="Enter resume title "
            type="text"
          />
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className=" text-white bg-success border-success"
          >
            <div className="d-flex align-items-center gap-1">
              {action.type === "add" ? (
                "Add"
              ) : (
                <>
                  <SaveOutlined /> Save
                </>
              )}
            </div>
          </Button>
          <Button
            htmlType="reset"
            type="primary"
            danger
            className="ms-2 text-white"
          >
            <div
              onClick={() => setModalHandlder(false)}
              className="d-flex align-items-center gap-1"
            >
              Cancel
            </div>
          </Button>
        </Form>
      </>
    );
  };

  const Templates = () => {
    return <>
     <div className="template">
      <div className="row">
        <div className="col-12 col-lg-4">
          <div className="reume-box ">
            <img src="./imges/basic.jpg" className="img-fluid"  alt="" />
          </div>
        </div>
      </div>
     </div>
    </>;
  };
  return (
    <>
      <AppModal
        width={"60%"}
        childern={<Templates />}
        show={modalHandlder}
        close={setModalHandlder}
      />

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div
            onClick={() => {
              setModalHandlder(true);
              setAction({ type: "add", id: false });
              form.resetFields();
            }}
          >
            {resumeList.isFetching ? (
              <AppSkeleton circle="circle" size={70} length={1} />
            ) : (
              <AppCard classStyle={"d-flex  gap-3 cursor-pointer rounded-2"}>
                <PlusIcon />
                <h6>Create Resume</h6>
              </AppCard>
            )}
          </div>
        </div>
      </div>
      <div className="row my-2">
        {/* //resume listType */}
        {resumeList.isFetching ? (
          <AppSkeleton col="4" circle={false} length={10} />
        ) : (
          <>
            {resumeList.length > 0 &&
              resumeList.map((e) => {
                return (
                  <div key={e._id} className="col-12 col-md-6 col-lg-4 my-2">
                    <div>
                      <AppCard classStyle={"rounded-2"}>
                        <div className="reume-box d-flex gap-3">
                          <div className="img">
                            <img
                              className="img-fluid  border"
                              src="https://www.mycvcreator.com/administrator/cvtempimages/611d6e2548a727.08456713.jpg"
                              alt=""
                            />
                          </div>
                          <div className="left-content w-100 ">
                            <h6 className="title">{e.resumetitle}</h6>
                            <div className="progress-info mt-2 d-flex justify-content-between">
                              <p>Score</p>
                              <p>{100}%</p>
                            </div>
                            <Progress
                              strokeColor={"#84a98c"}
                              showInfo={false}
                              percent={100}
                              strokeWidth={13}
                            />
                            <div className="action-buttons my-3 d-flex align-items-center gap-1">
                              <Tooltip {...toolTipStyle} title={"Loading..."}>
                                <Link to={`/resume-info/${e._id}`}>
                                  <Button className="rounded-3 d-flex align-items-center">
                                    <div className="text-success">Edit</div>
                                    <EditOutlined className="text-success" />
                                  </Button>
                                </Link>
                              </Tooltip>

                              <Tooltip
                                {...toolTipStyle}
                                title={"Processing..."}
                              >
                                <Button className="rounded-pill d-flex align-items-center">
                                  <CloudDownloadOutlined className="text-success" />
                                </Button>
                              </Tooltip>
                              <Tooltip
                                {...toolTipStyle}
                                title={"Processing..."}
                              >
                                <Button className="rounded-pill d-flex align-items-center">
                                  <PrinterOutlined className="text-success" />
                                </Button>
                              </Tooltip>

                              <Tooltip {...toolTipStyle} title={"More..."}>
                                <Dropdown
                                  overlayStyle={{ width: 200 }}
                                  placement="bottomRight"
                                  //passing info to menu function
                                  overlay={<MenuItems info={e} />}
                                  trigger={["click"]}
                                >
                                  <Button className="rounded-pill d-flex align-items-center">
                                    <MoreOutlined className="text-success" />
                                  </Button>
                                </Dropdown>
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      </AppCard>
                    </div>
                  </div>
                );
              })}
          </>
        )}
      </div>
    </>
  );
}
