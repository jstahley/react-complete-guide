import React, {useState} from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
      const [filteredYear, setFilteredYear ]  = useState('2020');

      const filterChangeHandler = (selectedYear) => {
            setFilteredYear(selectedYear);
        }

        const filteredExpences = props.items.filter(expense => {
              return expense.date.getFullYear().toString() === filteredYear;
        });

return (
      <div>
      <Card className="expenses"> 
            <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler}/>
            <ExpenseList items={filteredExpences} />
      </Card>
      </div>
);
}

export default Expenses;