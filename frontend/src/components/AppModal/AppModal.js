import { Modal } from "antd";
import React, { useEffect, useState } from "react";

const AppModal = ({
  show,
  childern = false,
  title = false,
  footer = false,
  close,
  width,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(show);
  }, [show]);

  return (
    <>
      <Modal
        {...title}
        footer={footer}
        width={width || 500}
        style={{
          top: 20,
        }}
      
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => {
          close(false);
          setVisible(false);
        }}
      >
        {childern}
      </Modal>
    </>
  );
};

export default AppModal;
