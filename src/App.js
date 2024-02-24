
import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseList from './Components/ExpenseList';
import BudgetForm from './Components/BudgetForm';
import BudgetSummary from './Components/BudgetSummary';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(0);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((acc, cur) => acc + cur.amount, 0);

  return (
    <div className="App">
      <h1>Finance Tracker</h1>
      <BudgetForm setBudget={setBudget} />
      <BudgetSummary budget={budget} totalExpenses={totalExpenses} />
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
