import React from "react";

const DemoOutput = (props) => {
  console.log("DemoOutput Running");
  return <p>{props.onShow ? "This is DemoOutput" : ""}</p>;
};

export default React.memo(DemoOutput);
