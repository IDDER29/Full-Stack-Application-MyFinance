// components/Dashboard/Charts/IncomeProgressCard.js

import React from "react";
import { useDashboardContext } from "../../../contexts/DashboardContext";

const IncomeProgressCard = () => {
  const { transactions } = useDashboardContext();
  const currentIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const goalIncome = 5000; // assuming a fixed goal for this example

  const progressPercentage = (currentIncome / goalIncome) * 100;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-4 w-full">
      <h3 className="text-xl font-bold mb-2 text-center">Income Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-green-500 h-6 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="text-center mt-2">
        <span className="font-bold">{currentIncome}$</span> / {goalIncome}$
      </div>
    </div>
  );
};

export default IncomeProgressCard;
