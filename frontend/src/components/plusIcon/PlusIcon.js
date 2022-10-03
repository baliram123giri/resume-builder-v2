import React from "react";

export default function PlusIcon({
  width = 50,
  height = 50,
  background = "bg-success",
  color = "text-white",
  fontSize = 40,
}) {
  return (
    <div className="create-resume ">
      <div
        style={{ width, height }}
        className={`plus-icon rounded-pill cursor-pointer shadow-sm d-flex justify-content-center align-items-center ${background}`}
      >
        <h4 style={{ fontSize }} className={`${color}`}>
          +
        </h4>
      </div>
    </div>
  );
}
