import React from "react";
import classes from "./Todos.module.css";
import Todo from "../Modals/todo";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li className={classes.list} key={item.id}>
          {item.text}
        </li>
      ))}
    </ul>
  );
};

export default Todos;
