import React from "react";
import FocusableInput from "./components/FocusableInput";
import Message from "./components/Message";

export function calculator(my_numbers) {
  // even number filter
  const evenResult = my_numbers.filter((number) => number % 2 === 0);

  // every even number gains 3 points in score, initially 0
  const evenScore = evenResult.reduce((number) => number + 3, 0);

  return evenScore;
}

function App() {
  console.log(calculator([1, 2, 3, 4, 5]));
  return (
    <React.Fragment>
      <FocusableInput shouldFocus={true} />
      <Message />
      <div></div>
    </React.Fragment>
  );
}

export default App;
