import { Skeleton } from "antd";
import React from "react";

export default function AppSkeleton({
  col = "",
  col_lg = "",
  length = 1,
  circle ="",
  size=50
}) {
  const loops = [];
  for (let i = 0; i < length; i++) {
    loops.push(i);
  }
  return (
    <>
      {loops.map((ele) => {
        return (
          <div
            key={ele}
            className={`col-12 col-md-${col} col-lg-${col_lg} my-2`}
          >
            <Skeleton
              avatar={circle && { shape: circle , size:size} }
              round
              loading
              active
            />
          </div>
        );
      })}
    </>
  );
}
