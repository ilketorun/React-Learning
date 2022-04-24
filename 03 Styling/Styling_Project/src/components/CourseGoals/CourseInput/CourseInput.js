import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import styles from "./CourseInput.module.css";
// import styled from "styled-components";

// const FromControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${(props) => (props.invalid ? "red" : "black")};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     /* border: 1px solid #ccc; */
//     border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
//     background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
//     font: inherit;
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   /* &.invalid input {
//     border-color: #ff0000;
//     background: #ffd7d7;
//   }

//   &.invalid label {
//     color: red;
//   } */
// `;

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  // this is styling with sytle-componenets
  return (
    <form onSubmit={formSubmitHandler}>
      {/* <FromControl className={!isValid && 'invalid'}> */}
      {/* <FromControl invalid={!isValid}> */}
      <div
        className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
      >
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>

      <Button type="submit">Add Goal</Button>
    </form>
  );

  // this is styling with dynamic class by utilizing CSS file
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className={`form - control ${ !isValid ? "invalid" : "" } `}>
  //       <label>Course Goal</label>
  //       <input type="text" onChange={goalInputChangeHandler} />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );

  // This is the sytling with dynamic styling
  // return (
  //   <form onSubmit={formSubmitHandler}>
  //     <div className="form-control">
  //       <label style={{ color: !isValid ? "red" : "black" }}>Course Goal</label>
  //       <input
  //         style={{
  //           borderColor: !isValid ? "red" : "#ccc",
  //           background: !isValid ? "salmon" : "transparent",
  //         }}
  //         type="text"
  //         onChange={goalInputChangeHandler}
  //       />
  //     </div>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  // );
};

export default CourseInput;
