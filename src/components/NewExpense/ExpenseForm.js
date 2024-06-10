import { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  //Todo(onestate approach) const [userInput, setUserInput]=useState(
  //    {
  //     enteredTitle:'',
  //     enteredAmount:'',
  //     enteredDate:''
  // }

  // );

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    //?(onestate approach) setUserInput({
    //! we do not use this in onestate as react schedules state updates, turanth update nahi karta
    //!it does not always gives latest state snapshots
    //    ...userInput,
    //    enteredTitle:event.target.value,
    // })
    //Todo(onestate approach) setUserInput((prevState)=>{
    //     return {
    //         ...prevState, enteredTitle: event.target.value
    //     };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);

    //? setUserInput({
    //     ...userInput,
    //     enteredTitle:event.target.value,
    //  })
    //Todo(onestate approach) setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredAmount: event.target.value,
    //   };
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //?    setUserInput({
    //       ...userInput,
    //         enteredTitle:event.target.value,
    //      });
    //Todo(onestate approach) setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredDate: event.target.value,
    //   };
    // });
  };

  //*(sharedstate approach)   const inputChangeHandler = (identifier, value)=> {
  //     if(identifier==='title') setEnteredTitle(value);
  //     else if(identifier==='date') setEnteredDate(value);
  //     else setEnteredAmount(value);
  //   };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
            //*(sharedstate) onChange={(event)=>inputChangeHandler('title',event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
            //*(sharedstate) onChange={(event)=>inputChangeHandler('amount',event.target.value)}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            //*(sharedstate) onChange={(event)=>inputChangeHandler('date',event.target.value)}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
