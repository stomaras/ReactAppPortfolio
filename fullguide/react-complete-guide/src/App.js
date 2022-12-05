import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import React from "react";
import NewExpense from "./components/NewExpense/NewExpense";

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

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

/*
Section 4: React State & Working With Events:
- A closer look at the useState Hook

state really is seperated on a per component instance basis
we get a new snapshot of the state when the component re-executes

Section 18: Dividing into Redux(An aternative to the context api)

Local State               Cross-Component State         App-Wide State
State that belongs to     State that affects multiple   State that affects the entire app
a singe component         components                    (most/all components)

E.g listening             E.g open/closed state of      E.g user authentication status
touser input              a modaloverlay
inan input field;
toggling a "showmore"
details field

Shouldbe managed component Require props chains
with useState()             props drilling



Redux 

Central Data (State)
Store
|
|
|Subscription
|
|
Components

Components never manipulate the store data 
instead for that we have a concept called reducers 
Reducer function is responsible for mutates (=changes) store data
reducer function takes an nput and reduce that input Components 
dispatch actions , redux forward actions to the reducer 
when central data store changes subscribedcomponents notified so theycanupdate their UI



*/
