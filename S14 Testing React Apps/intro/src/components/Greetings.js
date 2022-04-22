import { useState } from "react";

const Greeting = () => {
  const [showExplanations, setShowExplanations] = useState(false);

  const clickHandler = () => {
    setShowExplanations((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Hello World!</h1>
      {showExplanations && <p>Some explanations.</p>}
      <button onClick={clickHandler}></button>
    </div>
  );
};

export default Greeting;
