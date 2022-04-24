import React from "react";
import Todo from "../Modals/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemove: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          text={item.text}
          key={item.id}
          onRemoveTodo={props.onRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
