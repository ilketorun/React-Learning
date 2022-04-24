import React, { useCallback, useState, useMemo } from "react";
import DemoOutput from "./components/DemoOutput/DemoOutput";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [paragraphShown, setparagraphShown] = useState(false);
  const [allowToogle, setAllowToogle] = useState(false);

  const clickHandler = useCallback(() => {
    if (allowToogle) {
      setparagraphShown((prevParagraphShown) => !prevParagraphShown);
    }
  }, [allowToogle]);

  const allowToogleHandler = () => {
    setAllowToogle((prevAllowToogle) => !prevAllowToogle);
    console.log("Toogle Allowed");
  };

  const itemList = useMemo(() => {
    return [1, 9, 7, 5, 3];
  }, []);

  console.log("App running");

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {paragraphShown && <p>This is paragraph</p>} */}
      <DemoOutput onShow={paragraphShown} items={itemList} />
      {/* <DemoOutput onShow={false} items={itemList} /> */}
      <Button onClick={allowToogleHandler}>ALLOW toogle</Button>
      <Button onClick={clickHandler}>Paragraph Toogle</Button>
    </div>
  );
}

export default App;
