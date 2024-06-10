import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "momos",
    amount: 50,
    date: new Date(2023, 7, 14),
  },
  {
    id: "e2",
    title: "chai",
    amount: 10,
    date: new Date(2023, 2, 14),
  },
  {
    id: "e3",
    title: "grocery",
    amount: 10,
    date: new Date(2023, 3, 4),
  },
  {
    id: "e4",
    title: "namkeen",
    amount: 90,
    date: new Date(2023, 3, 10),
  },
];

  
  const App=()=>{
    const[expenses,setExpenses]=useState(DUMMY_EXPENSES);
     
  const addExpenseHandler=expense=>{
      setExpenses((prevExpenses)=>{
        return [expense,...prevExpenses];
      });
     }; 

     return (
      <div>
        <NewExpense onAddExpense={addExpenseHandler}/> 
        <Expenses items={expenses} />
      </div>
    );
  };
  
  


export default App;
