import React, { useContext } from "react";
import { DashboardContext } from "../../../contexts/DashboardContext";

const FinancialOverviewCard = () => {
  const { costs, income, remaining } = useContext(DashboardContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-6 rounded-lg shadow-lg mb-4 w-full">
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Total Costs</h4>
        <p className="text-2xl font-bold text-red-500">{costs}$</p>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Total Income</h4>
        <p className="text-2xl font-bold text-green-500">{income}$</p>
      </div>
      <div className="text-center">
        <h4 className="text-lg font-bold mb-2">Remaining Amount</h4>
        <p className="text-2xl font-bold text-blue-500">{remaining}$</p>
      </div>
    </div>
  );
};

export default FinancialOverviewCard;
