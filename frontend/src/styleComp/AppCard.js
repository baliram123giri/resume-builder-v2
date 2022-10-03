import React from "react";
const AppCard = ({
  children,
  minHeight = 0,
  minWidth = 0,
  classStyle = false,
}) => {
  return (
    <div
      className={`bg-white shadow-sm border align-items-center p-4 ${classStyle}`}
      style={{ minHeight, minWidth }}
    >
      {children}
    </div>
  );
};

export default AppCard;
