import React, { useEffect } from "react";
import { useRef } from "react";

// Focusing to input should happen after the evaluation
const FocusableInput = (props) => {
  const inputRef = useRef();

  useEffect(() => {
    if (props.shouldFocus) {
      inputRef.current.focus();
    }
  }, [props.shouldFocus]);

  return <input ref={inputRef} />;
};

export default FocusableInput;
