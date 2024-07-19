import React from "react";
import IncomeSourcesChart from "./IncomeSourcesChart";

// Sample data for the income chart
const incomeData = [
  { source: "Salary", amount: 3000 },
  { source: "Freelance", amount: 1500 },
  { source: "Investments", amount: 700 },
  { source: "Other", amount: 300 },
];

const IncomeSourcesCard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-2 text-center">Sources de Revenus</h3>
      <IncomeSourcesChart data={incomeData} />
    </div>
  );
};

export default IncomeSourcesCard;
