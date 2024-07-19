import React from "react";
import { useDashboardContext } from "../../../contexts/DashboardContext";

const FinancialOverviewCard = () => {
  const { totalIncome, totalExpenses, remainingAmount } = useDashboardContext();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-lg mb-4 w-full">
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Total Expenses</h4>
        <p className="text-2xl font-bold text-red-500">{totalExpenses}$</p>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Total Income</h4>
        <p className="text-2xl font-bold text-green-500">{totalIncome}$</p>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Remaining Amount</h4>
        <p className="text-2xl font-bold text-blue-500">{remainingAmount}$</p>
      </div>
    </div>
  );
};

export default FinancialOverviewCard;
