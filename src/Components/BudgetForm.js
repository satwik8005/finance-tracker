// BudgetForm.js
import React, { useState } from 'react';

const BudgetForm = ({ setBudget }) => {
  const [budget, setBudgetValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setBudget(parseFloat(budget));
    setBudgetValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={budget}
        onChange={(e) => setBudgetValue(e.target.value)}
        placeholder="Enter Budget"
        required
      />
      <button type="submit">Set Budget</button>
    </form>
  );
};

export default BudgetForm;
