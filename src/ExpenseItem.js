import React from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';
import RemoveItem from './RemoveItem';
const ExpenseItem = (props)=> {
    const onRemoveItem =() =>{
        props.setExpenses(prevState => prevState.filter(expense => expense.id !== props.expenseId))
    };
        return (
<li>
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    ${props.amount}</div>
            
            
<button className="expense-remove" onClick={onRemoveItem}>Remove</button>
                   </div>
                   </Card>
</li>
    );
}

export default ExpenseItem;