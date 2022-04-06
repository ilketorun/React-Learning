import React, { useCallback, useState } from "react";
import DemoOutput from "./components/DemoOutput/DemoOutput";

import "./App.css";
import Button from "./components/UI/Button/Button";

function App() {
  const [paragraphShown, setparagraphShown] = useState(false);

  const clickHandler = useCallback(() => {
    setparagraphShown((prevParagraphShown) => !prevParagraphShown);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {/* {paragraphShown && <p>This is paragraph</p>} */}
      <DemoOutput onShow={paragraphShown} />
      <DemoOutput onShow={false} />
      <Button onClick={clickHandler}>Paragraph Toogle</Button>
    </div>
  );
}

export default App;
