import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 296.23,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e2",
      title: "Dog food",
      amount: 29.23,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e3",
      title: "Toilet Paper",
      amount: 96.23,
      date: new Date(2021, 2, 28),
    },
  ];
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div className="App">
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
