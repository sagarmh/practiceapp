import React from "react";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NexExpenses.css";

const NexExpenses = () => {
  return (
    <div className="new-expense">
      <ExpenseForm />
    </div>
  );
};

export default NexExpenses;
