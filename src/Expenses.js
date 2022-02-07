import React, {useState} from 'react';
import './Expenses.css';
import Card from './Card';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2021');
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const filteredExpenses = props.items.filter((expense)=> { 
        return new Date(expense.date).getFullYear().toString() === filteredYear;}); 

        
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler} />
                    <ExpensesChart expenses= {filteredExpenses} />
                <ExpensesList setExpenses={props.setExpenses}  items={filteredExpenses} />          
            </Card>
            </div>
    )
}
export default Expenses;

