import NewExpense from './NewExpense';
import React, { useState, useEffect } from 'react';
import Expenses from "./Expenses";

const AppItems =  ()=> {
  const [expenses, setExpenses] = useState
    (JSON.parse(localStorage.getItem("savedItemsList")) || []);
    useEffect(() => {
      localStorage.setItem("savedItemsList", JSON.stringify(expenses))
    }, [expenses]
    )
  return [expenses, setExpenses];
}

  
  const App =()=>{
   const [expenses, setExpenses] = AppItems();

  const addExpenseHandler = (expense)=>{
    setExpenses((prevExpenses) =>{
      return [ ...prevExpenses, expense ];
  });
};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
    <Expenses items={expenses} setExpenses={setExpenses} />
    </div>
  );};


export default App;
