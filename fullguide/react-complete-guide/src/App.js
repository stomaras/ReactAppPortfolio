import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

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
  return (
    <div className="App">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </div>
  );
}

export default App;
