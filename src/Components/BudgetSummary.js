// BudgetSummary.js
import React from 'react';

const BudgetSummary = ({ budget, totalExpenses }) => {
  const remainingBudget = budget - totalExpenses;

  return (
    <div>
      <h2>Budget Summary</h2>
      <p>Total Budget: ${budget}</p>
      <p>Total Expenses: ${totalExpenses}</p>
      <p>Remaining Budget: ${remainingBudget}</p>
    </div>
  );
};

export default BudgetSummary;
