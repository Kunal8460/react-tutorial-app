import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
const App = () => {
  const expenses = [
    {
      title: "Car insuarance",
      amount: 193.34,
      date: new Date(2024, 2, 12),
    },
    {
      title: "Car insuarance1",
      amount: 193.34,
      date: new Date(2024, 2, 12),
    },
    {
      title: "Car insuarance2",
      amount: 193.34,
      date: new Date(2024, 2, 12),
    },
    {
      title: "Car insuarance3",
      amount: 193.34,
      date: new Date(2024, 2, 12),
    },
  ];
  // const [count, setCount] = useState(4);
  //runs every time when component renders/re-renders.
  // const [count, setCount] = useState(countInitial());
  // function countInitial() {
  //   console.log("function called");
  //   return 4;
  // }
  // runs only first time the component renders
  // const [count, setCount] = useState(() => {
  //   console.log("run function");
  //   return 4;
  // });
  const [state, setState] = useState({ count: 4, theme: "blue" });
  let count = state.count;
  let theme = state.theme;
  // ********** or we can create seperate state for count and theme **********//

  // const decrement = () => {
  //   setCount((prevCount) => prevCount - 1);
  //   setCount((prevCount) => prevCount - 1); //using function we can use previous value
  //   // setCount(count - 1);
  //   // setCount(count - 1);// normally writing like this multiple times it will override value
  // };
  // const increment = () => {
  //   setCount(count + 1);
  // };
  const decrement = () => {
    setState((prevState) => {
      //returning this way will maintain previous state and only count will change.
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  const increment = () => {
    setState((prevState) => {
      //returning this way will maintain previous state and only count will change.
      return { ...prevState, count: prevState.count + 1 };
    });
  };
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
      <h1>Expense Items</h1>
      {expenses.map((expense, index) => (
        <ExpenseItem
          key={index}
          title={expense.title}
          amount={expense.amount}
          date={expense.date.toDateString()}
        ></ExpenseItem>
      ))}
      ;
    </div>
  );
};
// const setCount = () => {};
export default App;
