import Card from "../UI/Card";

import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

// function Expenses(props) {
const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState("2020");

    const filterChangeHandler = (selectedYear) => {
        setfilteredYear(selectedYear);
        console.log(selectedYear);
    };

    const filteredYearArray = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    {
        /* These line of codes should be in JSX
        {props.items
                    .filter((expense) => {
                        return expense.date.getFullYear().toString() === filteredYear;
                    })
                    .map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
            ))} */
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredYearArray} />
            </Card>
        </div>
    );
};

export default Expenses;
