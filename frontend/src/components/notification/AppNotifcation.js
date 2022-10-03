import { notification } from "antd";

import Swal from "sweetalert2";

export const openNotification = (message, type, description) => {
  // notification.open({
  //   message,
  //   type,
  //   description,
  // });
  Swal.fire({
    position: "center",
    icon: type,
    title: message,
    showConfirmButton: true,
  });
};
