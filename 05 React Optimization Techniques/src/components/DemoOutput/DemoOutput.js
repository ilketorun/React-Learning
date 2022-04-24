import React, { useMemo } from "react";

const DemoOutput = (props) => {
  const { items } = props;

  const sortedItems = useMemo(() => {
    console.log("sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoOutput Running");
  return <p>{props.onShow ? "This is DemoOutput" : ""}</p>;
};

export default React.memo(DemoOutput);
