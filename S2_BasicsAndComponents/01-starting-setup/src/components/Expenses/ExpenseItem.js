import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title); // this is a React Hook, all hooks start with use
    // useState returns a array of two elemetns
    // first element is variable itself,
    // second element is the updating function

    const clickHandler = () => {
        setTitle("Updated");
        console.log("Clicked!!");
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title!</button>
        </Card>
    );
};

export default ExpenseItem;
