// ExpenseList.js
import React from 'react';

const ExpenseList = ({ expenses }) => {
  return (
    <div>
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            <span>{expense.description}</span>
            <span>${expense.amount}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
